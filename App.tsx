import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import { FlightsPage } from "./components/pages/FlightsPage";
import { HotelsPage } from "./components/pages/HotelsPage";
import { BookingsPage } from "./components/pages/BookingsPage";
import { AboutPage } from "./components/pages/AboutPage";
import { BookingModal } from "./components/BookingModal";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

// Mock flight data for booking modal
const mockFlight = {
  airline: "Garuda Indonesia",
  from: "CGK",
  to: "DPS",
  departureTime: "07:30",
  arrivalTime: "10:45",
  date: "10 Agustus 2025",
  price: 1250000,
  class: "Economy"
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'flights':
        return <FlightsPage />;
      case 'hotels':
        return <HotelsPage />;
      case 'bookings':
        return <BookingsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        flight={mockFlight}
      />
    </div>
  );
}