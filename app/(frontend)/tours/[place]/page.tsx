import { Hero } from "@/components/tours/Hero";
import { SearchBar } from "@/components/tours/SearchBar";
import { FilterSidebar } from "@/components/tours/FilterSidebar";
import { PackageCard } from "@/components/tours/PackageCard";

// Pro: Keep data in a variable at the top of the Page for easy updates
const assamPackages = [
  {
    id: 1,
    title: "Wild Wonders: Kaziranga Safari",
    duration: "3 Nights / 4 Days",
    origin: "Guwahati",
    departure: "Daily",
    code: "AS-KAZI-01",
    destination: "Guwahati / Kaziranga / Orchid Park",
    price: "18,500",
    images: [
      "/2.png",
      "/3.jpg",
      "/1.jpeg",
      "/ziro.jpg",
    ],
  },
  {
    id: 2,
    title: "Cultural Heart of Majuli & Sivasagar",
    duration: "5 Nights / 6 Days",
    origin: "Jorhat",
    departure: "15.10.2025",
    code: "AS-MAJ-05",
    destination: "Jorhat / Majuli Island / Sivasagar Temples",
    price: "28,900",
    images: [
      "/majuli.jpg",
      "/m1.webp",
      "/sivasagar.avif",
      "/ziro.jpg",
    ],
  },
];

export default function AssamTours() {
  return (
    <div className="bg-[#fcfdfd] min-h-screen">
      <Hero />
      <SearchBar />

      <main className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-8 px-4 md:px-6 mt-12 md:mt-16 pb-20">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Package List Container */}
        <div className="col-span-12 lg:col-span-9 space-y-6 md:space-y-8">
          {assamPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </main>

    </div>
  );
}