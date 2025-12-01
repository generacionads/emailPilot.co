// components/Cta.tsx
'use client'

import { motion } from 'framer-motion'

// Definimos qué partes del CTA pueden cambiar
interface CtaProps {
  title: React.ReactNode; // ReactNode permite pasar texto con <br/> si lo necesitas
  description: string;
  buttonText: string;
}

// Valores por defecto (opcional, por si se te olvida pasar algo)
const defaultProps = {
  buttonText: "Book My Free Strategy Call"
}

export default function Cta({ 
  title, 
  description, 
  buttonText = defaultProps.buttonText 
}: CtaProps) {
  
  return (
    <section className="w-full px-4 py-20 bg-background flex justify-center">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#E3EFF1] w-full max-w-4xl rounded-[2.5rem] px-6 py-16 md:px-12 md:py-24 text-center flex flex-col items-center shadow-sm"
      >
        
        {/* TÍTULO DINÁMICO */}
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#13332E] leading-tight mb-10 max-w-2xl">
          {title}
        </h2>

        {/* BOTÓN CON TEXTO DINÁMICO */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white font-sans text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all mb-10"
        >
          {buttonText}
        </motion.button>

        {/* DESCRIPCIÓN DINÁMICA */}
        <p className="font-sans text-base md:text-lg text-[#3A5A55] max-w-2xl leading-relaxed font-medium">
          {description}
        </p>

      </motion.div>

    </section>
  )
}