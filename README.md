# Kleo — Marketing Site

Marketing website for **Kleo**, the personal finance app that gives you one
clear view of your complete financial picture — spending, net worth, and
investments — pulled in and categorized automatically.

Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion. Adapted
from the Tailwind Plus "Pocket" template and fully rebranded to Kleo (purple
`#6C4EF5`, Poppins).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Screenshots

The device frames on the site render **real Kleo app screenshots** from
`src/images/screenshots/`. Each slot is currently seeded with the onboarding
screen as a placeholder — drop the real screen in with the same filename to
update the site (no code changes needed):

| File               | Screen to capture                                    |
| ------------------ | ---------------------------------------------------- |
| `onboarding.png`   | Onboarding / splash (already captured)               |
| `home.png`         | Home dashboard — net worth, balances, highlights     |
| `transactions.png` | Transactions list — auto-categorized                 |
| `investments.png`  | Investments — mutual funds / ETFs / stocks with P&L  |
| `cards.png`        | Cards screen                                          |
| `spending.png`     | Spending breakdown / cash flow                       |
| `tips.png`         | Tips / insights                                      |

Capture on the iOS simulator with a clean status bar:

```bash
xcrun simctl io booted screenshot src/images/screenshots/home.png
```

Portrait screenshots at the device's native resolution work best — they're
displayed with `object-cover` inside the phone frame.

## Structure

```
src/
  app/(main)/page.tsx      # Landing page composition
  components/              # Hero, PrimaryFeatures, SecondaryFeatures,
                           # CallToAction, Reviews, Faqs, Header, Footer, Logo …
  images/screenshots/      # Real app screenshots (see table above)
  styles/tailwind.css      # Kleo theme tokens (purple palette, navy, radii)
```

Pricing is intentionally omitted — Kleo is free.
