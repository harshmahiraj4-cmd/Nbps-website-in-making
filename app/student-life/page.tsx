import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

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

export default function StudentLifePage() {
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
            <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/gallery/event-1.jpg" alt="Student Speech at NBPS" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg" style={serifStyle}>Student Speech</p>
                <p className="text-white/70 text-sm">Students actively participating in events.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/gallery/event-3.jpg" alt="Cultural Performance" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg" style={serifStyle}>Cultural Events</p>
                <p className="text-white/70 text-sm">Vibrant cultural performances by students.</p>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/gallery/event-2.jpg" alt="Award Ceremony" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/gallery/event-4.jpg" alt="Independence Day" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-2.jpg" alt="National Day Celebration at NBPS" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg" style={serifStyle}>National Day Celebrations</p>
                <p className="text-white/70 text-sm">Fostering patriotism and unity among our students.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-14.jpg" alt="Classical Dance Performance" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg" style={serifStyle}>Annual Cultural Fest</p>
                <p className="text-white/70 text-sm">Students performing graceful classical dances on stage.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-11.jpg" alt="Dance Performance" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-13.jpg" alt="Stage Dance Performance" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-12.jpg" alt="Students on stage with flags" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-15.jpg" alt="Children dancing on stage" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-10.jpg" alt="Road Safety Activity" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg" style={serifStyle}>Road Safety Awareness</p>
                <p className="text-white/70 text-sm">Practical activities to teach students about traffic rules.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-20.jpg" alt="Independence Day Celebration" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-17.jpg" alt="Children dancing on stage" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-19.jpg" alt="Boys cultural dance" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-6.jpg" alt="Students with Holi Colors" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-8.jpg" alt="Diwali Diyas Celebration" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-18.jpg" alt="Boys dancing on stage" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-9.jpg" alt="Students looking up with Diyas" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-7.jpg" alt="Students with decorated Diyas" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-3.jpg" alt="Holi Celebration at NBPS" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-16.jpg" alt="Young children dancing" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-4.jpg" alt="School Life Moments" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-5.jpg" alt="Festival of Colors at NBPS" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/student-life/sl-1.jpg" alt="Students with National Flags" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="max-w-container mx-auto px-8 py-stack-lg">
          <div className="flex flex-col lg:flex-row gap-gutter items-center">
            <div className="lg:w-1/2 relative">
              <Image
                src="/student-life/events-hero.jpg"
                alt="NBPS Events" width={600} height={400} className="rounded-xl w-full object-cover"
              />
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
      <Footer />
    </div>
  )
}
