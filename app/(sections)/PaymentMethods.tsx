'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/Container'
import GradientIllustrations from '@/components/GradientIllustrations'

// Payment method data with logos, names, and fees
const paymentMethods = [
  {
    name: 'Ooredoo',
    logo: '/logos/ooredoo-logo.png',
    description: 'Mobile recharge & balance',
    fee: '17% fees'
  },
  {
    name: 'D17',
    logo: '/logos/d17-logo.png',
    description: 'Tunisian postal service',
    fee: '1% fees'
  },
  {
    name: 'PayPal',
    logo: '/logos/paypal-logo.png',
    description: 'International payments',
    fee: '0% fees'
  },
  {
    name: 'Crypto',
    logo: '/logos/usdt-logo.png',
    description: 'Cryptocurrency payments',
    fee: 'Network fees apply'
  },
  {
    name: 'Wise',
    logo: '/logos/wise-logo.png',
    description: 'International transfers',
    fee: '0% fees'
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
            
            {/* Fee Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-k-gray/20 rounded-xl p-6 max-w-4xl mx-auto border border-k-yellow/20"
            >
              <h3 className="text-2xl font-bold text-k-yellow mb-4">Fees do apply</h3>
              <div className="text-gray-300 space-y-3">
                <p>Each payment method has fees, for example:</p>
                <div className="bg-k-black/50 rounded-lg p-4 space-y-2">
                  <p>• You want to buy an item for <span className="font-bold text-k-white">10 dinars</span></p>
                  <p>• You choose a payment method that has <span className="font-bold text-k-white">10% fees</span></p>
                  <p>• Your checkout price is then <span className="font-bold text-k-white">10 dinars + 1 dinar (fees) = 11 dinars</span></p>
                </div>
              </div>
            </motion.div>
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
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-5xl mx-auto justify-items-center place-items-center">
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
                  <div className="bg-k-gray/30 hover:bg-k-gray/50 rounded-xl p-5 transition-all duration-300 border border-k-gray/20 hover:border-k-yellow/30 hover:shadow-glow h-44 flex flex-col items-center justify-center text-center w-full max-w-[200px]">
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
                    <p className="text-gray-400 text-xs leading-relaxed px-1 mb-2">
                      {method.description}
                    </p>
                    
                    {/* Fee */}
                    <div className="bg-k-yellow/10 border border-k-yellow/30 rounded-lg px-2 py-1">
                      <p className="text-k-yellow text-xs font-medium">
                        {method.fee}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Scrollable */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-6 snap-x snap-mandatory">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-44 snap-center"
                  >
                    <div className="bg-k-gray/30 rounded-xl p-4 border border-k-gray/20 h-40 flex flex-col items-center justify-center text-center shadow-lg">
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
                      <p className="text-gray-400 text-xs leading-tight mb-2">
                        {method.description}
                      </p>
                      
                      {/* Fee */}
                      <div className="bg-k-yellow/10 border border-k-yellow/30 rounded-lg px-2 py-1">
                        <p className="text-k-yellow text-xs font-medium">
                          {method.fee}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile scroll indicator */}
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  {paymentMethods.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-k-gray/50 transition-colors duration-300"
                    />
                  ))}
                </div>
              </div>
              
              {/* Mobile scroll hint */}
              <div className="text-center mt-3">
                <p className="text-gray-400 text-sm">
                  ← Swipe to see all payment methods →
                </p>
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
