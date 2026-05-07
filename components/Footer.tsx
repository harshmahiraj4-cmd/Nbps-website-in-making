import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-gray-950 w-full py-12 border-t border-blue-900 dark:border-gray-800 mt-auto">
      <div className="max-w-container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/nbps-logo.jpg" alt="NBPS Logo" width={56} height={56} className="rounded-full" />
            <div>
              <div className="text-base font-bold text-amber-400" style={{fontFamily: 'Georgia, serif'}}>Nation Building Public School</div>
              <div className="text-xs text-amber-300 tracking-widest uppercase" style={{fontFamily: 'Georgia, serif'}}>We Will Shine Together</div>
            </div>
          </div>
          <p className="text-slate-300 max-w-xs text-sm leading-relaxed">An English Medium CBSE school offering quality education from Play to Class VIII. Building character, knowledge, and bright futures in Bidupur, Vaishali.</p>
          <div className="space-y-1 text-xs text-slate-400">
            <div>Reg. No.: 2201280202192921525</div>
            <div>UDISE Code: 10181403909</div>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="text-white font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>Quick Navigation</h5>
          <ul className="space-y-2">
            {[{href:'/',label:'Home'},{href:'/academics',label:'Academics'},{href:'/admissions',label:'Admissions'},{href:'/student-life',label:'Student Life'},{href:'/gallery',label:'Gallery'},{href:'/contact',label:'Contact Us'}].map((link) => (
              <li key={link.href}><Link href={link.href} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="text-white font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>Contact Us</h5>
          <div className="text-slate-300 flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-amber-400 text-lg mt-0.5">location_on</span>Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar</div>
          <div className="text-slate-300 flex flex-col gap-2 text-sm mt-2">
            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-amber-400 text-lg">call</span>6207 834 778</span>
            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-amber-400 text-lg">call</span>6204 255 099</span>
            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-amber-400 text-lg">call</span>9708 573 000</span>
          </div>
          <div className="text-slate-300 flex items-center gap-3 text-sm mt-3"><span className="material-symbols-outlined text-amber-400 text-lg">mail</span>nationbuildingpublicschool@gmail.com</div>
          <div className="text-slate-300 flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-amber-400 text-lg">schedule</span>Mon–Sat: 8:00 AM – 4:00 PM</div>
        </div>
      </div>
      <div className="max-w-container mx-auto px-8 mt-12 pt-8 border-t border-blue-900 dark:border-gray-800 text-center">
        <p className="text-slate-400 text-sm">© 2025 Nation Building Public School, Bidupur, Vaishali. All rights reserved.</p>
      </div>
    </footer>
  )
}
