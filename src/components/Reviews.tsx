'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Finally, one place for everything.',
    body: 'I used to open four different banking apps just to know where I stood. Kleo pulls it all into a single net-worth number and I check it once a day. That’s it.',
    author: 'Priya M.',
    rating: 5,
  },
  {
    title: 'The categorization just works.',
    body: 'I dreaded tagging transactions, so I never did it. Kleo sorts them automatically and my spending breakdown is finally accurate without any effort.',
    author: 'Rohan K.',
    rating: 5,
  },
  {
    title: 'Cash flow finally makes sense.',
    body: 'Seeing money-in vs money-out month over month changed how I spend. I caught two subscriptions I’d completely forgotten about in the first week.',
    author: 'Ananya S.',
    rating: 5,
  },
  {
    title: 'My mutual funds and stocks, together.',
    body: 'I had funds in one app and stocks in another. Now returns and P&L sit side by side. It’s the first time I’ve actually understood my portfolio.',
    author: 'Vikram T.',
    rating: 5,
  },
  {
    title: 'Beautiful and readable.',
    body: 'Most finance apps are cluttered. Kleo’s numbers are big, clear, and easy to read at a glance. It doesn’t feel like a chore to open.',
    author: 'Meera D.',
    rating: 5,
  },
  {
    title: 'Statement import saved me hours.',
    body: 'I uploaded a few months of PDF statements and Kleo pulled everything in and categorized it. Onboarding my history took minutes, not an afternoon.',
    author: 'Arjun P.',
    rating: 5,
  },
  {
    title: 'No more month-end surprises.',
    body: 'I always knew roughly where my money went. “Roughly” was the problem. Now I actually know, and I’ve started saving because of it.',
    author: 'Sneha R.',
    rating: 5,
  },
  {
    title: 'Net worth in real time is addictive.',
    body: 'Watching one number reflect every account made me care about it. Small habit, big change in how I think about money.',
    author: 'Karthik V.',
    rating: 5,
  },
  {
    title: 'It just stays current.',
    body: 'The best part is that I don’t maintain it. I connected my accounts once and Kleo keeps itself up to date. Set and forget.',
    author: 'Isha B.',
    rating: 5,
  },
  {
    title: 'Insurance in one place too.',
    body: 'I keep forgetting renewal dates. Having policies and premiums alongside everything else means one less thing slipping through the cracks.',
    author: 'Nikhil A.',
    rating: 5,
  },
  {
    title: 'Replaced my spreadsheet.',
    body: 'I maintained a net-worth spreadsheet for years. Kleo does the same thing automatically and looks a whole lot better doing it.',
    author: 'Divya N.',
    rating: 5,
  },
  {
    title: 'Free and genuinely useful.',
    body: 'I expected a paywall on everything good. There isn’t one. It’s just a clear view of my finances, for free.',
    author: 'Sameer J.',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let [animationDelay] = useState(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  })

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <div className="sm:flex sm:flex-col sm:items-center">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-sm ring-1 ring-gray-200">
            <StarRating rating={5} />
            <span className="text-sm font-semibold text-gray-900">
              4.9 out of 5
            </span>
          </div>
          <h2
            id="reviews-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-center sm:text-4xl"
          >
            People finally understand their money.
          </h2>
          <p className="mt-2 text-lg text-gray-600 sm:text-center">
            Here’s what early Kleo users say after connecting their accounts.
          </p>
        </div>
        <ReviewGrid />
      </Container>
    </section>
  )
}
