import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const serifStyle = { fontFamily: 'Georgia, serif' }

const classes = [
  {
    icon: 'child_care',
    title: 'Pre-Primary',
    grades: 'Play · LKG · UKG',
    desc: 'A joyful, play-based introduction to learning — building language, numbers, creativity, and social skills through stories, songs, and activities.',
    color: 'bg-yellow-50',
  },
  {
    icon: 'school',
    title: 'Primary Classes',
    grades: 'Class I – V',
    desc: 'Strong foundations in English, Hindi, Mathematics, Environmental Science, and General Knowledge with activity-based CBSE curriculum.',
    color: 'bg-blue-50',
  },
  {
    icon: 'menu_book',
    title: 'Middle School',
    grades: 'Class VI – VIII',
    desc: 'Deeper subject learning in Science, Mathematics, Social Studies, English, and Hindi with regular assessments aligned to CBSE guidelines.',
    color: 'bg-green-50',
  },
]

const subjects = [
  { icon: 'calculate', name: 'Mathematics', desc: 'Numbers, Algebra, Geometry, Mensuration — Class I to VIII' },
  { icon: 'science', name: 'Science', desc: 'Physics, Chemistry, Biology concepts — practical & theory' },
  { icon: 'language', name: 'English', desc: 'Grammar, Literature, Reading, Creative Writing' },
  { icon: 'translate', name: 'Hindi', desc: 'Hindi Grammar, Literature, Comprehension, Writing' },
  { icon: 'history_edu', name: 'Social Studies', desc: 'History, Geography, Civics — Class VI onward' },
  { icon: 'computer', name: 'Computer Science', desc: 'IT basics, MS Office, internet safety — Class III onward' },
  { icon: 'palette', name: 'Art & Drawing', desc: 'Creative arts, craft, drawing from Play class onward' },
  { icon: 'fitness_center', name: 'Physical Education', desc: 'Daily PT, yoga, sports, and health education' },
]

