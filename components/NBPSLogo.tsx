// Circular badge logo matching the letterhead style
export default function NBPSLogo({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="50" cy="50" r="48" fill="#002147" stroke="#FCD400" strokeWidth="3"/>
      {/* Inner ring */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="#FCD400" strokeWidth="1.5"/>
      {/* Center circle */}
      <circle cx="50" cy="50" r="22" fill="#FCD400"/>
      {/* Book icon in center */}
      <text x="50" y="56" textAnchor="middle" fontSize="20" fill="#002147" fontWeight="bold" fontFamily="Georgia, serif">N</text>
      {/* Top arc text: NATION BUILDING */}
      <path id="topArc" d="M 10,50 A 40,40 0 0,1 90,50" fill="none"/>
      <text fontSize="7.5" fill="#FCD400" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="1">
        <textPath href="#topArc" startOffset="8%">NATION BUILDING PUBLIC</textPath>
      </text>
      {/* Bottom arc text: SCHOOL */}
      <path id="botArc" d="M 12,55 A 40,40 0 0,0 88,55" fill="none"/>
      <text fontSize="7.5" fill="#FCD400" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="2">
        <textPath href="#botArc" startOffset="22%">SCHOOL</textPath>
      </text>
      {/* Dots decoration */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 50 + 44 * Math.cos(rad)
        const y = 50 + 44 * Math.sin(rad)
        return <circle key={i} cx={x} cy={y} r="2" fill="#FCD400"/>
      })}
    </svg>
  )
}
