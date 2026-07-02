'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

import { Container } from '@/components/Container'

function CountUp({
  value,
  format = (v: number) => String(v),
}: {
  value: number
  format?: (value: number) => string
}) {
  let ref = useRef<HTMLSpanElement>(null)
  let inView = useInView(ref, { once: true, margin: '-60px' })
  let shouldReduceMotion = useReducedMotion()
  let [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }
    if (shouldReduceMotion) {
      setDisplay(value)
      return
    }
    let controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, shouldReduceMotion])

  return <span ref={ref}>{format(display)}</span>
}

const stats = [
  {
    id: 'setup',
    label: 'from download to your full picture',
    value: <CountUp value={60} format={(v) => `${v} sec`} />,
  },
  {
    id: 'auto',
    label: 'of transactions categorized for you',
    value: <CountUp value={100} format={(v) => `${v}%`} />,
  },
  {
    id: 'price',
    label: 'to use — free, no credit card',
    value: '₹0',
  },
  {
    id: 'view',
    label: 'view of everything you own and owe',
    value: <CountUp value={1} />,
  },
]

export function Stats() {
  return (
    <section aria-label="Kleo by the numbers" className="py-4 sm:py-8">
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-gray-200 ring-1 ring-gray-200 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-2 bg-white px-6 py-8 transition-colors hover:bg-cyan-50/60 sm:px-8 sm:py-10"
            >
              <dd className="order-first bg-gradient-to-r from-[#6C4EF5] to-[#4D8BFF] bg-clip-text text-4xl font-semibold tracking-tight text-transparent tabular-nums sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="text-sm text-gray-600">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
