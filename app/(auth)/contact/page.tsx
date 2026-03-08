"use client";
import { useState } from "react"; // Added for interactivity
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  // State to track selected interest
  const [selectedInterest, setSelectedInterest] = useState("Trekking");

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1a1a1a] selection:bg-emerald-100">
      {/* Subtle Texture/Pattern Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }} />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-8 bg-emerald-500" />
                <h2 className="text-emerald-600 font-black uppercase tracking-[0.5em] text-[10px]">
                  Concierge Desk
                </h2>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight text-[#1a1a1a]">
                Let's Plan Your <br />
                <span className="font-serif italic font-light text-emerald-600 lowercase tracking-normal">Escape.</span>
              </h1>
              
              <p className="text-[#4a4a4a] max-w-md text-lg leading-relaxed font-light text-justify">
              Discover the soul of the North East through curated escapes, where every plateau, valley, and village is handled with obsessive detail.
              </p>
            </div>

            <div className="mt-16 space-y-10">
              {[
                { label: "Direct Mail", value: "mahantaenterprise111@gmail.com" },
                { label: "WhatsApp", value: "+91 9101777031" },
                { label: "Headquarters", value: "Guwahati, Assam" },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-emerald-600/60 font-bold mb-1">{item.label}</p>
                  <p className="text-xl font-medium text-[#1a1a1a] group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                    {item.value} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Clean "Floating Card" Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#e5e5e0] rounded-[2.5rem] overflow-hidden"
          >
            <div className="p-8 md:p-14 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-emerald-600 font-black block transition-colors group-focus-within:text-emerald-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-transparent border-b border-[#e5e5e0] pb-3 text-sm font-medium outline-none focus:border-emerald-500 transition-all placeholder:text-black/5 tracking-widest" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[#8a8a8a] font-black block transition-colors group-focus-within:text-emerald-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="YOUR@EMAIL.COM"
                    className="w-full bg-transparent border-b border-[#e5e5e0] pb-3 text-sm font-medium outline-none focus:border-emerald-500 transition-all placeholder:text-black/5 tracking-widest" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-[#8a8a8a] font-black block">Select Interest</label>
                <div className="flex flex-wrap gap-3">
                  {['Trekking', 'Culture', 'Wildlife'].map((chip) => {
                    const isActive = selectedInterest === chip;
                    return (
                      <button 
                        key={chip} 
                        type="button" 
                        onClick={() => setSelectedInterest(chip)}
                        className={`py-3 px-8 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                          isActive 
                            ? "bg-[#1a1a1a] border-[#1a1a1a] text-white shadow-xl shadow-black/20 scale-105" 
                            : "bg-transparent border-[#e5e5e0] text-[#8a8a8a] hover:border-emerald-500 hover:text-emerald-600"
                        }`}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-[#8a8a8a] font-black block">Message</label>
                <textarea 
                  rows={2} 
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent border-b border-[#e5e5e0] pb-2 text-sm font-serif italic outline-none focus:border-emerald-500 transition-all resize-none placeholder:not-italic placeholder:text-black/5" 
                />
              </div>

              <button className="relative w-full group overflow-hidden rounded-full py-6 bg-[#1a1a1a] text-white transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] active:scale-95">
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-3">
                  Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}