const classSchedule = [
  { cls: 'Play', time: '8:00 AM – 12:00 PM', days: 'Mon – Sat' },
  { cls: 'LKG / UKG', time: '8:00 AM – 12:30 PM', days: 'Mon – Sat' },
  { cls: 'Class I – V', time: '8:00 AM – 2:00 PM', days: 'Mon – Sat' },
  { cls: 'Class VI – VIII', time: '8:00 AM – 2:30 PM', days: 'Mon – Sat' },
]

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-0 flex-1">

        {/* Hero */}
        <section className="relative h-[400px] flex items-center overflow-hidden">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDe3dNTINGaML7RpzL3o4paq3SGlWc6Pqlvg_NuQFa8HoCREDgsq1eHs-69igzVolwty6_GWW7uuoc6LuMfubj08nI4cIl2SIRHQ9fop-kH6RvdpPhPeVuBfqrlp-uWDXkUWRi5FVXHr3z1AFbymaEkMwMEyf3u9OxgVypAiYtDi46Gu0Dpaz6mYOniG2eMyprhSFxqz6VqkxYh_GkLsYsV2mRLW9GThMIZgsHoKE6zxYrHBujOEe8Vxr0PDZ6q-TovffyopO4eVA"
            alt="NBPS Academics" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-primary/65" />
          <div className="relative z-10 max-w-container mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded mb-4 uppercase tracking-widest" style={serifStyle}>CBSE Affiliated · Play to Class VIII</span>
              <h1 className="text-5xl font-bold text-white mb-4" style={serifStyle}>Academic Programme</h1>
              <p className="text-xl text-slate-200" style={serifStyle}>Comprehensive, progressive CBSE curriculum from Play to Class VIII — building strong foundations for life.</p>
            </div>
          </div>
        </section>

        {/* Main + Sidebar */}
        <div className="max-w-container mx-auto px-8 flex gap-8 py-16">

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-4 p-6 h-fit w-64 border-r border-gray-200 dark:border-[#2a3550] bg-gray-50 dark:bg-[#111827] sticky top-[72px]">
            <div className="mb-4">
              <h4 className="font-bold text-blue-950 dark:text-blue-300 text-lg" style={serifStyle}>Sections</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">Explore Academics</p>
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { icon: 'menu_book', label: 'Curriculum', active: true },
                { icon: 'science', label: 'Subjects' },
                { icon: 'schedule', label: 'School Timings' },
                { icon: 'event', label: 'Exam Schedule' },
                { icon: 'contact_page', label: 'Faculty' },
              ].map((item) => (
                <a key={item.label} href="#" className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:translate-x-1 duration-150 ${item.active ? 'bg-amber-400 text-blue-950 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800'}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span style={serifStyle}>{item.label}</span>
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link href="/admissions" className="w-full py-3 bg-blue-950 text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={serifStyle}>
                Apply for Admission
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-16">

            {/* Class Levels */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classes.map((cls) => (
                <div key={cls.title} className="group bg-white dark:bg-[#161d30] border border-gray-200 dark:border-[#2a3550] p-8 rounded-xl hover:shadow-lg dark:hover:shadow-[0_0_0_1px_rgba(251,191,36,0.2),0_8px_24px_rgba(0,0,0,0.4)] transition-all border-b-4 border-b-transparent hover:border-b-amber-400">
                  <div className="w-12 h-12 bg-blue-950 dark:bg-[#1e2a40] rounded-full flex items-center justify-center mb-6 text-amber-400">
                    <span className="material-symbols-outlined">{cls.icon}</span>
                  </div>
                  <div className="text-xs font-semibold text-secondary dark:text-amber-400 mb-2 uppercase tracking-wide" style={serifStyle}>{cls.grades}</div>
                  <h3 className="text-2xl font-bold text-blue-950 dark:text-blue-200 mb-4" style={serifStyle}>{cls.title}</h3>
                  <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed mb-6" style={serifStyle}>{cls.desc}</p>
                  <Link href="/admissions" className="inline-flex items-center text-blue-950 dark:text-amber-400 font-bold text-sm gap-1 hover:text-secondary dark:hover:text-amber-300 transition-colors" style={serifStyle}>
                    Enrol Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </section>

            {/* Class-wise Timings */}
            <section>
              <div className="mb-8">
                <span className="text-secondary font-semibold text-sm mb-2 block uppercase tracking-widest" style={serifStyle}>Daily Schedule</span>
                <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-300" style={serifStyle}>Class Timings</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classSchedule.map((row) => (
                  <div key={row.cls} className="flex items-center gap-5 bg-white dark:bg-[#161d30] p-5 rounded-xl border border-gray-100 dark:border-[#2a3550] hover:border-amber-400 dark:hover:border-amber-500 transition-all">
                    <div className="w-12 h-12 bg-secondary-container dark:bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-blue-950 dark:text-amber-400">schedule</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-950 dark:text-blue-200" style={serifStyle}>{row.cls}</div>
                      <div className="text-sm text-on-surface-variant dark:text-slate-400" style={serifStyle}>{row.time} &nbsp;·&nbsp; {row.days}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CBSE Info */}
            <section className="bg-blue-950 dark:bg-gray-900 rounded-xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5"><span className="material-symbols-outlined text-[250px]">verified</span></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="text-amber-400 font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Board Affiliation</span>
                  <h2 className="text-4xl font-bold text-white mb-4" style={serifStyle}>CBSE, New Delhi</h2>
                  <p className="text-blue-200 text-base leading-relaxed" style={serifStyle}>Nation Building Public School offers Play to Class VIII education fully aligned with the Central Board of Secondary Education (CBSE) curriculum — nationally recognised and future-ready.</p>
                </div>
                <div className="flex flex-col gap-3 md:w-64">
                  {[
                    { label: 'Classes', value: 'Play – VIII' },
                    { label: 'Board', value: 'CBSE, New Delhi' },
                    { label: 'UDISE Code', value: '10181403909' },
                    { label: 'Medium', value: 'English' },
                  ].map((item, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 ${i < 3 ? 'border-b border-blue-800 dark:border-gray-700' : ''}`}>
                      <span className="text-blue-200 text-sm" style={serifStyle}>{item.label}</span>
                      <span className="text-amber-400 font-bold" style={serifStyle}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Subjects */}
            <section>
              <div className="mb-8">
                <span className="text-secondary font-semibold text-sm mb-2 block uppercase tracking-widest" style={serifStyle}>What We Teach</span>
                <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-300" style={serifStyle}>Subjects Offered</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map((subj) => (
                  <div key={subj.name} className="flex items-start gap-4 p-6 bg-white dark:bg-[#161d30] border border-gray-100 dark:border-[#2a3550] rounded-xl hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-sm dark:hover:shadow-[0_0_0_1px_rgba(251,191,36,0.2)] transition-all group">
                    <div className="w-12 h-12 bg-surface-container-low dark:bg-[#1e2a40] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-container dark:group-hover:bg-amber-500/20 transition-colors">
                      <span className="material-symbols-outlined text-blue-950 dark:text-amber-400">{subj.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 dark:text-blue-200 mb-1" style={serifStyle}>{subj.name}</h4>
                      <p className="text-sm text-on-surface-variant dark:text-slate-400" style={serifStyle}>{subj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Faculty Stats */}
            <section>
              <div className="mb-8">
                <span className="text-secondary font-semibold text-sm mb-2 block uppercase tracking-widest" style={serifStyle}>Our Educators</span>
                <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-300" style={serifStyle}>Dedicated Faculty</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { value: 'B.Ed', label: 'Qualified Teachers' },
                  { value: '10+', label: 'Years Avg. Experience' },
                  { value: '25:1', label: 'Student-Teacher Ratio' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface-container-low dark:bg-[#161d30] rounded-xl p-8 border border-outline-variant dark:border-[#2a3550] shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
                    <div className="text-5xl font-bold text-blue-950 dark:text-amber-400 mb-2" style={serifStyle}>{stat.value}</div>
                    <div className="text-sm font-semibold text-secondary dark:text-slate-400 uppercase tracking-wide" style={serifStyle}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-surface-container-low dark:bg-gray-900 py-16 px-8">
          <div className="max-w-container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-300 mb-4" style={serifStyle}>Enrol Your Child Today</h2>
            <p className="text-lg text-on-surface-variant dark:text-slate-400 mb-8 max-w-xl mx-auto" style={serifStyle}>Admissions open for Play to Class VIII. Give your child the gift of quality CBSE education at NBPS.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="px-8 py-4 bg-secondary-container text-on-secondary-fixed rounded-lg font-semibold hover:opacity-90 transition-all" style={serifStyle}>Apply Now</Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-blue-950 dark:border-blue-400 text-blue-950 dark:text-blue-300 rounded-lg font-semibold hover:bg-blue-950 hover:text-white transition-all" style={serifStyle}>Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
