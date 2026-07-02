import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    'Upload your statements and Kleo does the tracking for you. Auto-categorized spending, your net worth in one number, and your whole portfolio in one glance. Free to use.',
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
