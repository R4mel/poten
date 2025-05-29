"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (!session) {
    return (
      <div className="flex justify-end py-2 text-sm space-x-4">
        <Link href="/signup" className="text-gray-600 hover:text-purple-800">
          회원가입
        </Link>
        <span className="text-gray-300">|</span>
        <Link href="/login" className="text-gray-600 hover:text-purple-800">
          로그인
        </Link>
        <span className="text-gray-300">|</span>
        <Link
          href="/customer-service"
          className="text-gray-600 hover:text-purple-800"
        >
          고객센터
        </Link>
      </div>
    );
  }

  // Show user role (left of 마이페이지 | 로그아웃 | 고객센터)
  const userRole = (session.user as any)?.role;
  let roleLabel = null;
  if (userRole === "admin") roleLabel = "관리자";
  else if (userRole === "customer") roleLabel = "일반회원";
  else if (userRole) roleLabel = userRole;

  return (
    <div className="flex justify-end py-2 text-sm space-x-4 items-center">
      {roleLabel && (
        <span className="text-purple-700 font-semibold mr-2">{roleLabel}</span>
      )}
      <Link href="/mypage" className="text-gray-600 hover:text-purple-800">
        마이페이지
      </Link>
      <span className="text-gray-300">|</span>
      <button
        className="text-gray-600 hover:text-purple-800"
        onClick={async () => {
          await signOut({ redirect: false });
          router.push("/");
        }}
      >
        로그아웃
      </button>
      <span className="text-gray-300">|</span>
      <Link
        href="/customer-service"
        className="text-gray-600 hover:text-purple-800"
      >
        고객센터
      </Link>
    </div>
  );
}
