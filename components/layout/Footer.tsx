import { CreditCard, Globe, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="text-2xl font-black tracking-tighter mb-4 uppercase text-white">
              PURVOTTAR<span className="text-emerald-500">.</span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
              Connecting you to the roots of Northeast India. Discover hidden gems and authentic experiences.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300">
                <Phone size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300">
                <Globe size={18} />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-200">States</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>
                <Link href="#" className="hover:text-emerald-400 hover:pl-2 transition-all duration-300">Assam</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 hover:pl-2 transition-all duration-300">Meghalaya</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 hover:pl-2 transition-all duration-300">Arunachal</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-200">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>
                <Link href="#" className="hover:text-emerald-400 hover:pl-2 transition-all duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 hover:pl-2 transition-all duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Trust/Secure Section */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-200">Secure</h4>
            <div className="flex gap-4 text-slate-500">
              <CreditCard size={28} className="hover:text-emerald-500 transition-colors" />
              <ShieldCheck size={28} className="hover:text-emerald-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-xs font-medium uppercase tracking-widest text-slate-500">
          <p>© 2026 Purvottar Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}