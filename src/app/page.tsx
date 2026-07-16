'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Courses from '@/components/Courses'
import Trips from '@/components/Trips'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Courses language={language} />
      <Trips language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}
