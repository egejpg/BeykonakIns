'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactModal from './ContactModal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Beykonak
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`transition-colors ${
                  isActive('/') ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/projects"
                className={`transition-colors ${
                  isActive('/projects') ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projeler
              </Link>
              <Link 
                href="/about"
                className={`transition-colors ${
                  isActive('/about') ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Hakkımızda
              </Link>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                İletişim
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 flex flex-col gap-1.5 items-end">
                <span 
                  className={`block h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
                    isMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
                    isMenuOpen ? 'w-0 opacity-0' : 'w-4'
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
                    isMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-6'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 py-4 shadow-lg">
              <div className="flex flex-col space-y-4 px-4">
                <Link 
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive('/') ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive('/projects') ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Projeler
                </Link>
                <Link 
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive('/about') ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Hakkımızda
                </Link>
                <button
                  onClick={() => {
                    setIsContactModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors"
                >
                  İletişim
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}
