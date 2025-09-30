'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'
import SocialModal from '@/components/SocialModal'
import { socials } from '@/lib/socials'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <footer className="bg-k-black border-t border-k-gray pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 space-y-12"
        >
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand section */}
            <div className="space-y-6">
              <Logo className="text-2xl" />
              <p className="text-gray-300 leading-relaxed">
                Kwaret TN - Your trusted source for premium digital upgrades and subscriptions. 
                Fast activation and full warranty.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading font-semibold text-k-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#pricing" 
                    className="text-gray-300 hover:text-k-yellow transition-colors"
                  >
                    Premium Upgrades
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    className="text-gray-300 hover:text-k-yellow transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    className="text-gray-300 hover:text-k-yellow transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery" 
                    className="text-gray-300 hover:text-k-yellow transition-colors"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Social links */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading font-semibold text-k-white">
                Follow Us
              </h3>
              <SocialLinks variant="compact" />
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-k-gray pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Kwaret TN. All rights reserved. | Founded by Foued el Beji (JelyfishTN)
              </p>
              <p className="text-gray-400 text-sm">
                Website by <span className="text-k-yellow font-medium">VeltoTech LLC</span>
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a 
                  href={socials.messenger} 
                  className="text-gray-400 hover:text-k-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
                <a 
                  href={socials.discord} 
                  className="text-gray-400 hover:text-k-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
      
      {/* Social Modal */}
      <SocialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  )
}
