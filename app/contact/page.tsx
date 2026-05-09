'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const serifStyle = { fontFamily: 'Georgia, serif' }

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-0 flex-1">
        {/* Hero */}
        <section className="py-24 flex items-center justify-center text-center px-4" style={{ backgroundColor: '#002147', backgroundImage: 'linear-gradient(rgba(0,33,71,0.88), rgba(0,33,71,0.88)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuBAzj4B-DurkvUJGEP7OzLJRyeNhxHMLWH5fqFmOixsrggE7PjMQnwbcxunAkP296Vu2ZpcsmZ0JafuKsYjsGBefyR5Edzzf7BNTJsYlisjU_PiOhzn1y7d9Rq3cCdRE692V68To7I8knUdgrl56W7rvzHV9V_qzf-LJWK8F97T0CBwtqjEFbrbDku7_rbdR-sf7-xwNjZwDDJFaa_erPjoz1DUNYXdhUHNrB8_Bx2u0AfyB-GIdYLCCnngEe0I_wS76SnXQQXHiNw)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-4xl">
            <span className="font-semibold text-secondary-fixed uppercase tracking-widest mb-4 block text-sm" style={serifStyle}>We&apos;re Here to Help</span>
            <h1 className="text-5xl font-bold text-white mb-6" style={serifStyle}>Contact Us</h1>
            <p className="text-xl text-primary-fixed max-w-2xl mx-auto opacity-90" style={serifStyle}>
              Have a question about admissions, fees, or school programmes? Reach out to us — we respond promptly.
            </p>
          </div>
        </section>

        {/* Map + Contact Cards */}
        <section className="max-w-container mx-auto px-8 -mt-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-stack-lg">
          {/* Map */}
          <div className="lg:col-span-8 bg-white dark:bg-[#161d30] rounded-xl shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-outline-variant dark:border-[#2a3550] overflow-hidden h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0!2d85.5544!3d25.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5a2b3e000001%3A0x1!2sNation+Building+Public+School%2C+Daud+Nagar%2C+Bidupur%2C+Vaishali%2C+Bihar+844503!5e0!3m2!1sen!2sin!4v1683000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="NBPS Location – Bidupur, Vaishali"
            />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="bg-primary-container text-white p-8 rounded-xl shadow-lg border border-blue-900">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-secondary-fixed" style={serifStyle}>
                <span className="material-symbols-outlined">location_on</span>School Address
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase text-on-primary-container mb-1 tracking-widest" style={serifStyle}>Address</p>
                  <p className="text-base leading-relaxed" style={serifStyle}>Daud Nagar Chakgadho,<br/>Bidupur, Vaishali, Bihar</p>
                </div>
                <div className="pt-5 border-t border-blue-800 space-y-3">
                  <p className="text-xs font-semibold uppercase text-on-primary-container mb-2 tracking-widest" style={serifStyle}>Contact Details</p>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">call</span>
                    <a href="tel:6207834778" className="text-base hover:text-amber-400 transition-colors" style={serifStyle}>6207 834 778</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">mail</span>
                    <a href="mailto:nationbuildingpublicschool@gmail.com" className="text-sm hover:text-amber-400 transition-colors" style={serifStyle}>nationbuildingpublicschool@gmail.com</a>
                  </div>
                </div>
                <a href="https://maps.google.com/maps?q=Nation+Building+Public+School+M854%2BF27+Daud+Nagar+Bidupur+Vaishali+Bihar+844503" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-2" style={serifStyle}>
                  <span className="material-symbols-outlined">directions</span>Get Directions
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-[#161d30] p-6 rounded-xl border border-outline-variant dark:border-[#2a3550] shadow-sm">
              <h3 className="text-xl font-bold text-primary dark:text-blue-200 mb-4" style={serifStyle}>School Timings</h3>
              <div className="space-y-3 text-sm text-on-surface-variant dark:text-slate-400">
                {[
                  { day: 'Monday – Friday', time: '8:00 AM – 2:30 PM' },
                  { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
                  { day: 'Sunday', time: 'Closed', closed: true },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between" style={serifStyle}>
                    <span>{row.day}</span>
                    <span className={`font-semibold ${row.closed ? 'text-error dark:text-red-400' : 'text-primary dark:text-blue-300'}`}>{row.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#2a3550] text-xs text-on-surface-variant dark:text-slate-500" style={serifStyle}>
                Office hours: Mon–Sat, 9:00 AM – 3:00 PM
              </div>
            </div>
          </div>
        </section>

        {/* Key Contacts */}
        <section className="bg-surface-container-low dark:bg-gray-900 py-stack-lg">
          <div className="max-w-container mx-auto px-8">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Reach the Right Person</span>
              <h2 className="text-4xl font-bold text-primary" style={serifStyle}>Key Contacts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: 'school', name: 'Admissions Office', info: 'For new admissions, seat availability, and fee enquiries.', phone: '6207 834 778', email: 'nationbuildingpublicschool@gmail.com' },
                { icon: 'account_balance', name: "Principal's Office", info: 'For academic matters, discipline, and school policies.', phone: '9708 573 000', email: 'nationbuildingpublicschool@gmail.com' },
                { icon: 'payments', name: 'Fee & Accounts', info: 'For fee receipts, concession requests, and payment queries.', phone: '6204 255 099', email: 'nationbuildingpublicschool@gmail.com' },
                { icon: 'sports', name: 'Academic & Co-curricular', info: 'For syllabus queries, events, sports, and activities.', phone: '9708 573 000', email: 'nationbuildingpublicschool@gmail.com' },
              ].map((dept) => (
                <div key={dept.name} className="bg-white dark:bg-[#161d30] p-6 rounded-xl border border-gray-100 dark:border-[#2a3550] hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md dark:hover:shadow-[0_0_0_1px_rgba(251,191,36,0.2)] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-950 dark:bg-[#1e2a40] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-amber-400">{dept.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-950 dark:text-blue-200 mb-1" style={serifStyle}>{dept.name}</h4>
                      <p className="text-sm text-on-surface-variant dark:text-slate-400 mb-3" style={serifStyle}>{dept.info}</p>
                      <div className="space-y-1 text-sm">
                        <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 hover:text-blue-950 dark:hover:text-amber-400 transition-colors" style={serifStyle}>
                          <span className="material-symbols-outlined text-sm">call</span>{dept.phone}
                        </a>
                        <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 hover:text-blue-950 dark:hover:text-amber-400 transition-colors" style={serifStyle}>
                          <span className="material-symbols-outlined text-sm">mail</span>{dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-stack-lg max-w-container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            <div>
              <span className="text-secondary font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Drop a Message</span>
              <h2 className="text-4xl font-bold text-primary mb-6" style={serifStyle}>We&apos;d Love to Hear From You</h2>
              <p className="text-lg text-on-surface-variant mb-8" style={serifStyle}>Have a question, feedback, or want to know more? Write to us and we&apos;ll get back within 1 working day.</p>
              <div className="space-y-5">
                {[
                  { icon: 'location_on', title: 'School Address', desc: 'Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar' },
                  { icon: 'call', title: 'Call Us', desc: '6207 834 778' },
                  { icon: 'mail', title: 'Email', desc: 'nationbuildingpublicschool@gmail.com' },
                  { icon: 'info', title: 'UDISE Code', desc: '10181403909' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-blue-950">{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold text-blue-950" style={serifStyle}>{item.title}</div>
                      <div className="text-sm text-on-surface-variant" style={serifStyle}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-green-600 block mb-4">check_circle</span>
                <h3 className="text-2xl font-bold text-green-800 mb-2" style={serifStyle}>Message Sent!</h3>
                <p className="text-green-700" style={serifStyle}>Thank you for reaching out. We will respond within 1 working day. You can also call us at <strong>6207 834 778</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-[#161d30] rounded-xl border border-gray-200 dark:border-[#2a3550] p-8 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" placeholder="Your name" style={serifStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Mobile Number *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" placeholder="10-digit number" style={serifStyle} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Email (optional)</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" placeholder="your@email.com" style={serifStyle} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Subject *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" style={serifStyle}>
                    <option value="">Select a topic...</option>
                    <option>Admission Enquiry</option>
                    <option>Fee Enquiry</option>
                    <option>Academic Query</option>
                    <option>General Enquiry</option>
                    <option>Feedback / Complaint</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Message *</label>
                  <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm resize-none" placeholder="Write your message here..." style={serifStyle} />
                </div>
                {error && (
                  <div className="bg-red-50 dark:bg-[#1c0a0a] border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-sm rounded-lg px-4 py-3" style={serifStyle}>
                    ⚠️ {error}
                  </div>
                )}
                <button type="submit" disabled={loading} className="w-full py-4 bg-blue-950 dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-800 text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg disabled:opacity-60" style={serifStyle}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
