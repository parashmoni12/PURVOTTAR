"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is the best time to visit?", a: "October to April offers the best weather for trekking and sightseeing across all states." },
  { q: "Do you provide customized packages?", a: "Yes, all our journeys can be tailored to your specific interests and pace." },
  { q: "Are permits included in the price?", a: "Yes, we handle all Inner Line Permits (ILP) and entry fees within the package cost." }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">Travel FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-slate-100">
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center py-6 text-left">
              <span className="text-sm font-black uppercase tracking-widest text-slate-800">{faq.q}</span>
              {openFaq === i ? <Minus className="text-emerald-500" /> : <Plus className="text-slate-400" />}
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="text-slate-500 pb-6 text-sm font-medium leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}