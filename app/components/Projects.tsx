'use client';

import { motion, useAnimation, useMotionValue, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';

const PROJECTS_DATA = [
  { 
    id: 1, 
    title: "AF Iberia", 
    category: "Email Strategy",
    img: "/carrusel-1.jpg" 
  },
  { 
    id: 2, 
    title: "PlusTools Academy", 
    category: "Automation",
    img: "/carrusel-2.jpg" 
  },
  { 
    id: 3, 
    title: "BabyTop", 
    category: "Design System",
    img: "/carrusel-3.jpg" 
  },
  { 
    id: 4, 
    title: "Fidus Translations", 
    category: "Retention",
    img: "/carrusel-blog.jpg" 
  },
  { 
    id: 5, 
    title: "GeekMind Space", 
    category: "Launch",
    img: "/carrusel-5.jpg" 
  },
  { 
    id: 6, 
    title: "AF Iberia (2)", 
    category: "Strategy",
    img: "/carrusel-1.jpg" 
  },
  { 
    id: 7, 
    title: "PlusTools (2)", 
    category: "Growth",
    img: "/carrusel-2.jpg" 
  },
];

const WheelScrollCard = ({ title, img, isActive, onClick }: { title: string, img: string, isActive: boolean, onClick?: () => void }) => {
  const containerHeight = 450; 
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const controls = useAnimation();
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ top: 0, bottom: 0 });

  const SCROLL_SPEED = 300; 

  const updateConstraints = useCallback(() => {
    const currentImgHeight = contentRef.current?.offsetHeight || 0;
    const maxScroll = containerHeight - currentImgHeight;
    setDragConstraints({ top: maxScroll, bottom: 0 });
  }, [containerHeight]);

  const animateScrollDown = useCallback(() => {
    const currentImgHeight = contentRef.current?.offsetHeight || 0;
    const maxScroll = containerHeight - currentImgHeight;
    if (maxScroll >= 0) return;

    const currentY = y.get();
    const distanceRemaining = Math.abs(maxScroll - currentY);
    const duration = distanceRemaining / SCROLL_SPEED; 

    controls.start({ 
        y: maxScroll, 
        transition: { duration: duration, ease: "linear", delay: 0 } 
    });
  }, [controls, containerHeight, y]);

  const animateScrollUp = useCallback(() => {
    const currentY = y.get(); 
    const distanceToTop = Math.abs(currentY); 
    const duration = distanceToTop / (SCROLL_SPEED * 2.5);

    controls.start({ 
      y: 0, 
      transition: { duration: duration, ease: "easeInOut" } 
    });
  }, [controls, y]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    animateScrollDown();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animateScrollUp(); 
  };

  useEffect(() => {
    if (isLoaded) updateConstraints();
  }, [isLoaded, updateConstraints]);

  useEffect(() => {
    if (isHovered) {
        animateScrollDown();
    } else {
        animateScrollUp();
    }
  }, [isActive, isHovered, animateScrollDown, animateScrollUp]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const onWheel = (e: WheelEvent) => {
      if (!isHovered) return;
      const currentImgHeight = contentRef.current?.offsetHeight || 0;
      const maxScroll = containerHeight - currentImgHeight;
      if (maxScroll >= 0) return; 

      e.preventDefault();
      e.stopPropagation();
      controls.stop();
      
      let newY = y.get() - e.deltaY;
      if (newY > 0) newY = 0;
      if (newY < maxScroll) newY = maxScroll;
      y.set(newY);
    };
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => element.removeEventListener('wheel', onWheel);
  }, [y, controls, isHovered, containerHeight]); 

  return (
    <div 
      ref={containerRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full rounded-[2rem] overflow-hidden bg-white shadow-xl group/card select-none transition-all duration-500
        ${isActive 
            ? 'opacity-100 cursor-ns-resize shadow-2xl scale-100 z-10 touch-none' 
            : 'opacity-40 hover:opacity-100 hover:scale-[1.02] cursor-pointer hover:shadow-2xl hover:z-20 grayscale hover:grayscale-0'
        } 
      `}
    >
      <motion.div 
        ref={contentRef} 
        style={{ y }} 
        animate={controls} 
        drag={isActive ? "y" : false} 
        dragConstraints={dragConstraints} 
        dragElastic={0.1} 
        onDragStart={() => controls.stop()} 
        dragDirectionLock={true}
        className="w-full will-change-transform bg-gray-50"
      >
        <Image 
            src={img} 
            alt={title} 
            width={400} 
            height={1200} 
            className="w-full h-auto pointer-events-none align-top"
            onLoad={() => {
                setTimeout(() => {
                    setIsLoaded(true);
                    updateConstraints();
                }, 100);
            }}
        />
      </motion.div>
      
      <AnimatePresence>
        {isActive && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-6 right-6 z-30 bg-secondary text-white text-xs font-sans font-medium py-2 px-4 rounded-full shadow-lg flex items-center gap-2 pointer-events-none backdrop-blur-sm bg-opacity-90"
          >
            Hover to explore
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const CARD_WIDTH = 320; 
  const X_OFFSET = 280; 
  const X_OFFSET_FAR = 480; 
  
  const SCALE_SIDE = 0.85; 
  const SCALE_FAR = 0.7;

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: { offset: { x: number }, velocity: { x: number } }) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) nextSlide();
    else if (swipe > swipeConfidenceThreshold) prevSlide();
  };

  return (
    <motion.div 
      className="relative w-full max-w-[1400px] mx-auto h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing py-10"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }} 
      dragElastic={0.05} 
      onDragEnd={handleDragEnd}
      dragDirectionLock={true}
    >
      <div className="relative w-full h-full flex items-center justify-center perspective-[1200px] touch-pan-y"> 
        {PROJECTS_DATA.map((item, i) => {
          const length = PROJECTS_DATA.length;
          let offset = (i - index + length) % length;
          if (offset > length / 2) offset -= length;

          const isActive = offset === 0;

          let style = { 
            x: 0, scale: 0.5, zIndex: 0, opacity: 0, rotateY: 0, filter: "blur(10px)", display: "none" 
          }; 
          
          if (offset === 0) {
             style = { x: 0, scale: 1, zIndex: 30, opacity: 1, rotateY: 0, filter: "blur(0px)", display: "block" };
          } else if (offset === 1) {
             style = { x: X_OFFSET, scale: SCALE_SIDE, zIndex: 20, opacity: 1, rotateY: -15, filter: "blur(2px)", display: "block" }; 
          } else if (offset === -1) {
             style = { x: -X_OFFSET, scale: SCALE_SIDE, zIndex: 20, opacity: 1, rotateY: 15, filter: "blur(2px)", display: "block" }; 
          } else if (offset === 2) {
             style = { x: X_OFFSET_FAR, scale: SCALE_FAR, zIndex: 10, opacity: 0.6, rotateY: -25, filter: "blur(4px)", display: "block" };
          } else if (offset === -2) {
             style = { x: -X_OFFSET_FAR, scale: SCALE_FAR, zIndex: 10, opacity: 0.6, rotateY: 25, filter: "blur(4px)", display: "block" };
          }

          return (
            <motion.div
              key={item.id}
              className="absolute top-1/2 left-1/2"
              initial={style} 
              animate={style}
              transition={{ type: "spring", stiffness: 180, damping: 24, mass: 1.2, opacity: { duration: 0.4 } }}
              style={{
                width: CARD_WIDTH,
                height: 450,
                marginLeft: -(CARD_WIDTH / 2), 
                marginTop: -(450 / 2),
                transformStyle: "preserve-3d", 
              }}
            >
              <WheelScrollCard 
                title={item.title} 
                img={item.img} 
                isActive={isActive}
                onClick={() => {
                  if (offset === 1) nextSlide();
                  if (offset === -1) prevSlide();
                  if (offset === 2) { nextSlide(); setTimeout(nextSlide, 150); } 
                  if (offset === -2) { prevSlide(); setTimeout(prevSlide, 150); }
                }}
              />
               {isActive && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-10 left-10 right-10 h-6 bg-primary/20 blur-2xl rounded-[100%]" />
              )}
            </motion.div>
          );
        })}
      </div>

      <button onClick={prevSlide} className="hidden md:flex absolute left-4 lg:left-8 z-50 bg-white border border-gray-100 shadow-xl p-4 rounded-full text-foreground hover:text-primary hover:border-primary/20 hover:scale-110 transition-all focus:outline-none group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button onClick={nextSlide} className="hidden md:flex absolute right-4 lg:right-8 z-50 bg-white border border-gray-100 shadow-xl p-4 rounded-full text-foreground hover:text-primary hover:border-primary/20 hover:scale-110 transition-all focus:outline-none group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="w-full px-6 py-20 bg-background overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-4 space-y-4 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight"
        >
          Featured Success Stories
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-lg text-muted"
        >
          Explore how we've helped brands scale their revenue through email. <br className="hidden md:block"/>
        </motion.p>
      </div>

      <ProjectsCarousel />
      
    </section>
  );
}