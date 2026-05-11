'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const serifStyle = { fontFamily: 'Georgia, serif' }

const activities = [
  { icon: 'sports_cricket', name: 'Cricket', desc: 'Inter-school cricket tournaments and in-campus practice sessions.' },
  { icon: 'sports_soccer', name: 'Football', desc: 'Regular football matches fostering teamwork and fitness.' },
  { icon: 'sports_volleyball', name: 'Volleyball', desc: 'School volleyball team competes in district-level competitions.' },
  { icon: 'sports_kabaddi', name: 'Kabaddi', desc: 'Traditional sport promoted for strength and agility.' },
  { icon: 'fitness_center', name: 'Athletics', desc: 'Annual sports day with track and field events for all classes.' },
  { icon: 'self_improvement', name: 'Yoga & PT', desc: 'Daily physical training and weekly yoga sessions.' },
]

const clubs = [
  { icon: 'science', name: 'Science Club', members: 'Open to Class VI–XII', desc: 'Experiments, science fairs, and project exhibitions.' },
  { icon: 'palette', name: 'Art & Craft Club', members: 'Open to all classes', desc: 'Drawing, painting, rangoli, and creative craft activities.' },
  { icon: 'music_note', name: 'Music & Cultural Club', members: 'Open to all classes', desc: 'Classical music, folk songs, and cultural programmes.' },
  { icon: 'theater_comedy', name: 'Drama Club', members: 'Open to Class IV–XII', desc: 'Annual school plays, skits, and national event celebrations.' },
  { icon: 'newspaper', name: 'Eco Club', members: 'Open to Class VI–XII', desc: 'Environment awareness, tree plantation, and cleanliness drives.' },
  { icon: 'volunteer_activism', name: 'Community Service', members: 'Open to all', desc: 'Social responsibility activities and village awareness programmes.' },
]

const vibrantMoments = [
  { src: "/gallery/event-1.jpg", alt: "Student Speech at NBPS", title: "Student Speech", desc: "Students actively participating in events.", span: 2 },
  { src: "/gallery/event-3.jpg", alt: "Cultural Performance", title: "Cultural Events", desc: "Vibrant cultural performances by students.", span: 2 },
  { src: "/gallery/event-5.jpg", alt: "Diwali Celebration", title: "Diwali Celebration", desc: "Beautiful diyas lighting up the school campus.", span: 2 },
  { src: "/gallery/event-7.jpg", alt: "Prize Distribution", title: "Prize Distribution", desc: "Recognizing the hard work and achievements of our students.", span: 2 },
  { src: "/gallery/event-6.jpg", alt: "Fancy Dress", span: 1 },
  { src: "/gallery/event-8.jpg", alt: "Independence Day", span: 1 },
  { src: "/gallery/event-9.jpg", alt: "Cultural Dance", span: 1 },
  { src: "/gallery/event-2.jpg", alt: "Award Ceremony", span: 1 },
  { src: "/gallery/event-4.jpg", alt: "Independence Day", span: 1 },
  { src: "/student-life/sl-2.jpg", alt: "National Day Celebration at NBPS", title: "National Day Celebrations", desc: "Fostering patriotism and unity among our students.", span: 2 },
  { src: "/student-life/sl-14.jpg", alt: "Classical Dance Performance", title: "Annual Cultural Fest", desc: "Students performing graceful classical dances on stage.", span: 2 },
  { src: "/student-life/sl-11.jpg", alt: "Dance Performance", span: 2 },
  { src: "/student-life/sl-13.jpg", alt: "Stage Dance Performance", span: 1 },
  { src: "/student-life/sl-12.jpg", alt: "Students on stage with flags", span: 1 },
  { src: "/student-life/sl-15.jpg", alt: "Children dancing on stage", span: 2 },
  { src: "/student-life/sl-10.jpg", alt: "Road Safety Activity", title: "Road Safety Awareness", desc: "Practical activities to teach students about traffic rules.", span: 2 },
  { src: "/student-life/sl-20.jpg", alt: "Independence Day Celebration", span: 2 },
  { src: "/student-life/sl-17.jpg", alt: "Children dancing on stage", span: 1 },
  { src: "/student-life/sl-19.jpg", alt: "Boys cultural dance", span: 1 },
  { src: "/student-life/sl-6.jpg", alt: "Students with Holi Colors", span: 2 },
  { src: "/student-life/sl-8.jpg", alt: "Diwali Diyas Celebration", span: 1 },
  { src: "/student-life/sl-18.jpg", alt: "Boys dancing on stage", span: 1 },
  { src: "/student-life/sl-9.jpg", alt: "Students looking up with Diyas", span: 1 },
  { src: "/student-life/sl-7.jpg", alt: "Students with decorated Diyas", span: 2 },
  { src: "/student-life/sl-3.jpg", alt: "Holi Celebration at NBPS", span: 1 },
  { src: "/student-life/sl-16.jpg", alt: "Young children dancing", span: 1 },
  { src: "/student-life/sl-4.jpg", alt: "School Life Moments", span: 1 },
  { src: "/student-life/sl-5.jpg", alt: "Festival of Colors at NBPS", span: 1 },
  { src: "/student-life/sl-1.jpg", alt: "Students with National Flags", span: 1 },
]

