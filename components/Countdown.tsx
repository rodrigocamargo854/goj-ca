"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

export default function Countdown() {
  const targetDate = new Date("2025-09-07T00:00:00").getTime()
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


  useEffect(() => {
    setMounted(true)
    function getTimeLeft() {
      const now = new Date().getTime()
      const difference = targetDate - now
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(getTimeLeft())
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    // no SSR, evita mismatch
    return <div suppressHydrationWarning>--</div>
  }

  return (
    <div className="text-center p-6 bg-sky-400 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-mono-pixel mb-3">Canonização</h2>
      <p className="text-5xl font-mono-pixel tracking-wider text-red-500">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
      <p className="text-sm font-mono-pixel mt-3 text-green-400">
        até 07 de Setembro de 2025
      </p>
    </div>
  )
}
