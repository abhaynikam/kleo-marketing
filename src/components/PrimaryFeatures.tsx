'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneScreenshot } from '@/components/PhoneFrame'
import { screenshots } from '@/images/screenshots'

const features = [
  {
    name: 'Every transaction, sorted for you',
    description:
      'Kleo pulls in your credit-card and bank transactions and categorizes each one automatically — food, travel, subscriptions, utilities. No manual tagging, no falling behind.',
    icon: TagIcon,
    screen: screenshots.transactions,
  },
  {
    name: 'Net worth, updated in real time',
    description:
      'Bank balances, credit-card outstanding, and investments add up to a single net-worth number that stays current. See exactly where you stand at a glance.',
    icon: ChartIcon,
    screen: screenshots.home,
  },
  {
    name: 'All your investments in one place',
    description:
      'Mutual funds, ETFs, and stocks — holdings, current value, and returns side by side. Watch your portfolio without hopping between five different apps.',
    icon: TrendIcon,
    screen: screenshots.investments,
  },
]

function TagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#fff" fillOpacity={0.08} />
      <path
        d="M9 9h6.2a2 2 0 0 1 1.42.59l6.8 6.8a2 2 0 0 1 0 2.82l-4.2 4.2a2 2 0 0 1-2.82 0l-6.8-6.8A2 2 0 0 1 9 15.2V9Z"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <circle cx={13} cy={13} r={1.6} fill="#fff" />
    </svg>
  )
}

function ChartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#fff" fillOpacity={0.08} />
      <path
        d="M9 20.5 14 15l3.5 3.5L23 12"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 24h14"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  )
}

function TrendIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#fff" fillOpacity={0.08} />
      <path
        d="M10 19.5 15 14l3 3 5-6"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 11h4v4"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FeaturesDesktop() {
  let [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#6C4EF5" className="animate-spin-slower" />
        </div>
        <div className="z-10 mx-auto w-full max-w-[366px]">
          <TabPanels as={Fragment}>
            <AnimatePresence initial={false} mode="wait">
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name}
                    className="data-selected:not-data-focus:outline-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.35 }}
                    >
                      <PhoneScreenshot
                        src={feature.screen}
                        alt={feature.name}
                        className="relative"
                      />
                    </motion.div>
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory scrollbar-none -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              if (ref) {
                slideRefs.current[featureIndex] = ref
              }
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#6C4EF5"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneScreenshot
                src={feature.screen}
                alt={feature.name}
                className="relative mx-auto w-full max-w-[366px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur-sm sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for understanding your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            One app for your entire financial life.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Kleo connects your accounts and does the tedious work for you — so
            the numbers that matter are always up to date, easy to read, and in
            one place. No spreadsheets, no manual entry.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
