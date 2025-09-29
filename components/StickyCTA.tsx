'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import { socials } from '@/lib/socials'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show CTA when user has scrolled past 50% of the page
      setIsVisible(scrollTop > documentHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-k-black/95 backdrop-blur-sm border-t border-k-yellow/20 p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <div className="flex items-center gap-3">
            <Logo showText={false} className="text-lg" />
            <span className="text-k-white font-medium text-sm">
              Chat on Messenger
            </span>
          </div>
          <Button
            size="sm"
            onClick={() => window.open(socials.messenger, '_blank')}
            className="flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </Button>
        </div>
      </div>
    </div>
  )
}
