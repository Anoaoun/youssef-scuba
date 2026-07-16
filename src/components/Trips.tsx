'use client'

import { FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'
import { translations } from '@/config/translations'

type Language = 'en' | 'ar'

interface TripsProps {
  language: Language
}

const tripsData = [
  {
    id: 1,
    nameEn: 'Coral Reef Explorer',
    nameAr: 'استكشاف الشعاب المرجانية',
    date: '2024-08-15',
    locationEn: 'Damour Reef',
    locationAr: 'شعاب الدامور',
    price: 75,
    maxParticipants: 8,
    currentParticipants: 5,
    depthEn: 'Shallow (5-15m)',
    depthAr: 'ضحل (5-15 متر)',
  },
  {
    id: 2,
    nameEn: 'Deep Blue Adventure',
    nameAr: 'مغامرة الأزرق العميق',
    date: '2024-08-22',
    locationEn: 'Offshore Dive Site',
    locationAr: 'موقع غطس بحري',
    price: 75,
    maxParticipants: 6,
    currentParticipants: 3,
    depthEn: 'Deep (20-30m)',
    depthAr: 'عميق (20-30 متر)',
  },
  {
    id: 3,
    nameEn: 'Night Dive Experience',
    nameAr: 'تجربة الغطس الليلي',
    date: '2024-08-29',
    locationEn: 'Damour Beach',
    locationAr: 'شاطئ الدامور',
    price: 75,
    maxParticipants: 10,
    currentParticipants: 7,
    depthEn: 'Shallow (5-12m)',
    depthAr: 'ضحل (5-12 متر)',
  },
]

export default function Trips({ language }: TripsProps) {
  const t = translations[language]

  return (
    <section id="trips" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {t.trips.title}
            </span>
          </h2>
          <p className="text-gray-300 text-lg">{t.trips.description}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4" />
        </div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tripsData.map((trip) => {
            const name = language === 'en' ? trip.nameEn : trip.nameAr
            const location = language === 'en' ? trip.locationEn : trip.locationAr
            const depth = language === 'en' ? trip.depthEn : trip.depthAr
            const availability = trip.maxParticipants - trip.currentParticipants

            return (
              <div
                key={trip.id}
                className="bg-gradient-to-br from-ocean/20 to-primary/10 border border-ocean/30 rounded-xl overflow-hidden hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
              >
                {/* Image */}
                <div className="relative h-40 bg-gradient-to-br from-ocean to-primary overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1559827260 + trip.id}?w=400&h=300&fit=crop`}
                    alt={name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {availability} {language === 'en' ? 'spots left' : 'أماكن متبقية'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{depth}</p>

                  {/* Info */}
                  <div className="space-y-3 mb-6 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <FaCalendar className="text-secondary" />
                      <span>{trip.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-secondary" />
                      <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaUsers className="text-secondary" />
                      <span>
                        {trip.currentParticipants}/{trip.maxParticipants}
                      </span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="bg-dark/50 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs">
                        {language === 'en' ? 'Per person' : 'للفرد'}
                      </p>
                      <p className="text-2xl font-bold text-secondary">${trip.price}</p>
                    </div>
                    <button className="bg-gradient-to-r from-secondary to-primary text-dark font-bold px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all">
                      {language === 'en' ? 'Book' : 'احجز'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
