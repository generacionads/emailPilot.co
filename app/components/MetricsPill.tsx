'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    id: 1,
    value: "$12M+",
    label: "Revenue Driven Through Email",
  },
  {
    id: 2,
    value: "17X",
    label: "Average Return On Our Fees",
  },
  {
    id: 3,
    value: "27+",
    label: "Ecommerce Brands Partnered",
  },
  {
    id: 4,
    value: "10+",
    label: "Years Focused On Klaviyo",
  },
]

export default function MetricsPill() {
  return (
    <section className="w-full px-4 py-12 md:py-20 flex justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-[2.5rem] shadow-xl w-full max-w-2xl border border-gray-100/50 pt-12 px-6 pb-16 md:pt-16 md:px-12 md:pb-32"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-12 md:gap-y-12">
          {metrics.map((metric, index) => (
            <div key={metric.id} className="flex flex-col items-center text-center">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-3"
              >
                {metric.value}
              </motion.span>
              
              <span className="font-sans text-sm md:text-lg text-[#1A4D45]/80 font-medium leading-tight max-w-[150px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full flex justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-secondary text-white py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg flex items-center gap-3 max-w-full text-center"
          >
            <span className="font-sans text-sm md:text-sm font-medium leading-snug">
              Led By A Email Marketer With 10+ Years Of Hands On Ecommerce Growth
            </span>
            <span className="shrink-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}