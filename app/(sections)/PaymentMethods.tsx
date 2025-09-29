'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import GradientIllustrations from '@/components/GradientIllustrations'

// Payment method data with logos and names
const paymentMethods = [
  {
    name: 'Tether (USDT)',
    logo: '/logos/usdt-logo.png',
    description: 'Cryptocurrency payments'
  },
  {
    name: 'Binance Pay',
    logo: '/logos/binance-pay-logo.png',
    description: 'Crypto payment solution'
  },
  {
    name: 'Ooredoo Recharge',
    logo: '/logos/ooredoo-logo.png',
    description: 'Mobile recharge & balance'
  },
  {
    name: 'D17 (La Poste)',
    logo: '/logos/d17-logo.png',
    description: 'Tunisian postal service'
  },
  {
    name: 'PayPal',
    logo: '/logos/paypal-logo.png',
    description: 'International payments'
  },
  {
    name: 'Wise',
    logo: '/logos/wise-logo.png',
    description: 'International transfers'
  }
]

export default function PaymentMethods() {
  return (
    <section className="py-24 bg-k-black relative overflow-hidden">
      <GradientIllustrations variant="floating" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-k-white">
              Payment Methods We Accept
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our secure and convenient payment options
            </p>
          </motion.div>

          {/* Payment Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-k-gray/30 hover:bg-k-gray/50 rounded-xl p-5 transition-all duration-300 border border-k-gray/20 hover:border-k-yellow/30 hover:shadow-glow h-40 flex flex-col items-center justify-center text-center">
                    {/* Logo */}
                    <div className="w-14 h-14 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <Image
                        src={method.logo}
                        alt={`${method.name} logo`}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Name */}
                    <h3 className="font-bold text-k-white text-base group-hover:text-k-yellow transition-colors mb-2 leading-tight">
                      {method.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed px-1">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Scrollable */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-4">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-40"
                  >
                    <div className="bg-k-gray/30 rounded-xl p-4 border border-k-gray/20 h-36 flex flex-col items-center justify-center text-center">
                      {/* Logo */}
                      <div className="w-14 h-14 mb-3 flex items-center justify-center">
                        <Image
                          src={method.logo}
                          alt={`${method.name} logo`}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      </div>
                      
                      {/* Name */}
                      <h3 className="font-bold text-k-white text-sm mb-1 leading-tight">
                        {method.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-xs leading-tight">
                        {method.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex space-x-1">
                  {paymentMethods.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-k-gray/50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-gray-300 text-lg">
              Choose your preferred payment method and get started today!
            </p>
            <p className="text-k-yellow font-medium">
              Secure, fast, and reliable payment processing
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
