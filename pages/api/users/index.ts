import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("Users")
      .select("user_id, email, name, created_at");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const {
      email,
      password,
      name,
      phone,
      address,
      role,
      provider,
      provider_id,
      findType,
    } = req.body;

    // Find ID
    if (findType === "id") {
      if (!email || !name) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const { data: user, error } = await supabase
        .from("Users")
        .select("user_id, email, name")
        .eq("email", email)
        .eq("name", name)
        .single();
      if (error || !user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ user_id: user.user_id });
    }

    // Find Password
    if (findType === "password") {
      if (!email || !name) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const { data: user, error } = await supabase
        .from("Users")
        .select("user_id, email, name, provider")
        .eq("email", email)
        .eq("name", name)
        .single();
      if (error || !user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (user.provider === "google") {
        return res.status(400).json({
          error:
            "소셜 로그인(구글) 계정은 비밀번호 재설정이 불가합니다. 로그인 화면에서 해당 소셜 버튼을 이용해 주세요.",
        });
      }
      return res
        .status(200)
        .json({ message: "Password reset link sent (mock)" });
    }

    // User Registration
    if (!email || !name || !password) {
      return res.status(400).json({ error: "" });
    }
    const { data: existing } = await supabase
      .from("Users")
      .select("user_id")
      .eq("email", email)
      .single();
    if (existing) {
      return res.status(409).json({ error: "이미 가입된 회원입니다." });
    }
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    } else {
      const randomPassword =
        Math.random().toString(36) + Date.now().toString(36);
      hashedPassword = await bcrypt.hash(randomPassword, 10);
    }
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          email,
          password: hashedPassword,
          name,
          phone: phone || null,
          address: address || null,
          role: "customer",
          provider: provider || null,
          provider_id: provider_id || null,
          updated_at: now,
        },
      ])
      .select(
        "user_id, email, name, phone, address, role, provider, provider_id, updated_at"
      )
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
