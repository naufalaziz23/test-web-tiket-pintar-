import { HeroSection } from "../HeroSection";
import { PopularDestinations } from "../PopularDestinations";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Plane, Hotel, Train, Bus, Star, Users, Clock, Shield } from "lucide-react";
import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Tiket Pesawat",
      description: "Temukan harga tiket pesawat terbaik ke seluruh dunia",
      color: "bg-sky-500",
      page: "flights"
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotel",
      description: "Booking hotel dengan harga terjangkau dan lokasi strategis",
      color: "bg-teal-500",
      page: "hotels"
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: "Kereta Api",
      description: "Perjalanan nyaman dengan kereta api ke berbagai kota",
      color: "bg-slate-500",
      page: "flights"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Bus",
      description: "Transportasi bus ekonomis untuk perjalanan jarak jauh",
      color: "bg-amber-500",
      page: "flights"
    }
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Harga Terbaik",
      description: "Jaminan harga terbaik atau uang kembali"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Service 24/7",
      description: "Dukungan pelanggan siap membantu kapan saja"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Booking Instant",
      description: "Konfirmasi booking dalam hitungan detik"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Aman & Terpercaya",
      description: "Transaksi aman dengan sertifikat keamanan tingkat tinggi"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Layanan Lengkap untuk Perjalanan Anda
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dari tiket pesawat hingga hotel, semua kebutuhan perjalanan Anda tersedia dalam satu platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card 
                  className="p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                  onClick={() => onNavigate(service.page)}
                >
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PopularDestinations />

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mengapa Pilih TiketPinter?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman booking terbaik dengan jaminan kepuasan pelanggan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Mulai Perjalanan Impian Anda Hari Ini
            </h2>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto text-lg">
              Dapatkan penawaran eksklusif dan hemat hingga 50% untuk destinasi favorit Anda
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-sky-600 hover:bg-slate-50 text-lg px-8 py-6"
                onClick={() => onNavigate('flights')}
              >
                Mulai Booking Sekarang
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}