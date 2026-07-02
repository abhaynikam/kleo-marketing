import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Is Kleo really free?',
      answer:
        'Yes. Kleo is free to use right now — no credit card, no trial, no paywalled essentials. You get your complete money picture without paying anything.',
    },
    {
      question: 'How does Kleo get my transactions?',
      answer:
        'You bring your data into Kleo by uploading the statements or reports your bank, card, and investment providers give you — PDF or CSV. Kleo reads them and pulls in your transactions and balances. You can also add entries manually anytime.',
    },
    {
      question: 'Do I have to categorize transactions myself?',
      answer:
        'No. Kleo categorizes transactions automatically. Anything it can’t match with local rules can be tagged with AI, and you can always adjust a category with a tap.',
    },
  ],
  [
    {
      question: 'What can I track in Kleo?',
      answer:
        'Spending across cards and bank accounts, bank and credit-card balances, mutual funds, ETFs, and stocks with returns, plus insurance policies and their renewal dates — all in one view.',
    },
    {
      question: 'How is my net worth calculated?',
      answer:
        'Kleo adds up your assets — account balances and investment values — and subtracts your liabilities like credit-card outstanding, then updates that number whenever you add a new statement or entry.',
    },
    {
      question: 'Does Kleo give investment advice?',
      answer:
        'No. Kleo is built to give you one clear view of your finances, not to tell you what to buy or sell. The goal is understanding, so you can make your own better decisions.',
    },
  ],
  [
    {
      question: 'How does the AI categorization work?',
      answer:
        'You can connect your own Claude or OpenAI API key in the app under AI Settings. Kleo uses it to tag transactions that local rules can’t match, and the key syncs securely to your account.',
    },
    {
      question: 'Which platforms is Kleo on?',
      answer:
        'Kleo is a mobile app for iOS and Android. Download it from the App Store or Play Store and sign in with your phone number to get started.',
    },
    {
      question: 'Do I have to enter data manually?',
      answer:
        'Not transaction by transaction — you upload a statement and Kleo reads every transaction from it at once, so you’re not typing each one. Manual entry is there when you want it.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:hello@kleo.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
