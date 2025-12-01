// components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { DotLottiePlayer } from '@dotlottie/react-player';

const services = [
  {
    id: 1,
    title: "How To Find Hidden Money In Your Email List",
    description: "Discover where your emails are leaking sales - and exactly how to fix it (without sending more)."
  },
  {
    id: 2,
    title: "How To Get Customers To Tell You What They Want To Buy",
    description: "Most brands just blast emails. We'll help you ask smart questions so your customers reply with what they really want."
  },
  {
    id: 3,
    title: "How To Make Email Bring In 30-50% of Your Store's Sales",
    description: "You'll get a simple plan (made just for your store) that helps turn email into your biggest sales tool-not just a random thing you do."
  }
]

export default function Services() {
  return (
    <section className="w-full px-4 py-20 bg-background flex flex-col items-center">
    
      <div className="max-w-3xl text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight"
        >
          What We'll Show You On <br className="hidden md:block" /> Your Free Strategy Call:
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white rounded-[2rem] p-8 flex flex-col items-start shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="w-20 h-20 mb-6">
              <DotLottiePlayer
                src="https://lottie.host/9388af46-4449-41f5-a93b-1f8575e29ab5/hCmoamVDlw.lottie"
                autoplay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            <h3 className="font-display text-xl font-bold text-foreground mb-4 leading-tight">
              {service.title}
            </h3>

            <p className="font-sans text-[#3A5A55] text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}