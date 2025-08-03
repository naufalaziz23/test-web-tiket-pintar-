import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Plane, Hotel, Calendar, MapPin, Clock, Download, RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function BookingsPage() {
  const flightBookings = [
    {
      id: "TP2025080001",
      type: "flight",
      airline: "Garuda Indonesia",
      from: "Jakarta (CGK)",
      to: "Bali (DPS)",
      date: "15 Agustus 2025",
      time: "07:30 - 10:45",
      passenger: "John Doe",
      status: "confirmed",
      bookingDate: "3 Agustus 2025",
      price: 1400000,
      class: "Economy"
    },
    {
      id: "TP2025070012",
      type: "flight", 
      airline: "Lion Air",
      from: "Surabaya (SUB)",
      to: "Jakarta (CGK)",
      date: "22 Juli 2025",
      time: "14:20 - 16:35",
      passenger: "John Doe",
      status: "completed",
      bookingDate: "15 Juli 2025",
      price: 850000,
      class: "Economy"
    },
    {
      id: "TP2025060008",
      type: "flight",
      airline: "Batik Air",
      from: "Jakarta (CGK)",
      to: "Yogyakarta (YIA)",
      date: "10 Juni 2025",
      time: "09:15 - 11:30",
      passenger: "John Doe",
      status: "cancelled",
      bookingDate: "1 Juni 2025",
      price: 650000,
      class: "Economy"
    }
  ];

  const hotelBookings = [
    {
      id: "TP2025080002",
      type: "hotel",
      name: "Grand Ocean Resort & Spa",
      location: "Seminyak, Bali",
      checkIn: "15 Agustus 2025",
      checkOut: "18 Agustus 2025",
      nights: 3,
      guests: 2,
      room: "Deluxe Ocean View",
      status: "confirmed",
      bookingDate: "3 Agustus 2025",
      price: 2550000
    },
    {
      id: "TP2025070015",
      type: "hotel",
      name: "Urban Boutique Hotel", 
      location: "Jakarta Pusat",
      checkIn: "20 Juli 2025",
      checkOut: "22 Juli 2025",
      nights: 2,
      guests: 1,
      room: "Superior Room",
      status: "completed",
      bookingDate: "12 Juli 2025",
      price: 1300000
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Dikonfirmasi';
      case 'completed':
        return 'Selesai';
      case 'cancelled':
        return 'Dibatalkan';
      case 'pending':
        return 'Menunggu';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-600 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Pemesanan Saya
            </h1>
            <p className="text-sky-100">
              Kelola dan pantau semua pemesanan Anda di sini
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="flights" className="flex items-center">
                  <Plane className="w-4 h-4 mr-2" />
                  Tiket Pesawat ({flightBookings.length})
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center">
                  <Hotel className="w-4 h-4 mr-2" />
                  Hotel ({hotelBookings.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights" className="space-y-6">
                {flightBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {booking.airline}
                            </h3>
                            <Badge className={getStatusColor(booking.status)}>
                              {getStatusIcon(booking.status)}
                              <span className="ml-1">{getStatusText(booking.status)}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-500">
                            Booking ID: {booking.id}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-sky-600">
                            IDR {booking.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-slate-500">
                            Dipesan: {booking.bookingDate}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="text-sm text-slate-500">Rute</p>
                            <p className="font-medium">{booking.from} → {booking.to}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="text-sm text-slate-500">Tanggal & Waktu</p>
                            <p className="font-medium">{booking.date}</p>
                            <p className="text-sm text-slate-500">{booking.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Plane className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="text-sm text-slate-500">Detail</p>
                            <p className="font-medium">{booking.class}</p>
                            <p className="text-sm text-slate-500">{booking.passenger}</p>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          {booking.status === 'confirmed' && (
                            <>
                              <Button size="sm" variant="outline">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Ubah Jadwal
                              </Button>
                              <Button size="sm" variant="outline">
                                <XCircle className="w-4 h-4 mr-2" />
                                Batalkan
                              </Button>
                            </>
                          )}
                        </div>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download E-Ticket
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="hotels" className="space-y-6">
                {hotelBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {booking.name}
                            </h3>
                            <Badge className={getStatusColor(booking.status)}>
                              {getStatusIcon(booking.status)}
                              <span className="ml-1">{getStatusText(booking.status)}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-500">
                            Booking ID: {booking.id}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-teal-600">
                            IDR {booking.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-slate-500">
                            Dipesan: {booking.bookingDate}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="text-sm text-slate-500">Lokasi</p>
                            <p className="font-medium">{booking.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="text-sm text-slate-500">Check-in / Check-out</p>
                            <p className="font-medium">{booking.checkIn}</p>
                            <p className="font-medium">{booking.checkOut}</p>
                            <p className="text-sm text-slate-500">{booking.nights} malam</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Hotel className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="text-sm text-slate-500">Detail</p>
                            <p className="font-medium">{booking.room}</p>
                            <p className="text-sm text-slate-500">{booking.guests} tamu</p>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          {booking.status === 'confirmed' && (
                            <>
                              <Button size="sm" variant="outline">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Ubah Booking
                              </Button>
                              <Button size="sm" variant="outline">
                                <XCircle className="w-4 h-4 mr-2" />
                                Batalkan
                              </Button>
                            </>
                          )}
                        </div>
                        <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download Voucher
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}