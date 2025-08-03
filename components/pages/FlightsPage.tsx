import { SearchForm } from "../SearchForm";
import { FlightResults } from "../FlightResults";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Plane, Filter, Calendar, MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function FlightsPage() {
  const quickFilters = [
    { label: "Langsung", active: true },
    { label: "Termurah", active: false },
    { label: "Tercepat", active: false },
    { label: "Pagi", active: false },
    { label: "Siang", active: false },
    { label: "Malam", active: false }
  ];

  const popularRoutes = [
    {
      from: "Jakarta",
      to: "Bali",
      fromCode: "CGK",
      toCode: "DPS",
      price: 850000,
      trend: "down"
    },
    {
      from: "Jakarta",
      to: "Yogyakarta", 
      fromCode: "CGK",
      toCode: "YIA",
      price: 450000,
      trend: "up"
    },
    {
      from: "Surabaya",
      to: "Jakarta",
      fromCode: "SUB", 
      toCode: "CGK",
      price: 650000,
      trend: "down"
    },
    {
      from: "Jakarta",
      to: "Medan",
      fromCode: "CGK",
      toCode: "KNO",
      price: 950000,
      trend: "stable"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Cari Tiket Pesawat
            </h1>
            <p className="text-sky-100">
              Temukan harga tiket terbaik untuk perjalanan Anda
            </p>
          </motion.div>
          <SearchForm />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Filters */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-4 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Cepat
                </h3>
                <div className="space-y-2">
                  {quickFilters.map((filter, index) => (
                    <Button
                      key={index}
                      variant={filter.active ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Popular Routes */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-4">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Rute Populer
                </h3>
                <div className="space-y-3">
                  {popularRoutes.map((route, index) => (
                    <div key={index} className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-slate-700">{route.fromCode}</span>
                          <Plane className="w-3 h-3 text-slate-400" />
                          <span className="text-sm font-medium text-slate-700">{route.toCode}</span>
                        </div>
                        <Badge 
                          variant={route.trend === 'down' ? 'default' : route.trend === 'up' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {route.trend === 'down' ? '↓' : route.trend === 'up' ? '↑' : '→'}
                        </Badge>
                      </div>
                      <div className="text-xs text-slate-500 mb-1">
                        {route.from} → {route.to}
                      </div>
                      <div className="text-sm font-semibold text-sky-600">
                        IDR {route.price.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <FlightResults />
          </div>
        </div>
      </div>
    </div>
  );
}