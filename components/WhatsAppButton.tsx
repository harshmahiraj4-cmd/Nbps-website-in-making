'use client'
import { useState } from 'react'

const WHATSAPP_NUMBERS = [
  { name: 'Office', number: '916207834778' },
  { name: 'Admissions', number: '916204255099' },
  { name: 'Support', number: '919708573000' }
]

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const message = encodeURIComponent('Hello! I want to know more about Nation Building Public School.')

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip Menu for Multiple Numbers */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${
          hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="bg-white text-green-800 font-bold text-xs px-3 py-1.5 rounded-t-lg shadow-sm border border-b-0 border-green-100 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Chat with us!
        </div>
        {WHATSAPP_NUMBERS.map((contact, i) => (
          <a
            key={i}
            href={`https://wa.me/${contact.number}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-semibold text-sm px-4 py-2.5 shadow-md border border-green-100 whitespace-nowrap hover:bg-green-50 transition-colors flex items-center justify-between gap-4 first:rounded-t-none rounded-lg"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span>{contact.name}</span>
            <span className="text-green-600/70 text-xs">+{contact.number.slice(0,2)} {contact.number.slice(2, 6)} {contact.number.slice(6)}</span>
          </a>
        ))}
      </div>

      {/* WhatsApp Green Button */}
      <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 relative cursor-pointer">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 pointer-events-none" />
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" fill="white" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </div>
  )
}
