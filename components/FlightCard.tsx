import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plane, Clock, Wifi, Utensils } from "lucide-react";
import { motion } from "motion/react";

interface FlightCardProps {
  airline: string;
  logo: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  originalPrice?: number;
  class: string;
  facilities: string[];
  index: number;
}

export function FlightCard({ 
  airline, 
  logo, 
  from, 
  to, 
  departureTime, 
  arrivalTime, 
  duration, 
  price, 
  originalPrice,
  class: flightClass,
  facilities,
  index 
}: FlightCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Airline Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{airline}</h3>
              <p className="text-sm text-slate-500">{flightClass}</p>
            </div>
          </div>

          {/* Flight Details */}
          <div className="flex items-center space-x-8 flex-1">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">{departureTime}</p>
              <p className="text-sm text-slate-500">{from}</p>
            </div>
            
            <div className="flex-1 relative">
              <div className="h-px bg-slate-300 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                  <Plane className="w-4 h-4 text-slate-400" />
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center mt-1">{duration}</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">{arrivalTime}</p>
              <p className="text-sm text-slate-500">{to}</p>
            </div>
          </div>

          {/* Facilities */}
          <div className="flex items-center space-x-2">
            {facilities.includes('wifi') && (
              <div className="p-2 bg-sky-50 rounded-lg">
                <Wifi className="w-4 h-4 text-sky-600" />
              </div>
            )}
            {facilities.includes('meal') && (
              <div className="p-2 bg-teal-50 rounded-lg">
                <Utensils className="w-4 h-4 text-teal-600" />
              </div>
            )}
            <div className="p-2 bg-slate-50 rounded-lg">
              <Clock className="w-4 h-4 text-slate-600" />
            </div>
          </div>

          {/* Price & Book */}
          <div className="text-right">
            {originalPrice && (
              <p className="text-sm text-slate-400 line-through">
                IDR {originalPrice.toLocaleString()}
              </p>
            )}
            <p className="text-2xl font-bold text-sky-600 mb-2">
              IDR {price.toLocaleString()}
            </p>
            <p className="text-xs text-slate-500 mb-3">/orang</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-sky-600 hover:bg-sky-700 w-full lg:w-auto">
                Pilih Tiket
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}