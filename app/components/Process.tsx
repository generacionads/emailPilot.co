'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: "YOU APPROVE THE STRATEGY",
    subtitle: "Short monthly review"
  },
  {
    id: 2,
    title: "WE HANDLE EVERYTHING",
    subtitle: "Fully managed service"
  },
  {
    id: 3,
    title: "YOU SEE RESULTS",
    subtitle: "Higher sales and deeper insight"
  }
]

export default function Process() {
  return (
    <section className="w-full px-6 py-20 bg-background flex flex-col items-center">
      
      <div className="max-w-3xl text-center space-y-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight"
        >
          For Ecommerce Brands Making $50k+ Per Month
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-sans text-lg text-muted leading-relaxed"
        >
          Built for busy founders who want to grow retention using proven systems across email, SMS, and WhatsApp.
        </motion.p>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-[#2F7A6E] to-[#13332E] rounded-full py-3 px-8 shadow-lg flex items-center gap-3 mb-8"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
        <span className="font-sans text-white font-medium text-base tracking-wide">
          Our Done For Process
        </span>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="font-sans text-foreground/80 text-center max-w-lg mb-12 text-lg"
      >
        We handle everything for you so you can stay focused on growing your business
      </motion.p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.15), duration: 0.5 }}
            className="bg-[#E3EFF1] rounded-2xl py-10 px-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-display font-bold text-[#1A4D45] uppercase text-lg mb-2 tracking-wide">
              {step.title}
            </h3>
            
            <p className="font-sans text-[#4A6B66] text-base font-medium">
              {step.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}