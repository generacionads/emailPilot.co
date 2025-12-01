'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface CaseStudyData {
  id: string;
  sectionTitle: string; 
  logo: {
    initials: string;
    bgColor: string; 
  };
  tag: string; 
  headline: React.ReactNode; 
  description: string;
  stats: { label: string; value: string }[];
  resultsList: string[];
  visuals: {
    after: {
      amount: string;
      description: string;
      img: string;
    };
    before: {
      amount: string;
      description: string;
      img: string;
    };
  };
}

export default function SuccessStory({ data }: { data: CaseStudyData }) {
  const [isAfterActive, setIsAfterActive] = useState(true);

  const visualCards = [
    {
      id: 'after',
      type: 'AFTER',
      headerColor: 'bg-[#1A3D38]',
      ...data.visuals.after
    },
    {
      id: 'before',
      type: 'BEFORE',
      headerColor: 'bg-[#242A35]',
      ...data.visuals.before
    }
  ];

  return (
    <section className="w-full px-4 py-20 bg-background flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-extrabold text-foreground text-center mb-12"
      >
        {data.sectionTitle}
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-2xl lg:max-w-6xl rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center"
      >
        
        <div className="flex flex-col gap-8 md:gap-10">
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">

              <div className={`w-14 h-14 rounded-full ${data.logo.bgColor} flex items-center justify-center shrink-0`}>
                <span className="font-display font-bold text-white text-xl">{data.logo.initials}</span>
              </div>
              <div className="bg-[#242A35] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide">
                {data.tag}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                {data.headline}
              </h2>
              <p className="font-sans text-muted text-lg leading-relaxed max-w-lg">
                {data.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.stats.map((stat, i) => (
              <div key={i} className="bg-[#E3EFF1] rounded-2xl p-4 xl:p-6 text-center flex flex-col justify-center">
                <span className="font-display text-xl xl:text-2xl font-bold text-[#1A4D45] mb-1 truncate">
                  {stat.value}
                </span>
                <span className="font-sans text-xs xl:text-sm text-[#4A6B66] font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Results achieved:
            </h3>
            <ul className="space-y-4">
              {data.resultsList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans text-foreground/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <div 
            className="relative w-full max-w-md lg:max-w-full aspect-[4/5] cursor-pointer"
            onClick={() => setIsAfterActive(!isAfterActive)}
          >
            {visualCards.map((card) => {
              const isActive = (card.id === 'after' && isAfterActive) || (card.id === 'before' && !isAfterActive);

              return (
                <motion.div
                  key={card.id}
                  className="absolute top-0 left-0 w-full h-full"
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    x: isActive ? '0%' : card.id === 'before' ? '-6%' : '6%',
                    y: isActive ? '0%' : '10px',
                    zIndex: isActive ? 20 : 10,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white flex flex-col">
                    <div className={`${card.headerColor} px-6 py-4 flex justify-between items-center text-white`}>
                      <span className="font-bold uppercase tracking-wider text-sm md:text-base">
                        {card.type}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                        {card.amount}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col relative bg-white">
                      <p className="font-sans text-slate-600 mb-6 text-sm md:text-base">
                        {card.description}
                      </p>
                      <div className="relative w-full flex-1 rounded-t-xl overflow-hidden shadow-inner border border-gray-100">
                         <Image
                          src={card.img}
                          alt={`${card.type} Dashboard`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <motion.div 
                          initial={false}
                          animate={{ opacity: isActive ? 1 : 0 }}
                          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#242A35] text-white px-5 py-3 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg whitespace-nowrap"
                      >
                          Click To Compare
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </motion.div>
    </section>
  )
}