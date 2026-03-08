const liveUpdates = [
    { title: "Tawang Monastery", status: "New Booking", color: "bg-blue-500" },
    { title: "Kaziranga Safari", status: "90% Capacity", color: "bg-orange-500" },
    { title: "Majuli Island", status: "Traveler Arrived", color: "bg-emerald-500" },
  ];
  
  export default function LiveUpdates() {
    return (
      <section className="px-6 -mt-12 relative z-30 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liveUpdates.map((update, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Live Update</p>
                <h4 className="font-bold text-slate-900">{update.title}</h4>
              </div>
              <div className={`${update.color} text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse`}>
                {update.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }