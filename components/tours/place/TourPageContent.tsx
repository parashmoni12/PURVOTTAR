"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, Users, Clock, CheckCircle2, ShieldCheck, Coffee, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

/* --- 1. ICONS --- */
const FlagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M5 21V3L19 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 3V21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const TrekIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M12 7L18 17H6L12 7Z" fill="currentColor" /><rect x="11" y="17" width="2" height="5" fill="currentColor" />
  </svg>
);
const LunchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M18 8C18 12 14 15 12 15C10 15 6 12 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const CampIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M12 3L4 12V21H20V12L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fill="currentColor" />
  </svg>
);

/* --- 2. DATA --- */
const steps = [
  { time: "08:00 AM", title: "Day 1: Base Camp", desc: "Gear check and morning briefing.", isNight: false, icon: <FlagIcon /> },
  { time: "11:00 AM", title: "The Deep Trek", desc: "Navigate through the dense foliage.", isNight: false, icon: <TrekIcon /> },
  { time: "01:30 PM", title: "Wild Harvest Lunch", desc: "Authentic local flavors by the river.", isNight: false, icon: <LunchIcon /> },
  { time: "07:00 PM", title: "Night Settlement", desc: "Bonfire stories under the stars.", isNight: true, icon: <CampIcon /> },
  { time: "11:00 PM", title: "Stargazing Sleep", desc: "Rest and recharge for Day 2.", isNight: true, icon: <MoonIcon /> },
  { time: "06:00 AM", title: "Day 2: Sunrise Hike", desc: "The world wakes up in gold.", isNight: false, icon: <FlagIcon /> },
  { time: "10:00 AM", title: "Final Summit", desc: "Reach the peak and end your quest.", isNight: false, icon: <FlagIcon /> }
];

