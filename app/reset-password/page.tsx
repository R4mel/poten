"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uid) {
      setResult("잘못된 접근입니다.");
      return;
    }
    if (password.length < 6) {
      setResult("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    if (password !== confirm) {
      setResult("비밀번호가 일치하지 않습니다.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/users/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(
          "비밀번호가 성공적으로 변경되었습니다. 다시 로그인 해주세요."
        );
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setResult(data.error || "비밀번호 변경에 실패했습니다.");
      }
    } catch (err) {
      setResult("서버 오류가 발생했습니다.");
    }
    setLoading(false);
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
        <h2 className="text-xl font-bold mb-4">비밀번호 재설정</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="새 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "변경 중..." : "비밀번호 변경"}
          </Button>
        </form>
        {result && (
          <div className="mt-4 text-center text-sm text-gray-700">{result}</div>
        )}
      </div>
    </div>
  );
}
