'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import './roulette.css' // CSS 회전 설정용

const prizes = ['10만원', '꽝', '5천원', '3만원', '6만원', '무료배송']
const prizeCount = prizes.length

export default function LuckyRoulette() {
  const [rotating, setRotating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [degree, setDegree] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()

  const handleSpin = () => {
    if (rotating) return

    const randomIndex = Math.floor(Math.random() * prizeCount)
    const prizeAngle = 360 / prizeCount
    const rotation = 360 * 5 + (prizeCount - randomIndex) * prizeAngle

    setDegree(rotation)
    setRotating(true)
    setShowConfetti(false)
    setTimeout(() => {
      setResult(prizes[randomIndex])
      setRotating(false)
      setShowConfetti(true)
    }, 4000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 space-y-8 px-4">
      <div className="text-3xl md:text-4xl font-bold text-green-700 rounded-xl px-6 py-4 shadow-md text-center mb-6">
        🎉 투표에 참여해주셔서 감사합니다!
      </div>
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="flex justify-center w-full">
        <div className="relative w-[400px] aspect-square border-[8px] border-green-500 rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="/roulette.png"
            alt="룰렛 이미지"
            className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out"
            style={{ transform: `rotate(${degree}deg)`, transformOrigin: '50% 50%' }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl z-10">▼</div>
        </div>
      </div>

      <button
        onClick={handleSpin}
        className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full shadow-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={rotating}
      >
        {rotating ? '돌리는 중...' : 'Start'}
      </button>

      {result && (
        <div className="max-w-md bg-white shadow-lg rounded-2xl text-green-700 text-xl flex items-center justify-center space-x-3 py-4 px-6 animate-pulse">
          <span className="text-3xl">🎉</span>
          <span className="font-bold">{result} 당첨!</span>
        </div>
      )}
    </div>
  )
}