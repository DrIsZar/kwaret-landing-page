'use client'

import { motion } from 'framer-motion'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import BrandBadge from '@/components/BrandBadge'
import SocialModal from '@/components/SocialModal'

// Logo mapping for each service
const serviceLogos = {
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
  'Microsoft 365 (All Apps)': '/logos/microsoft-365-logo.png',
  'Robux (Roblox)': '/logos/roblox-logo.png',
  'PlayStation Cards (France)': '/logos/playstation-logo.png',
  'PlayStation Cards (US)': '/logos/playstation-logo.png',
  'Cursor AI Pro': '/logos/cursor-logo.png',
  'League of Legends (Riot Points)': '/logos/lol-logo.png',
  'Valorant Points (EUW)': '/logos/valorant-logo.png',
  'Valorant Points (TR)': '/logos/valorant-logo.png',
  'Steam Gift Cards (USD)': '/logos/steam-logo.png',
  'Steam Gift Cards (EUR)': '/logos/steam-logo.png',
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
    outOfStock?: boolean
  }
  index: number
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  const [showAllTiers, setShowAllTiers] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Set initial display limit based on screen size considerations
  const initialDisplayLimit = 3
  const shouldShowToggle = plan.tiers.length > initialDisplayLimit
  const displayedTiers = showAllTiers ? plan.tiers : plan.tiers.slice(0, initialDisplayLimit)
  
  const handleBuyClick = (product: string, tier: string) => {
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={plan.outOfStock ? {} : { y: -5 }}
      className="h-full"
    >
      <Card className={`transition-all duration-300 flex flex-col h-full border-k-gray/20 bg-k-gray/5 ${
        plan.outOfStock 
          ? 'opacity-60 border-red-500/30 bg-red-500/5' 
          : 'hover:shadow-glow hover:border-k-yellow/30 hover:bg-k-gray/10'
      }`}>
        <CardHeader className="space-y-4 pb-6">
          <div className="flex items-center justify-center gap-2">
            <BrandBadge variant="outline" className="text-xs">
              {plan.tag}
            </BrandBadge>
            {plan.outOfStock && (
              <BrandBadge variant="outline" className="text-xs bg-red-500/20 border-red-500/50 text-red-400">
                Out of Stock
              </BrandBadge>
            )}
          </div>
          
          {/* Service Logo */}
          <div className="flex justify-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={serviceLogos[plan.product as keyof typeof serviceLogos] || '/logos/default-logo.png'}
                alt={`${plan.product} Logo`}
                fill
                className={
                  plan.product.includes('Microsoft 365')
                    ? 'object-contain scale-90'
                    : plan.product.includes('Robux')
                      ? 'object-contain scale-100'
                      : `object-cover ${
                          plan.product.includes('Adobe') ? 'scale-125' : 
                          'scale-110'
                        }`
                }
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
                className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all duration-200 ${
                  plan.outOfStock 
                    ? 'bg-k-gray/20 border-k-gray/10 cursor-not-allowed opacity-50' 
                    : 'bg-k-gray/30 hover:bg-k-gray/50 border-k-gray/20 hover:border-k-yellow/30 cursor-pointer group'
                }`}
                onClick={plan.outOfStock ? undefined : () => handleBuyClick(plan.product, tier.label)}
              >
                <div className="flex-1 min-w-0">
                  <div className={`font-medium text-sm sm:text-base whitespace-normal break-words transition-colors ${
                    plan.outOfStock ? 'text-gray-500' : 'text-k-white group-hover:text-k-yellow'
                  }`}>{tier.label}</div>
                  {tier.note && (
                    <div className={`text-xs sm:text-sm font-medium mt-1 ${
                      plan.outOfStock ? 'text-gray-500' : 'text-k-yellow'
                    }`}>
                      {tier.note}
                    </div>
                  )}
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className={`font-bold text-sm sm:text-base transition-colors ${
                    plan.outOfStock ? 'text-gray-500' : 'text-k-yellow group-hover:text-k-white'
                  }`}>
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
            className={`w-full mt-auto py-2 sm:py-3 text-sm sm:text-base transition-transform duration-200 ${
              plan.outOfStock ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
            }`}
            onClick={plan.outOfStock ? undefined : () => handleBuyClick(plan.product, 'any plan')}
            disabled={plan.outOfStock}
          >
            {plan.outOfStock ? 'Out of Stock' : 'Buy Now'}
          </Button>
        </CardContent>
      </Card>
      
      {/* Social Modal */}
      <SocialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={plan.product}
        tier='any plan'
      />
    </motion.div>
  )
}
