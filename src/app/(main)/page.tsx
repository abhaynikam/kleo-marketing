import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Stats } from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PrimaryFeatures />
      <HowItWorks />
      <SecondaryFeatures />
      <Reviews />
      <CallToAction />
      <Faqs />
    </>
  )
}
