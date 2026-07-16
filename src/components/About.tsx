'use client'

import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface AboutProps {
  language: Language
}

export default function About({ language }: AboutProps) {
  const t = translations[language]

  const stats = [
    { number: '500+', label: language === 'en' ? 'Happy Divers' : 'غطاسين سعداء' },
    { number: '50+', label: language === 'en' ? 'Successful Trips' : 'رحلات ناجحة' },
    { number: '10+', label: language === 'en' ? 'Years Experience' : 'سنوات خبرة' },
  ]

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-ocean to-primary rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop"
                alt="Scuba Diving"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg" />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-gray-400 mb-8">
              {language === 'en'
                ? 'Whether you are a complete beginner or an experienced diver, we have the perfect course and experience for you. Our certified instructors provide safe, professional, and fun training.'
                : 'سواء كنت مبتدئاً أم غطاساً متمرساً، لدينا الدورة والخبرة المثالية لك. يوفر مدربونا المعتمدون تدريباً آمناً واحترافياً وممتعاً.'}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
