"use client";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 -mt-12 md:-mt-20 relative z-20">
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-white p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-end">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 text-blue-600" size={18} />
              <input type="text" placeholder="Where to?" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 transition-all text-sm font-medium" />
            </div>
          </div>
          
          {/* Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-3.5 text-blue-600" size={18} />
              <input type="date" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 transition-all text-sm font-medium" />
            </div>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">Package Type</label>
            <div className="relative">
               <select className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 appearance-none cursor-pointer text-sm font-medium">
                <option>All Packages</option>
                <option>Wildlife Safari</option>
                <option>Heritage & Tea</option>
                <option>River Cruise</option>
              </select>
              <div className="absolute right-4 top-4 pointer-events-none text-slate-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-black font-black py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 text-sm uppercase tracking-wider">
            <Search size={20} strokeWidth={3} /> Search Tours
          </button>
        </div>
      </motion.div>
    </div>
  );
};