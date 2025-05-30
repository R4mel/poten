"use client";

import type React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SocialLoginButtons } from "@/components/social-login-buttons";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // If already logged in, redirect to home
  if (status === "loading") return null;
  if (session) {
    if (typeof window !== "undefined") router.replace("/");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Check credentials with backend
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      // Use next-auth signIn with credentials provider (custom)
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });
      if (result?.ok) {
        router.push("/");
      } else {
        setError("세션 생성에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      setError(data.error || "이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <TopNav />
          <div className="flex items-center py-4">
            <SiteLogo />
            <nav className="hidden md:flex flex-1 items-center">
              <MainNav />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center">로그인</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                name="email"
                placeholder="이메일을 입력해주세요"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>
              <div className="text-sm flex gap-2">
                <Link
                  href="/find-id"
                  className="text-gray-600 hover:text-purple-800"
                >
                  아이디 찾기
                </Link>
                <span>|</span>
                <Link
                  href="/find-password"
                  className="text-gray-600 hover:text-purple-800"
                >
                  비밀번호 찾기
                </Link>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900"
            disabled={loading}
          >
            {loading ? "로그인 중..." : "로그인"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => (window.location.href = "/signup")}
          >
            회원가입
          </Button>
          {error && (
            <div className="text-center text-sm text-red-500 mt-2">{error}</div>
          )}
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500"></span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <SocialLoginButtons />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
