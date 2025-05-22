"use client";

import SignupForm from "@/components/signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <a href="/" className="text-2xl font-bold text-purple-800">
              마켓컬리
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-8">회원가입</h1>
        <SignupForm />
      </main>
      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">고객센터</h3>
              <p className="text-2xl font-bold mb-2">1644-1107</p>
              <p className="text-gray-600 text-sm">365일 오전 7시 - 오후 7시</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">마켓컬리</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>회사소개</li>
                <li>채용정보</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-sm text-gray-500">
            © 2024 Market Kurly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
