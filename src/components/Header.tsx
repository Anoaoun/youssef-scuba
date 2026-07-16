'use client'

import { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface HeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'gallery', label: t.nav.gallery },
    { key: 'courses', label: t.nav.courses },
    { key: 'trips', label: t.nav.trips },
    { key: 'contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50 border-b border-ocean/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <span className="text-xl">🤿</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Youssef</h1>
              <p className="text-xs text-secondary">Scuba</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language & Social */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex gap-2 bg-dark border border-ocean/20 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                  language === 'ar'
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                AR
              </button>
            </div>

            {/* Social Icons */}
            <div className="hidden sm:flex gap-3">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-secondary"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-ocean/20">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="block py-2 text-sm text-gray-300 hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
