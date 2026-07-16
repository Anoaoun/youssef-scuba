'use client'

import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface HeroProps {
  language: Language
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1440 900%27%3E%3Crect fill=%270f1419%27 width=%271440%27 height=%27900%27/%3E%3Cpath fill=%27%23006db3%27 opacity=%270.1%27 d=%27M0 450c100-50 200-100 300-80s200 100 300 80-100-100-200-120-200 80-300 100-100-10-100-10v300h1440V450z%27/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark z-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="text-6xl md:text-7xl mb-6">🤿</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/[YOUR_NUMBER]"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <FaWhatsapp size={24} />
              WhatsApp
            </a>
            <a
              href="tel:+[YOUR_PHONE]"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <FaPhone size={24} />
              {language === 'en' ? 'Call Now' : 'اتصل الآن'}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
