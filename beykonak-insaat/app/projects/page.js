'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Beykonak Residence",
      location: "Kadıköy, İstanbul",
      status: "Tamamlandı",
      completion: "2023",
      description: "Modern mimari ile tasarlanmış, 120 daireli lüks konut projesi",
      features: ["Kapalı Otopark", "Yüzme Havuzu", "Spor Salonu", "Güvenlik"],
      image: "/hero-bg.jpg"
    },
    {
      id: 2,
      title: "Park Vista",
      location: "Beşiktaş, İstanbul",
      status: "Devam Ediyor",
      completion: "2024",
      description: "Boğaz manzaralı, 80 daireli prestij projesi",
      features: ["Concierge", "Özel Peyzaj", "Fitness Center", "SPA"],
      image: "/hero-bg.jpg"
    },
    {
      id: 3,
      title: "Business Hub",
      location: "Maslak, İstanbul",
      status: "Planlama",
      completion: "2025",
      description: "A+ ofis ve yaşam kompleksi",
      features: ["Plaza", "Restaurant", "Konferans", "Otopark"],
      image: "/hero-bg.jpg"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50">
          <Image
            src="/hero-bg.jpg"
            alt="Projeler"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Projelerimiz
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mx-auto w-full max-w-md"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {project.location}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Detayları Gör
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
