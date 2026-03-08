// app/loading.tsx
export default function GlobalLoading() {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
        {/* Centered Logo or Icon */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Ring */}
          <div className="absolute h-24 w-24 animate-ping rounded-full border border-emerald-500/20" />
          
          {/* Inner Spinning Border */}
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-transparent border-t-emerald-500" />
          
          {/* Static Center Dot */}
          <div className="absolute h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
        </div>
  
        {/* Luxury Branding Text */}
        <div className="mt-8 flex flex-col items-center space-y-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-emerald-500/80">
          PURVOTTAR
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        </div>
      </div>
    );
  }