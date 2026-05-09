'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const serifStyle = { fontFamily: 'Georgia, serif' }

const feeData = [
  {
    level: 'Play Group',
    grades: 'Play · Nursery',
    icon: 'child_care',
    color: 'from-pink-500 to-rose-400',
    admission: '₹1,500',
    tuition: '₹700/mo',
    annual: '₹8,400',
    sports: '₹500',
    exam: '₹300',
    total: '₹10,700',
    highlight: false,
  },
  {
    level: 'KG Section',
    grades: 'LKG · UKG',
    icon: 'school',
    color: 'from-violet-500 to-purple-400',
    admission: '₹2,000',
    tuition: '₹750/mo',
    annual: '₹9,000',
    sports: '₹500',
    exam: '₹400',
    total: '₹11,900',
    highlight: false,
  },
  {
    level: 'Primary',
    grades: 'Class I – V',
    icon: 'menu_book',
    color: 'from-blue-600 to-blue-400',
    admission: '₹2,500',
    tuition: '₹900/mo',
    annual: '₹10,800',
    sports: '₹600',
    exam: '₹500',
    total: '₹14,400',
    highlight: true,
  },
  {
    level: 'Middle School',
    grades: 'Class VI – VIII',
    icon: 'science',
    color: 'from-amber-500 to-yellow-400',
    admission: '₹3,000',
    tuition: '₹1,100/mo',
    annual: '₹13,200',
    sports: '₹700',
    exam: '₹600',
    total: '₹17,500',
    highlight: false,
  },
]

const faqs = [
  { q: 'When is the fee due each month?', a: 'Monthly tuition fee is due by the 10th of every month. A late fine of ₹50 is charged after the 15th.' },
  { q: 'Is there a sibling discount?', a: 'Yes. A 10% concession on tuition fee is given for the second child from the same family.' },
  { q: 'What payment modes are accepted?', a: 'Cash, UPI (Google Pay / PhonePe), and Bank Transfer are all accepted. Receipts are issued for every payment.' },
  { q: 'Are there fee concessions for meritorious students?', a: 'Yes. Students with outstanding academic or sports performance may be eligible for partial fee waivers. Contact the school office for details.' },
  { q: 'Is the admission fee refundable?', a: 'Admission fee is a one-time non-refundable charge paid at the time of joining.' },
  { q: 'Does the annual fee include books and uniform?', a: 'No. Books, uniform, and stationery are purchased separately from the school store or approved vendors.' },
]

