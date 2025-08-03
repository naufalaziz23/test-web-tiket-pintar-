import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { CreditCard, User, Phone, Mail, MapPin, Calendar, QrCode, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  flight: {
    airline: string;
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    date: string;
    price: number;
    class: string;
  };
}

export function BookingModal({ isOpen, onClose, flight }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [qrisTimer, setQrisTimer] = useState(900); // 15 minutes in seconds
  const [passengerData, setPassengerData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: ""
  });

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = () => {
    // Simulate booking process
    alert("Booking berhasil! Tiket Anda akan dikirim via email.");
    onClose();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-slate-900">Booking Tiket</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                    animate={{ scale: step === stepNumber ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stepNumber}
                  </motion.div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-px mx-2 ${
                      step > stepNumber ? 'bg-sky-600' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <motion.div
              key={step}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-900">Data Penumpang</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Gelar</Label>
                      <select className="w-full p-2 border rounded-md mt-1 bg-slate-50">
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                      </select>
                    </div>
                    <div>
                      <Label>Nama Depan *</Label>
                      <Input 
                        value={passengerData.firstName}
                        onChange={(e) => setPassengerData({...passengerData, firstName: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Nama Belakang *</Label>
                      <Input 
                        value={passengerData.lastName}
                        onChange={(e) => setPassengerData({...passengerData, lastName: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Tanggal Lahir *</Label>
                      <Input 
                        type="date"
                        value={passengerData.dateOfBirth}
                        onChange={(e) => setPassengerData({...passengerData, dateOfBirth: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-900">Kontak Pemesan</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label>Email *</Label>
                      <Input 
                        type="email"
                        value={passengerData.email}
                        onChange={(e) => setPassengerData({...passengerData, email: e.target.value})}
                        className="mt-1"
                        placeholder="contoh@email.com"
                      />
                    </div>
                    <div>
                      <Label>Nomor Telepon *</Label>
                      <Input 
                        value={passengerData.phone}
                        onChange={(e) => setPassengerData({...passengerData, phone: e.target.value})}
                        className="mt-1"
                        placeholder="+62..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-900">Pembayaran</h3>
                  
                  {/* Payment Method Selection */}
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-4">
                      {/* QRIS Option */}
                      <Card className={`p-4 cursor-pointer transition-all duration-200 ${
                        paymentMethod === 'qris' ? 'border-sky-500 bg-sky-50' : 'border-slate-200'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="qris" id="qris" />
                          <QrCode className="w-5 h-5 text-sky-600" />
                          <div className="flex-1">
                            <Label htmlFor="qris" className="font-medium">QRIS (Quick Response Code Indonesian Standard)</Label>
                            <p className="text-sm text-slate-500">Scan QR code dengan aplikasi perbankan atau e-wallet Anda</p>
                          </div>
                          <Badge variant="secondary" className="bg-teal-100 text-teal-700">Populer</Badge>
                        </div>
                      </Card>

                      {/* Credit Card Option */}
                      <Card className={`p-4 cursor-pointer transition-all duration-200 ${
                        paymentMethod === 'credit' ? 'border-sky-500 bg-sky-50' : 'border-slate-200'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="credit" id="credit" />
                          <CreditCard className="w-5 h-5 text-sky-600" />
                          <div className="flex-1">
                            <Label htmlFor="credit" className="font-medium">Kartu Kredit/Debit</Label>
                            <p className="text-sm text-slate-500">Visa, Mastercard, American Express</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </RadioGroup>

                  {/* Payment Details */}
                  {paymentMethod === 'qris' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-6 bg-gradient-to-br from-sky-50 to-teal-50 border-sky-200">
                        <div className="text-center">
                          <h4 className="font-semibold text-slate-900 mb-4">Scan QR Code untuk Pembayaran</h4>
                          
                          {/* QR Code Mock */}
                          <div className="inline-block p-4 bg-white rounded-lg shadow-md mb-4">
                            <div className="w-48 h-48 bg-slate-900 rounded-lg flex items-center justify-center relative">
                              <div className="w-40 h-40 bg-white rounded-md"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-8 gap-1">
                                  {Array.from({ length: 64 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className={`w-1 h-1 ${
                                        Math.random() > 0.5 ? 'bg-slate-900' : 'bg-white'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Timer */}
                          <div className="flex items-center justify-center space-x-2 mb-4">
                            <Clock className="w-4 h-4 text-amber-500" />
                            <span className="text-sm text-slate-600">
                              Waktu tersisa: <span className="font-mono font-semibold text-amber-600">{formatTime(qrisTimer)}</span>
                            </span>
                          </div>

                          {/* Instructions */}
                          <div className="text-left space-y-2">
                            <p className="text-sm text-slate-600 font-medium">Cara pembayaran:</p>
                            <ol className="text-sm text-slate-600 space-y-1 pl-4">
                              <li>1. Buka aplikasi perbankan atau e-wallet Anda</li>
                              <li>2. Pilih fitur "Scan QR" atau "QRIS"</li>
                              <li>3. Arahkan kamera ke QR code di atas</li>
                              <li>4. Konfirmasi pembayaran sebesar IDR {(flight.price + 150000).toLocaleString()}</li>
                              <li>5. Simpan bukti transaksi</li>
                            </ol>
                          </div>

                          {/* Supported Apps */}
                          <div className="mt-4 pt-4 border-t border-sky-200">
                            <p className="text-xs text-slate-500 mb-2">Didukung oleh:</p>
                            <div className="flex justify-center space-x-4 text-xs text-slate-600">
                              <span>GoPay</span>
                              <span>OVO</span>
                              <span>DANA</span>
                              <span>ShopeePay</span>
                              <span>LinkAja</span>
                              <span>BCA</span>
                              <span>Mandiri</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )}

                  {paymentMethod === 'credit' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label>Nomor Kartu</Label>
                            <Input placeholder="1234 5678 9012 3456" className="mt-1" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>MM/YY</Label>
                              <Input placeholder="12/28" className="mt-1" />
                            </div>
                            <div>
                              <Label>CVV</Label>
                              <Input placeholder="123" className="mt-1" />
                            </div>
                          </div>
                          <div>
                            <Label>Nama di Kartu</Label>
                            <Input placeholder="JOHN DOE" className="mt-1" />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevStep}
                disabled={step === 1}
              >
                Kembali
              </Button>
              {step < 3 ? (
                <Button onClick={handleNextStep} className="bg-sky-600 hover:bg-sky-700">
                  Lanjutkan
                </Button>
              ) : (
                <Button onClick={handleBooking} className="bg-teal-600 hover:bg-teal-700">
                  {paymentMethod === 'qris' ? 'Konfirmasi Pembayaran' : 'Bayar Sekarang'}
                </Button>
              )}
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-0 border-sky-100 bg-gradient-to-br from-white to-sky-50">
              <h3 className="font-semibold mb-4 text-slate-900">Ringkasan Pesanan</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm">{flight.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm">{flight.from} → {flight.to}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-slate-500" />
                  <span className="text-sm">1 Penumpang</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{flight.airline}</span>
                  <Badge variant="secondary" className="bg-sky-100 text-sky-700">{flight.class}</Badge>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Keberangkatan</span>
                  <span>{flight.departureTime}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Kedatangan</span>
                  <span>{flight.arrivalTime}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Harga Tiket</span>
                  <span>IDR {flight.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Pajak & Biaya</span>
                  <span>IDR 150.000</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-sky-600">IDR {(flight.price + 150000).toLocaleString()}</span>
                </div>
              </div>

              {step === 3 && paymentMethod === 'qris' && (
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <div className="flex items-center space-x-2 text-sm text-teal-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Pembayaran QRIS siap diproses</span>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}