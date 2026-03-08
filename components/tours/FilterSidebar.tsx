import { Filter, ChevronRight } from "lucide-react";

export const FilterSidebar = () => {
  const regions = ['Upper Assam', 'Guwahati Central', 'Barak Valley', 'Kaziranga Zone'];

  return (
    <aside className="hidden lg:block col-span-3">
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 sticky top-10">
        <h3 className="font-black text-slate-800 text-lg mb-8 flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Filter size={20} className="text-blue-600" />
          </div>
          Filter Results
        </h3>

        <div className="space-y-8">
          {/* Region Section */}
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Popular Regions</p>
            <div className="space-y-3">
              {regions.map((region) => (
                <label key={region} className="group flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 transition-all" />
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                      {region}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </label>
              ))}
            </div>
          </div>

          {/* Pricing Placeholder */}
          <div className="pt-6 border-t border-slate-50">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Budget Range</p>
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full w-2/3 bg-blue-600" />
            </div>
            <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-500">
               <span>₹10,000</span>
               <span>₹50,000+</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};