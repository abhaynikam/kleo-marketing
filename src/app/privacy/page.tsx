import { type Metadata } from 'next'

import { LegalPage } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Kleo, operated by Navio Labs, collects, uses, and protects your personal and financial information.',
}

const CONTACT_EMAIL = 'abhay@naviolabs.co'

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>
}) {
  const { embed } = await searchParams

  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="July 2, 2026"
      embed={embed === '1' || embed === 'true'}
      intro={
        <p>
          This Privacy Policy explains how{' '}
          <strong>Navio Labs Pvt. Ltd.</strong> (
          <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>,
          or <strong>&ldquo;our&rdquo;</strong>), the operator of the{' '}
          <strong>Kleo</strong> app and website (the{' '}
          <strong>&ldquo;Service&rdquo;</strong>), collects, uses, shares, and
          protects your information. Kleo is a personal-finance app that gives you
          one clear view of your money. Because that means handling sensitive
          financial data, we keep our practices deliberately simple:{' '}
          <strong>
            your financial data is yours, we use it only to provide the Service to
            you, and we do not sell it.
          </strong>
        </p>
      }
    >
      <h2>1. Information we collect</h2>

      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account details</strong> — your phone number (used to sign in)
          and any profile information you choose to add.
        </li>
        <li>
          <strong>Financial information you connect or import</strong> —
          transactions, balances, and holdings pulled from bank and card accounts,
          account aggregators, and brokers you link, as well as data from PDF or
          CSV statements you upload. This can include investments (mutual funds,
          ETFs, stocks) and insurance policies and their renewal dates.
        </li>
        <li>
          <strong>AI provider API keys</strong> — if you enable AI features, the
          Claude or OpenAI API key you supply. This key is stored securely and
          synced to your account so your settings follow you across devices.
        </li>
        <li>
          <strong>Communications</strong> — information you send us when you
          contact support or report an issue.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Device and usage information</strong> — such as device type,
          operating system, app version, and basic interaction and diagnostic data
          used to keep the Service running and to fix problems.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, maintain, and secure the Service;</li>
        <li>
          Aggregate and categorise your transactions and calculate figures such as
          spending breakdowns and net worth;
        </li>
        <li>
          Sync your data and settings across your devices under your account;
        </li>
        <li>Respond to your support requests and communicate with you;</li>
        <li>
          Detect, prevent, and address fraud, abuse, security, and technical
          issues; and
        </li>
        <li>Comply with legal obligations.</li>
      </ul>
      <p>
        We do not use your financial data for advertising, and we do not sell your
        personal information.
      </p>

      <h2>3. AI processing</h2>
      <p>
        When you enable AI categorisation and provide your own AI provider API
        key, relevant data — such as transaction descriptions — may be sent to the
        AI provider you selected (for example, Anthropic or OpenAI) using your key,
        so it can be categorised. That processing is subject to the provider&rsquo;s
        own terms and privacy policy. If you do not want data sent to an AI
        provider, do not enable AI features or do not add an API key. Categorisation
        that can be handled by local rules on your device does not require an AI
        provider.
      </p>

      <h2>4. How we share information</h2>
      <p>
        We do not sell your personal information. We share it only in these limited
        circumstances:
      </p>
      <ul>
        <li>
          <strong>Service providers.</strong> With vendors who help us operate the
          Service — such as cloud hosting and infrastructure providers — who
          process data on our behalf under confidentiality obligations.
        </li>
        <li>
          <strong>Connections you initiate.</strong> With banks, account
          aggregators, brokers, and AI providers that you choose to connect, in
          order to provide the features you requested.
        </li>
        <li>
          <strong>Legal and safety.</strong> When required by law, regulation,
          legal process, or to protect the rights, property, or safety of you, us,
          or others.
        </li>
        <li>
          <strong>Business transfers.</strong> In connection with a merger,
          acquisition, financing, or sale of assets, subject to this Policy.
        </li>
      </ul>

      <h2>5. Data security</h2>
      <p>
        We use reasonable technical and organisational measures — including
        encryption in transit and access controls — designed to protect your
        information. Your AI provider API key is stored securely. However, no
        method of transmission or storage is completely secure, and we cannot
        guarantee absolute security. You are responsible for keeping your device
        and account credentials safe.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain your information for as long as your account is active or as
        needed to provide the Service, and thereafter only as required to comply
        with legal obligations, resolve disputes, and enforce our agreements. When
        you delete your account, we delete or anonymise your personal data within a
        reasonable period, except where retention is required by law.
      </p>

      <h2>7. Your rights and choices</h2>
      <p>Subject to applicable law, you can:</p>
      <ul>
        <li>Access and review the data in your account;</li>
        <li>Correct inaccurate information, including transaction categories;</li>
        <li>Disconnect a linked account or remove your AI provider key at any time;</li>
        <li>Delete your account and associated data; and</li>
        <li>
          Contact us to exercise any privacy rights available to you under
          applicable law.
        </li>
      </ul>
      <p>
        To make any of these requests, use the in-app controls or email us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>8. Data deletion</h2>
      <p>
        You can request deletion of your account and data at any time from within
        the app or by emailing{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Once processed,
        your personal and financial data will be removed from our active systems,
        except for anything we are legally required to keep.
      </p>

      <h2>9. Children&rsquo;s privacy</h2>
      <p>
        The Service is not intended for anyone under 18, and we do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal information, contact us and we will delete it.
      </p>

      <h2>10. International data transfers</h2>
      <p>
        Your information may be processed and stored on servers located in India or
        other countries where we or our service providers operate. Where data is
        transferred across borders, we take steps consistent with applicable law to
        protect it.
      </p>

      <h2>11. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material
        changes, we will update the &ldquo;Last updated&rdquo; date above and,
        where appropriate, notify you in the app. Your continued use of the Service
        after changes take effect constitutes acceptance of the updated Policy.
      </p>

      <h2>12. Contact us</h2>
      <p>
        For any questions, concerns, or requests about this Policy or your data,
        contact Navio Labs at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We take privacy
        issues seriously and will respond as promptly as we reasonably can.
      </p>
    </LegalPage>
  )
}
