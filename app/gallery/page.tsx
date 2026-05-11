'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

const serifStyle = { fontFamily: 'Georgia, serif' }

const photos = [
  { src: '/gallery/main-gate.jpg', title: 'School Main Entrance', category: 'Campus', desc: 'The main gate of Nation Building Public School, Bidupur, Vaishali.' },
  { src: '/gallery/campus-front.jpg', title: 'School Building – Front View', category: 'Campus', desc: 'Front view of our school building with the school bus ready for students.' },
  { src: '/gallery/sports-ground.jpg', title: 'Sports Ground', category: 'Campus', desc: 'Our spacious sports ground where students play cricket, football and kabaddi.' },
  { src: '/gallery/classroom-1.jpg', title: 'Primary Classroom', category: 'Classrooms', desc: 'Young students actively participating in their daily lessons.' },
  { src: '/gallery/classroom-2.jpg', title: 'Middle School Classroom', category: 'Classrooms', desc: 'Teacher conducting an engaging class for middle school students.' },
  { src: '/gallery/classroom-3.jpg', title: 'Senior Classroom', category: 'Classrooms', desc: 'Senior students focused on their studies in a well-organised classroom.' },
  { src: '/gallery/classroom-4.jpg', title: 'Students at Work', category: 'Classrooms', desc: 'Students diligently working on their class assignments.' },
  { src: '/gallery/teaching.jpg', title: 'Interactive Teaching', category: 'Teaching', desc: 'Our experienced teacher engaging students with interactive lessons.' },
  { src: '/gallery/computer-lab.jpg', title: 'Computer Laboratory', category: 'Facilities', desc: 'Our computer lab equipped with systems for practical IT education.' },
  { src: '/gallery/primary-class.jpg', title: 'Primary Section – KG Class', category: 'Classrooms', desc: 'Kindergarten students in their colourful and cheerful classroom.' },
  { src: '/gallery/event-1.jpg', title: 'Student Speech', category: 'Events & Celebrations', desc: 'A young student confidently addressing the school.' },
  { src: '/gallery/event-2.jpg', title: 'Award Ceremony', category: 'Events & Celebrations', desc: 'Students proudly showing off their medals.' },
  { src: '/gallery/event-3.jpg', title: 'Cultural Performance', category: 'Events & Celebrations', desc: 'Students in traditional attire ready for a performance.' },
  { src: '/gallery/event-4.jpg', title: 'Independence Day', category: 'Events & Celebrations', desc: 'A student delivering a patriotic speech.' },
  { src: '/gallery/event-5.jpg', title: 'Diwali Celebration', category: 'Events & Celebrations', desc: 'Beautiful diyas lighting up the school campus.' },
  { src: '/gallery/event-6.jpg', title: 'Fancy Dress', category: 'Events & Celebrations', desc: 'A student dressed as Mahatma Gandhi during a special assembly.' },
  { src: '/gallery/event-7.jpg', title: 'Prize Distribution', category: 'Events & Celebrations', desc: 'Recognizing the hard work and achievements of our students.' },
  { src: '/gallery/event-8.jpg', title: 'Independence Day Lineup', category: 'Events & Celebrations', desc: 'Students proudly wearing the Ashoka Chakra.' },
  { src: '/gallery/event-9.jpg', title: 'Cultural Dance', category: 'Events & Celebrations', desc: 'A vibrant traditional dance performance by our students.' },
]

const categories = ['All', 'Campus', 'Classrooms', 'Teaching', 'Facilities', 'Events & Celebrations']

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active)

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-0 flex-1">

        {/* Hero */}
        <section className="relative h-[380px] flex items-center overflow-hidden">
          <Image src="/gallery/campus-front.jpg" alt="NBPS Campus" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-blue-950/70" />
          <div className="relative z-10 max-w-container mx-auto px-8 w-full text-center">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded mb-4 uppercase tracking-widest" style={serifStyle}>
              Our School in Pictures
            </span>
            <h1 className="text-5xl font-bold text-white mb-4" style={serifStyle}>Photo Gallery</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto" style={serifStyle}>
              A glimpse into life at Nation Building Public School — our campus, classrooms, teachers, and students.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-[#2a3550] sticky top-[72px] z-30 shadow-sm dark:shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <div className="max-w-container mx-auto px-8 py-4 flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightboxIndex(null); }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-blue-950 dark:bg-amber-500 text-white dark:text-blue-950 shadow'
                    : 'bg-surface-container-low dark:bg-[#1e2a40] text-blue-950 dark:text-slate-300 hover:bg-secondary-container dark:hover:bg-[#2a3550]'
                }`}
                style={serifStyle}
              >
                {cat}
                <span className="ml-2 text-xs opacity-70">
                  {cat === 'All' ? photos.length : photos.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Photo Grid */}
        <section className="max-w-container mx-auto px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-[#161d30] rounded-xl overflow-hidden border border-gray-100 dark:border-[#2a3550] hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-xl dark:hover:shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_12px_32px_rgba(0,0,0,0.5)] transition-all cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={80}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 transform duration-300">
                      zoom_in
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-blue-950/80 dark:bg-[#0c1120]/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm" style={serifStyle}>
                    {photo.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-blue-950 dark:text-blue-200 text-lg mb-1" style={serifStyle}>{photo.title}</h3>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400" style={serifStyle}>{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-on-surface-variant dark:text-slate-500" style={serifStyle}>
              No photos in this category yet.
            </div>
          )}
        </section>

        {/* Upload CTA */}
        <section className="bg-surface-container-low dark:bg-[#111827] py-12 px-8 border-t border-gray-100 dark:border-[#2a3550]">
          <div className="max-w-container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-200 mb-3" style={serifStyle}>More Photos Coming Soon</h2>
            <p className="text-lg text-on-surface-variant dark:text-slate-400 mb-6 max-w-xl mx-auto" style={serifStyle}>
              We regularly update our gallery with events, celebrations, and school activities. Stay connected!
            </p>
            <a
              href={`https://wa.me/916207834778?text=${encodeURIComponent('Hello! I want more information about NBPS.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all shadow-lg"
              style={serifStyle}
            >
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us for More Info
            </a>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
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
                <div className="relative flex-1 min-h-[50vh] bg-gray-100 dark:bg-[#0c1120]">
                  <Image src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].title} fill sizes="100vw" quality={90} className="object-contain" />
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
                      <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1 block" style={serifStyle}>{filtered[lightboxIndex].category}</span>
                      <h3 className="text-2xl font-bold text-blue-950 dark:text-blue-200 mb-2" style={serifStyle}>{filtered[lightboxIndex].title}</h3>
                      <p className="text-on-surface-variant dark:text-slate-400" style={serifStyle}>{filtered[lightboxIndex].desc}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 flex-shrink-0">
                      {lightboxIndex + 1} / {filtered.length}
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
      </main>
      <Footer />
    </div>
  )
}
