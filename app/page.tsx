import SocialBar from './(sections)/SocialBar'
import Pricing from './(sections)/Pricing'
import PaymentMethods from './(sections)/PaymentMethods'
import Features from './(sections)/Features'
import FAQ from './(sections)/FAQ'
import Footer from './(sections)/Footer'
import SectionDivider from '@/components/SectionDivider'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Title Section with Logo */}
      <section className="py-8 sm:py-12 bg-k-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Logo className="text-4xl lg:text-5xl" />
          </div>
        </div>
      </section>
      <SectionDivider variant="accent" className="my-6 sm:my-8" />
      
      {/* Our Services */}
      <section id="services" className="py-8 sm:py-12">
        <Pricing />
      </section>
      <SectionDivider variant="accent" className="my-6 sm:my-8" />
      
      {/* Payment Methods */}
      <PaymentMethods />
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      
      {/* Why Choose Kwaret */}
      <section id="features" className="py-8 sm:py-12">
        <Features />
      </section>
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      
      {/* Connect with Us */}
      <SocialBar />
      <SectionDivider variant="subtle" className="my-6 sm:my-8" />
      
      {/* FAQ */}
      <section id="faq" className="py-8 sm:py-12">
        <FAQ />
      </section>
      <Footer />
    </main>
  )
}
