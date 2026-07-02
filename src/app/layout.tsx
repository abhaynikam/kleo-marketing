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
    default: 'Kleo — Your complete money picture.',
  },
  description:
    'Kleo securely connects to your bank accounts and gives you one clear view of your complete financial picture — spending, net worth, and investments — all automatically, so you can make better money decisions.',
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
