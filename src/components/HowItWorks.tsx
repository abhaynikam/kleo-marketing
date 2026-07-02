import { AnimateIn } from '@/components/AnimateIn'
import { Container } from '@/components/Container'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 14a4.5 4.5 0 0 0 6.36 0l3.18-3.18a4.5 4.5 0 1 0-6.36-6.36L11.6 6.03"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10a4.5 4.5 0 0 0-6.36 0l-3.18 3.18a4.5 4.5 0 1 0 6.36 6.36l1.57-1.57"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SparklesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.5 13.8 9 19.3 10.8 13.8 12.6 12 18.1 10.2 12.6 4.7 10.8 10.2 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15.5 19.3 17.9 21.7 18.7 19.3 19.5 18.5 21.9 17.7 19.5 15.3 18.7 17.7 17.9 18.5 15.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function EyeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

const steps = [
  {
    number: '01',
    icon: LinkIcon,
    title: 'Connect in a minute',
    description:
      'Link your banks, cards, and investment accounts securely — or just upload a statement. Access is read-only, always.',
  },
  {
    number: '02',
    icon: SparklesIcon,
    title: 'Kleo does the busywork',
    description:
      'Every transaction lands pre-categorized. Balances, holdings, and premiums keep themselves in sync. No tagging, no spreadsheets.',
  },
  {
    number: '03',
    icon: EyeIcon,
    title: 'Watch it all make sense',
    description:
      'Spending, cash flow, net worth, and portfolio in one dashboard. Ten seconds a day is all it takes to know exactly where you stand.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How Kleo works"
      className="py-20 sm:py-32"
    >
      <Container>
        <AnimateIn>
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="text-sm font-semibold tracking-wide text-[#6C4EF5] uppercase">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
              From “where did it all go?” to “got it” in three steps.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No setup marathons. No maintenance. Connect once and Kleo keeps
              your money story current on its own.
            </p>
          </div>
        </AnimateIn>
        <div className="relative mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-gray-200 lg:block"
          />
          <ol className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, stepIndex) => (
              <li key={step.number} className="relative">
                <AnimateIn delay={stepIndex * 0.15}>
                  <div className="flex flex-col items-start lg:items-center lg:text-center">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C4EF5] to-[#4D8BFF] text-white shadow-lg shadow-[#6C4EF5]/25">
                      <step.icon className="h-8 w-8" />
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#6C4EF5] ring-1 ring-gray-200">
                        {step.number.slice(1)}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm/6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
