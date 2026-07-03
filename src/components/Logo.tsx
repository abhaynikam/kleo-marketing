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
      {/* radar mark */}
      <g fill="none" stroke="#fff" strokeLinecap="round">
        <path d="M28.21 16.14 A9.3 9.3 0 1 1 21.29 11.29" strokeWidth="2.2" />
        <path d="M25.3 17.69 A6 6 0 1 1 20.83 14.56" strokeWidth="2.2" />
        <path d="M22.83 18.99 A3.2 3.2 0 1 1 20.44 17.33" strokeWidth="1.9" />
        <path d="M20 11.2 L20 20.5" strokeWidth="2.2" />
      </g>
      <circle cx="20" cy="20.5" r="1.9" fill="#fff" />
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
