'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function VoteThanksPage() {
  const router = useRouter()
  const { width, height } = useWindowSize()
   // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.push('/')
  //   }, 3000)
  //   return () => clearTimeout(timeout)
  // }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-4 relative overflow-hidden">
      {/* 🎊 폭죽 효과 */}
      <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />

      {/* 🎁 카드형 메시지 */}
      <div className="max-w-md w-full bg-white border border-purple-200 shadow-xl rounded-3xl p-10 text-center space-y-4 z-10 animate-fade-in">
        <h1 className="text-3xl font-extrabold text-purple-700">🎉 투표해주셔서 감사합니다!</h1>
        <p className="text-gray-700 text-sm">
          참여해주신 분 중 추첨을 통해 <span className="font-semibold text-yellow-500">🎁 특별한 선물</span>을 드리고 있어요!
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          홈으로 가기
        </button>
      </div>
    </div>
  )
}