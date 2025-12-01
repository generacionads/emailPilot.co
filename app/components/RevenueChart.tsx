'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const chartData = [
  { id: 1, label: "Medical Dev", prev: 12000, curr: 61000 },
  { id: 2, label: "Sport Goods", prev: 9000, curr: 21000 },
  { id: 3, label: "Spec Training", prev: 19000, curr: 63000 },
  { id: 4, label: "Supplements", prev: 25000, curr: 51000 },
  { id: 5, label: "Auto Parts", prev: 9000, curr: 39000 },
]

const MAX_VAL = 70000; 

export default function RevenueChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const yAxisLabels = [70, 60, 50, 40, 30, 20, 10, 0];

  const handleMobileTap = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const TooltipBadge = ({ item }: { item: typeof chartData[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: -10, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-[100%] left-1/2 -translate-x-1/2 mb-2 z-50 bg-secondary text-white p-4 rounded-xl shadow-xl min-w-[180px] pointer-events-none"
    >
        <p className="font-display text-sm font-bold mb-2 text-center text-white/90">{item.label}</p>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs font-sans">
              <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-[#AAB2C0]"></span> Prev:
              </span>
              <span className="font-bold">${item.prev.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-sans">
              <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Curr:
              </span>
              <span className="font-bold text-green-300">${item.curr.toLocaleString()}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-secondary rotate-45"></div>
    </motion.div>
  );

  return (
    <section className="w-full px-4 py-20 bg-background flex justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-xl p-6 md:p-12 border border-gray-100 relative"
      >
        
        <h2 className="font-display text-2xl md:text-4xl font-extrabold text-center text-foreground mb-8 md:mb-12 leading-tight">
          Attributed Revenue: Before <br/> vs After Email Profits
        </h2>

        {/* VERSIÓN DESKTOP (Barras Verticales + Hover) */}
        <div className="hidden md:block relative w-full h-[350px] pl-10 mb-24 select-none">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none z-0">
            {yAxisLabels.map((label) => (
              <div key={label} className="relative w-full h-0 border-t border-dashed border-gray-200">
                <span className="absolute -left-10 -top-2.5 text-xs font-sans font-bold text-gray-400 w-8 text-right">${label}K</span>
              </div>
            ))}
          </div>

          <div className="relative w-full h-full flex items-end justify-around pl-4 z-10">
            {chartData.map((item, index) => {
              const heightPrev = (item.prev / MAX_VAL) * 100;
              const heightCurr = (item.curr / MAX_VAL) * 100;
              const isActive = activeIndex === index;

              return (
                <div 
                  key={item.id} 
                  className="group relative flex flex-col items-center h-full justify-end w-full"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <AnimatePresence>
                    {isActive && <TooltipBadge item={item} />}
                  </AnimatePresence>

                  <div className="flex items-end gap-3 w-20 justify-center h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightPrev}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="w-full bg-[#AAB2C0] rounded-t-lg relative opacity-90 group-hover:opacity-100 transition-opacity"
                    ></motion.div>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightCurr}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                      className="w-full bg-primary rounded-t-lg relative group-hover:brightness-110 transition-all shadow-md"
                    ></motion.div>
                  </div>

                  <div className="absolute bottom-0 translate-y-full pt-4 w-full flex justify-center">
                    <span className="font-sans text-sm font-bold text-muted whitespace-nowrap transform  origin-top-left translate-x-4">
                      {item.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* VERSIÓN MOBILE (Barras Horizontales + Tap) */}
        <div className="md:hidden w-full space-y-8 mt-4">
          {chartData.map((item, index) => {
             const widthPrev = (item.prev / MAX_VAL) * 100;
             const widthCurr = (item.curr / MAX_VAL) * 100;
             const isActive = activeIndex === index;

             return (
               <div 
                  key={item.id} 
                  className="w-full relative cursor-pointer tap-highlight-transparent"
                  onClick={() => handleMobileTap(index)}
               >
                 <AnimatePresence>
                    {isActive && <TooltipBadge item={item} />}
                 </AnimatePresence>

                 <p className="font-display font-bold text-foreground mb-2 text-sm pl-1">{item.label}</p>
                 
                 <div className="space-y-3">
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden flex items-center">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${widthPrev}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8, delay: index * 0.1 }}
                           className={`h-full bg-[#AAB2C0] rounded-full transition-opacity ${isActive ? 'opacity-100' : 'opacity-80'}`}
                         />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden flex items-center">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${widthCurr}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                           className={`h-full bg-primary rounded-full shadow-sm transition-opacity ${isActive ? 'brightness-110' : ''}`}
                         />
                      </div>
                    </div>
                 </div>
                 
                 <div className="absolute inset-0 z-10" />
               </div>
             )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 md:mt-16 pb-4">
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#AAB2C0]"></div>
             <span className="font-sans font-bold text-muted text-xs md:text-base">Previous Monthly</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary"></div>
             <span className="font-sans font-bold text-foreground text-xs md:text-base">Current Monthly</span>
          </div>
        </div>

      </motion.div>
    </section>
  )
}