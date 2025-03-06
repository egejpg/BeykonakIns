'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Beykonak<span className="text-blue-600">İnşaat</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projeler</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Hakkımızda</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">İletişim</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
              <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projeler</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Hakkımızda</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">İletişim</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
