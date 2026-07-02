import Image from 'next/image'

import { AnimateIn } from '@/components/AnimateIn'
import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import qrCode from '@/images/qr-code.svg'

export function CallToAction() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#6C4EF5" className="animate-spin-slower" />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C4EF5] opacity-20 blur-[160px]"
      />
      <Container className="relative">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Your money already has a story.{' '}
              <span className="bg-gradient-to-r from-[#ab98f9] to-[#4D8BFF] bg-clip-text text-transparent">
                Start reading it.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              One minute from now, your spending, net worth, and investments
              can be in a single view. Free forever — no credit card, no
              catches.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row">
              <AppStoreLink color="white" />
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="rounded-xl bg-white p-2">
                  <Image src={qrCode} alt="QR code to download Kleo" className="h-20 w-20" unoptimized />
                </div>
                <p className="max-w-36 text-left text-sm text-gray-300">
                  Or scan with your phone to download
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Read-only bank access · Your data stays yours · Setup in ~60
              seconds
            </p>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}
