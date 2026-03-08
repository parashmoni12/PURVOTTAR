// app/tour/[id]/page.tsx
import TourPageContent from "@/components/tours/place/TourPageContent";

const tours = [
  { title: "Adventure Nature Trip", desc: "Explore ancient temples and vibrant markets.", price: "₹2,500/person", duration: "4-5 Hours", location: "Guwahati", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600" },
  { title: "Cultural Village Experience", desc: "Traditional dance and food in Majuli.", price: "₹4,500/person", duration: "Full Day", location: "Majuli", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600" },
  { title: "Adventure Nature Trip", desc: "Trek the root bridges and clouds of Meghalaya.", price: "₹7,000/person", duration: "2 Days", location: "Meghalaya", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600" },
];

// 1. Params ko Promise define karein
interface PageProps {
  params: Promise<{ id: string }>;
}

// 2. Function ko 'async' banayein
export default async function TourDetailsPage({ params }: PageProps) {
  
  // 3. Params ko 'await' karke destructure karein
  const { id } = await params;

  // 4. Safely parse karein aur data fetch karein
  const tourIndex = parseInt(id) || 0;
  const tour = tours[tourIndex] || tours[0];

  return <TourPageContent tour={tour} />;
}