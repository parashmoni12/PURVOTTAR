"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

const images = ["/1.jpeg", "/2.png", "/3.jpg"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[95vh] md:h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 1. Background Image Wrapper */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full md:h-[120%]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img src={images[index]} className="w-full h-full object-cover" alt="Northeast" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-[65%] to-white z-0" />
      </motion.div>

      {/* 2. Hero Content */}
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        {/* Elite Box Tagline */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <span className="text-emerald-400 font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">
              Where nature feels alive.
            </span>
          </div>
          <p className="mt-3 text-white/50 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.4em]">
             Beauty beyond imagination.
          </p>
        </motion.div>
        
        {/* Heading with Enhanced Letter Spacing */}
        <motion.h1 
          className="text-white text-[2.5rem] sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black uppercase leading-[1.1] md:leading-[0.9] drop-shadow-2xl mb-10"
        >
          <span className="block font-light tracking-[0.3em] text-2xl md:text-5xl lg:text-6xl mb-2">Journey To</span>
          <span className="tracking-[0.1em] md:tracking-[-0.02em]">The </span>
          <span className="text-emerald-400 italic tracking-[-0.05em]">NorthEast</span>
        </motion.h1>

        {/* --- THE SEARCH BAR (Restored & Improved) --- */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl p-1.5 md:p-2 rounded-2xl md:rounded-full border border-white/20 flex flex-col md:flex-row gap-2 shadow-2xl"
        >
          <div className="flex items-center flex-1 px-4">
            <Search size={18} className="text-emerald-400" />
            <input 
              type="text" 
              placeholder="Search hidden gems..." 
              className="w-full bg-transparent px-4 py-3 text-white placeholder:text-white/40 outline-none text-xs md:text-sm font-medium tracking-wide" 
            />
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl md:rounded-full font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg">
            Explore Now <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* Scroll Pill */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-6 md:bottom-12"
        >
          <div className="w-[1px] h-10 md:h-14 bg-gradient-to-b from-emerald-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}