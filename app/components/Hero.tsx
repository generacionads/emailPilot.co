'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const cards = [
  {
    id: 'after',
    badgeText: "After 90 Days With Us",
    badgeDotColor: "bg-green-400 animate-pulse",
    imageSrc: "/dashboard-after.jpg",
    alt: "EmailPilot Result Dashboard",
    inactiveShift: 12 
  },
  {
    id: 'before',
    badgeText: "Before Working With Us",
    badgeDotColor: "bg-red-500",
    imageSrc: "/dashboard-before.jpg",
    alt: "Previous Result Dashboard",
    inactiveShift: -12
  }
];

export default function Hero() {
  const [isAfterActive, setIsAfterActive] = useState(true);
  const toggleState = () => setIsAfterActive(!isAfterActive);

  return (
    <section className="bg-transparent w-full max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-32 lg:pb-40 flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 items-center lg:items-start">
      
      {/* 1. BLOQUE DE TEXTO (Izquierda en Desktop / Arriba en Mobile) */}
      <div className="text-center lg:text-left mb-12 lg:mb-0 order-1 lg:col-start-1 lg:row-start-1">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-2xl font-bold text-foreground tracking-tight mb-6 lg:mb-8"
        >
            EmailPilot
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl md:text-2xl lg:text-4xl font-extrabold text-foreground leading-[1.1] mb-6"
        >
           We Turn Email Into Your Most Profitable And Predictable Revenue Channel
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-sans text-lg md:text-l text-muted font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed"
        >
           Using a feedback loop that turns one time buyers into loyal customers who order 2, 3, even 4 plus times.
        </motion.h2>
      </div>

      {/* 2. BLOQUE DE CARDS (Derecha en Desktop / Centro en Mobile) */}
      <div className="w-full flex flex-col items-center lg:items-end order-2 lg:col-start-2 lg:row-span-2 mb-10 lg:mb-0">
        <div 
          className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl aspect-[1.4/1] md:aspect-[1.6/1] cursor-pointer"
          onClick={toggleState}
        >
          {cards.map((card) => {
            const isActive = (card.id === 'after' && isAfterActive) || (card.id === 'before' && !isAfterActive);
            
            return (
              <motion.div
                key={card.id}
                className="absolute top-0 left-0 w-full h-full"
                animate={{
                  scale: isActive ? 1 : 0.90,
                  x: isActive ? '0%' : `${card.inactiveShift}%`,
                  zIndex: isActive ? 20 : 10,
                  filter: isActive ? 'brightness(1)' : 'brightness(0.6)',
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative">

                  <div className="absolute top-4 right-4 z-20 bg-secondary text-white text-xs font-sans font-medium py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
                      {card.badgeText}
                      <span className={`w-2 h-2 ${card.badgeDotColor} rounded-full`}></span>
                  </div>

                  <div className="relative w-full h-full">
                    <Image
                      src={card.imageSrc}
                      alt={card.alt}
                      fill
                      className="object-cover object-top"
                      priority={card.id === 'after'}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          onClick={toggleState}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-white border border-gray-200 text-slate-500 hover:text-primary hover:border-primary/30 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-sm transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Click to compare
        </motion.button>
      </div>

      {/* 3. BLOQUE DE CTA (Izquierda en Desktop debajo de texto / Abajo en Mobile) */}
      <div className="w-full max-w-md lg:max-w-none px-4 lg:px-0 flex flex-col items-center lg:items-start order-3 lg:col-start-1 lg:row-start-2">
         <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full lg:w-auto bg-primary text-white rounded-[4rem] py-4 px-10 shadow-xl hover:bg-primary/90 transition-colors flex flex-col items-center justify-center gap-1"
         >
            <span className="font-display text-lg lg:text-xl font-bold tracking-wide">
              Book My Free Strategy Call
            </span>
            <span className="font-sans text-[12px] font-medium opacity-90 tracking-wide text-green-50">
              For eCommerce Brands Ready To Scale
            </span>
         </motion.button>
         
         <div className="mt-8 lg:mt-6 text-center lg:text-left font-bold text-foreground flex justify-center lg:justify-start items-center gap-2 text-sm w-full">
            <span>KLAVIYO</span> 
            <span className="text-green-500 font-extrabold text-lg leading-none">//</span> 
            <span>PARTNER</span>
            <span className="hidden lg:inline text-gray-300 mx-2">|</span>
            <span className="hidden lg:inline text-xs text-muted font-normal">Real Klaviyo results. Numbers anonymized.</span>
         </div>

         <p className="mt-2 text-xs text-muted text-center max-w-[200px] lg:hidden">
            Real Klaviyo results. Numbers anonymized.
         </p>
      </div>

    </section>
  )
}