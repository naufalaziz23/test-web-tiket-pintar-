import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { MapPin, Calendar, Users, Star, Wifi, Car, Utensils, Dumbbell, Coffee } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HotelsPage() {
  const hotels = [
    {
      name: "Grand Ocean Resort & Spa",
      location: "Seminyak, Bali",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 2847,
      price: 850000,
      originalPrice: 1200000,
      facilities: ["wifi", "pool", "restaurant", "gym", "parking"],
      distance: "2.1 km dari pantai"
    },
    {
      name: "Urban Boutique Hotel",
      location: "Jakarta Pusat",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 1523,
      price: 650000,
      originalPrice: 850000,
      facilities: ["wifi", "restaurant", "gym", "coffee"],
      distance: "1.2 km dari pusat kota"
    },
    {
      name: "Tropical Garden Villa",
      location: "Ubud, Bali",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 956,
      price: 1200000,
      facilities: ["wifi", "pool", "restaurant", "parking"],
      distance: "3.5 km dari pusat Ubud"
    },
    {
      name: "Skyline Business Hotel",
      location: "Surabaya",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.4,
      reviews: 1876,
      price: 450000,
      originalPrice: 600000,
      facilities: ["wifi", "restaurant", "gym", "coffee", "parking"],
      distance: "0.8 km dari bandara"
    }
  ];

  const facilityIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    pool: <div className="w-4 h-4 bg-blue-500 rounded-full"></div>,
    restaurant: <Utensils className="w-4 h-4" />,
    gym: <Dumbbell className="w-4 h-4" />,
    parking: <Car className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-r from-teal-600 to-sky-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Temukan Hotel Terbaik
            </h1>
            <p className="text-teal-100">
              Dari hotel mewah hingga penginapan budget, semua ada di sini
            </p>
          </motion.div>

          {/* Hotel Search Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Destinasi
                  </label>
                  <Input placeholder="Jakarta, Bali, Yogyakarta..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Check-in
                  </label>
                  <Input type="date" defaultValue="2025-08-10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Check-out
                  </label>
                  <Input type="date" defaultValue="2025-08-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Tamu
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="2 Tamu, 1 Kamar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Tamu, 1 Kamar</SelectItem>
                      <SelectItem value="2">2 Tamu, 1 Kamar</SelectItem>
                      <SelectItem value="3">3 Tamu, 1 Kamar</SelectItem>
                      <SelectItem value="4">4 Tamu, 2 Kamar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-transparent">Search</label>
                  <Button className="w-full h-10 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700">
                    Cari Hotel
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-between items-center mb-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {hotels.length} Hotel Ditemukan
              </h2>
              <p className="text-slate-600">Jakarta • 10-12 Agustus 2025 • 2 Tamu</p>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="rating">Rating Tertinggi</SelectItem>
                <SelectItem value="distance">Jarak Terdekat</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <div className="space-y-6">
            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Hotel Image */}
                    <div className="lg:w-80 h-48 lg:h-auto relative">
                      <ImageWithFallback
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      {hotel.originalPrice && (
                        <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                          Hemat {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}%
                        </Badge>
                      )}
                    </div>

                    {/* Hotel Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{hotel.name}</h3>
                          <p className="text-slate-600 flex items-center text-sm mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {hotel.location}
                          </p>
                          <p className="text-xs text-slate-500">{hotel.distance}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="font-semibold text-slate-900">{hotel.rating}</span>
                            <span className="text-sm text-slate-500 ml-1">({hotel.reviews} ulasan)</span>
                          </div>
                        </div>
                      </div>

                      {/* Facilities */}
                      <div className="flex items-center space-x-3 mb-4">
                        {hotel.facilities.map((facility, idx) => (
                          <div key={idx} className="p-2 bg-slate-100 rounded-lg text-slate-600">
                            {facilityIcons[facility]}
                          </div>
                        ))}
                      </div>

                      {/* Price and Book */}
                      <div className="flex justify-between items-end">
                        <div>
                          {hotel.originalPrice && (
                            <p className="text-sm text-slate-400 line-through">
                              IDR {hotel.originalPrice.toLocaleString()}
                            </p>
                          )}
                          <p className="text-2xl font-bold text-teal-600">
                            IDR {hotel.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-slate-500">/malam</p>
                        </div>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Pilih Kamar
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button variant="outline" size="lg">
              Muat Lebih Banyak Hotel
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}