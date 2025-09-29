'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'
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
    >
      <Card className="hover:shadow-glow transition-all duration-300 flex flex-col">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <BrandBadge variant="outline" className="text-xs">
              {plan.tag}
            </BrandBadge>
          </div>
          
          {/* Service Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
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
          
          <CardTitle className="text-xl text-k-white text-center">
            {plan.product}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 flex-grow flex flex-col">
          {/* Features */}
          <ul className="space-y-3">
            {plan.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-k-teal flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-k-white" />
                </div>
                <span className="text-gray-300 text-sm">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Pricing Tiers */}
          <div className="space-y-2 flex-grow">
            {plan.tiers.map((tier, tierIndex) => (
              <div
                key={tierIndex}
                className="flex items-center justify-between p-2.5 rounded-lg bg-k-gray/50 hover:bg-k-gray/70 transition-colors cursor-pointer"
                onClick={() => handleMessengerClick(plan.product, tier.label)}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-k-white text-sm truncate">{tier.label}</div>
                  {tier.note && (
                    <div className="text-xs text-k-yellow font-medium">
                      {tier.note}
                    </div>
                  )}
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="font-bold text-k-yellow text-sm">
                    {tier.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className="w-full"
            onClick={() => handleMessengerClick(plan.product, 'any plan')}
          >
            Get it on Messenger
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
