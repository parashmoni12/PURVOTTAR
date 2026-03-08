"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function PopularSpots() {
  const router = useRouter();

  return (
    <section className="py-4 px-6 max-w-7xl mx-auto relative">
      {/* Header: Left-aligned on Desktop, Centered on Mobile */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Popular <span className="text-emerald-500">Spots</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            Handpicked destinations for your escape.
          </p>
        </div>

        {/* View All: Shown on Desktop (Right Side), Hidden on Mobile */}
        <motion.button 
          whileHover={{ x: 5 }}
          onClick={() => router.push('/tours/meghalaya')}
          className="hidden md:flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          View All Spots <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Grid Structure (Original Order & Layout) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 h-[550px] md:h-[600px]">
        {/* Spot 1: Majuli (Large Box) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} 
          onClick={() => router.push('/tours/assam/')} 
          className="col-span-2 row-span-1 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg border-2 border-emerald-50"
        >
          <img src="/m1.webp" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Majuli"/>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8">
            <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">Featured Destination</span>
            <h3 className="text-white font-black text-2xl md:text-4xl leading-none">Majuli Island</h3>
          </div>
          <motion.div className="absolute bottom-8 right-8 bg-emerald-500 text-white p-4 rounded-2xl opacity-0 md:group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={24} strokeWidth={3} />
          </motion.div>
        </motion.div>
        
        {/* Spot 2: Cherrapunji */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} 
          onClick={() => router.push('/tours/meghalaya')} 
          className="col-span-2 md:col-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg border-2 border-blue-50"
        >
          <img src="/s1.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Cherrapunji"/>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6">
            <span className="text-emerald-400 font-black text-[9px] uppercase tracking-[0.2em] mb-1 block">Adventure</span>
            <h3 className="text-white font-black text-xl md:text-2xl">Cherrapunji</h3>
          </div>
        </motion.div>

        {/* Spot 3: Ziro Valley */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} 
          onClick={() => router.push('/tours/meghalaya')} 
          className="col-span-1 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg border-2 border-orange-50"
        >
          <img src="/ziro.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Ziro"/>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 text-white font-black text-xs md:text-sm">Ziro Valley</div>
        </motion.div>

        {/* Spot 4: Umngot River */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} 
          onClick={() => router.push('/tours/meghalaya')} 
          className="col-span-1 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg border-2 border-teal-50"
        >
          <img src="/sivasagar.avif" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Umngot"/>
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 text-white font-black text-xs md:text-sm">Sivasagar</div>
        </motion.div>

        
      </div>

       <div className="flex justify-end mt-6">
                <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => router.push('/tours/meghalaya')}
                    className="flex md:hidden items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                    View All Spots
                    <ArrowRight size={18} className="transition-transform" />
                </motion.button>
        </div>
    </section>
  );
}