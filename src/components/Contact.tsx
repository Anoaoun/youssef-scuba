'use client'

import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface ContactProps {
  language: Language
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]

  const contactMethods = [
    {
      icon: FaWhatsapp,
      titleEn: 'WhatsApp',
      titleAr: 'واتساب',
      value: '+961 XX XXX XXXX',
      link: 'https://wa.me/961XXXXXXXX',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: FaPhone,
      titleEn: 'Phone',
      titleAr: 'الهاتف',
      value: '+961 XX XXX XXXX',
      link: 'tel:+961XXXXXXXX',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: FaEnvelope,
      titleEn: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: 'info@youssefscuba.com',
      link: 'mailto:info@youssefscuba.com',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: FaMapMarkerAlt,
      titleEn: 'Location',
      titleAr: 'الموقع',
      value: 'Damour, Lebanon',
      valueAr: 'الدامور، لبنان',
      link: 'https://maps.google.com/?q=damour+lebanon',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-dark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            {language === 'en'
              ? 'Ready to start your underwater journey? Contact us today!'
              : 'هل أنت مستعد لبدء رحلتك تحت الماء؟ تواصل معنا اليوم!'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4" />
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const title = language === 'en' ? method.titleEn : method.titleAr
            const displayValue = language === 'en' ? method.value : method.valueAr || method.value

            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${method.bgColor} border border-gray-700 rounded-xl p-6 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10 text-center group`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${method.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{displayValue}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-dark border border-ocean/20 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
          </h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={language === 'en' ? 'Your Name' : 'اسمك'}
                className="bg-dark/50 border border-ocean/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder={language === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}
                className="bg-dark/50 border border-ocean/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder={language === 'en' ? 'Subject' : 'الموضوع'}
              className="w-full bg-dark/50 border border-ocean/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors"
            />
            <textarea
              rows={5}
              placeholder={language === 'en' ? 'Your Message' : 'رسالتك'}
              className="w-full bg-dark/50 border border-ocean/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-primary text-dark font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all"
            >
              {language === 'en' ? 'Send Message' : 'أرسل الرسالة'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
