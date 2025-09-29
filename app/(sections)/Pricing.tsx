'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import PricingCard from '@/components/PricingCard'
import GradientIllustrations from '@/components/GradientIllustrations'
import { plans } from '@/lib/pricing'
import { socials } from '@/lib/socials'

export default function Pricing() {
  const handleMessengerClick = (product: string, tier: string) => {
    const message = `Hi Kwaret, I'm interested in ${product} — ${tier}.`
    const url = `${socials.messenger}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className="py-24 bg-k-black relative overflow-hidden">
      <GradientIllustrations variant="section" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-k-white">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From premium subscriptions to gaming credits, internet plans, and software licenses. 
              All services come with warranty and 24/7 support.
            </p>
          </div>

          {/* Group products by category */}
          <div className="space-y-12">
            {/* Premium Subscriptions */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-k-yellow mb-2">
                  🔥 Premium Subscriptions
                </h3>
                <p className="text-gray-400">Popular streaming and productivity services</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {plans.filter(plan => 
                  plan.tag === '🔥 Popular' || 
                  plan.tag === 'Music Streaming' || 
                  plan.tag === 'Video Streaming'
                ).map((plan, index) => (
                  <PricingCard key={plan.product} plan={plan} index={index} />
                ))}
              </div>
            </div>

            {/* Internet & Mobile */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-k-yellow mb-2">
                  📱 Internet & Mobile
                </h3>
                <p className="text-gray-400">Data plans and mobile services</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {plans.filter(plan => plan.tag === 'Internet & Mobile').map((plan, index) => (
                  <PricingCard key={plan.product} plan={plan} index={index} />
                ))}
              </div>
            </div>

            {/* Software & Licenses */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-k-yellow mb-2">
                  💻 Software & Licenses
                </h3>
                <p className="text-gray-400">Professional software and design tools</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {plans.filter(plan => plan.tag === 'Software').map((plan, index) => (
                  <PricingCard key={plan.product} plan={plan} index={index} />
                ))}
              </div>
            </div>

            {/* Gaming Credits */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-k-yellow mb-2">
                  🎮 Gaming Credits
                </h3>
                <p className="text-gray-400">Robux, PlayStation cards, and gaming currencies</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {plans.filter(plan => plan.tag === 'Gaming').map((plan, index) => (
                  <PricingCard key={plan.product} plan={plan} index={index} />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-gray-300">
              Don&apos;t see what you&apos;re looking for? We have many more services available.
            </p>
            <Button
              size="lg"
              onClick={() => window.open(socials.messenger, '_blank')}
            >
              Ask us on Messenger
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
