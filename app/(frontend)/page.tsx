// NO "use client" here!
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PopularSpots from "@/components/home/PopularSpots";
import HandpickedJourneys from "@/components/home/HandpickedJourneys";
import FaqSection from "@/components/home/FaqSection";
import LiveUpdates from "@/components/home/LiveUpdates";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans antialiased text-slate-900">
      <Hero />
      <LiveUpdates />
      <Services />
      <PopularSpots />
      <HandpickedJourneys />
      <FaqSection />
    </div>
  );
}