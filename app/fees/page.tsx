'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

const serifStyle = { fontFamily: 'Georgia, serif' }

const bookCharges = [
  { class: 'Nursery', fee: '₹1,480' },
  { class: 'LKG', fee: '₹1,520' },
  { class: 'UKG', fee: '₹1,880' },
  { class: 'Class 1', fee: '₹2,240' },
  { class: 'Class 2', fee: '₹2,670' },
  { class: 'Class 3', fee: '₹2,970' },
  { class: 'Class 4', fee: '₹3,230' },
  { class: 'Class 5', fee: '₹3,580' },
  { class: 'Class 6', fee: '₹3,680' },
  { class: 'Class 7', fee: '₹3,790' },
  { class: 'Class 8', fee: '₹4,080' },
]

const transportRoutes = [
  { routes: 'Daud Nagar, Khilwat, Andhanwara', fee: '₹500' },
  { routes: 'Bidupur, Bidupur Dih', fee: '₹550' },
  { routes: 'Rahimapur, Majhauli Pur', fee: '₹600' },
  { routes: 'Mail, Bhairopur, Unchidi', fee: '₹550' },
]

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function FeesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] dark:bg-[#0c1120]">
      <Navbar />
      
      <main className="flex-1 pt-24 md:pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 md:px-8">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4 block" style={serifStyle}>Academic Session 2026-27</span>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-950 dark:text-blue-100 mb-6" style={serifStyle}>Fee Structure</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed" style={serifStyle}>
              Providing world-class education with transparent and affordable pricing. Join the NBPS family today.
            </p>
          </motion.div>

          {/* Admission Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">how_to_reg</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-100" style={serifStyle}>Admission & Starter Kit</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="lg:col-span-2 glass-card bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-amber-400/10 transition-colors duration-500"></div>
                
                <h3 className="text-xl font-bold text-blue-950 dark:text-amber-400 mb-8 flex items-center gap-2" style={serifStyle}>
                  Package Includes:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {[
                    { icon: 'app_registration', text: 'Registration Fee' },
                    { icon: 'login', text: 'Admission Fee' },
                    { icon: 'checkroom', text: 'School Uniform Fee' },
                    { icon: 'badge', text: 'I-Card, Tie & Belt' },
                    { icon: 'school', text: 'Premium School Bag' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/item:bg-amber-400 group-hover/item:text-blue-950 transition-all duration-300">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium" style={serifStyle}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-950 to-blue-900 dark:from-[#161d30] dark:to-[#0f172a] p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center text-center relative overflow-hidden min-h-[250px]">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-20 right-10 w-32 h-32 border border-white rounded-full"></div>
                </div>
                
                <span className="text-amber-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 block">Total Admission Package</span>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
                  <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold" style={serifStyle}>₹4,050</span>
                  <span className="text-amber-400 text-xl font-bold">to</span>
                  <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold" style={serifStyle}>₹5,400</span>
                </div>
                <p className="text-blue-100 text-xs md:text-sm leading-relaxed" style={serifStyle}>
                  One-time charges depending on the class (Nursery to Class 8).
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Books Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">auto_stories</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-100" style={serifStyle}>Book Charges</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {bookCharges.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-[#161d30] border border-slate-100 dark:border-white/5 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 text-center group"
                >
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 block">{item.class}</span>
                  <div className="text-2xl font-black text-blue-950 dark:text-blue-100 group-hover:text-amber-500 transition-colors" style={serifStyle}>{item.fee}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Transport Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400">directions_bus</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-100" style={serifStyle}>Transport Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {transportRoutes.map((route, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-[2rem] flex items-center justify-between shadow-lg group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 group-hover:bg-amber-400 group-hover:text-blue-950 transition-all duration-500">
                      <span className="material-symbols-outlined">route</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-950 dark:text-blue-100 leading-tight mb-1" style={serifStyle}>{route.routes}</h3>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Route-wise monthly fee</span>
                    </div>
                  </div>
                  <div className="text-3xl font-black text-amber-600 dark:text-amber-400" style={serifStyle}>{route.fee}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Important Notes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">info</span>
              <h3 className="text-xl font-bold text-blue-950 dark:text-blue-100" style={serifStyle}>Important Notes</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {[
                'Fees may vary slightly depending on specific class requirements.',
                'Book prices displayed already include seasonal discounts.',
                'Transport fee is route-based and charged monthly.',
                'Full uniform and essential accessories are included in the admission package.'
              ].map((note, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed" style={serifStyle}>{note}</p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
      
      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  )
}
