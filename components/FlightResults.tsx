import { FlightCard } from "./FlightCard";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Filter, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";

const flights = [
  {
    airline: "Garuda Indonesia",
    logo: "/garuda-logo.png",
    from: "CGK",
    to: "DPS",
    departureTime: "07:30",
    arrivalTime: "10:45",
    duration: "2j 15m",
    price: 1250000,
    originalPrice: 1500000,
    class: "Economy",
    facilities: ["wifi", "meal"]
  },
  {
    airline: "Lion Air",
    logo: "/lion-logo.png",
    from: "CGK",
    to: "DPS",
    departureTime: "09:15",
    arrivalTime: "12:30",
    duration: "2j 15m",
    price: 950000,
    class: "Economy",
    facilities: ["wifi"]
  },
  {
    airline: "Citilink",
    logo: "/citilink-logo.png",
    from: "CGK",
    to: "DPS",
    departureTime: "13:20",
    arrivalTime: "16:35",
    duration: "2j 15m",
    price: 850000,
    originalPrice: 1100000,
    class: "Economy",
    facilities: ["meal"]
  },
  {
    airline: "Batik Air",
    logo: "/batik-logo.png",
    from: "CGK",
    to: "DPS",
    departureTime: "15:45",
    arrivalTime: "19:00",
    duration: "2j 15m",
    price: 1100000,
    class: "Economy",
    facilities: ["wifi", "meal"]
  }
];

export function FlightResults() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Hasil Pencarian Tiket
            </h2>
            <p className="text-gray-600">Jakarta (CGK) → Bali (DPS) • {flights.length} penerbangan ditemukan</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Select>
              <SelectTrigger className="w-40">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="departure">Keberangkatan</SelectItem>
                <SelectItem value="duration">Durasi</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </motion.div>

        <div className="space-y-4">
          {flights.map((flight, index) => (
            <FlightCard
              key={index}
              {...flight}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Muat Lebih Banyak
          </Button>
        </motion.div>
      </div>
    </section>
  );
}