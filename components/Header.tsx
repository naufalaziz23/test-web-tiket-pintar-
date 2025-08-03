import { Button } from "./ui/button";
import { Menu, User, Bell } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { key: 'home', label: 'Beranda' },
    { key: 'flights', label: 'Pesawat' },
    { key: 'hotels', label: 'Hotel' },
    { key: 'bookings', label: 'Pemesanan Saya' },
    { key: 'about', label: 'Tentang' }
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">TP</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900">TiketPinter</h1>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.key
                    ? 'bg-sky-100 text-sky-700 font-medium'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Masuk
            </Button>
            <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
              Daftar
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}