import { useId } from 'react'

import { AnimateIn } from '@/components/AnimateIn'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneScreenshot } from '@/components/PhoneFrame'
import { screenshots } from '@/images/screenshots'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C4EF5" />
            <stop offset="1" stopColor="#6C4EF5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4D8BFF" />
            <stop offset="1" stopColor="#4D8BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden mask-[linear-gradient(to_bottom,transparent,white_18%,white_55%,transparent)]"
    >
      <div className="absolute -top-40 left-[8%] h-[420px] w-[420px] rounded-full bg-[#6C4EF5] opacity-[0.10] blur-[120px]" />
      <div className="absolute -top-24 right-[12%] h-[380px] w-[380px] rounded-full bg-[#4D8BFF] opacity-[0.10] blur-[120px]" />
      <div className="absolute top-40 left-[38%] h-[300px] w-[300px] rounded-full bg-[#21C16B] opacity-[0.07] blur-[110px]" />
    </div>
  )
}

const highlights = [
  'Auto-categorized spending',
  'Real-time net worth',
  'Investments in one place',
  'Free — no card required',
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" fill="#21C16B" fillOpacity="0.12" />
      <path
        d="m6.5 10.5 2.2 2.2 4.8-5.4"
        stroke="#21C16B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

const avatars = [
  { initial: 'P', className: 'bg-gradient-to-br from-[#6C4EF5] to-[#4a2ad9]' },
  { initial: 'R', className: 'bg-gradient-to-br from-[#4D8BFF] to-[#2a5fd0]' },
  { initial: 'A', className: 'bg-gradient-to-br from-[#21C16B] to-[#128a49]' },
  { initial: 'M', className: 'bg-gradient-to-br from-[#f5934e] to-[#d96b2a]' },
  { initial: 'V', className: 'bg-gradient-to-br from-[#8b72f7] to-[#5b3bf6]' },
]

function SocialProof() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
      <div className="flex -space-x-2">
        {avatars.map((avatar) => (
          <span
            key={avatar.initial}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white ring-2 ring-white ${avatar.className}`}
          >
            {avatar.initial}
          </span>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
          <span className="ml-1 text-sm font-semibold text-gray-900">4.9</span>
        </div>
        <p className="text-sm text-gray-500">
          Loved by early users who finally know where they stand
        </p>
      </div>
    </div>
  )
}

function FloatingCard({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`pointer-events-none absolute z-10 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-xl shadow-gray-900/10 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}

function UpArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 10.5 7 6l2.5 2.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 4.5H13V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24 lg:pb-32 xl:pb-36">
      <Aurora />
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <AnimateIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 ring-1 ring-cyan-500/20 ring-inset">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Free forever — no paywall, no credit card
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                Every account. Every rupee.{' '}
                <span className="bg-gradient-to-r from-[#6C4EF5] via-[#5b3bf6] to-[#4D8BFF] bg-clip-text text-transparent">
                  One clear picture.
                </span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-lg text-gray-600">
                Kleo connects to your banks, cards, and investments — then does
                the tracking for you. Spending sorted itself. Net worth,
                live. Your whole portfolio, one glance. You just look.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <AppStoreLink />
                <Button href="/#features" variant="outline">
                  <span>See how it works</span>
                </Button>
              </div>
              <SocialProof />
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-gray-700 sm:grid-cols-2"
              >
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckIcon className="h-5 w-5 flex-none" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="relative mx-auto max-w-[366px]">
                <FloatingCard className="top-16 -left-10 hidden animate-float sm:block lg:-left-24">
                  <p className="text-xs font-medium text-gray-500">
                    Salary credited
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#21C16B]">
                    +₹1,20,000
                  </p>
                </FloatingCard>
                <FloatingCard className="top-40 -right-8 hidden animate-float-delayed sm:block lg:-right-20">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6C4EF5]/10 text-[#6C4EF5]">
                      <UpArrowIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Net worth
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        ₹18.2L{' '}
                        <span className="text-xs font-medium text-[#21C16B]">
                          ↑ 14.6%
                        </span>
                      </p>
                    </div>
                  </div>
                </FloatingCard>
                <FloatingCard className="top-72 -left-14 hidden animate-float-slow sm:block lg:-left-28">
                  <p className="text-xs font-medium text-gray-500">
                    3 forgotten subscriptions found
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    ₹1,299<span className="text-xs text-gray-500">/mo</span>
                  </p>
                </FloatingCard>
                <PhoneScreenshot
                  src={screenshots.onboarding}
                  alt="The Kleo app showing your net worth, spending and investments at a glance"
                  className="mx-auto max-w-[366px]"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Built for your whole financial life
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-3 gap-y-3 text-sm font-medium text-gray-500 lg:mx-0 lg:justify-start"
            >
              {[
                'Bank accounts',
                'Credit cards',
                'Mutual funds',
                'ETFs',
                'Stocks',
                'Insurance',
              ].map((name) => (
                <li
                  key={name}
                  className="rounded-full bg-white px-4 py-1.5 text-gray-700 ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:ring-[#6C4EF5]/40"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
