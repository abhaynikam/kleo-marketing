import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Kleo',
    default: 'Kleo — Every account. Every rupee. One clear picture.',
  },
  description:
    'Kleo connects to your banks, cards, and investments — then does the tracking for you. Auto-categorized spending, real-time net worth, and your whole portfolio in one glance. Free forever.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('bg-gray-50 antialiased', poppins.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
