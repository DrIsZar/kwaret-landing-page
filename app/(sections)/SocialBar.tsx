'use client'

import { motion } from 'framer-motion'
import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'

export default function SocialBar() {
  return (
    <section className="py-24 bg-k-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-k-white">
            Connect With Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Follow us for updates, support, and exclusive offers
          </p>
          
          {/* Desktop Grid */}
          <SocialLinks variant="grid" />

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <SocialLinks variant="horizontal" />
            
            {/* Mobile scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-k-gray/50"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
