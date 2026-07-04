import { type Metadata } from 'next'

import { LegalPage } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Get help with Kleo — how to import your statements, manage your data, and reach the Navio Labs team.',
}

const CONTACT_EMAIL = 'abhay@naviolabs.co'

export default async function SupportPage({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>
}) {
  const { embed } = await searchParams

  return (
    <LegalPage
      title="How can we help?"
      eyebrow="Support"
      embed={embed === '1' || embed === 'true'}
      intro={
        <p>
          Kleo gives you one clear picture of your money. If something isn&rsquo;t
          working the way you expect, or you just have a question, we&rsquo;re
          here to help. Email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{' '}
          and we&rsquo;ll get back to you.
        </p>
      }
    >
      <h2>Contact us</h2>
      <p>
        The fastest way to reach us is by email at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. To help us
        resolve things quickly, please include:
      </p>
      <ul>
        <li>The phone number you use to sign in to Kleo.</li>
        <li>Your device and OS (for example, iPhone 15 / iOS 18).</li>
        <li>
          A short description of what you were doing and what went wrong — a
          screenshot helps a lot.
        </li>
      </ul>
      <p>
        Please don&rsquo;t send full bank statements or passwords by email. If we
        need a specific detail to reproduce an issue, we&rsquo;ll ask for exactly
        what we need.
      </p>

      <h2>Getting started</h2>
      <p>
        Download Kleo from the App Store or Play Store and sign in with your
        phone number. From there, you build your money picture by importing the
        statements and reports your bank, card, and investment providers already
        give you.
      </p>
      <ul>
        <li>
          <strong>Import a statement.</strong> Upload the PDF or CSV your
          provider gives you and Kleo reads the transactions and balances from
          it in one go — you don&rsquo;t type them in one by one.
        </li>
        <li>
          <strong>Add entries manually.</strong> Prefer to enter something
          yourself? You can add and edit transactions, accounts, and holdings
          anytime.
        </li>
        <li>
          <strong>Review your categories.</strong> Kleo categorizes
          transactions automatically. You can change any category with a tap.
        </li>
      </ul>

      <h2>Frequently asked questions</h2>

      <h3>Does Kleo connect to my bank?</h3>
      <p>
        No. Kleo doesn&rsquo;t link to your bank or access your accounts. Your
        data gets into Kleo only when you upload a statement or report (PDF or
        CSV) or enter it manually — nothing is pulled from your bank
        automatically.
      </p>

      <h3>How do I import a statement?</h3>
      <p>
        Open the import screen in the app and choose the PDF or CSV file your
        bank, card, or broker provided. Kleo reads the transactions and balances
        from it and adds them to your account. If a particular statement
        doesn&rsquo;t import cleanly, email us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and let us know
        which provider it&rsquo;s from so we can improve support for that format.
      </p>

      <h3>How does the AI categorization work?</h3>
      <p>
        For transactions that local rules can&rsquo;t match, Kleo can use AI to
        suggest a category. You connect your own Claude or OpenAI API key in the
        app under AI Settings, and Kleo uses it to tag those transactions. Any
        usage charged by your AI provider is billed to your own key. AI
        suggestions can be wrong — you can always correct a category with a tap.
      </p>

      <h3>Is my net worth always up to date?</h3>
      <p>
        Kleo updates your net worth whenever you add a new statement or entry.
        Because Kleo works from the data you import rather than a live bank
        connection, the numbers reflect the most recent statements you&rsquo;ve
        added.
      </p>

      <h3>Does Kleo give financial or investment advice?</h3>
      <p>
        No. Kleo helps you understand your own finances in one place — it
        doesn&rsquo;t recommend what to buy, sell, or hold. Any figures and
        insights are for information only. See our{' '}
        <a href="/terms">Terms of Service</a> for details.
      </p>

      <h3>Is Kleo really free?</h3>
      <p>
        Yes — Kleo is free to use right now, with no credit card required. If we
        introduce paid features later, we&rsquo;ll make the pricing clear before
        you&rsquo;re charged.
      </p>

      <h2>Your account and data</h2>
      <p>
        You&rsquo;re in control of the data you bring into Kleo. You can edit or
        remove entries in the app, and you can request deletion of your account
        and associated data by emailing{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. To learn how we
        handle your information, read our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Report a problem or share feedback</h2>
      <p>
        Found a bug, hit something confusing, or have an idea that would make
        Kleo better? We genuinely want to hear it. Write to us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — every message
        reaches the team.
      </p>
    </LegalPage>
  )
}
