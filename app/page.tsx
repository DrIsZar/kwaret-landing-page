import Hero from './(sections)/Hero'
import SocialBar from './(sections)/SocialBar'
import Pricing from './(sections)/Pricing'
import PaymentMethods from './(sections)/PaymentMethods'
import Features from './(sections)/Features'
import FAQ from './(sections)/FAQ'
import Footer from './(sections)/Footer'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <Hero />
      <SectionDivider variant="accent" className="my-6 sm:my-8" />
      <SocialBar />
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      <section id="pricing" className="py-8 sm:py-12">
        <Pricing />
      </section>
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      <PaymentMethods />
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      <section id="features" className="py-8 sm:py-12">
        <Features />
      </section>
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      <section id="faq" className="py-8 sm:py-12">
        <FAQ />
      </section>
      <Footer />
    </main>
  )
}
