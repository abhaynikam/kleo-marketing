import clsx from 'clsx'

import { AnimateIn } from '@/components/AnimateIn'
import { Container } from '@/components/Container'

function TagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 4h6.2a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8l-4.2 4.2a2 2 0 0 1-2.8 0L4.6 11.6A2 2 0 0 1 4 10.2V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
    </svg>
  )
}

function FlowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 17V13M9.33 17V7M14.67 17V10M20 17V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ScaleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 19.5 10 14l3.5 3.5L19.5 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10.5h4.5V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PieIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3a9 9 0 1 0 9 9h-9V3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 3.5A9 9 0 0 1 20.5 9H15V3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3 5 6v5c0 4.4 3 8.4 7 10 4-1.6 7-5.6 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WandIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 8V4M4 6h4M17.5 17.5v-3M16 16h3M13 4l1 2.5L16.5 7.5 14 8.5 13 11l-1-2.5L9.5 7.5 12 6.5 13 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 20 9.5-9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="5"
        y="10.5"
        width="14"
        height="9.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10.5V8a4 4 0 0 1 8 0v2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.25" r="1.5" fill="currentColor" />
    </svg>
  )
}

const categoryChips = [
  { name: 'Food', className: 'bg-orange-50 text-orange-700 ring-orange-200' },
  { name: 'Travel', className: 'bg-sky-50 text-sky-700 ring-sky-200' },
  {
    name: 'Subscriptions',
    className: 'bg-violet-50 text-violet-700 ring-violet-200',
  },
  {
    name: 'Utilities',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  },
  { name: 'Health', className: 'bg-rose-50 text-rose-700 ring-rose-200' },
  { name: 'Shopping', className: 'bg-amber-50 text-amber-700 ring-amber-200' },
]

const holdings = [
  { name: 'Mutual funds', change: '+12.4%' },
  { name: 'Stocks', change: '+8.9%' },
  { name: 'ETFs', change: '+10.2%' },
]

const features = [
  {
    name: 'Automatic categorization',
    description:
      'Every transaction is tagged the moment it lands — no manual work, no falling behind, no “uncategorized” pile.',
    icon: TagIcon,
    iconClassName: 'from-[#6C4EF5] to-[#4a2ad9] shadow-[#6C4EF5]/25',
    className: 'lg:col-span-2',
    extra: (
      <div className="mt-6 flex flex-wrap gap-2">
        {categoryChips.map((chip) => (
          <span
            key={chip.name}
            className={clsx(
              'rounded-full px-3 py-1 text-xs font-medium ring-1',
              chip.className,
            )}
          >
            {chip.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: 'Cash-flow tracking',
    description:
      'Money in versus money out, month over month — so you always know if you’re ahead or behind.',
    icon: FlowIcon,
    iconClassName: 'from-[#4D8BFF] to-[#2a5fd0] shadow-[#4D8BFF]/25',
    extra: (
      <div className="mt-6 flex h-12 items-end gap-1.5">
        {[35, 55, 40, 70, 50, 85, 65, 100].map((height, i) => (
          <span
            key={i}
            style={{ height: `${height}%` }}
            className={clsx(
              'w-3 rounded-t-sm',
              i === 7 ? 'bg-[#4D8BFF]' : 'bg-[#4D8BFF]/25',
            )}
          />
        ))}
      </div>
    ),
  },
  {
    name: 'Net-worth overview',
    description:
      'Assets minus liabilities, updated in real time as balances and investments move.',
    icon: ScaleIcon,
    iconClassName: 'from-[#21C16B] to-[#128a49] shadow-[#21C16B]/25',
    extra: (
      <p className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 tabular-nums">
        ₹18.2L{' '}
        <span className="text-sm font-medium text-[#21C16B]">↑ 14.6%</span>
      </p>
    ),
  },
  {
    name: 'Investments in one view',
    description:
      'Mutual funds, ETFs, and stocks with live value and P&L, side by side — no more app-hopping to see your portfolio.',
    icon: PieIcon,
    iconClassName: 'from-[#8b72f7] to-[#5b3bf6] shadow-[#8b72f7]/25',
    className: 'lg:col-span-2',
    extra: (
      <div className="mt-6 grid grid-cols-3 gap-2">
        {holdings.map((holding) => (
          <div
            key={holding.name}
            className="rounded-xl bg-gray-50 px-3 py-2 ring-1 ring-gray-100"
          >
            <p className="text-xs text-gray-500">{holding.name}</p>
            <p className="text-sm font-semibold text-[#21C16B]">
              {holding.change}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Protection & insurance',
    description:
      'Policies, premiums, coverage, and renewal dates in one place — nothing lapses by surprise.',
    icon: ShieldIcon,
    iconClassName: 'from-[#f5934e] to-[#d96b2a] shadow-[#f5934e]/25',
  },
  {
    name: 'Statement import + AI',
    description:
      'Drop in a PDF or CSV statement and AI fills in anything the rules can’t match. Months of history in minutes.',
    icon: WandIcon,
    iconClassName: 'from-[#ec5f9b] to-[#c73576] shadow-[#ec5f9b]/25',
  },
  {
    name: 'Private by design',
    description:
      'Read-only connections and bank-grade encryption. Your data is never sold — what’s yours stays yours.',
    icon: LockIcon,
    iconClassName: 'from-[#333850] to-[#0d132b] shadow-gray-900/25',
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Everything Kleo does for you"
      className="bg-gray-50 py-20 sm:py-32"
    >
      <Container>
        <AnimateIn>
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="text-sm font-semibold tracking-wide text-[#6C4EF5] uppercase">
              Everything included
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
              Not a budgeting nag. A money brain.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kleo doesn’t lecture you about lattes — it quietly keeps a
              perfect, real-time picture of your finances. Here’s what switches
              on the moment you connect an account.
            </p>
          </div>
        </AnimateIn>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature, featureIndex) => (
            <li key={feature.name} className={feature.className}>
              <AnimateIn
                delay={(featureIndex % 3) * 0.1}
                className="h-full"
              >
                <div className="group h-full rounded-3xl bg-white p-8 ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5 hover:ring-[#6C4EF5]/30">
                  <span
                    className={clsx(
                      'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg',
                      feature.iconClassName,
                    )}
                  >
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm/6 text-gray-600">
                    {feature.description}
                  </p>
                  {feature.extra}
                </div>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
