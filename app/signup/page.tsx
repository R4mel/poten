"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Handle signup submission
      console.log("Signup submitted")
    }
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
        <div className="mb-8 flex items-center">
          {step === 2 && (
            <button onClick={() => setStep(1)} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <h1 className="text-2xl font-bold">회원가입</h1>
        </div>

        {step === 1 ? (
          <div>
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h2 className="font-bold mb-2 flex items-center">
                <Check className="h-5 w-5 text-purple-800 mr-2" />
                마켓컬리 회원가입 약관에 동의합니다
              </h2>
              <div className="space-y-2 ml-7">
                <div className="flex items-center">
                  <Checkbox id="terms-1" />
                  <label htmlFor="terms-1" className="ml-2 text-sm">
                    이용약관 동의 (필수)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="terms-2" />
                  <label htmlFor="terms-2" className="ml-2 text-sm">
                    개인정보 수집 및 이용 동의 (필수)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="terms-3" />
                  <label htmlFor="terms-3" className="ml-2 text-sm">
                    마케팅 정보 수신 동의 (선택)
                  </label>
                </div>
              </div>
            </div>
            <Button className="w-full bg-purple-800 hover:bg-purple-900" onClick={() => setStep(2)}>
              다음
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="example@kurly.com" required />
              </div>
              <div>
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" placeholder="비밀번호를 입력해주세요" required />
                <p className="text-xs text-gray-500 mt-1">10자 이상 입력해주세요</p>
              </div>
              <div>
                <Label htmlFor="password-confirm">비밀번호 확인</Label>
                <Input id="password-confirm" type="password" placeholder="비밀번호를 한번 더 입력해주세요" required />
              </div>
              <div>
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="이름을 입력해주세요" required />
              </div>
              <div>
                <Label htmlFor="phone">휴대폰</Label>
                <div className="flex gap-2">
                  <Input id="phone" placeholder="숫자만 입력해주세요" required />
                  <Button type="button" variant="outline" className="shrink-0">
                    인증번호 받기
                  </Button>
                </div>
              </div>
              <div>
                <Label>성별</Label>
                <RadioGroup defaultValue="none" className="flex space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="cursor-pointer">
                      남자
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="cursor-pointer">
                      여자
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none" className="cursor-pointer">
                      선택안함
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button type="submit" className="w-full bg-purple-800 hover:bg-purple-900">
              가입하기
            </Button>
          </form>
        )}
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
