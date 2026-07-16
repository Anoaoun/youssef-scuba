'use client'

import { FaCheck } from 'react-icons/fa'
import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface CoursesProps {
  language: Language
}

const coursesData = [
  {
    id: 1,
    nameEn: 'Open Water Diver',
    nameAr: 'غطاس المياه المفتوحة',
    descriptionEn: 'Perfect for beginners. Get certified to dive up to 18 meters.',
    descriptionAr: 'مثالي للمبتدئين. احصل على شهادة للغطس حتى عمق 18 متر.',
    price: 350,
    duration: '3-4 days',
    durationAr: '3-4 أيام',
    level: 'Beginner',
    levelAr: 'مبتدئ',
    features: [
      'Certification included',
      'All equipment provided',
      'Professional instructor',
      '4 open water dives',
    ],
    featuresAr: [
      'شهادة مدرجة',
      'جميع المعدات مرفقة',
      'مدرب احترافي',
      '4 غطسات في المياه المفتوحة',
    ],
  },
  {
    id: 2,
    nameEn: 'Advanced Diver',
    nameAr: 'غطاس متقدم',
    descriptionEn: 'Build on your skills and dive deeper and more confidently.',
    descriptionAr: 'طور مهاراتك واغطس أعمق وبثقة أكبر.',
    price: 350,
    duration: '2-3 days',
    durationAr: '2-3 أيام',
    level: 'Intermediate',
    levelAr: 'متوسط',
    features: [
      'Advanced techniques',
      'Deeper dives to 30m',
      'Specialized training',
      '4 certification dives',
    ],
    featuresAr: [
      'تقنيات متقدمة',
      'غطسات أعمق حتى 30 متر',
      'تدريب متخصص',
      '4 غطسات شهادة',
    ],
  },
  {
    id: 3,
    nameEn: 'Rescue Diver',
    nameAr: 'غطاس إنقاذ',
    descriptionEn: 'Learn rescue techniques and become a safe diving buddy.',
    descriptionAr: 'تعلم تقنيات الإنقاذ وكن رفيق غطس آمناً.',
    price: 350,
    duration: '3 days',
    durationAr: '3 أيام',
    level: 'Advanced',
    levelAr: 'متقدم',
    features: [
      'Rescue procedures',
      'Emergency response',
      'First aid training',
      'Leadership skills',
    ],
    featuresAr: [
      'إجراءات الإنقاذ',
      'الاستجابة للطوارئ',
      'تدريب الإسعافات الأولية',
      'مهارات القيادة',
    ],
  },
]

export default function Courses({ language }: CoursesProps) {
  const t = translations[language]

  return (
    <section id="courses" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {t.courses.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coursesData.map((course, index) => {
            const name = language === 'en' ? course.nameEn : course.nameAr
            const description = language === 'en' ? course.descriptionEn : course.descriptionAr
            const duration = language === 'en' ? course.duration : course.durationAr
            const features = language === 'en' ? course.features : course.featuresAr

            return (
              <div
                key={course.id}
                className="bg-dark border border-ocean/20 rounded-xl p-8 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
              >
                {/* Badge */}
                <div className="inline-block bg-primary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {course.level}
                </div>

                {/* Course Title */}
                <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>

                {/* Price */}
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-4 mb-6">
                  <p className="text-gray-400 text-sm">{language === 'en' ? 'Starting from' : 'ابدأ من'}</p>
                  <p className="text-3xl font-bold text-secondary">
                    ${course.price}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    {language === 'en' ? 'Duration: ' : 'المدة: '}{duration}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheck className="text-secondary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-secondary to-primary text-dark font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all">
                  {language === 'en' ? 'Book Now' : 'احجز الآن'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
