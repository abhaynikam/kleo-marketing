import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

/**
 * Self-contained layout for legal pages (Terms, Privacy).
 *
 * These pages live outside the marketing `(main)` route group on purpose: they
 * carry only a slim logo bar and a compact footer instead of the full site
 * chrome, so the same URLs embed cleanly inside the Kleo mobile app's webview.
 *
 * Pass `embed` (from `?embed=1`) to strip even the logo bar and footer nav —
 * useful when the page is shown inside an in-app screen that already has its
 * own navigation.
 */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  children,
  embed = false,
}: {
  title: string
  lastUpdated: string
  intro?: React.ReactNode
  children: React.ReactNode
  embed?: boolean
}) {
  return (
    <div className="flex min-h-full flex-col bg-white">
      {!embed && (
        <header className="border-b border-gray-200">
          <Container className="flex items-center justify-between py-5">
            <Link href="/" aria-label="Home">
              <Logo className="h-9 w-auto" />
            </Link>
            <nav className="flex gap-6 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-gray-900">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy
              </Link>
            </nav>
          </Container>
        </header>
      )}

      <main className="flex-auto py-14 sm:py-20">
        <Container className="max-w-3xl!">
          <p className="text-sm font-semibold tracking-wide text-cyan-600 uppercase">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>

          {intro && (
            <div className="mt-8 text-base/7 text-gray-700">{intro}</div>
          )}

          <div
            className={
              'mt-10 text-base/7 text-gray-700 ' +
              // Headings
              '[&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 ' +
              '[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-900 ' +
              // Body
              '[&_p]:mt-4 ' +
              '[&_a]:font-medium [&_a]:text-cyan-600 [&_a]:underline hover:[&_a]:text-cyan-700 ' +
              '[&_strong]:font-semibold [&_strong]:text-gray-900 ' +
              // Lists
              '[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 ' +
              '[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 ' +
              '[&_li]:pl-1 ' +
              // Dividers
              '[&_hr]:my-12 [&_hr]:border-gray-200'
            }
          >
            {children}
          </div>
        </Container>
      </main>

      {!embed && (
        <footer className="border-t border-gray-200">
          <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-gray-500 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Navio Labs. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </nav>
          </Container>
        </footer>
      )}
    </div>
  )
}
