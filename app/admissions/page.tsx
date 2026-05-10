'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

const serifStyle = { fontFamily: 'Georgia, serif' }

const steps = [
  { icon: 'info', step: '01', title: 'Enquire', desc: 'Call us at 6207 834 778 or visit the school office to get details about available seats and admission requirements.' },
  { icon: 'edit_document', step: '02', title: 'Fill Form', desc: 'Collect and complete the admission form from the school office or download it from this website.' },
  { icon: 'upload_file', step: '03', title: 'Submit Documents', desc: 'Submit the completed form along with required documents: birth certificate, previous marksheet, photographs, and Aadhar card.' },
  { icon: 'how_to_reg', step: '04', title: 'Confirm Admission', desc: 'Pay the admission fee and receive your confirmation. Your child\'s school journey begins!' },
]

const docs = [
  'Birth Certificate (original + photocopy)',
  'Previous Class Marksheet / Transfer Certificate',
  '4 recent passport-size photographs',
  'Aadhar Card (child and parent)',
  'Caste Certificate (if applicable)',
  'Residence Proof',
]

const feeStructure = [
  { level: 'Play / KG', grades: 'Play · LKG · UKG', annual: '₹8,000', monthly: '₹700' },
  { level: 'Primary', grades: 'Class I – V', annual: '₹10,000', monthly: '₹900' },
  { level: 'Middle School', grades: 'Class VI – VIII', annual: '₹12,000', monthly: '₹1,100' },
]

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({ studentName: '', parentName: '', phone: '', email: '', class: '', dob: '', address: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-0 flex-1">
        {/* Hero */}
        <section className="relative h-[500px] flex items-center overflow-hidden bg-primary-container">
          <Image
            src="/admissions-building.jpg"
            alt="NBPS Admissions" fill className="object-cover opacity-60" priority unoptimized={true} quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/50 to-transparent" />
          <div className="relative z-10 max-w-container mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-sm mb-6 uppercase tracking-widest" style={serifStyle}>Admissions 2026–27</span>
              <h1 className="text-5xl font-bold text-white mb-5" style={serifStyle}>Join NBPS Family</h1>
              <p className="text-xl text-on-primary-container mb-8 max-w-xl" style={serifStyle}>
                Enrol your child at NBPS for quality CBSE education from Play to Class VIII. Admissions open for session 2026–27.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="font-semibold bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg hover:brightness-110 transition-all" style={serifStyle}>Apply Online</a>
                <a href="tel:6207834778" className="font-semibold bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2" style={serifStyle}>
                  <span className="material-symbols-outlined">call</span>Call: 6207 834 778
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="py-stack-lg max-w-container mx-auto px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-primary mb-4" style={serifStyle}>Admission Process</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto" style={serifStyle}>A simple, transparent process to help your child join our school family.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {steps.map((step) => (
              <div key={step.step} className="bg-white dark:bg-[#161d30] p-8 border border-outline-variant dark:border-[#2a3550] rounded-xl group hover:border-secondary-container dark:hover:border-amber-500/40 transition-all relative overflow-hidden shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <div className="mb-6 w-14 h-14 bg-surface-container-low dark:bg-[#1e2a40] rounded-lg flex items-center justify-center text-primary group-hover:bg-secondary-container dark:group-hover:bg-amber-500/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-blue-950 dark:text-amber-400">{step.icon}</span>
                </div>
                <div className="absolute top-4 right-4 text-[64px] leading-none text-surface-container-high dark:text-white/5 select-none font-bold" style={serifStyle}>{step.step}</div>
                <h3 className="text-2xl font-bold text-blue-950 dark:text-blue-200 mb-3" style={serifStyle}>{step.title}</h3>
                <p className="text-sm text-on-surface-variant dark:text-slate-400 leading-relaxed" style={serifStyle}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Docs + Fees */}
        <section className="bg-surface-container-low dark:bg-gray-900 py-stack-lg">
          <div className="max-w-container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Documents */}
            <div className="lg:col-span-2">
              <span className="text-secondary font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Required Documents</span>
              <h2 className="text-4xl font-bold text-primary mb-8" style={serifStyle}>Documents Checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {docs.map((doc, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white dark:bg-[#161d30] p-5 rounded-xl border border-gray-100 dark:border-[#2a3550] hover:border-amber-400 dark:hover:border-amber-500 transition-all">
                    <div className="w-10 h-10 bg-secondary-container dark:bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-base text-blue-950 dark:text-amber-400">check</span>
                    </div>
                    <span className="text-on-surface dark:text-slate-200 font-medium" style={serifStyle}>{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 bg-blue-950 text-white p-8 rounded-2xl flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl text-amber-400">payments</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={serifStyle}>Fee Information</h3>
                  <p className="text-blue-200 text-sm" style={serifStyle}>For detailed information about tuition fees, admission charges, and concessions, please contact the school office at <strong>+91 6207 834 778</strong> or visit us in person.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Inquiry Form */}
        <section id="apply" className="py-stack-lg max-w-container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-secondary font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Get Started</span>
              <h2 className="text-4xl font-bold text-primary mb-4" style={serifStyle}>Admission Enquiry Form</h2>
              <p className="text-lg text-on-surface-variant" style={serifStyle}>Fill in the details below and our admissions team will contact you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                <span className="material-symbols-outlined text-6xl text-green-600 block mb-4">check_circle</span>
                <h3 className="text-2xl font-bold text-green-800 mb-2" style={serifStyle}>Enquiry Submitted!</h3>
                <p className="text-green-700" style={serifStyle}>Thank you! Our admissions team will contact you within 24 hours. You can also call us directly at <strong>6207 834 778</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-[#161d30] rounded-xl border border-gray-200 dark:border-[#2a3550] p-8 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Student&apos;s Full Name *</label>
                    <input type="text" required value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" placeholder="Child's full name" style={serifStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Parent / Guardian Name *</label>
                    <input type="text" required value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" placeholder="Father / Mother name" style={serifStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Mobile Number *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" placeholder="10-digit mobile number" style={serifStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Date of Birth</label>
                    <input type="date" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" style={serifStyle} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Seeking Admission in Class *</label>
                  <select required value={formData.class} onChange={(e) => setFormData({...formData, class: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm" style={serifStyle}>
                    <option value="">Select class...</option>
                    {['Play', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-950 dark:text-blue-200 mb-2 uppercase tracking-wide" style={serifStyle}>Home Address</label>
                  <textarea rows={3} value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-[#2a3550] dark:bg-[#1e2a40] dark:text-white rounded-lg focus:outline-none focus:border-blue-950 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all text-sm resize-none" placeholder="Village / Block / District" style={serifStyle} />
                </div>
                <button type="submit" className="w-full py-4 bg-blue-950 dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-800 text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg dark:shadow-blue-900/40" style={serifStyle}>Submit Enquiry</button>
                <p className="text-xs text-on-surface-variant dark:text-slate-400 text-center" style={serifStyle}>Or call us directly at <a href="tel:6207834778" className="text-blue-950 dark:text-amber-400 font-bold underline">6207 834 778</a></p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
