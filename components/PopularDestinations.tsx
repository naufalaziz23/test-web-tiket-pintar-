import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 850000,
    rating: 4.9,
    tag: "Populer"
  },
  {
    id: 2,
    name: "Yogyakarta",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 450000,
    rating: 4.8,
    tag: "Budaya"
  },
  {
    id: 3,
    name: "Lombok",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 750000,
    rating: 4.7,
    tag: "Pantai"
  },
  {
    id: 4,
    name: "Raja Ampat",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 1200000,
    rating: 4.9,
    tag: "Diving"
  }
];

export function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Destinasi Populer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi destinasi favorit wisatawan dengan harga tiket terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
                    {destination.tag}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {destination.country}
                    </p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{destination.rating}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Mulai dari</p>
                      <p className="font-bold text-blue-600">
                        IDR {destination.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}