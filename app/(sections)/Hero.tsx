'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import Container from '@/components/Container'
import GradientIllustrations from '@/components/GradientIllustrations'
import SocialModal from '@/components/SocialModal'
import { socials } from '@/lib/socials'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-k-black overflow-hidden">
      {/* Gradient Illustrations */}
      <GradientIllustrations variant="hero" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-start">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left w-full max-w-lg lg:max-w-none"
          >
            <div className="space-y-6 lg:space-y-8">
              {/* Logo with enhanced styling */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-k-yellow/20 rounded-full blur-lg scale-110" />
                  <Logo className="text-3xl lg:text-4xl relative z-10" />
                </div>
              </div>
              
              {/* Main Title with enhanced styling */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-k-white leading-[0.9] tracking-tight">
                  <span className="block">Digital Services</span>
                  <span className="block">at{' '}
                    <span className="relative">
                      <span className="text-k-yellow bg-gradient-to-r from-k-yellow to-k-yellowSoft bg-clip-text text-transparent">
                        Kwaret TN
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-k-yellow to-k-yellowSoft rounded-full opacity-60" />
                    </span>
                  </span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Premium subscriptions, gaming credits, internet plans & software licenses. 
                Trusted by thousands in Tunisia. Fast activation • Warranty • Best prices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                className="text-lg font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="text-lg font-semibold"
                onClick={() => window.open(socials.instagram, '_blank')}
              >
                See Instagram
              </Button>
            </div>
          </motion.div>

          {/* Right column - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-none">
              <div className="absolute inset-0 bg-k-yellow/20 rounded-3xl blur-xl" />
              <div className="relative bg-k-ink border border-k-yellow/30 rounded-3xl p-6 lg:p-8 shadow-glow">
                <div className="text-center space-y-4 lg:space-y-6">
                  <div className="relative mx-auto w-40 h-40 lg:w-48 lg:h-48">
                    <Image
                      src="/foued.jpg"
                      alt="Foued el Beji - Kwaret TN Founder"
                      fill
                      className="rounded-2xl object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-k-white">
                      Foued el Beji
                    </h3>
                    <p className="text-k-yellow font-medium">
                      Founder & CEO
                    </p>
                    <p className="text-gray-300 text-sm">
                      Also known as JelyfishTN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Social Modal */}
      <SocialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
