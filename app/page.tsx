import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const serifStyle = { fontFamily: 'Georgia, serif' }

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[164px] flex-1">

        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center overflow-hidden">
          <Image
            src="/gallery/main-gate.jpg"
            alt="Nation Building Public School Campus"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 to-blue-950/40" />
          <div className="relative max-w-container mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-amber-400/20 border border-amber-400/50 rounded mb-4">
                <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase" style={serifStyle}>We Will Shine Together</span>
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

        {/* Quick Links */}
        <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-container mx-auto px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'account_balance_wallet', title: 'Student Portal', desc: 'Access grades & results' },
                { icon: 'calendar_month', title: 'Academic Calendar', desc: 'Dates & school schedule' },
                { icon: 'menu_book', title: 'CBSE Curriculum', desc: 'Syllabus & study material' },
                { icon: 'map', title: 'Find Our School', desc: 'Bidupur, Vaishali, Bihar' },
              ].map((item) => (
                <a key={item.title} href="#" className="flex items-center gap-4 p-6 bg-surface-container-low rounded-xl group hover:bg-secondary-container dark:hover:bg-gray-700 transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl text-blue-950 group-hover:scale-110 transition-transform">{item.icon}</span>
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
        <section className="py-stack-lg max-w-container mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm mb-3 block uppercase tracking-widest" style={serifStyle}>Our Leadership</span>
            <h2 className="text-4xl font-bold text-blue-950 mb-4" style={serifStyle}>Guiding Nation Building Public School</h2>
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
            <div className="lg:w-1/2">
              <span className="text-secondary font-semibold text-sm mb-4 block uppercase tracking-widest" style={serifStyle}>Director</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-2 leading-tight" style={serifStyle}>Mr. Abhaykant Kumar</h2>
              <p className="text-lg text-blue-950/70 mb-6 font-semibold uppercase tracking-wide" style={serifStyle}>Leadership with Vision • Commitment to Excellence</p>
              <p className="text-lg text-on-surface-variant mb-6 italic leading-relaxed" style={serifStyle}>
                &quot;Dedicated to excellence in education and nation building. Inspiring minds, shaping character, and creating a better tomorrow.&quot;
              </p>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed font-bold uppercase tracking-widest text-amber-500" style={serifStyle}>
                We Will Shine Together
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
            <div className="lg:w-1/2">
              <span className="text-secondary font-semibold text-sm mb-4 block uppercase tracking-widest" style={serifStyle}>Deputy Director</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-2 leading-tight" style={serifStyle}>Mr. Ranvir Singh</h2>
              <p className="text-lg text-blue-950/70 mb-6 font-semibold uppercase tracking-wide" style={serifStyle}>Leadership with Vision • Commitment to Excellence</p>
              <p className="text-lg text-on-surface-variant mb-6 italic leading-relaxed" style={serifStyle}>
                &quot;Dedicated to excellence in education and nation building. Inspiring minds, shaping character, and creating a better tomorrow.&quot;
              </p>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed font-bold uppercase tracking-widest text-amber-500" style={serifStyle}>
                We Will Shine Together
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
            <div className="lg:w-1/2">
              <span className="text-secondary font-semibold text-sm mb-4 block uppercase tracking-widest" style={serifStyle}>Mentor</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-2 leading-tight" style={serifStyle}>Mr. Suryakant Kumar Kariyappa</h2>
              <p className="text-lg text-blue-950/70 mb-6 font-semibold uppercase tracking-wide" style={serifStyle}>Leadership with Vision • Commitment to Excellence</p>
              <p className="text-lg text-on-surface-variant mb-6 italic leading-relaxed" style={serifStyle}>
                &quot;Dedicated to excellence in education and nation building. Inspiring minds, shaping character, and creating a better tomorrow.&quot;
              </p>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed font-bold uppercase tracking-widest text-amber-500" style={serifStyle}>
                We Will Shine Together
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
        </section>

        {/* Why Choose NBPS */}
        <section className="py-stack-lg bg-surface-container-low dark:bg-gray-900">
          <div className="max-w-container mx-auto px-8">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm mb-3 block uppercase tracking-widest" style={serifStyle}>Why Choose Us</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-4" style={serifStyle}>What Makes NBPS Special</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto" style={serifStyle}>We go beyond textbooks — developing well-rounded individuals ready to lead and serve.</p>
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
                <div key={item.title} className="bg-white p-8 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-amber-400 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary-container dark:hover:bg-gray-700 transition-colors">
                    <span className="material-symbols-outlined text-amber-400 group-hover:text-blue-950">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3" style={serifStyle}>{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed" style={serifStyle}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event List Section */}
        <section className="py-stack-lg bg-surface-container-low dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-container mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm mb-3 block uppercase tracking-widest" style={serifStyle}>Academic Calendar – 2026</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-4" style={serifStyle}>Important Dates & Events</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto" style={serifStyle}>
                Stay informed about all our holidays, national events, and school celebrations for the academic year 2026.
              </p>
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
        <section className="bg-blue-950 py-20 px-8">
          <div className="max-w-container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4" style={serifStyle}>Admissions Open for Session 2026–27</h2>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto" style={serifStyle}>
              Give your child the gift of quality education. Secure your seat at Nation Building Public School today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="px-8 py-4 bg-secondary-container text-on-secondary-fixed rounded-lg font-semibold shadow-xl hover:-translate-y-1 transition-transform" style={serifStyle}>
                Apply for Admission
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all" style={serifStyle}>
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
