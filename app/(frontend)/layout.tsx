import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <>
    
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BookingModal /> {/* Modal is globally available but hidden by default */}
            
         </>
       
    
  );
}