import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Youssef Scuba Diving Club - Damour, Lebanon',
  description: 'Professional scuba diving courses and fun dives in Damour, Lebanon. PADI certified instructors.',
  keywords: 'scuba diving, courses, Lebanon, Damour, underwater',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
