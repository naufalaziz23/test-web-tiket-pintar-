import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TP</span>
              </div>
              <h3 className="text-xl font-bold">TiketPinter</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Platform booking tiket terpercaya untuk perjalanan impian Anda. 
              Temukan harga terbaik dengan layanan premium.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tiket Pesawat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hotel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kereta Api</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paket Wisata</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rental Mobil</a></li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cara Pembayaran</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="font-medium text-white mb-1">Customer Service</p>
                <p>0804-1-500-308</p>
                <p className="text-xs">24 jam, 7 hari seminggu</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <p>cs@tiketpinter.com</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Alamat</p>
                <p>Jl. Teknologi No. 123<br />Jakarta Selatan, Indonesia</p>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 TiketPinter. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}