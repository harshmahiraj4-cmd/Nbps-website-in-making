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
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.facebook.com/share/1AdfaiEUUu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-950 transition-all duration-300" title="Follow us on Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="http://www.youtube.com/@nbpsdaudnagarchakgadho8492" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-950 transition-all duration-300" title="Subscribe to our YouTube channel">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
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
