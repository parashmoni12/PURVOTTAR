"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { useBookingStore } from "@/store/useBookingStore";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Destinations", 
    href: "#", 
    submenu: [
      { name: "Assam", href: "/tours/assam" },
      { name: "Arunachal", href: "/tours/arunachal" },
      { name: "Meghalaya", href: "/tours/meghalaya" },
      { name: "Sikkim", href: "/tours/sikkim" }
    ] 
  },
  { name: "Packages", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const openModal = useBookingStore((state) => state.openModal);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${
      isScrolled 
      ? "bg-white border-b border-slate-200 shadow-sm py-3" 
      : "bg-gradient-to-b from-black/60 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className={`text-lg font-black tracking-tighter transition-colors ${
          isScrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
        }`}>
          PURVOTTAR<span className="text-emerald-500">.</span>
        </div>
        
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              <a 
                href={link.href} 
                className={`text-[11px] font-black uppercase tracking-widest transition-colors flex items-center gap-1.5 ${
                  isScrolled ? "text-slate-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </a>

              {link.submenu && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white border border-slate-100 shadow-xl rounded-xl p-2 min-w-[160px]">
                    {link.submenu.map((sub) => (
                      <a 
                        key={sub.name} 
                        href={sub.href} 
                        className="block px-4 py-2 text-[10px] font-black uppercase tracking-tight text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={openModal} 
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
          >
            Book Trip
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1 z-[110]">
          {mobileMenuOpen ? <X className="text-slate-900" size={24} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            className="fixed inset-0 h-screen bg-white z-[105] md:hidden flex flex-col px-8 pt-24"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 last:border-0">
                  <div className="flex items-center justify-between py-4">
                    <a 
                      href={link.href} 
                      onClick={() => !link.submenu && setMobileMenuOpen(false)} 
                      className="text-xs font-black uppercase tracking-widest text-slate-900"
                    >
                      {link.name}
                    </a>
                    {link.submenu && (
                      <button 
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)} 
                        className="p-2 bg-slate-50 rounded-lg text-slate-400"
                      >
                        <Plus size={16} className={`${mobileSubmenuOpen ? "rotate-45" : ""} transition-transform`} />
                      </button>
                    )}
                  </div>
                  
                  {link.submenu && mobileSubmenuOpen && (
                    <motion.div 
                      initial={{ height: 0 }} 
                      animate={{ height: "auto" }} 
                      className="overflow-hidden bg-slate-50/50 rounded-xl mb-4 px-4"
                    >
                      {link.submenu.map((sub) => (
                        <a 
                          key={sub.name} 
                          href={sub.href} 
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-3 text-[10px] font-black uppercase text-slate-500 hover:text-emerald-600"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <button 
                onClick={() => { setMobileMenuOpen(false); openModal(); }} 
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest mb-6 shadow-xl"
              >
                Check Availability
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}