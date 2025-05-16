"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login submission
    console.log("Login submitted")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="text-2xl font-bold text-purple-800">
              마켓컬리
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center">로그인</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input placeholder="이메일을 입력해주세요" required />
            </div>
            <div>
              <Input type="password" placeholder="비밀번호를 입력해주세요" required />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="ml-2 text-sm">
                  보안접속
                </Label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="text-gray-600 hover:text-purple-800">
                  아이디 찾기 | 비밀번호 찾기
                </Link>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full bg-purple-800 hover:bg-purple-900">
            로그인
          </Button>
          <Button type="button" variant="outline" className="w-full">
            <Link href="/signup">회원가입</Link>
          </Button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-yellow-400 text-yellow-900 py-2.5 rounded-md font-medium">
              <Image src="/placeholder.svg?height=24&width=24" alt="Kakao" width={24} height={24} />
              카카오로 시작하기
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2.5 rounded-md font-medium">
              <Image src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
              구글로 시작하기
            </button>
          </div>
        </div>
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
  )
}
