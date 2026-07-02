import { useId } from 'react'
import clsx from 'clsx'

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-fill`}
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C5DF7" />
          <stop offset="1" stopColor="#5B3BF6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${id}-fill)`} />
      {/* stylised "k" */}
      <rect x="11" y="9.5" width="4.6" height="21" rx="2.3" fill="#fff" />
      <path
        d="M15.5 20.2 24.4 11.6"
        stroke="#fff"
        strokeWidth="4.4"
        strokeLinecap="round"
      />
      <path
        d="M15.5 20.2 25 30"
        stroke="#fff"
        strokeWidth="4.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex items-center gap-2.5', className)} {...props}>
      <Logomark className="h-full w-auto flex-none" />
      <span className="text-2xl font-semibold tracking-tight text-gray-900">
        Kleo
      </span>
    </div>
  )
}
