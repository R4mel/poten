import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { Account, Profile } from "next-auth";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // Find user by email
        const { data: user, error } = await supabase
          .from("Users")
          .select(
            "user_id, email, password, name, created_at, provider, provider_id"
          )
          .eq("email", credentials.email)
          .single();
        if (error || !user) return null;
        // Only allow local (non-social) users
        if (user.provider && user.provider !== "credentials") return null;
        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;
        // Return user object for session
        return {
          id: user.user_id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({
      account,
      profile,
    }: {
      account: Account | null;
      profile?: Profile;
    }) {
      if (account?.provider === "google" && profile) {
        const provider_id = profile.sub;
        const email = profile.email;
        const name = profile.name || "";

        // Supabase에 동일 provider_id 유저가 있는지 확인
        const { data: existing, error: findError } = await supabase
          .from("Users")
          .select("user_id")
          .eq("provider", "google")
          .eq("provider_id", provider_id)
          .single();

        const isNoUser =
          (!existing && findError && findError.code === "PGRST116") ||
          (!existing && !findError);

        if (isNoUser) {
          // 비밀번호는 UUID + bcrypt 해시로 처리
          const password = await bcrypt.hash(crypto.randomUUID(), 10);

          const { error: insertError } = await supabase.from("Users").insert([
            {
              name,
              email,
              password,
              phone: null,
              address: null,
              role: "customer",
              provider: "google",
              provider_id,
              updated_at: new Date().toISOString(),
            },
          ]);

          if (insertError) {
            return false;
          }
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user && token?.sub) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
