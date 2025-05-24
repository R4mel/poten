"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";
import { useRouter } from "next/navigation";

export default function FindPasswordPage() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/users/find-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.userId) {
        // Redirect to reset-password page with uid
        router.push(`/reset-password?uid=${data.userId}`);
      } else {
        setResult(data.error || "일치하는 회원 정보가 없습니다.");
      }
    } catch {
      setResult("서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-12">
        <h2 className="text-xl font-bold mb-4">비밀번호 찾기</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="가입한 이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "조회 중..." : "비밀번호 찾기"}
          </Button>
        </form>
        {result && (
          <div className="mt-4 text-center text-sm text-gray-700">{result}</div>
        )}
      </div>
    </div>
  );
}
