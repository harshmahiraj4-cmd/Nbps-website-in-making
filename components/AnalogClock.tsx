'use client'
import { useEffect, useState } from 'react'

export default function AnalogClock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!time) {
    return <div className="w-24 h-24 rounded-full border-[4px] border-amber-500 bg-white" />
  }

  const secondsDegrees = (time.getSeconds() / 60) * 360
  const minsDegrees = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6
  const hourDegrees = ((time.getHours() % 12) / 12) * 360 + (time.getMinutes() / 60) * 30

  return (
    <div 
      className="relative w-24 h-24 rounded-full shadow-[0_8px_15px_-3px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(0,0,0,0.6)] flex items-center justify-center flex-shrink-0 bg-center overflow-hidden border-[4px] border-amber-500 border-t-amber-300 border-b-amber-700"
      style={{ backgroundImage: 'url(/nbps-logo.jpg)', backgroundSize: '105% 105%' }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      
      {/* 3D Glass Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/5 to-black/30 rounded-full z-0 pointer-events-none" />
      {/* Center dot */}
      <div className="absolute w-4 h-4 bg-blue-950 rounded-full z-20 shadow-md border border-gray-400" />
      
      {/* Hour hand */}
      <div 
        className="absolute bottom-1/2 left-[calc(50%-2.5px)] w-[5px] h-[25%] bg-blue-950 origin-bottom rounded-full z-10 shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      />
      
      {/* Minute hand */}
      <div 
        className="absolute bottom-1/2 left-[calc(50%-2px)] w-[4px] h-[35%] bg-blue-800 origin-bottom rounded-full z-10 shadow-[2px_2px_3px_rgba(0,0,0,0.5)]"
        style={{ transform: `rotate(${minsDegrees}deg)` }}
      />
      
      {/* Second hand */}
      <div 
        className="absolute bottom-1/2 left-[calc(50%-1.5px)] w-[3px] h-[40%] bg-red-600 origin-bottom rounded-full z-10 shadow-[1px_1px_2px_rgba(0,0,0,0.4)]"
        style={{ transform: `rotate(${secondsDegrees}deg)` }}
      />
      
      {/* Tick marks for 12, 3, 6, 9 */}
      <div className="absolute top-1.5 left-[calc(50%-1.5px)] w-[3px] h-[5px] bg-amber-400 shadow-sm" />
      <div className="absolute bottom-1.5 left-[calc(50%-1.5px)] w-[3px] h-[5px] bg-amber-400 shadow-sm" />
      <div className="absolute left-1.5 top-[calc(50%-1.5px)] w-[5px] h-[3px] bg-amber-400 shadow-sm" />
      <div className="absolute right-1.5 top-[calc(50%-1.5px)] w-[5px] h-[3px] bg-amber-400 shadow-sm" />
    </div>
  )
}
