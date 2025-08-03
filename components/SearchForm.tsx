import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "motion/react";

export function SearchForm() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="p-6 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* From */}
          <div className="space-y-2">
            <label className="text-sm text-slate-600 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Dari
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Jakarta (CGK)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cgk">Jakarta (CGK)</SelectItem>
                <SelectItem value="sub">Surabaya (SUB)</SelectItem>
                <SelectItem value="dps">Denpasar (DPS)</SelectItem>
                <SelectItem value="mlg">Malang (MLG)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* To */}
          <div className="space-y-2">
            <label className="text-sm text-slate-600 flex items-center">
              <ArrowRight className="w-4 h-4 mr-1" />
              Ke
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bali (DPS)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dps">Denpasar (DPS)</SelectItem>
                <SelectItem value="cgk">Jakarta (CGK)</SelectItem>
                <SelectItem value="sub">Surabaya (SUB)</SelectItem>
                <SelectItem value="mlg">Malang (MLG)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-sm text-slate-600 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Tanggal
            </label>
            <Input type="date" defaultValue="2025-08-10" />
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <label className="text-sm text-slate-600 flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Penumpang
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="1 Dewasa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Dewasa</SelectItem>
                <SelectItem value="2">2 Dewasa</SelectItem>
                <SelectItem value="3">3 Dewasa</SelectItem>
                <SelectItem value="4">4 Dewasa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="space-y-2">
            <label className="text-sm text-transparent">Search</label>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full h-10 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700">
                Cari Tiket
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}