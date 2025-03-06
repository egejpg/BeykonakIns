'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const milestones = [
    { year: "2015", title: "Kuruluş", description: "Beykonak İnşaat'ın temelleri atıldı" },
    { year: "2017", title: "İlk Proje", description: "30 daireli ilk konut projemizi başarıyla tamamladık" },
    { year: "2019", title: "Büyüme", description: "İstanbul'un çeşitli bölgelerinde projeler geliştirmeye başladık" },
    { year: "2021", title: "Dönüm Noktası", description: "Yıllık 100 konut üretim kapasitesine ulaştık" },
    { year: "2023", title: "Yenilikçi Projeler", description: "Akıllı ev sistemleri ile donatılmış modern projelerimizi hayata geçirdik" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50">
          <Image
            src="/hero-bg.jpg"
            alt="Hakkımızda"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Genç ve dinamik kadromuzla modern yaşam alanları inşa ediyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Sektörde öncü ve yenilikçi projeler geliştirerek, müşterilerimize değer katan yaşam alanları sunmayı hedefliyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Yenilikçi tasarım anlayışı ve kaliteli malzeme kullanımı ile müşterilerimizin beklentilerini karşılayan yaşam alanları inşa etmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Tarihçemiz
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                </div>
                <div className="flex-grow pb-8 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
