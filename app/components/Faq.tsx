'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    id: 1,
    question: "What exactly is the FREE strategy call?",
    answer: "It's a 1 on 1 meeting with our brand strategist. We'll go over your current retention strategy, see where you're leaking sales, and outline exactly how to fix it. This is for eCommerce brands that want to lower their CAC, increase their LTV, and make their ads more profitable than ever."
  },
  {
    id: 2,
    question: "Is this a sales pitch?",
    answer: "No. Our goal is to provide value first. If you like the strategy we outline and want us to implement it, we can discuss that. If not, you leave with a clear roadmap to execute yourself."
  },
  {
    id: 3,
    question: "Do you work with startups?",
    answer: "We typically work with brands doing at least $50k/month to ensure we can generate a significant ROI, but we handle exceptions for high-growth potential startups."
  },
  {
    id: 4,
    question: "How long until I see results?",
    answer: "Our setup phase is quick. You will typically start seeing an uplift in revenue within the first 30 days of our flows going live."
  }
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-20 bg-background flex flex-col items-center">
      
      <div className="text-center mb-16 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-5xl font-extrabold text-foreground leading-tight mb-4"
        >
          This is Where You Start Thinking, "Okay... But What's the Catch?"
        </motion.h2>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300
                  bg-[#37766F] hover:bg-[#2F665F]
                  ${isOpen ? 'rounded-t-[1.5rem]' : 'rounded-[1.5rem]'}
                `}
              >
                <span className="font-display text-xl md:text-2xl font-bold text-white pr-8">
                  {faq.question}
                </span>

                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#1F252E] rounded-full flex items-center justify-center shadow-md">
                  <motion.svg 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="w-4 h-4 md:w-5 md:h-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="3"
                  >
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    )}
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="bg-[#E3EFF1] p-6 md:p-8 rounded-b-[1.5rem] text-foreground/80 font-sans text-lg leading-relaxed border-t-0">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  )
}