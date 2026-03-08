"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, 
  Trash2, 
  ShieldCheck, 
  CreditCard, 
  Mail, 
  Phone, 
  Users, 
  CalendarClock,
  ChevronRight,
  Info,
  Banknote,
  CheckCircle2
} from "lucide-react";

// Component for Individual Traveler Form
const TravelerForm = ({ index, traveler, handleChange, onRemove, canRemove }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm relative group"
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-slate-800 flex items-center gap-2">
        <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">
          {index + 1}
        </div>
        Traveler Details
      </h3>
      {canRemove && (
        <button 
          onClick={() => onRemove(index)}
          className="text-slate-400 hover:text-red-500 transition-colors p-2 -mr-2"
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Full Name</label>
        <input
          placeholder="As per Passport/ID"
          value={traveler.name}
          onChange={(e) => handleChange(index, "name", e.target.value)}
          className="w-full border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base md:text-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Age</label>
          <input
            type="number"
            placeholder="Age"
            value={traveler.age}
            onChange={(e) => handleChange(index, "age", e.target.value)}
            className="w-full border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base md:text-sm"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Gender</label>
          <div className="relative">
            <select
              value={traveler.gender}
              onChange={(e) => handleChange(index, "gender", e.target.value)}
              className="w-full border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none bg-white text-base md:text-sm"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronRight size={14} className="rotate-90" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1 md:col-span-2">
        <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">ID Proof Number (Aadhar/Passport)</label>
        <input
          placeholder="Enter ID Number"
          value={traveler.id}
          onChange={(e) => handleChange(index, "id", e.target.value)}
          className="w-full border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base md:text-sm"
        />
      </div>
    </div>
    
    {traveler.age !== "" && parseInt(traveler.age) < 6 && (
      <div className="mt-3 flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-xl text-xs font-bold border border-green-100">
        <Info size={14} className="shrink-0" /> Child Benefit: No charge for kids under 6.
      </div>
    )}
  </motion.div>
);

export default function CheckoutPage() {
  const pricePerPerson = 2500;
  
  const [travellers, setTravellers] = useState([{ name: "", age: "", gender: "", id: "" }]);
  const [contact, setContact] = useState({ email: "", phone: "" });
  const [slot, setSlot] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [isProcessing, setIsProcessing] = useState(false);

  const payableTravelers = travellers.filter(t => t.age === "" || parseInt(t.age) >= 6).length;
  const total = payableTravelers * pricePerPerson;

  const addTraveller = () => setTravellers([...travellers, { name: "", age: "", gender: "", id: "" }]);
  const removeTraveller = (index: number) => setTravellers(travellers.filter((_, i) => i !== index));
  
  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...travellers];
    (updated[index] as any)[field] = value;
    setTravellers(updated);
  };

  const isValid = () => {
    const isContactValid = contact.email.trim() !== "" && 
                           contact.email.includes("@") && 
                           contact.phone.trim().length >= 10;
    
    const areTravelersValid = travellers.every(t => 
      t.name.trim() !== "" && 
      t.age.trim() !== "" && 
      t.gender !== "" && 
      t.id.trim() !== ""
    );

    const isSlotValid = slot !== "";

    return isContactValid && areTravelersValid && isSlotValid;
  };

  const handleBooking = async () => {
    if (!isValid()) return;
    setIsProcessing(true);
    
    const bookingPayload = {
      contact,
      travellers,
      slot,
      total,
      paymentMethod,
      status: paymentMethod === 'online' ? 'Confirmed' : 'Pending Verification'
    };

    setTimeout(() => {
      console.log("Final Submission:", bookingPayload);
      alert(paymentMethod === 'online' 
        ? "Redirecting to Secure Payment Gateway..." 
        : "Booking Request Sent! Our team will call you shortly.");
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Step Indicator - Hidden on very small screens or scrollable */}
        <div className="flex items-center gap-4 mb-8 text-[11px] md:text-sm font-bold text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap pb-2 uppercase tracking-widest">
          <span className="text-blue-600 flex items-center gap-2">1. Traveler <ChevronRight size={14}/></span>
          <span className="flex items-center gap-2">2. Verification <ChevronRight size={14}/></span>
          <span>3. Approved</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pl-6">
          
          <div className="lg:col-span-8 space-y-6 md:space-y-8 order-1">
            <header>
              <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
                Confirm Your Spot
              </h1>
              <p className="text-slate-500 mt-1 text-sm md:text-base">Free cancellation up to 24 hours before the journey.</p>
            </header>

            {/* Contact Section */}
            <section className="bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Mail size={18}/></div>
                <h2 className="font-bold text-lg md:text-xl text-slate-800">Contact Details</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={contact.email}
                  className="w-full border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-base md:text-sm"
                  onChange={(e) => setContact({...contact, email: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={contact.phone}
                  className="w-full border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-base md:text-sm"
                  onChange={(e) => setContact({...contact, phone: e.target.value})}
                />
              </div>
            </section>

            {/* Traveler Info Section */}
            <section className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <Users size={20} className="text-blue-600"/> Traveler Information
                </h2>
              </div>
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {travellers.map((t, i) => (
                    <TravelerForm
                      key={i}
                      index={i}
                      traveler={t}
                      handleChange={handleChange}
                      onRemove={removeTraveller}
                      canRemove={travellers.length > 1}
                    />
                  ))}
                </AnimatePresence>
              </div>
              <button 
                onClick={addTraveller} 
                className="w-full md:w-auto flex items-center justify-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 px-8 py-4 rounded-2xl hover:bg-blue-100 transition-all border border-blue-100"
              >
                <UserPlus size={18} /> Add More People
              </button>
            </section>

            {/* Journey Slot Section */}
            <section className="bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5">
              <h2 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <CalendarClock size={20} className="text-purple-600"/> Journey Slot
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Morning Tour', 'Afternoon Tour', 'Evening Tour'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSlot(s)}
                    className={`p-4 rounded-2xl border-2 font-bold transition-all text-sm text-center ${
                      slot === s ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-100 text-slate-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 order-2 mt-4 lg:mt-0">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
              <div className="p-6 bg-slate-900 text-white">
                <h2 className="font-bold text-lg">Booking Summary</h2>
                <p className="text-slate-400 text-xs">Assam Heritage & Wildlife Tour</p>
              </div>

              <div className="p-5 md:p-6 space-y-6">
                <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
                  <button 
                    onClick={() => setPaymentMethod('online')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all ${paymentMethod === 'online' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}
                  >
                    <CreditCard size={14}/> Pay Now
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('arrival')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all ${paymentMethod === 'arrival' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500"}`}
                  >
                    <Banknote size={14}/> Pay Later
                  </button>
                </div>

                <div className={`p-4 rounded-2xl text-[11px] md:text-xs font-medium leading-relaxed ${paymentMethod === 'online' ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"}`}>
                  {paymentMethod === 'online' ? (
                    <p className="flex items-start gap-2">
                      <ShieldCheck size={16} className="shrink-0"/>
                      Instant Approval! Pay now to get your confirmed journey tickets immediately.
                    </p>
                  ) : (
                    <p className="flex items-start gap-2">
                      <Info size={16} className="shrink-0"/>
                      Choose "Pay Later" to book without payment. Our team will verify traveler IDs and call you within 2 hours.
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Travelers ({payableTravelers} Adults)</span>
                    <span className="font-bold">₹{total}</span>
                  </div>
                  {travellers.length > payableTravelers && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Child (Under 6)</span>
                      <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-black border-t border-slate-100 pt-5">
                    <span>Total Amount</span>
                    <span className="text-blue-600">₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  disabled={!isValid() || isProcessing}
                  className={`w-full py-4.5 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-sm
                    ${isValid() && !isProcessing
                      ? (paymentMethod === 'online' ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200" : "bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200") 
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"}
                    text-white py-4
                  `}
                >
                  {isProcessing ? "Processing..." : (
                    paymentMethod === 'online' ? "Pay & Confirm Journey" : "Request Approval"
                  )}
                  {!isProcessing && <ChevronRight size={18}/>}
                </button>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <CheckCircle2 size={12} className="text-emerald-500"/> Verified Tourism Operator
                  </div>
                  <div className="flex gap-5 opacity-40 grayscale pb-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Paypal" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/d1/Visa_2021.svg" className="h-4" alt="Visa" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}