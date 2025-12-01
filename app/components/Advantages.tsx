// components/Advantages.tsx
'use client'

import { motion } from 'framer-motion'

// Datos de la izquierda (Lo malo)
const painPoints = [
  "Spend hours each week designing emails",
  "Run random A/B tests hoping they work",
  "Use generic templates that don't match your brand",
  "Blast discounts that kill your margins",
  "Damage your sender reputation & deliverability"
]

// Datos de la derecha (Lo bueno - EmailPilot)
const gainPoints = [
  "You spend 30 minutes/month - We handle everything",
  "Increase Revenue by 30-50%",
  "Collect UGC & Feedback",
  "Average 22x ROI",
  "If you do not make back your investment back, we work for free until you do." // La garantía
]

export default function Advantages() {
  return (
    <section className="w-full px-6 py-20 bg-background flex flex-col items-center">
      
      {/* 1. CABECERA */}
      <div className="text-center mb-16 space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight max-w-2xl mx-auto"
        >
          Go From Sending More to Selling More
        </motion.h2>

        {/* Pill "Two Choices" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          // Usamos el color menta suave de la sección anterior para consistencia
          className="bg-[#E3EFF1] px-8 py-3 rounded-full inline-block"
        >
          <span className="font-sans text-[#1A4D45] font-medium text-lg">
            You Have Two Choices.
          </span>
        </motion.div>
      </div>

      {/* 2. GRID DE COMPARACIÓN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl items-start">
        
        {/* --- CARD IZQUIERDA: DIY (Pain) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <h3 className="font-display text-2xl font-bold text-gray-500 text-center mb-8 leading-tight">
            DIY or Hiring <br/> the Wrong People
          </h3>

          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex items-start gap-4">
                {/* Icono X Rojo */}
                <div className="mt-1 shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-sans text-gray-600 font-medium text-sm md:text-base leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- CARD DERECHA: EMAILPILOT (Gain) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative" // Necesario para posicionar el badge
        >
          {/* Badge "We Recommend" Flotante */}
          <div className="absolute -top-5 right-8 md:right-10 z-20">
            <div className="bg-primary text-white text-sm font-bold tracking-wide py-2 px-6 rounded-full shadow-lg">
              We Recommend
            </div>
          </div>

          {/* Contenedor Oscuro */}
          <div className="bg-gradient-to-b from-[#112A28] to-[#006B5F] rounded-[2rem] p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            
            <h3 className="font-display text-2xl md:text-4xl font-bold text-center mb-8 text-white py-3">
              EmailPilot
            </h3>

            <div className="space-y-4 relative z-10">
              {gainPoints.map((point, i) => {
                // Verificamos si es el último elemento (Garantía) para destacarlo
                const isGuarantee = i === gainPoints.length - 1;

                return (
                  <div 
                    key={i} 
                    className={`rounded-xl p-4 flex items-start gap-4 transition-all ${
                      isGuarantee 
                        ? "bg-white/20 border border-white/40 shadow-inner" // Estilo destacado para la garantía
                        : "bg-white/10 border border-white/5" // Estilo glass normal
                    }`}
                  >
                    {/* Icono Check Verde */}
                    <div className="mt-1 shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white shadow-sm">
                       <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <p className={`font-sans text-sm md:text-base leading-snug ${isGuarantee ? "font-bold text-white" : "font-medium text-green-50"}`}>
                      {point}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Decoración de fondo (Glow sutil) */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-40 rounded-full pointer-events-none"></div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}