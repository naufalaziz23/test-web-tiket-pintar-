import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Phone, Mail, MapPin, Clock, Users, Shield, Award, Heart, Headphones, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutPage() {
  const stats = [
    { number: "2M+", label: "Pengguna Aktif", icon: <Users className="w-6 h-6" /> },
    { number: "50K+", label: "Hotel Partner", icon: <Award className="w-6 h-6" /> },
    { number: "100+", label: "Maskapai Partner", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Customer Support", icon: <Headphones className="w-6 h-6" /> }
  ];

  const team = [
    {
      name: "Budi Santoso",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Visioner di balik TiketPinter dengan 15+ tahun pengalaman di industri travel."
    },
    {
      name: "Sari Indah",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Memimpin pengembangan teknologi untuk memberikan pengalaman terbaik bagi pengguna."
    },
    {
      name: "Andi Pratama",
      position: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Memastikan setiap pelanggan mendapatkan layanan terbaik dan kepuasan maksimal."
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara membatalkan pemesanan?",
      answer: "Anda dapat membatalkan pemesanan melalui halaman 'Pemesanan Saya' atau menghubungi customer service kami."
    },
    {
      question: "Apakah ada biaya pembatalan?",
      answer: "Biaya pembatalan tergantung pada kebijakan maskapai/hotel dan waktu pembatalan. Detail biaya akan ditampilkan sebelum konfirmasi pembatalan."
    },
    {
      question: "Bagaimana cara mengubah tanggal perjalanan?",
      answer: "Perubahan tanggal dapat dilakukan melalui fitur 'Ubah Jadwal' di halaman pemesanan dengan ketentuan yang berlaku."
    },
    {
      question: "Apakah data pribadi saya aman?",
      answer: "Ya, kami menggunakan enkripsi SSL dan mematuhi standar keamanan internasional untuk melindungi data pribadi Anda."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Tentang TiketPinter
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Kami berkomitmen untuk membuat perjalanan Anda lebih mudah, nyaman, dan terjangkau. 
              Sejak 2020, TiketPinter telah melayani jutaan pelanggan di seluruh Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                  <p className="text-slate-600">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  TiketPinter lahir dari keinginan sederhana untuk membuat perjalanan lebih mudah diakses oleh semua orang. 
                  Kami percaya bahwa setiap orang berhak untuk menjelajahi dunia tanpa khawatir tentang proses booking yang rumit atau harga yang tidak transparan.
                </p>
                <p>
                  Dengan teknologi terdepan dan kemitraan yang kuat, kami telah membantu jutaan orang menemukan tiket pesawat dan hotel dengan harga terbaik. 
                  Komitmen kami adalah memberikan pengalaman booking yang seamless dari awal hingga akhir perjalanan.
                </p>
                <p>
                  Hari ini, TiketPinter terus berkembang dengan inovasi baru untuk memenuhi kebutuhan wisatawan modern. 
                  Visi kami adalah menjadi platform travel terpercaya #1 di Indonesia.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tim Kami
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Bertemu dengan orang-orang luar biasa di balik TiketPinter yang berdedikasi untuk memberikan layanan terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.position}</Badge>
                  <p className="text-sm text-slate-600">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-slate-600">
              Tim customer service kami siap membantu Anda 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Telepon</h4>
              <p className="text-slate-600">0804-1-500-308</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-slate-600">cs@tiketpinter.com</p>
            </Card>
            <Card className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-slate-600">Available 24/7</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Alamat</h4>
              <p className="text-slate-600">Jakarta Selatan</p>
            </Card>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                    <p className="text-slate-600">{faq.answer}</p>
                    {index < faqs.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Customer First</h4>
                <p className="text-sky-100">Kepuasan pelanggan adalah prioritas utama kami</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Transparansi</h4>
                <p className="text-sky-100">Harga jelas, tidak ada biaya tersembunyi</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Kualitas</h4>
                <p className="text-sky-100">Layanan berkualitas tinggi dengan standar internasional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}