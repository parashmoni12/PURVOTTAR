"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* 1. The Background Image with Scale Animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/2.png" 
          alt="Assam Tourism"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        
        {/* 2. Standard dark overlay for text readability (Keeps text visible) */}
        <div className="absolute inset-0 bg-black/40 z-0" />
      </motion.div>

      {/* --- THE FIX: NEW FADE OVERLAY (White light from bottom) --- */}
      {/* It starts pure white at the bottom and fades to transparent over the bottom 33% */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1/3 z-10 bg-gradient-to-t from-white via-white/40 to-transparent"
        aria-hidden="true"
      />

      {/* 3. The Content Overlay (Centered) */}
      <div className="relative z-20 text-center text-white px-4 md:-mt-10">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-8xl font-black mb-4 drop-shadow-2xl tracking-tighter"
        >
          Explore Awesome <br />
          <span className="text-emerald-400">Assam</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-blue-50 text-base md:text-xl drop-shadow-md max-w-2xl mx-auto font-medium tracking-wide"
        >
          Tea Gardens, One-Horned Rhinos, and Ancient Satras
        </motion.p>
      </div>
    </div>
  );
};