'use client'
import { useState, useEffect } from 'react'
import Image from "next/image"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import ContactModal from './components/ContactModal'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleAction = (action) => {
    if (action === 'projects') {
      const element = document.getElementById('projects');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'contact') {
      setIsContactModalOpen(true);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="Modern Yapı"
              fill
              className="object-cover scale-105 animate-slow-zoom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent backdrop-blur-[2px]" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          >
            <h1 className="flex flex-col items-center font-bold mb-6 tracking-tight">
              <span className="text-7xl md:text-8xl text-gray-900">
                Beykonak
              </span>
              <span className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mt-4">
                İnşaat ve Mimarlık
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl">
              Modern mimari ve güvenilir yapı kalitesiyle,
              yarının yaşam alanlarını bugünden inşa ediyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleAction('projects')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Projelerimiz
              </button>
              <button 
                onClick={() => handleAction('contact')}
                className="bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg border border-gray-200 hover:scale-105"
              >
                İletişime Geç
              </button>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "8+", text: "Yıllık Deneyim" },
                { number: "12+", text: "Tamamlanan Proje" },
                { number: "200+", text: "Mutlu Aile" },
                { number: "3", text: "Devam Eden Proje" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-white scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 sm:px-4"
          >
            <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Güncel Projelerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.03 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mx-auto w-full max-w-sm"
                >
                  <div className="relative h-60 md:h-80 overflow-hidden">
                    <Image
                      src="/hero-bg.jpg"
                      alt={`Proje ${item}`}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {item === 1 ? "Beykonak Plus" : item === 2 ? "Park Avenue" : "Yeşil Vadi"}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item === 1 
                        ? "Şehir merkezinde modern ve konforlu yaşam alanı" 
                        : item === 2 
                        ? "Aile yaşamı için tasarlanmış özel proje"
                        : "Doğayla iç içe, huzurlu bir yaşam"
                      }
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-semibold">Detaylar</span>
                      <svg className="w-5 h-5 text-gray-900 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-gray-50 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4"
          >
            <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              İletişime Geçin
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900">Size Nasıl Yardımcı Olabiliriz?</h3>
                <p className="text-gray-600 mt-2 mb-6">
                  Projelerimiz hakkında detaylı bilgi almak veya görüşmek için bize ulaşın
                </p>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    İstanbul, Türkiye
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@beykonak.com
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +90 (212) 555 0000
                  </p>
                </div>
              </motion.div>

              <motion.form
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-900/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-900/60"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mesajınız"
                    rows="4"
                    className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-900/60"
                  ></textarea>
                </div>
                <button className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]">
                  Gönder
                </button>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}
