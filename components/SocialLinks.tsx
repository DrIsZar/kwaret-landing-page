'use client'

import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Facebook, 
  Instagram, 
  MessageSquare 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { socials } from '@/lib/socials'

const socialConfig = [
  { key: 'messenger', icon: MessageCircle, label: 'Messenger' },
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'discord', icon: MessageSquare, label: 'Discord' },
] as const

interface SocialLinksProps {
  variant?: 'grid' | 'horizontal' | 'compact'
  className?: string
}

export default function SocialLinks({ variant = 'grid', className = '' }: SocialLinksProps) {
  const handleSocialClick = (key: keyof typeof socials) => {
    window.open(socials[key], '_blank')
  }

  if (variant === 'compact') {
    return (
      <div className={`grid grid-cols-2 gap-3 ${className}`}>
        {socialConfig.map(({ key, icon: Icon, label }) => (
          <Button
            key={key}
            variant="outline"
            size="sm"
            className="justify-start hover:bg-k-yellow hover:text-k-black transition-all duration-300"
            onClick={() => handleSocialClick(key as keyof typeof socials)}
            aria-label={`Visit our ${label} page`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </Button>
        ))}
      </div>
    )
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-4 ${className}`}>
        {socialConfig.map(({ key, icon: Icon, label }) => (
          <motion.div
            key={key}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-36 h-20 flex flex-col gap-2 hover:bg-k-yellow hover:text-k-black transition-all duration-300 border-k-gray/30"
              onClick={() => handleSocialClick(key as keyof typeof socials)}
              aria-label={`Visit our ${label} page`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    )
  }

  // Default grid variant
  return (
    <div className={`hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto ${className}`}>
      {socialConfig.map(({ key, icon: Icon, label }) => (
        <motion.div
          key={key}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full h-20 flex flex-col gap-3 hover:bg-k-yellow hover:text-k-black transition-all duration-300 border-k-gray/30 hover:border-k-yellow/50"
            onClick={() => handleSocialClick(key as keyof typeof socials)}
            aria-label={`Visit our ${label} page`}
          >
            <Icon className="w-7 h-7" />
            <span className="text-sm font-medium">{label}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