/* --- 3. MAIN COMPONENT --- */
export default function TourPageContent({ tour }: { tour: any }) {
  const router = useRouter();
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<any[]>([]);
  const [imgIndex, setImgIndex] = useState(0);

  const heroImages = [
   
    "/3.jpg",
    "/1.jpeg"
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    setStars([...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    })));

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgColor = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.6, 0.7, 1], ["#fafaf9", "#fafaf9", "#0c0a09", "#0c0a09", "#fafaf9", "#fafaf9"]);
  const textColor = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.6, 0.7, 1], ["#1c1917", "#1c1917", "#fafaf9", "#fafaf9", "#1c1917", "#1c1917"]);
  const starOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.6, 0.65], [0, 1, 1, 0]);
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="min-h-screen transition-colors duration-700 font-sans selection:bg-emerald-500 overflow-x-hidden">
      
      {/* NAV (Back button removed) */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-4 md:py-6 flex justify-end items-center mix-blend-difference text-white">
        <h2 className="text-xs md:text-sm font-black tracking-tighter uppercase">ExploreIndia.</h2>
      </nav>

      {/* 1. HERO SECTION */}
     {/* 1. HERO SECTION */}
     <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-stone-950"> {/* Solid Dark Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={imgIndex}
              src={heroImages[imgIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "linear" }} // Smoother linear cross-fade
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </AnimatePresence>
        </div>

        {/* ULTRA-THIN BOTTOM GRADIENT - No top shadows */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#fafaf9] via-transparent to-transparent via-[47%]" />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-6">
        <motion.div 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  className="space-y-8 flex flex-col items-center"
>
  {/* Ultra-Spaced Premium Tag */}
  <span className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 text-[8px] font-black uppercase tracking-[0.6em] rounded-full">
    FEATURED EXPERIENCE
  </span>

  <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-[1.2] text-center max-w-6xl px-4 flex flex-wrap justify-center items-center gap-y-2">
    {tour.title.split(' ').map((word: string, i: number, arr: string[]) => {
      const isLastTwo = i >= arr.length - 2;
      
      return (
        <span 
          key={i} 
          className={isLastTwo 
            ? "font-serif italic font-bold capitalize tracking-widest px-3 text-white/90 drop-shadow-md border-b border-white/20 pb-1 mx-1" 
            : "text-white inline-block mx-2 tracking-[0.35em] font-black drop-shadow-2xl"
          }
        >
          {word}
        </span>
      );
    })}
  </h1>

  {/* Thin Minimalist Divider */}
  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-4" />
</motion.div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 md:-mt-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            {/* 2. INFO BAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100">
              <StatItem label="Location" value={tour.location} icon={<MapPin size={14} className="text-emerald-500"/>} />
              <StatItem label="Duration" value={tour.duration} icon={<Clock size={14} className="text-emerald-500"/>} />
              <StatItem label="Group Size" value="10 Max" icon={<Users size={14} className="text-emerald-500"/>} />
              <StatItem label="Availability" value="All Year" icon={<CalendarDays size={14} className="text-emerald-500"/>} />
            </div>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-stone-900">The Journey <span className="text-emerald-500">Overview.</span></h2>
              <p className="text-stone-500 text-base md:text-lg leading-relaxed font-light">Immerse yourself in the authentic spirit of Northeast India with our expert-led curation.</p>
            </section>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <section className="bg-emerald-50/50 p-6 md:p-8 rounded-3xl border border-emerald-100">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-stone-900"><ShieldCheck className="text-emerald-600" /> What’s Included</h3>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-stone-600">
                  {["Professional local tour guide", "Comfortable private transport", "All Entry tickets & permits", "Authentic Local cuisine tasting"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5" /> {item}</li>
                  ))}
                </ul>
              </section>
              <section className="relative bg-stone-950 p-8 rounded-3xl text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px]" />
                <h3 className="relative z-10 text-lg font-bold mb-6 flex items-center gap-2">
                  <Coffee className="text-emerald-400" /> Travel Plan
                </h3>
                <div className="relative z-10 space-y-6 border-l border-white/10 pl-6 ml-2">
                  <div>
                    <p className="text-[10px] uppercase text-emerald-400 font-bold tracking-widest">Morning</p>
                    <p className="text-sm text-stone-300 font-light">Sightseeing & Heritage walks</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-emerald-400 font-bold tracking-widest">Afternoon</p>
                    <p className="text-sm text-stone-300 font-light">Local food & Craft immersion</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* 3. UPDATED LIGHT BOOKING CARD */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] border border-stone-100 lg:sticky lg:top-28">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <Sparkles size={12} className="text-emerald-500" /> Expedition Cost
                  </p>
                  <div className="flex items-baseline gap-1">
                     <span className="text-4xl md:text-5xl font-black tracking-tighter text-stone-900">
                       {tour.price.split('/')[0]}
                     </span>
                     <span className="text-stone-400 text-xs font-bold uppercase">/ Person</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      <span>Base Fare</span>
                      <span className="text-stone-900">{tour.price.split('/')[0]}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      <span>Service Fee</span>
                      <span className="text-emerald-600">Included</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => router.push('/checkout/akdjk_djd')}
                    className="w-full bg-stone-950 hover:bg-emerald-500 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] transition-all duration-300 shadow-xl shadow-stone-950/10"
                  >
                    Secure Your Seat
                  </button>
                  
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[9px] text-stone-400 uppercase tracking-widest font-bold text-center">Instant Booking Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. TIMELINE SECTION */}
        <section ref={containerRef} className="mt-20 md:mt-32 pb-40 md:pb-64 relative">
          {mounted && (
            <motion.div style={{ opacity: starOpacity }} className="absolute inset-0 pointer-events-none overflow-hidden">
              {stars.map((star, i) => (
                <motion.div key={i} animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: star.duration, repeat: Infinity }}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full" style={{ top: star.top, left: star.left }} />
              ))}
            </motion.div>
          )}

          <div className="text-center mb-12 md:mb-20">
            <motion.h2 style={{ color: textColor }} className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Your Quest <br /> <span className="text-emerald-500 italic font-light tracking-normal">Path.</span>
            </motion.h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-stone-200/20 -translate-x-1/2 rounded-full" />
            <motion.div style={{ scaleY, originY: 0 }} className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-500 -translate-x-1/2 rounded-full z-10 shadow-[0_0_15px_#10b981]" />

            <div className="space-y-16 md:space-y-24 relative">
              {steps.map((step, index) => (
                <motion.div key={index} className={`flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-700 ${step.isNight ? 'bg-stone-900/40 border-stone-800 backdrop-blur-xl text-white' : 'bg-white border-stone-100 text-stone-900 shadow-sm'}`}>
                      <span className="text-emerald-500 font-mono text-[9px] md:text-[10px] font-bold tracking-widest uppercase block mb-1">{step.time}</span>
                      <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter">{step.title}</h4>
                      <p className={`${step.isNight ? 'text-stone-400' : 'text-stone-500'} text-xs md:text-sm mt-2 font-light`}>{step.desc}</p>
                    </div>
                  </motion.div>

                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border-4 border-[#fafaf9] flex items-center justify-center relative rotate-45 overflow-hidden shadow-xl group">
                      <motion.div initial={{ y: "100%" }} whileInView={{ y: "0%" }} className="absolute inset-0 bg-emerald-500" transition={{ duration: 0.6 }} />
                      <div className="-rotate-45 z-10 text-stone-400 group-hover:text-white transition-colors duration-500">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

function StatItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="space-y-0.5 md:space-y-1">
      <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-400 font-bold">{label}</p>
      <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold text-stone-900">{icon} {value}</div>
    </div>
  );
}