export default function FeesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-0 flex-1">

        {/* Hero */}
        <section className="relative py-28 px-8 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #002147 0%, #003580 60%, #001a38 100%)' }}>
          {/* decorative rings */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full border border-white/5" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold text-sm mb-6 uppercase tracking-widest border border-amber-400/30" style={serifStyle}>
              Session 2026–27
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-5" style={serifStyle}>Fee Structure</h1>
            <p className="text-xl text-blue-200 max-w-xl mx-auto mb-8" style={serifStyle}>
              Transparent, affordable, and value-for-money education at NBPS. No hidden charges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#fees" className="px-8 py-3.5 bg-amber-400 text-blue-950 rounded-xl font-bold hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/25" style={serifStyle}>
                View Full Fees
              </a>
              <a href="tel:6207834778" className="px-8 py-3.5 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2" style={serifStyle}>
                <span className="material-symbols-outlined text-sm">call</span>Ask the Office
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white dark:bg-[#161d30] border-b border-gray-100 dark:border-[#2a3550]">
          <div className="max-w-container mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'payments', value: '₹700', label: 'Starting Monthly Fee', color: 'text-blue-600 dark:text-amber-400' },
              { icon: 'calendar_month', value: '10th', label: 'Fee Due Date', color: 'text-blue-600 dark:text-amber-400' },
              { icon: 'discount', value: '10%', label: 'Sibling Discount', color: 'text-blue-600 dark:text-amber-400' },
              { icon: 'verified', value: 'No', label: 'Hidden Charges', color: 'text-green-600 dark:text-green-400' },
            ].map((s) => (
              <div key={s.label} className="py-4">
                <span className={`material-symbols-outlined text-3xl ${s.color} mb-2 block`}>{s.icon}</span>
                <div className={`text-3xl font-bold ${s.color} mb-1`} style={serifStyle}>{s.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold" style={serifStyle}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Cards */}
        <section id="fees" className="py-16 px-8 bg-gray-50 dark:bg-[#0c1120]">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Annual Fee Breakdown</span>
              <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-200 mb-3" style={serifStyle}>Fee by Class Level</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto" style={serifStyle}>All charges for session 2026–27. Amounts are inclusive of all standard school activities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {feeData.map((f) => (
                <div
                  key={f.level}
                  className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    f.highlight
                      ? 'border-amber-400 dark:border-amber-500 shadow-xl shadow-amber-400/10'
                      : 'border-gray-200 dark:border-[#2a3550] shadow-md dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
                  } bg-white dark:bg-[#161d30]`}
                >
                  {f.highlight && (
                    <div className="absolute top-0 left-0 right-0 text-center py-1.5 bg-amber-400 text-blue-950 text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}

                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${f.color} p-6 ${f.highlight ? 'mt-7' : ''}`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-white text-2xl">{f.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-0.5" style={serifStyle}>{f.level}</h3>
                    <p className="text-white/80 text-sm" style={serifStyle}>{f.grades}</p>
                  </div>

                  {/* Fee Rows */}
                  <div className="p-6 space-y-3">
                    {[
                      { label: 'Admission Fee (one-time)', value: f.admission },
                      { label: 'Monthly Tuition', value: f.tuition },
                      { label: 'Annual Charges', value: f.annual },
                      { label: 'Sports & Activities', value: f.sports },
                      { label: 'Exam Fee', value: f.exam },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 dark:text-slate-400" style={serifStyle}>{row.label}</span>
                        <span className="font-semibold text-blue-950 dark:text-blue-200" style={serifStyle}>{row.value}</span>
                      </div>
                    ))}
                    <div className="pt-3 mt-3 border-t-2 border-dashed border-gray-200 dark:border-[#2a3550] flex justify-between items-center">
                      <span className="font-bold text-blue-950 dark:text-blue-200 text-sm uppercase tracking-wide" style={serifStyle}>Est. First Year Total</span>
                      <span className="text-xl font-black text-amber-600 dark:text-amber-400" style={serifStyle}>{f.total}</span>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <Link
                      href="/admissions#apply"
                      className="block w-full text-center py-3 rounded-xl font-bold text-sm transition-all bg-blue-950 dark:bg-amber-400 text-white dark:text-blue-950 hover:opacity-90"
                      style={serifStyle}
                    >
                      Apply for {f.level}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16 px-8 bg-white dark:bg-[#111827]">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-200 mb-2" style={serifStyle}>Detailed Fee Comparison</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm" style={serifStyle}>All amounts in Indian Rupees (₹). Session 2026–27.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-[#2a3550] shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="bg-blue-950 dark:bg-[#0c1120] text-white">
                    <th className="text-left px-6 py-4 font-bold" style={serifStyle}>Fee Component</th>
                    <th className="text-center px-4 py-4 font-bold" style={serifStyle}>Play/Nursery</th>
                    <th className="text-center px-4 py-4 font-bold" style={serifStyle}>LKG/UKG</th>
                    <th className="text-center px-4 py-4 font-bold bg-amber-500/20" style={serifStyle}>Class I–V</th>
                    <th className="text-center px-4 py-4 font-bold" style={serifStyle}>Class VI–VIII</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Admission Fee', values: ['₹1,500', '₹2,000', '₹2,500', '₹3,000'], note: 'One-time, non-refundable' },
                    { label: 'Monthly Tuition', values: ['₹700', '₹750', '₹900', '₹1,100'], note: 'Due by 10th each month' },
                    { label: 'Annual Charges', values: ['₹8,400', '₹9,000', '₹10,800', '₹13,200'], note: 'Includes tuition × 12' },
                    { label: 'Sports & PT Fee', values: ['₹500', '₹500', '₹600', '₹700'], note: 'Annual, one-time' },
                    { label: 'Exam / Assessment Fee', values: ['₹300', '₹400', '₹500', '₹600'], note: 'Annual' },
                    { label: 'Estimated 1st Year Total', values: ['₹10,700', '₹11,900', '₹14,400', '₹17,500'], note: 'All charges combined', bold: true },
                  ].map((row, i) => (
                    <tr key={row.label} className={`border-t border-gray-100 dark:border-[#2a3550] ${i % 2 === 0 ? 'bg-gray-50 dark:bg-[#161d30]' : 'bg-white dark:bg-[#111827]'}`}>
                      <td className="px-6 py-4">
                        <div className={`${row.bold ? 'font-black text-blue-950 dark:text-amber-400' : 'font-semibold text-blue-950 dark:text-blue-200'}`} style={serifStyle}>{row.label}</div>
                        <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5" style={serifStyle}>{row.note}</div>
                      </td>
                      {row.values.map((v, vi) => (
                        <td key={vi} className={`text-center px-4 py-4 ${row.bold ? 'font-black text-amber-600 dark:text-amber-400 text-base' : 'font-medium text-slate-700 dark:text-slate-300'} ${vi === 2 ? 'bg-amber-50 dark:bg-amber-500/5' : ''}`} style={serifStyle}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 text-center" style={serifStyle}>
              * Books, uniform, and stationery are purchased separately. Fees subject to revision by school management.
            </p>
          </div>
        </section>

        {/* Payment Info Banner */}
        <section className="py-12 px-8 bg-gradient-to-r from-blue-950 to-blue-900">
          <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: 'account_balance_wallet', title: 'Payment Modes', desc: 'Cash · UPI · Bank Transfer\nReceipts issued for all payments' },
              { icon: 'event_repeat', title: 'Monthly Due Date', desc: 'Fee due by the 10th of each month\n₹50 late fine after the 15th' },
              { icon: 'diversity_1', title: 'Concessions', desc: 'Sibling discount: 10%\nMerit & EWS concessions available' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-amber-400 text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={serifStyle}>{item.title}</h3>
                <p className="text-blue-200 text-sm whitespace-pre-line" style={serifStyle}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-8 bg-gray-50 dark:bg-[#0c1120]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm block mb-3 uppercase tracking-widest" style={serifStyle}>Common Questions</span>
              <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-200" style={serifStyle}>Fee FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#161d30] rounded-xl border border-gray-200 dark:border-[#2a3550] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-[#1e2a40] transition-colors"
                  >
                    <span className="font-semibold text-blue-950 dark:text-blue-200 pr-4" style={serifStyle}>{faq.q}</span>
                    <span className={`material-symbols-outlined text-amber-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-gray-100 dark:border-[#2a3550] pt-4" style={serifStyle}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-8 text-center bg-white dark:bg-[#111827] border-t border-gray-100 dark:border-[#2a3550]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-200 mb-4" style={serifStyle}>Ready to Enrol?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8" style={serifStyle}>
              Seats are limited for session 2026–27. Apply now or visit us at Daud Nagar Chakgadho, Bidupur, Vaishali.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions#apply" className="px-8 py-4 bg-blue-950 dark:bg-amber-400 text-white dark:text-blue-950 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg" style={serifStyle}>
                Apply for Admission
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-blue-950 dark:border-amber-400 text-blue-950 dark:text-amber-400 rounded-xl font-bold hover:bg-blue-950 hover:text-white dark:hover:bg-amber-400 dark:hover:text-blue-950 transition-all" style={serifStyle}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
