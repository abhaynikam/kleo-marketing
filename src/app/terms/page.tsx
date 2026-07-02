import { type Metadata } from 'next'

import { LegalPage } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of the Kleo app and website, operated by Navio Labs.',
}

const CONTACT_EMAIL = 'abhay@naviolabs.co'

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>
}) {
  const { embed } = await searchParams

  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="July 2, 2026"
      embed={embed === '1' || embed === 'true'}
      intro={
        <p>
          These Terms of Service (<strong>&ldquo;Terms&rdquo;</strong>) are a
          binding agreement between you and{' '}
          <strong>Navio Labs</strong> (<strong>&ldquo;Navio Labs&rdquo;</strong>,{' '}
          <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>,
          or <strong>&ldquo;our&rdquo;</strong>), the operator of the{' '}
          <strong>Kleo</strong> mobile application and website (together, the{' '}
          <strong>&ldquo;Service&rdquo;</strong>). By downloading, accessing, or
          using the Service, you agree to these Terms. If you do not agree, do
          not use the Service.
        </p>
      }
    >
      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and capable of forming a binding
        contract to use the Service. The Service is intended for personal, non-
        commercial use by residents of India. By using the Service you represent
        and warrant that you meet these requirements and that the information you
        provide is accurate and complete.
      </p>

      <h2>2. What Kleo is — and what it is not</h2>
      <p>
        Kleo is a personal-finance tool that helps you view and organise your own
        financial information — such as transactions, balances, investments, and
        insurance policies — in one place. Kleo aggregates and displays
        information; it does not move money, execute transactions, or hold your
        funds.
      </p>
      <p>
        <strong>
          Kleo does not provide financial, investment, tax, legal, or accounting
          advice.
        </strong>{' '}
        Nothing in the Service is a recommendation to buy, sell, or hold any
        security, fund, insurance product, or other financial instrument. Any
        figures, categorisations, net-worth calculations, or insights are for
        informational purposes only, may be inaccurate or out of date, and should
        not be relied upon as the basis for any financial decision. You are solely
        responsible for your financial decisions and should consult a qualified
        professional before acting.
      </p>

      <h2>3. Your account</h2>
      <p>
        You sign in using your phone number. You are responsible for maintaining
        the security of your account and device, for all activity that occurs
        under your account, and for keeping your contact details current. Notify
        us promptly at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect any
        unauthorised use. We may suspend or terminate accounts that we reasonably
        believe are being misused.
      </p>

      <h2>4. Connected accounts and third-party services</h2>
      <p>
        The Service lets you connect third-party sources — including banks, card
        issuers, account aggregators, brokers, and mutual-fund platforms — and to
        import statements. These third parties are outside our control and are
        governed by their own terms and privacy policies. You authorise us to
        access and process data from the sources you connect solely to provide the
        Service to you.
      </p>
      <p>
        We are not responsible for the availability, accuracy, timeliness, or
        completeness of data supplied by third parties, or for any act or omission
        of any third party. Balances, holdings, and transactions shown in Kleo may
        be delayed or incorrect; you should always verify important figures
        directly with your financial institution.
      </p>

      <h2>5. AI features and your API keys</h2>
      <p>
        Some features — such as automatic categorisation — use artificial
        intelligence. To use these features you may supply your own third-party AI
        provider API key (for example, Anthropic Claude or OpenAI). When you do:
      </p>
      <ul>
        <li>
          You authorise Kleo to use that key to process relevant data (such as
          transaction descriptions) through the provider you have chosen.
        </li>
        <li>
          You are responsible for your use of that provider, for complying with
          its terms, and for any fees, charges, or usage limits the provider
          applies to your key.
        </li>
        <li>
          AI-generated output — including categories and insights — may be wrong,
          incomplete, or misleading. You are responsible for reviewing it and can
          correct it in the app.
        </li>
      </ul>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use the Service for any unlawful, fraudulent, or unauthorised purpose,
          or in violation of any applicable law or regulation;
        </li>
        <li>
          Access data that is not yours, or connect accounts you are not
          authorised to access;
        </li>
        <li>
          Reverse engineer, decompile, scrape, copy, or create derivative works
          from the Service, except to the extent this restriction is prohibited by
          law;
        </li>
        <li>
          Interfere with, disrupt, overload, or attempt to gain unauthorised
          access to the Service or its infrastructure; or
        </li>
        <li>
          Use the Service to build or benchmark a competing product, or resell or
          commercially exploit it without our written permission.
        </li>
      </ul>

      <h2>7. Fees</h2>
      <p>
        Kleo is currently offered free of charge. We reserve the right to
        introduce paid features or plans in the future. If we do, we will make the
        pricing clear before you are charged, and your continued use of any paid
        feature will be subject to the applicable terms. Any costs charged by your
        own AI provider or financial institutions are your responsibility.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The Service, including its software, design, branding, and content
        (excluding your own data), is owned by Navio Labs and its licensors and is
        protected by intellectual-property laws. We grant you a limited, personal,
        non-exclusive, non-transferable, revocable licence to use the Service for
        its intended purpose. All rights not expressly granted are reserved. You
        retain ownership of the data you provide, and you grant us the limited
        rights needed to operate and provide the Service to you.
      </p>

      <h2>9. Disclaimer of warranties</h2>
      <p>
        <strong>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express,
          implied, or statutory.
        </strong>{' '}
        To the fullest extent permitted by law, we disclaim all warranties,
        including implied warranties of merchantability, fitness for a particular
        purpose, accuracy, and non-infringement. We do not warrant that the
        Service will be uninterrupted, secure, error-free, or that any data shown
        will be accurate, complete, or current.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Navio Labs and its founders,
        directors, employees, and agents will not be liable for any indirect,
        incidental, special, consequential, exemplary, or punitive damages, or for
        any loss of profits, savings, data, goodwill, or business, or for any
        financial or investment losses, arising out of or relating to your use of
        (or inability to use) the Service — even if we have been advised of the
        possibility of such damages.
      </p>
      <p>
        To the extent liability cannot be excluded, our total aggregate liability
        arising out of or relating to the Service will not exceed the greater of
        (a) the total amount you paid us for the Service in the twelve months
        before the event giving rise to the claim, or (b) ₹1,000.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Navio Labs and its founders,
        directors, employees, and agents from any claims, liabilities, damages,
        losses, and expenses (including reasonable legal fees) arising out of or
        related to your use of the Service, your data, your connected accounts,
        your use of AI providers, or your breach of these Terms or of any
        applicable law.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the Service at any time and may request deletion of
        your account. We may suspend or terminate your access at any time if you
        breach these Terms, if required by law, or to protect the Service or other
        users. Provisions that by their nature should survive termination —
        including sections 8 through 11 — will survive.
      </p>

      <h2>13. Changes to the Service and these Terms</h2>
      <p>
        We may modify, suspend, or discontinue any part of the Service at any
        time. We may also update these Terms from time to time. When we make
        material changes, we will update the &ldquo;Last updated&rdquo; date above
        and, where appropriate, notify you in the app. Your continued use of the
        Service after changes take effect constitutes acceptance of the revised
        Terms.
      </p>

      <h2>14. Governing law and dispute resolution</h2>
      <p>
        These Terms are governed by the laws of India, without regard to conflict-
        of-law principles. Subject to applicable law, you agree that the courts of
        India will have exclusive jurisdiction over any dispute arising out of or
        relating to these Terms or the Service.
      </p>

      <h2>15. General</h2>
      <p>
        If any provision of these Terms is held to be unenforceable, the remaining
        provisions will remain in full effect. Our failure to enforce any right or
        provision is not a waiver of it. These Terms, together with the{' '}
        <a href="/privacy">Privacy Policy</a>, are the entire agreement between you
        and us regarding the Service. You may not assign these Terms without our
        consent; we may assign them in connection with a merger, acquisition, or
        sale of assets.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these Terms? Contact Navio Labs at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  )
}
