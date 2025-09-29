'use client'

import { motion } from 'framer-motion'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import BrandBadge from '@/components/BrandBadge'
import { socials } from '@/lib/socials'

// Logo mapping for each service
const serviceLogos = {
  'ChatGPT Plus (Workspace, GPT-5)': '/logos/chatgpt-logo.png',
  'Adobe Creative Cloud (All Apps)': '/logos/adobe-logo.png',
  'Netflix Premium': '/logos/netflix-logo.png',
  'Spotify Premium (Solo)': '/logos/spotify-logo.png',
  'Spotify Premium (Duo)': '/logos/spotify-logo.png',
  'Spotify Premium (Family)': '/logos/spotify-logo.png',
  'YouTube Premium': '/logos/youtube-logo.png',
  'Kwaret TV': '/kwaret-logo.png',
  'Ooredoo Internet / Solde': '/logos/ooredoo-logo.png',
  'Windows 11 Pro Key': '/logos/windows-logo.png',
  'Canva Pro': '/logos/canva-logo.png',
  'Robux (Roblox)': '/logos/roblox-logo.png',
  'PlayStation Cards (France)': '/logos/playstation-logo.png',
  'PlayStation Cards (US)': '/logos/playstation-logo.png',
}

interface PricingCardProps {
  plan: {
    product: string
    tag: string
    bullets: string[]
    tiers: Array<{
      label: string
      price: string
      note?: string
    }>
  }
  index: number
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  const [showAllTiers, setShowAllTiers] = useState(false)
  
  // Set initial display limit based on screen size considerations
  const initialDisplayLimit = 3
  const shouldShowToggle = plan.tiers.length > initialDisplayLimit
  const displayedTiers = showAllTiers ? plan.tiers : plan.tiers.slice(0, initialDisplayLimit)
  
  const handleMessengerClick = (product: string, tier: string) => {
    const message = `Hi Kwaret, I'm interested in ${product} — ${tier}.`
    const url = `${socials.messenger}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="hover:shadow-glow transition-all duration-300 flex flex-col h-full border-k-gray/20 hover:border-k-yellow/30 bg-k-gray/5 hover:bg-k-gray/10">
        <CardHeader className="space-y-4 pb-6">
          <div className="flex items-center justify-center">
            <BrandBadge variant="outline" className="text-xs">
              {plan.tag}
            </BrandBadge>
          </div>
          
          {/* Service Logo */}
          <div className="flex justify-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={serviceLogos[plan.product as keyof typeof serviceLogos] || '/logos/default-logo.png'}
                alt={`${plan.product} Logo`}
                fill
                className={`object-cover ${
                  plan.product.includes('Adobe') ? 'scale-125' : 
                  plan.product.includes('ChatGPT') ? 'scale-100' : 
                  'scale-110'
                }`}
                onError={(e) => {
                  // Fallback to placeholder if logo doesn't exist
                  const target = e.target as HTMLImageElement
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="32" fill="#2C2C2C"/>
                      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#FFD23F" font-family="Arial" font-size="8" font-weight="bold">
                        ${plan.product.split(' ')[0]}
                      </text>
                    </svg>
                  `)}`
                }}
              />
            </div>
          </div>
          
          <CardTitle className="text-lg md:text-xl text-k-white text-center leading-tight min-h-[3.5rem] flex items-center justify-center px-2">
            {plan.product}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col pt-0">
          {/* Features */}
          <ul className="space-y-2 mb-4 sm:mb-6">
            {plan.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-k-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-k-white" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Pricing Tiers - Positioned after features */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {displayedTiers.map((tier, tierIndex) => (
              <div
                key={tierIndex}
                className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-k-gray/30 hover:bg-k-gray/50 border border-k-gray/20 hover:border-k-yellow/30 transition-all duration-200 cursor-pointer group"
                onClick={() => handleMessengerClick(plan.product, tier.label)}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-k-white text-sm sm:text-base truncate group-hover:text-k-yellow transition-colors">{tier.label}</div>
                  {tier.note && (
                    <div className="text-xs sm:text-sm text-k-yellow font-medium mt-1">
                      {tier.note}
                    </div>
                  )}
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="font-bold text-k-yellow text-sm sm:text-base group-hover:text-k-white transition-colors">
                    {tier.price}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Show More/Less Toggle */}
            {shouldShowToggle && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowAllTiers(!showAllTiers)}
                className="w-full flex items-center justify-center gap-2 p-2 sm:p-3 rounded-lg bg-k-gray/20 hover:bg-k-gray/40 border border-k-gray/30 hover:border-k-yellow/40 transition-all duration-200 text-k-white hover:text-k-yellow group"
              >
                <span className="text-sm sm:text-base font-medium">
                  {showAllTiers ? 'Show Less' : `Show ${plan.tiers.length - initialDisplayLimit} More`}
                </span>
                {showAllTiers ? (
                  <ChevronUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                )}
              </motion.button>
            )}
          </div>

          {/* CTA Button */}
          <Button
            className="w-full mt-auto py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform duration-200"
            onClick={() => handleMessengerClick(plan.product, 'any plan')}
          >
            Get it on Messenger
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
