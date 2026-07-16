'use client'

import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa'
import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-ocean/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🤿</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Youssef</h3>
                <p className="text-xs text-secondary">Scuba</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {language === 'en'
                ? 'Professional scuba diving courses and fun dives in Damour, Lebanon.'
                : 'دورات غطس احترافية وغطسات ممتعة في الدامور، لبنان.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-secondary transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-secondary transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-secondary transition-colors">
                  {t.nav.courses}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-white mb-4">
              {language === 'en' ? 'Location' : 'الموقع'}
            </h4>
            <p className="text-gray-400 text-sm">
              {t.footer.location}
            </p>
            <a
              href="https://maps.google.com/?q=damour+lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold"
            >
              {language === 'en' ? 'View on Map' : 'عرض على الخريطة'} →
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">
              {language === 'en' ? 'Follow Us' : 'تابعنا'}
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-ocean/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-dark transition-all"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ocean/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-dark transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ocean/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-dark transition-all"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ocean/20 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Youssef Scuba Diving Club. {t.footer.allRights}.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 sm:mt-0">
              {language === 'en' ? 'Made with' : 'تم إنشاؤه بـ'}
              <FaHeart className="text-red-500" />
              {language === 'en' ? 'for divers' : 'للغطاسين'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
