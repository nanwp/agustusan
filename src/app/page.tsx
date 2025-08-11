'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft1, setTimeLeft1] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timeLeft2, setTimeLeft2] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate1 = new Date('2025-08-24T07:00:00').getTime(); // Jalan Sehat
    const targetDate2 = new Date('2025-08-24T19:30:00').getTime(); // Pentas Seni

    const timer = setInterval(() => {
      const now = new Date().getTime();

      // Countdown untuk Jalan Sehat
      const distance1 = targetDate1 - now;
      if (distance1 > 0) {
        setTimeLeft1({
          days: Math.floor(distance1 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance1 % (1000 * 60)) / 1000)
        });
      }

      // Countdown untuk Pentas Seni
      const distance2 = targetDate2 - now;
      if (distance2 > 0) {
        setTimeLeft2({
          days: Math.floor(distance2 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance2 % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-20 h-12 bg-white/20 rounded-full opacity-60"></div>
      <div className="absolute top-20 left-32 w-16 h-8 bg-white/15 rounded-full opacity-50"></div>
      <div className="absolute top-16 right-20 w-24 h-10 bg-white/20 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-32 h-16 bg-yellow-300/30 rounded-full opacity-60"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with logo */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Image src="/images/logo-katar.png" alt="Logo Karang Taruna" className="w-20 h-20 animate-bounce" width={20} height={20} />
            <Image src="/images/logo-80.png" alt="Logo HUT RI 80" className="w-60 h-20 animate-bounce" style={{ animationDelay: '0.5s' }} width={60} height={20} />
          </div>
          <div className="space-y-1 animate-pulse">
            <p className="text-sm md:text-base font-medium text-yellow-200">Merdeka Bersama</p>
            <p className="text-sm md:text-base font-medium text-yellow-200">Rakyat Indonesia</p>
          </div>
        </div>


        {/* Main title */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-4xl text-white-300 font-semibold mb-4">
            KARANG TARUNA UNIT RW 01
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 mb-4 tracking-wider transform -rotate-2">
            SEMARAK
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 tracking-wider transform rotate-1">
            KEMERDEKAAN
          </h2>
          <p className="text-xl md:text-2xl text-teal-300 font-semibold">
            Peringatan HUT RI ke 80
          </p>

        </div>

        {/* Event sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Jalan Sehat & Sepeda Hias */}
          <div className="bg-teal-600 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-yellow-300 animate-pulse">Jalan Sehat & Sepeda Hias</h3>

            {/* Countdown Timer */}
            <div className="bg-yellow-400 text-teal-800 rounded-lg p-4 mb-4 text-center">
              <div className="text-sm font-semibold mb-2">⏰ Countdown Acara</div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="bg-white text-teal-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-teal-900">{timeLeft1.days}</div>
                  <div className="text-teal-700">Hari</div>
                </div>
                <div className="bg-white text-teal-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-teal-900">{timeLeft1.hours}</div>
                  <div className="text-teal-700">Jam</div>
                </div>
                <div className="bg-white text-teal-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-teal-900">{timeLeft1.minutes}</div>
                  <div className="text-teal-700">Menit</div>
                </div>
                <div className="bg-white text-teal-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-teal-900">{timeLeft1.seconds}</div>
                  <div className="text-teal-700">Detik</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded p-4 mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-pink-300 mr-2 animate-bounce">📅</span>
                <span>Minggu, 24 Agustus 2025</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-pink-300 mr-2 animate-bounce" style={{ animationDelay: '0.2s' }}>📍</span>
                <span>07:00 - Selesai</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-pink-300 mr-2 animate-bounce" style={{ animationDelay: '0.4s' }}>📍</span>
                <span>Gg. H. Longkot</span>
              </div>
            </div>
          </div>

          {/* Pentas Seni & Panggung Hiburan */}
          <div className="bg-teal-600 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-yellow-300 animate-pulse">Pentas Seni & Panggung Hiburan</h3>

            {/* Countdown Timer */}
            <div className="bg-purple-400 text-white rounded-lg p-4 mb-4 text-center">
              <div className="text-sm font-semibold mb-2">⏰ Countdown Acara</div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="bg-white text-purple-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-purple-900">{timeLeft2.days}</div>
                  <div className="text-purple-700">Hari</div>
                </div>
                <div className="bg-white text-purple-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-purple-900">{timeLeft2.hours}</div>
                  <div className="text-purple-700">Jam</div>
                </div>
                <div className="bg-white text-purple-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-purple-900">{timeLeft2.minutes}</div>
                  <div className="text-purple-700">Menit</div>
                </div>
                <div className="bg-white text-purple-800 rounded p-2">
                  <div className="font-bold text-lg animate-pulse text-purple-900">{timeLeft2.seconds}</div>
                  <div className="text-purple-700">Detik</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded p-4 mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-pink-300 mr-2 animate-bounce">📅</span>
                <span>Minggu, 24 Agustus 2025</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-pink-300 mr-2 animate-bounce" style={{ animationDelay: '0.2s' }}>🕐</span>
                <span>19:30 - Selesai</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-pink-300 mr-2 animate-bounce" style={{ animationDelay: '0.4s' }}>📍</span>
                <span>Gg. H. Longkot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom events */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Tasyakuran */}
          <div className="bg-pink-500 rounded-lg p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold mb-3 text-yellow-300 animate-pulse">Tasyakuran</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce">📅</span>
                <span>Sabtu, 16 Agustus 2025</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce" style={{ animationDelay: '0.2s' }}>🕐</span>
                <span>Berdo&apos;a - Selesai</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce" style={{ animationDelay: '0.4s' }}>📍</span>
                <span>Kediaman Bapak RW. Suminrta</span>
              </div>
            </div>
          </div>

          {/* Perlombaan */}
          <div className="bg-pink-500 rounded-lg p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold mb-3 text-yellow-300 animate-pulse">Perlombaan</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce">📅</span>
                <span>Minggu, 17 Agustus 2025</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce" style={{ animationDelay: '0.2s' }}>🕐</span>
                <span>08:30 - Selesai</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce" style={{ animationDelay: '0.4s' }}>📍</span>
                <span>Lapangan RT Masing-masing</span>
              </div>
            </div>
          </div>

          {/* Upacara */}
          <div className="bg-pink-500 rounded-lg p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-bold mb-3 text-yellow-300 animate-pulse">Upacara</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce">📅</span>
                <span>Minggu, 17 Agustus 2025</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce" style={{ animationDelay: '0.2s' }}>🕐</span>
                <span>07:00 - Selesai</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-200">
                <span className="text-red-200 mr-2 animate-bounce" style={{ animationDelay: '0.4s' }}>📍</span>
                <span>Halaman Masjid Al-Hijrah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300">
            📸 Galeri Dokumentasi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
              const rotations = [1.5, -2.1, 0.8, -1.3, 2.2, -0.7, 1.8, -2.5];
              const colors = ['#fef3c7', '#fde68a', '#fed7aa', '#fecaca', '#ddd6fe', '#c7d2fe', '#bfdbfe', '#a7f3d0'];
              return (
                <div key={num} className="relative group">
                  <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300" style={{
                    transform: `rotate(${rotations[num - 1]}deg)`,
                    backgroundColor: colors[num - 1]
                  }}>
                    <Image
                      src={`/images/${num}.JPG`}
                      alt={`Dokumentasi kegiatan ${num}`}
                      className="w-full h-32 object-cover object-center rounded"
                      width={200}
                      height={200}
                    />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 p-1 rounded-2xl">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-red-600 animate-pulse">
                🤝 Kesempatan Sponsorship Terbatas!
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border-2 border-red-400 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl mb-3 animate-bounce">🥇</div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Sponsor Utama</h3>
                  <p className="text-gray-800 text-sm mb-4 font-medium">Logo besar di semua materi promosi</p>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    Slot Terbatas
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-yellow-500 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '0.1s' }}>🥈</div>
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Sponsor Pendukung</h3>
                  <p className="text-gray-800 text-sm mb-4 font-medium">Logo di banner dan media sosial</p>
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    Tersedia
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-blue-400 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '0.2s' }}>🎁</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Sponsor Doorprize</h3>
                  <p className="text-gray-800 text-sm mb-4 font-medium">Produk sebagai hadiah perlombaan</p>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    Fleksibel
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl mb-6 transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold mb-3 animate-pulse">🎯 Keuntungan Menjadi Sponsor:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="text-yellow-300 animate-bounce">✓</span>
                    <span>Eksposur ke 500+ peserta</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="text-yellow-300 animate-bounce" style={{ animationDelay: '0.1s' }}>✓</span>
                    <span>Promosi di media sosial</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="text-yellow-300 animate-bounce" style={{ animationDelay: '0.2s' }}>✓</span>
                    <span>Networking dengan komunitas</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="text-yellow-300 animate-bounce" style={{ animationDelay: '0.3s' }}>✓</span>
                    <span>Sertifikat apresiasi</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '1s' }}>
                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20menjadi%20sponsor%20acara%2017%20Agustus"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center gap-2 animate-bounce">
                  <span>📱</span>
                  Hubungi via WhatsApp
                </a>
                <div className="text-red-600 font-medium">
                  <span className="animate-pulse">⏰</span> Pendaftaran ditutup 19 Agustus 2024
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                💼 Paket sponsorship dapat disesuaikan dengan kebutuhan dan budget Anda
              </p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-teal-500 rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-yellow-300">Info lebih lanjut hubungi:</h3>
          <div className="space-y-1">
            <p className="text-lg font-semibold">0857-1971-8519 (Alpin)</p>
            <p className="text-lg font-semibold">0821-1441-0192 (Nanda)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
