import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const serifStyle = { fontFamily: 'Georgia, serif' }

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #f8f6f0 0%, #eef2ff 50%, #fef9ec 100%)' }}>
      <Navbar />
      <main className="pt-0 flex-1">

        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center overflow-hidden">
          <Image
            src="/gallery/main-gate.jpg"
            alt="Nation Building Public School Campus"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-950/30" />
          {/* Decorative shimmer lines */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,215,0,0.4) 40px, rgba(255,215,0,0.4) 41px)' }} />
          <div className="relative max-w-container mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-amber-400/20 border border-amber-400/50 rounded mb-4">
                <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase italic" style={serifStyle}>We Will Shine Together</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-3 leading-tight" style={serifStyle}>
                Nation Building<br/>Public School
              </h1>
              <p className="text-amber-300 text-lg mb-5 italic" style={serifStyle}>An English Medium School based on C.B.S.E., New Delhi</p>
              <p className="text-white/85 text-lg mb-8 max-w-lg leading-relaxed" style={serifStyle}>
                Nurturing young minds with quality education, strong values, and a commitment to excellence in Bidupur, Vaishali since our founding.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/admissions" className="px-8 py-4 bg-secondary-container text-on-secondary-fixed rounded-lg font-semibold shadow-xl hover:-translate-y-1 transition-transform" style={serifStyle}>
                  Apply for Admission
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/10 border border-white/30 text-white backdrop-blur-md rounded-lg font-semibold hover:bg-white/20 transition-all" style={serifStyle}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section style={{ background: 'linear-gradient(90deg, #1e3a5f 0%, #1a3050 50%, #1e3a5f 100%)' }}>
          <div className="max-w-container mx-auto px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: 'CBSE', label: 'Affiliated Board' },
                { value: '100%', label: 'Pass Rate' },
                { value: 'Play–VIII', label: 'Classes Offered' },
                { value: '2026–27', label: 'Session' },
              ].map((stat) => (
                <div key={stat.label} className="text-white">
                  <div className="text-3xl font-bold text-amber-400 mb-1" style={serifStyle}>{stat.value}</div>
                  <div className="text-sm text-blue-200 uppercase tracking-widest font-semibold" style={serifStyle}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notice Board */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2044 0%, #1a3560 50%, #0f2044 100%)' }}>
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

          {/* Scrolling Ticker */}
          <div className="bg-amber-500 text-blue-950 py-2 px-4 flex items-center gap-4 overflow-hidden relative">
            <span className="flex-shrink-0 font-black uppercase tracking-widest text-xs bg-blue-950 text-amber-400 px-3 py-1 rounded flex items-center gap-1" style={serifStyle}>
              <span className="material-symbols-outlined text-sm">campaign</span> NOTICE
            </span>
            <div className="overflow-hidden flex-1">
              <p className="whitespace-nowrap animate-[ticker_20s_linear_infinite] inline-block font-semibold text-sm" style={serifStyle}>
                🎓 Admissions Open for Session 2026–27 &nbsp;•&nbsp; 📅 Annual Sports Day – June 15, 2026 &nbsp;•&nbsp; 📢 Parent-Teacher Meeting – May 20, 2026 &nbsp;•&nbsp; 🏆 Results of Class VIII Board Exams declared &nbsp;•&nbsp; 🌟 School reopens after Summer Vacation on July 1, 2026
              </p>
            </div>
          </div>

          <div className="max-w-container mx-auto px-8 py-14 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <div>
                <span className="text-amber-400 font-semibold text-sm mb-2 block uppercase tracking-widest" style={serifStyle}>Latest Updates</span>
                <h2 className="text-3xl font-bold text-white" style={serifStyle}>Notice Board</h2>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all cursor-pointer" style={serifStyle}>
                <span className="material-symbols-outlined text-amber-400 text-base">notifications</span>
                View All Notices
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { tag: 'Admission', tagColor: 'bg-green-400 text-green-950', icon: 'school', date: 'May 8, 2026', title: 'Admissions Open 2026–27', desc: 'Enrolment is now open for all classes from Play Group to Class VIII. Limited seats available. Apply early to secure admission.' },
                { tag: 'Event', tagColor: 'bg-amber-400 text-amber-950', icon: 'event', date: 'May 20, 2026', title: 'Parent-Teacher Meeting', desc: 'All parents are requested to attend the PTM on May 20, 2026. Meeting will be held class-wise from 9:00 AM to 1:00 PM.' },
                { tag: 'Holiday', tagColor: 'bg-sky-400 text-sky-950', icon: 'beach_access', date: 'May 25, 2026', title: 'Summer Vacation Notice', desc: 'School will remain closed for Summer Vacation from May 25 to June 30, 2026. Classes resume on July 1, 2026.' },
                { tag: 'Sports', tagColor: 'bg-orange-400 text-orange-950', icon: 'sports', date: 'June 15, 2026', title: 'Annual Sports Day 2026', desc: 'Annual Sports Day will be held on June 15, 2026. All students are encouraged to participate in track & field events.' },
                { tag: 'Exam', tagColor: 'bg-red-400 text-red-950', icon: 'assignment', date: 'May 10, 2026', title: 'Unit Test Schedule Released', desc: 'The schedule for Unit Test 1 has been released. Students are advised to check their timetable and prepare accordingly.' },
                { tag: 'General', tagColor: 'bg-purple-400 text-purple-950', icon: 'info', date: 'May 8, 2026', title: 'School Fee Reminder', desc: 'Parents are reminded to clear pending fee dues before May 15, 2026. Contact the accounts section for any queries.' },
              ].map((notice) => (
                <div key={notice.title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-amber-400 text-base">{notice.icon}</span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${notice.tagColor}`}>{notice.tag}</span>
                    </div>
                    <span className="text-xs text-blue-300 flex-shrink-0 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">calendar_today</span>
                      {notice.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base group-hover:text-amber-300 transition-colors" style={serifStyle}>{notice.title}</h3>
                  <p className="text-blue-200 text-xs leading-relaxed" style={serifStyle}>{notice.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}

        <section style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)' }} className="border-b border-gray-200">
          <div className="max-w-container mx-auto px-8 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'account_balance_wallet', title: 'Student Portal', desc: 'Access grades & results' },
                { icon: 'calendar_month', title: 'Academic Calendar', desc: 'Dates & school schedule' },
                { icon: 'menu_book', title: 'CBSE Curriculum', desc: 'Syllabus & study material' },
                { icon: 'map', title: 'Find Our School', desc: 'Bidupur, Vaishali, Bihar' },
              ].map((item) => (
                <a key={item.title} href="#" className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-blue-100 group hover:shadow-lg hover:border-amber-400 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-950 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    <span className="material-symbols-outlined text-2xl text-amber-400 group-hover:text-white transition-colors">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-blue-950" style={serifStyle}>{item.title}</div>
                    <div className="text-sm text-on-surface-variant">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-stack-lg relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fef9ec 0%, #fff8e7 40%, #eef2ff 100%)' }}>
          {/* Decorative background orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 translate-y-1/2 -translate-x-1/2" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />

          <div className="max-w-container mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm mb-3 block uppercase tracking-widest" style={serifStyle}>Our Leadership</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-4" style={serifStyle}>Guiding Nation Building Public School</h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full" />
            </div>

            {/* Director */}
            <div className="flex flex-col lg:flex-row gap-gutter items-center mb-24">
              <div className="lg:w-1/2">
                <div className="relative group animate-float cursor-pointer">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-lg -z-10 transition-transform duration-700 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-active:translate-x-3 group-active:translate-y-3" />
                  <Image
                    src="/director.jpg"
                    alt="Mr. Abhaykant Kumar - Director" width={560} height={800}
                    className="rounded-xl border border-gray-200 shadow-lg w-full object-cover aspect-[3/4] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl group-active:scale-[1.03] group-active:shadow-2xl"
                    unoptimized={true} quality={100}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-100">
                <span className="text-secondary font-semibold text-sm mb-4 block uppercase tracking-widest" style={serifStyle}>Director</span>
                <h2 className="text-4xl font-bold text-blue-950 mb-2 leading-tight" style={serifStyle}>Mr. Abhaykant Kumar</h2>
                <p className="text-lg text-blue-950/70 mb-6 font-semibold uppercase tracking-wide" style={serifStyle}>Leadership with Vision • Commitment to Excellence</p>
                <p className="text-lg text-on-surface-variant mb-6 italic leading-relaxed" style={serifStyle}>
                  &quot;Dedicated to excellence in education and nation building. Inspiring minds, shaping character, and creating a better tomorrow.&quot;
                </p>
                <p className="text-base font-bold uppercase tracking-widest text-amber-500" style={serifStyle}>
                  <em>We Will Shine Together</em>
                </p>
              </div>
            </div>

            {/* Deputy Director */}
            <div className="flex flex-col lg:flex-row-reverse gap-gutter items-center mb-24">
              <div className="lg:w-1/2">
                <div className="relative group animate-float cursor-pointer">
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-lg -z-10 transition-transform duration-700 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:-translate-x-3 group-active:-translate-y-3" />
                  <Image
                    src="/deputy_director.jpg"
                    alt="Mr. Ranvir Singh - Deputy Director" width={560} height={800}
                    className="rounded-xl border border-gray-200 shadow-lg w-full object-cover aspect-[3/4] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl group-active:scale-[1.03] group-active:shadow-2xl"
                    unoptimized={true} quality={100}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100">
                <span className="text-secondary font-semibold text-sm mb-4 block uppercase tracking-widest" style={serifStyle}>Deputy Director</span>
                <h2 className="text-4xl font-bold text-blue-950 mb-2 leading-tight" style={serifStyle}>Mr. Ranvir Singh</h2>
                <p className="text-lg text-blue-950/70 mb-6 font-semibold uppercase tracking-wide" style={serifStyle}>Leadership with Vision • Commitment to Excellence</p>
                <p className="text-lg text-on-surface-variant mb-6 italic leading-relaxed" style={serifStyle}>
                  &quot;Dedicated to excellence in education and nation building. Inspiring minds, shaping character, and creating a better tomorrow.&quot;
                </p>
                <p className="text-base font-bold uppercase tracking-widest text-amber-500" style={serifStyle}>
                  <em>We Will Shine Together</em>
                </p>
              </div>
            </div>

            {/* Mentor / Founder */}
            <div className="flex flex-col lg:flex-row gap-gutter items-center">
              <div className="lg:w-1/2">
                <div className="relative group animate-float-delayed cursor-pointer">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container rounded-lg -z-10 transition-transform duration-700 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-active:translate-x-3 group-active:translate-y-3" />
                  <Image
                    src="/founder.jpg"
                    alt="Mr. Suryakant Kumar Kariyappa - Mentor" width={560} height={800}
                    className="rounded-xl border border-gray-200 shadow-lg w-full object-cover aspect-[3/4] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl group-active:scale-[1.03] group-active:shadow-2xl"
                    unoptimized={true} quality={100}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-100">
                <span className="text-secondary font-semibold text-sm mb-4 block uppercase tracking-widest" style={serifStyle}>Mentor</span>
                <h2 className="text-4xl font-bold text-blue-950 mb-2 leading-tight" style={serifStyle}>Mr. Suryakant Kumar Kariyappa</h2>
                <p className="text-lg text-blue-950/70 mb-6 font-semibold uppercase tracking-wide" style={serifStyle}>Leadership with Vision • Commitment to Excellence</p>
                <p className="text-lg text-on-surface-variant mb-6 italic leading-relaxed" style={serifStyle}>
                  &quot;Dedicated to excellence in education and nation building. Inspiring minds, shaping character, and creating a better tomorrow.&quot;
                </p>
                <p className="text-base font-bold uppercase tracking-widest text-amber-500 mb-8" style={serifStyle}>
                  <em>We Will Shine Together</em>
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  {[
                    { value: 'CBSE', label: 'Affiliated Board' },
                    { value: '100%', label: 'Pass Rate' },
                    { value: 'Play–VIII', label: 'Classes Offered' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-blue-950 mb-1" style={serifStyle}>{stat.value}</div>
                      <div className="text-sm font-semibold text-secondary uppercase tracking-wide" style={serifStyle}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose NBPS */}
        <section className="py-stack-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #162d4e 50%, #1a3558 100%)' }}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-container mx-auto px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-amber-400 font-semibold text-sm mb-3 block uppercase tracking-widest" style={serifStyle}>Why Choose Us</span>
              <h2 className="text-4xl font-bold text-white mb-4" style={serifStyle}>What Makes NBPS Special</h2>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto" style={serifStyle}>We go beyond textbooks — developing well-rounded individuals ready to lead and serve.</p>
              <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'menu_book', title: 'CBSE Curriculum', desc: 'Fully affiliated with CBSE, New Delhi. Structured, progressive syllabus from Play to Class VIII.' },
                { icon: 'groups', title: 'Experienced Faculty', desc: 'Dedicated, qualified teachers committed to nurturing every student with patience and expertise.' },
                { icon: 'sports_soccer', title: 'Holistic Development', desc: 'Sports, arts, cultural events, and moral education alongside rigorous academics for complete growth.' },
                { icon: 'translate', title: 'English Medium', desc: 'Strong focus on English communication skills to prepare students for national and global opportunities.' },
                { icon: 'security', title: 'Safe Environment', desc: 'A secure, inclusive, and disciplined campus where every child feels respected and motivated to learn.' },
                { icon: 'emoji_events', title: 'Proven Results', desc: 'Consistent board exam results and a track record of students entering top colleges and careers.' },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-400/60 hover:bg-white/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-amber-400 transition-colors border border-amber-400/30">
                    <span className="material-symbols-outlined text-amber-400 group-hover:text-blue-950 transition-colors">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={serifStyle}>{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed" style={serifStyle}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-stack-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #fef3c7 40%, #fff8e7 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 -translate-y-1/3 translate-x-1/3" style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }} />
          <div className="max-w-container mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm mb-3 block uppercase tracking-widest" style={serifStyle}>Academic Calendar – 2026</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-4" style={serifStyle}>Important Dates & Events</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto" style={serifStyle}>
                Stay informed about all our holidays, national events, and school celebrations for the academic year 2026.
              </p>
              <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mt-6" />
            </div>
            
            <div className="flex justify-center mt-8">
              <a href="/academic-calendar-poster.jpg" target="_blank" rel="noopener noreferrer" className="block relative group w-full max-w-5xl">
                <Image
                  src="/academic-calendar-poster.jpg"
                  alt="Academic Calendar 2026 - Nation Building Public School" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]"
                  priority unoptimized={true} quality={100}
                />
                <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition-all rounded-xl flex items-center justify-center">
                   <span className="material-symbols-outlined text-white text-6xl opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 transform duration-300 drop-shadow-lg">
                     zoom_in
                   </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-20 px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 31px)' }} />
          <div className="max-w-container mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-blue-950 mb-4" style={serifStyle}>Admissions Open for Session 2026–27</h2>
            <p className="text-lg text-blue-950/80 mb-8 max-w-2xl mx-auto" style={serifStyle}>
              Give your child the gift of quality education. Secure your seat at Nation Building Public School today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="px-8 py-4 bg-blue-950 text-white rounded-lg font-semibold shadow-xl hover:-translate-y-1 transition-transform" style={serifStyle}>
                Apply for Admission
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-blue-950 text-blue-950 rounded-lg font-semibold hover:bg-blue-950 hover:text-white transition-all" style={serifStyle}>
                Call: 6207 834 778
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