export default function StudentLifePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % vibrantMoments.length)
  }
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + vibrantMoments.length) % vibrantMoments.length)
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-0 flex-1">
        {/* Hero */}
        <header className="relative h-[550px] w-full overflow-hidden flex items-center">
          <Image
            src="/student-life/sl-hero.jpg"
            alt="NBPS Student Life" fill className="object-cover" priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,10,30,0.4), rgba(0,10,30,0.82))' }} />
          <div className="relative z-10 max-w-container mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 font-semibold text-sm rounded mb-4 uppercase tracking-widest" style={serifStyle}>Beyond the Classroom</span>
              <h1 className="text-5xl font-bold text-white mb-5" style={serifStyle}>School Life at NBPS</h1>
              <p className="text-xl text-slate-200 mb-8" style={serifStyle}>
                At Nation Building Public School, education means more than lessons — it means sports, arts, values, and community. Every child finds their passion here.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#sports" className="bg-white text-blue-950 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg" style={serifStyle}>Sports & Games</a>
                <a href="#clubs" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors" style={serifStyle}>Clubs & Activities</a>
              </div>
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="max-w-container mx-auto px-8 py-14 -mt-12 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white dark:bg-[#161d30] shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-xl border border-gray-100 dark:border-[#2a3550] divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-[#2a3550] overflow-hidden">
            {[
              { value: '6+', label: 'Sports Played' },
              { value: '6', label: 'School Clubs' },
              { value: '100%', label: 'Participation' },
              { value: '365', label: 'Days of Learning' },
            ].map((stat) => (
              <div key={stat.label} className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-950 dark:text-amber-400 mb-1" style={serifStyle}>{stat.value}</div>
                <div className="text-secondary dark:text-amber-300/70 font-semibold text-sm uppercase tracking-widest" style={serifStyle}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sports */}
        <section id="sports" className="max-w-container mx-auto px-8 py-stack-lg">
          <div className="mb-10">
            <span className="text-secondary dark:text-amber-400 font-semibold text-sm mb-2 block uppercase tracking-widest" style={serifStyle}>Physical Excellence</span>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-200 mb-4" style={serifStyle}>Sports & Physical Education</h2>
            <p className="text-lg text-on-surface-variant dark:text-slate-400 max-w-2xl" style={serifStyle}>We believe a healthy body builds a healthy mind. NBPS offers a wide range of sports activities to keep every student active, disciplined, and confident.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => (
              <div key={act.name} className="bg-white dark:bg-[#161d30] p-6 rounded-xl border border-gray-100 dark:border-[#2a3550] hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md dark:hover:shadow-[0_0_0_1px_rgba(251,191,36,0.2),0_8px_24px_rgba(0,0,0,0.4)] transition-all group">
                <div className="w-12 h-12 bg-blue-950 dark:bg-[#1e2a40] rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-container dark:group-hover:bg-amber-500/20 transition-colors">
                  <span className="material-symbols-outlined text-amber-400 group-hover:text-blue-950 dark:group-hover:text-amber-300">{act.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-blue-200 mb-2" style={serifStyle}>{act.name}</h3>
                <p className="text-sm text-on-surface-variant dark:text-slate-400" style={serifStyle}>{act.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clubs */}
        <section id="clubs" className="bg-surface-container-low dark:bg-[#111827] py-stack-lg">
          <div className="max-w-container mx-auto px-8">
            <div className="text-center mb-12">
              <span className="text-secondary dark:text-amber-400 font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Find Your Passion</span>
              <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-200 mb-4" style={serifStyle}>Clubs & Co-curricular Activities</h2>
              <p className="text-lg text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto" style={serifStyle}>Our co-curricular clubs nurture talent, creativity, and social responsibility beyond the classroom.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <div key={club.name} className="bg-white dark:bg-[#161d30] p-6 rounded-xl border border-gray-100 dark:border-[#2a3550] hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md dark:hover:shadow-[0_0_0_1px_rgba(251,191,36,0.2),0_8px_24px_rgba(0,0,0,0.4)] transition-all group">
                  <div className="w-12 h-12 bg-surface-container-low dark:bg-[#1e2a40] rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-container dark:group-hover:bg-amber-500/20 transition-colors">
                    <span className="material-symbols-outlined text-blue-950 dark:text-amber-400">{club.icon}</span>
                  </div>
                  <div className="text-xs text-secondary dark:text-amber-400 font-semibold mb-2 uppercase tracking-wide" style={serifStyle}>{club.members}</div>
                  <h4 className="font-bold text-blue-950 dark:text-blue-200 mb-2 text-lg" style={serifStyle}>{club.name}</h4>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400" style={serifStyle}>{club.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Glimpses of NBPS */}
        <section className="max-w-container mx-auto px-8 pb-stack-lg">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-secondary dark:text-amber-400 font-semibold text-sm mb-2 block uppercase tracking-widest" style={serifStyle}>Life at NBPS</span>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-200 mb-4" style={serifStyle}>Vibrant Moments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vibrantMoments.map((moment, idx) => (
              <div 
                key={idx} 
                className={`${moment.span === 2 ? 'lg:col-span-2 relative h-80' : 'relative h-72'} rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-transparent hover:border-amber-400 dark:hover:border-amber-500 transition-all`}
                onClick={() => setLightboxIndex(idx)}
              >
                <Image src={moment.src} alt={moment.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-all flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 transform duration-300 drop-shadow-md">
                    zoom_in
                  </span>
                </div>

                {moment.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <p className="text-white font-bold text-lg drop-shadow-md" style={serifStyle}>{moment.title}</p>
                    <p className="text-white/80 text-sm drop-shadow-md">{moment.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Annual Events */}
        <section className="max-w-container mx-auto px-8 py-stack-lg">
          <div className="flex flex-col lg:flex-row gap-gutter items-center">
            <div className="lg:w-1/2 relative grid grid-cols-2 gap-3">
              <div className="col-span-2 relative h-64 rounded-xl overflow-hidden shadow-md group cursor-pointer border border-transparent hover:border-amber-400 transition-all">
                <Image src="/student-life/science-exhibition-5.jpg" alt="Science Exhibition - Model Rocket" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-md group cursor-pointer border border-transparent hover:border-amber-400 transition-all">
                <Image src="/student-life/science-exhibition-4.jpg" alt="Science Exhibition - Maps" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-md group cursor-pointer border border-transparent hover:border-amber-400 transition-all">
                <Image src="/student-life/science-exhibition-3.jpg" alt="Science Exhibition - Physical Features" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-md group cursor-pointer border border-transparent hover:border-amber-400 transition-all">
                <Image src="/student-life/science-exhibition-2.jpg" alt="Science Exhibition - Posters" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-md group cursor-pointer border border-transparent hover:border-amber-400 transition-all">
                <Image src="/student-life/science-exhibition-1.jpg" alt="Science Exhibition - Rainwater Harvesting" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-secondary dark:text-amber-400 font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Annual Highlights</span>
              <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-200 mb-6" style={serifStyle}>School Celebrations & Events</h2>
              <p className="text-lg text-on-surface-variant dark:text-slate-400 mb-6" style={serifStyle}>Throughout the year, NBPS comes alive with national celebrations, cultural events, and academic programmes that build pride, patriotism, and community spirit.</p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: 'flag', text: 'Republic Day & Independence Day – Patriotic celebrations with flag hoisting, march past, and cultural programmes' },
                  { icon: 'emoji_events', text: 'Annual Sports Day – Inter-class competitions in athletics, cricket, football, kabaddi, and more' },
                  { icon: 'theater_comedy', text: 'Annual Cultural Programme – Dance, drama, music, and prize distribution ceremony' },
                  { icon: 'school', text: "Teachers' Day & Children's Day – Special tributes and fun activities for our educators and students" },
                  { icon: 'science', text: 'Science Exhibition – Student projects and innovations on display for parents and community' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary-container dark:bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm text-blue-950 dark:text-amber-400">{item.icon}</span>
                    </div>
                    <span className="text-sm text-on-surface-variant dark:text-slate-300 leading-relaxed" style={serifStyle}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950 dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-800 text-white rounded-lg font-semibold hover:opacity-90 transition-all" style={serifStyle}>
                Contact School Office <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Values Block */}
        <section className="bg-blue-950 dark:bg-[#0a1628] py-stack-lg px-8">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-3" style={serifStyle}>Our Core Values</h2>
              <p className="text-blue-200 dark:text-blue-300 text-lg max-w-xl mx-auto" style={serifStyle}>We shape not just students, but responsible citizens grounded in these principles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: 'psychology', title: 'Discipline', desc: 'Respect for time, rules, and authority in all aspects of school life.' },
                { icon: 'diversity_3', title: 'Unity', desc: 'Celebrating diversity and fostering brotherhood among all students.' },
                { icon: 'volunteer_activism', title: 'Service', desc: 'Encouraging students to give back to the community and society.' },
                { icon: 'menu_book', title: 'Excellence', desc: 'Pursuing the highest standards in academics, sports, and character.' },
              ].map((item) => (
                <div key={item.title} className="p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-amber-400/30">
                  <div className="w-16 h-16 bg-blue-900 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="material-symbols-outlined text-3xl text-amber-400">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={serifStyle}>{item.title}</h3>
                  <p className="text-blue-200 dark:text-blue-300 text-sm" style={serifStyle}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full flex items-center justify-between gap-4"
            onClick={e => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-blue-950 rounded-full flex items-center justify-center transition-all flex-shrink-0"
            >
              <span className="material-symbols-outlined text-3xl">chevron_left</span>
            </button>

            {/* Photo Content */}
            <div className="bg-white dark:bg-[#161d30] rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col max-h-[90vh]">
              <div className="relative flex-1 min-h-[60vh] bg-gray-100 dark:bg-[#0c1120]">
                <Image src={vibrantMoments[lightboxIndex].src} alt={vibrantMoments[lightboxIndex].alt} fill className="object-contain" />
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-[#2a3550]">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1 block" style={serifStyle}>Vibrant Moments</span>
                    <h3 className="text-2xl font-bold text-blue-950 dark:text-blue-200 mb-2" style={serifStyle}>
                      {vibrantMoments[lightboxIndex].title || vibrantMoments[lightboxIndex].alt}
                    </h3>
                    {vibrantMoments[lightboxIndex].desc && (
                      <p className="text-on-surface-variant dark:text-slate-400" style={serifStyle}>{vibrantMoments[lightboxIndex].desc}</p>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 flex-shrink-0">
                    {lightboxIndex + 1} / {vibrantMoments.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-blue-950 rounded-full flex items-center justify-center transition-all flex-shrink-0"
            >
              <span className="material-symbols-outlined text-3xl">chevron_right</span>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
