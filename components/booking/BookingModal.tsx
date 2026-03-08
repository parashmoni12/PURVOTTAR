"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Calendar, Send } from "lucide-react";
import { useBookingStore } from "@/store/useBookingStore";

export default function BookingModal() {
  const { isModalOpen, closeModal } = useBookingStore();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <button onClick={closeModal} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} />
            </button>
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Plan Your Journey.</h2>
              <p className="text-slate-500 text-sm">Tell us where you want to go and we'll handle the rest.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Destination</label>
                  <div className="relative">
                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <select className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer">
                      <option>Assam</option>
                      <option>Meghalaya</option>
                      <option>Arunachal</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="date" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-4 shadow-xl shadow-emerald-600/20">
                Check Availability <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}