"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Info, Plane, Hotel, Utensils, Sparkles, ChevronRight, X, Search, Car } from "lucide-react";

export const PackageCard = ({ pkg }: { pkg: any }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row lg:flex-row lg:items-stretch"
      >
        {/* 1. Image Section: Grid on Mobile, Sidebar on Tablet/Desktop */}
       {/* 1. Image Section: SQUARE GRID on All Devices */}
<div className="w-full md:w-2/5 lg:w-1/3 p-3 md:p-4 bg-slate-50/50 flex items-center justify-center">
  {/* The container below is forced to be square using aspect-square */}
  <div className="w-full aspect-square grid grid-cols-2 gap-2">
  {pkg.images.slice(0, 4).map((img: string, i: number) => (
  <div 
    key={i} 
    onClick={() => setSelectedImg(img)}
    className="relative rounded-2xl overflow-hidden shadow-inner cursor-zoom-in group/img bg-slate-200"
  >
    {!loadedImages[img] && <div className="absolute inset-0 bg-slate-200 animate-pulse" />}
    <Image 
      src={img} 
      fill 
      sizes="(max-width: 768px) 40vw, 15vw"
      className={`object-cover group-hover/img:scale-110 transition-all duration-700 ${
        loadedImages[img] ? "opacity-100" : "opacity-0"
      }`} 
      alt={`${pkg.title} view ${i + 1}`}
      onLoad={() => setLoadedImages(prev => ({ ...prev, [img]: true }))}
      
      // --- THE FIX ---
      // Only set priority for the very first image (i === 0) 
      // of the first card to optimize LCP
      priority={i === 0} 
    />
    {/* ... rest of hover overlay */}
  </div>
))}
  </div>
</div>

        {/* 2. Content Section: Optimized for Tablet Readability */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full tracking-widest uppercase border border-emerald-100">
                CODE: {pkg.code}
              </span>
              <div className="flex items-center gap-1.5 text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                <Clock size={14} className="text-blue-500" />
                <span className="text-[11px] font-bold">{pkg.duration}</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-xl lg:text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
              {pkg.title}
            </h2>
            
            {/* Responsive Grid for Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 text-sm p-3 rounded-xl bg-slate-50/50 border border-slate-100/50">
                <MapPin size={16} className="text-blue-600 shrink-0" />
                <span className="text-slate-600 text-xs font-medium"><b className="text-slate-900">Starts:</b> {pkg.origin}</span>
              </div>
              <div className="flex items-center gap-3 text-sm p-3 rounded-xl bg-slate-50/50 border border-slate-100/50">
                <Info size={16} className="text-amber-600 shrink-0" />
                <span className="text-slate-600 text-xs font-medium">Best: Oct - Apr</span>
              </div>
              <div className="col-span-full flex items-start gap-3 p-3 rounded-xl bg-blue-50/30 border border-blue-100/50">
                 <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" />
                 <span className="text-slate-500 font-medium italic text-xs leading-relaxed">{pkg.destination}</span>
              </div>
            </div>
          </div>

          {/* Amenities - Hidden on very small mobile, shown on tablet+ */}
          <div className="flex items-center gap-6 pt-6 mt-6 border-t border-slate-100">
            {[{ icon: Car, label: "Car" }, { icon: Hotel, label: "Luxury" }, { icon: Utensils, label: "Meals" }].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <item.icon size={18} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Action Sidebar: The "Pro" Responsive Fix */}
        <div className="w-full md:w-[200px] lg:w-[260px] p-6 md:p-8 bg-slate-50/80 md:border-l border-t md:border-t-0 border-slate-100 flex flex-col justify-center items-center text-center gap-5">
          <div className="flex flex-row md:flex-col items-center justify-between w-full md:justify-center gap-2">
            <div className="text-left md:text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Per Person</p>
              <div className="flex items-baseline md:justify-center gap-0.5 text-slate-900">
                <span className="text-sm font-black">₹</span>
                <span className="text-3xl font-black tracking-tighter">{pkg.price}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white py-1.5 px-3 rounded-full border border-slate-200 shadow-sm">
              <Sparkles size={12} className="text-emerald-500 animate-pulse" />
              <p className="text-[9px] font-black text-emerald-600 uppercase whitespace-nowrap">Free for Kids</p>
            </div>
          </div>
          
          <div className="flex flex-col w-full gap-3">
            {/* The "Pro" Responsive Button */}
            <button className="relative group/btn overflow-hidden w-full bg-blue-600 text-white py-4 px-6 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-blue-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              <span className="relative flex items-center justify-center gap-2">
                Book Now <ChevronRight size={18} />
              </span>
            </button>
            <Link href={`/tours/assam/${pkg.id}`} className="text-[10px] font-black text-blue-800 hover:text-blue-600 uppercase tracking-[0.2em] transition-colors">
              View Itinerary
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Modal remains the same as previous version */}
      <AnimatePresence>
  {selectedImg && (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImg(null)}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
    >
      <button className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 p-3 rounded-full backdrop-blur-md transition-all z-[110]">
        <X size={24} />
      </button>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. THE PRE-LOADER (Spinner) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
        </div>

        {/* 2. THE ACTUAL IMAGE */}
        <Image 
  src={selectedImg} 
  alt="Preview" 
  fill 
  className="object-contain opacity-0 transition-opacity duration-500"
  quality={75} // Changed from 100 to 75 to match your current config
  priority 
  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
/>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};