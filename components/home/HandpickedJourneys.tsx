"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useBookingStore } from "@/store/useBookingStore";

const tours = [
  { id: "1", title: "Kaziranga Safari", tag: "Wildlife", price: "8,900", img: "/2.png" },
  { id: "2", title: "Majuli", tag: "Cultural", price: "12,500", img: "/majuli.jpg" },
  { id: "3", title: "Living Root Bridge", tag: "Adventure", price: "5,200", img: "/adventure.jpg" },
];

export default function HandpickedJourneys() {
  const openModal = useBookingStore((state) => state.openModal);

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-4 md:px-6">
      {/* Header - Scaled for Tablet */}
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter leading-tight">
          Handpicked <span className="text-emerald-600">Journeys</span>
        </h2>
        <div className="w-16 md:w-20 h-1 bg-emerald-500 mx-auto mt-3 md:mt-4 rounded-full" />
      </div>

      {/* Grid - Set to 3 columns from Tablet (md) upwards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-10">
        {tours.map((tour, i) => (
          <motion.div 
            key={tour.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }} 
            className="bg-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col group border border-slate-100"
          >
            {/* Image Container - Height adjusted for Tablet (md) */}
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden">
              <img 
                src={tour.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={tour.title} 
              />
              
              <div className="absolute top-4 left-4 md:top-5 md:left-5 lg:top-8 lg:left-8 bg-white/90 backdrop-blur-md text-emerald-600 text-[8px] lg:text-[10px] font-black px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {tour.tag}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 lg:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-xl md:text-lg lg:text-3xl font-black text-white">{tour.title}</h3>
              </div>
            </div>

            {/* Content Area - Padding adjusted for Tablet */}
            <div className="p-5 lg:p-10 flex flex-col justify-between flex-1">
              <p className="text-slate-500 text-[13px] lg:text-sm mb-4 lg:mb-8 leading-relaxed font-medium italic">
                "Experience the hidden magic of {tour.title.split(' ')[0]} with our native guides."
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <span className="block text-[8px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Pricing From
                  </span>
                  <span className="text-xl lg:text-3xl font-black text-slate-900">
                    ₹{tour.price}
                  </span>
                </div>

                <button 
                  onClick={openModal} 
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:rotate-[-45deg] transition-all shadow-xl active:scale-95"
                >
                  <ArrowRight size={18} className="lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}