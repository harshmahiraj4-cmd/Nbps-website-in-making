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
    return <div className="w-14 h-14 rounded-full border-2 border-amber-500 bg-white" />
  }

  const secondsDegrees = (time.getSeconds() / 60) * 360
  const minsDegrees = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6
  const hourDegrees = ((time.getHours() % 12) / 12) * 360 + (time.getMinutes() / 60) * 30

  return (
    <div 
      className="relative w-14 h-14 rounded-full border-2 border-amber-500 shadow-sm flex items-center justify-center flex-shrink-0 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(/nbps-logo.jpg)' }}
    >
      <div className="absolute inset-0 bg-white/20 z-0" />
      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-blue-950 rounded-full z-10" />
      
      {/* Hour hand */}
      <div 
        className="absolute bottom-1/2 left-[calc(50%-1.5px)] w-[3px] h-[25%] bg-blue-950 origin-bottom rounded-full z-1"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      />
      
      {/* Minute hand */}
      <div 
        className="absolute bottom-1/2 left-[calc(50%-1px)] w-[2px] h-[35%] bg-blue-800 origin-bottom rounded-full z-1"
        style={{ transform: `rotate(${minsDegrees}deg)` }}
      />
      
      {/* Second hand */}
      <div 
        className="absolute bottom-1/2 left-[calc(50%-0.5px)] w-[1px] h-[40%] bg-red-500 origin-bottom z-1"
        style={{ transform: `rotate(${secondsDegrees}deg)` }}
      />
      
      {/* Tick marks for 12, 3, 6, 9 */}
      <div className="absolute top-1 left-[calc(50%-1px)] w-[2px] h-[4px] bg-gray-400" />
      <div className="absolute bottom-1 left-[calc(50%-1px)] w-[2px] h-[4px] bg-gray-400" />
      <div className="absolute left-1 top-[calc(50%-1px)] w-[4px] h-[2px] bg-gray-400" />
      <div className="absolute right-1 top-[calc(50%-1px)] w-[4px] h-[2px] bg-gray-400" />
    </div>
  )
}
