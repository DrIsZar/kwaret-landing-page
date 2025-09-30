'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, BadgePercent } from 'lucide-react'
import Container from '@/components/Container'
import GradientIllustrations from '@/components/GradientIllustrations'

const features = [
  {
    icon: Zap,
    title: 'Quick Activation',
    description: 'Get your premium accounts activated shortly after payment confirmation.'
  },
  {
    icon: ShieldCheck,
    title: 'Full Warranty',
    description: 'All our services come with warranty. If anything goes wrong, we fix it for free.'
  },
  {
    icon: BadgePercent,
    title: 'Best Prices',
    description: 'We offer the most competitive prices in Tunisia with regular discounts and offers.'
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-k-black relative overflow-hidden">
      <GradientIllustrations variant="floating" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-k-white">
              Why Choose Kwaret TN?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;ve been serving thousands of customers across Tunisia with premium subscriptions, 
              gaming credits, internet plans, and software licenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center space-y-6"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-k-yellow rounded-full flex items-center justify-center shadow-glow">
                    <feature.icon className="w-10 h-10 text-k-black" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-k-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-k-yellow">2500+</div>
                <div className="text-gray-300 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-k-yellow">12+</div>
                <div className="text-gray-300 text-sm">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-k-yellow">99%</div>
                <div className="text-gray-300 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
