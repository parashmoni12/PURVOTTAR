import { Users, Zap, Home } from "lucide-react";

const services = [
  { icon: <Users size={24} />, title: "Native Experts", desc: "Our guides are local tribe members who know the secret ancestral trails.", tag: "Authentic" },
  { icon: <Zap size={24} />, title: "Rugged Mobility", desc: "Custom 4x4 vehicles designed for the high-altitude passes of the Himalayas.", tag: "Safety" },
  { icon: <Home size={24} />, title: "Ancestral Stays", desc: "Sleep in traditional bamboo huts or luxury hidden tea estate bungalows.", tag: "Comfort" },
];

export default function Services() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group relative p-10 rounded-[3rem] bg-slate-50 hover:bg-white border border-transparent hover:border-emerald-100 hover:shadow-2xl transition-all duration-500">
            <div className="mb-6 w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              {s.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">{s.tag}</span>
            <h3 className="text-2xl font-black mt-2 mb-4">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}