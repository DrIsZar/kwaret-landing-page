'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Facebook, Instagram, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { socials } from '@/lib/socials'

interface SocialModalProps {
  isOpen: boolean
  onClose: () => void
  product?: string
  tier?: string
}

export default function SocialModal({ isOpen, onClose, product, tier }: SocialModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Apply styles to prevent scrolling without moving the page
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
      document.documentElement.style.overflow = 'hidden'
      
      // Prevent any scroll events
      const preventScroll = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      const preventKeyScroll = (e: KeyboardEvent) => {
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          e.preventDefault()
        }
      }
      
      // Add scroll prevention listeners
      document.addEventListener('wheel', preventScroll, { passive: false })
      document.addEventListener('touchmove', preventScroll, { passive: false })
      document.addEventListener('keydown', preventKeyScroll, { passive: false })
      
      // Store the prevent function for cleanup
      const cleanup = () => {
        document.removeEventListener('wheel', preventScroll)
        document.removeEventListener('touchmove', preventScroll)
        document.removeEventListener('keydown', preventKeyScroll)
      }
      
      return cleanup
    } else {
      // Restore scroll when modal closes
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      
      // Don't force scroll position - let the page maintain its natural position
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleSocialClick = (platform: keyof typeof socials) => {
    let message = ''
    
    if (product && tier) {
      message = `Hi Kwaret, I'm interested in ${product} — ${tier}.`
    } else {
      message = 'Hi Kwaret, I would like to make a purchase.'
    }

    const url = `${socials[platform]}${platform === 'messenger' ? `?text=${encodeURIComponent(message)}` : ''}`
    window.open(url, '_blank')
    onClose()
  }

  const socialOptions = [
    {
      key: 'instagram' as const,
      icon: Instagram,
      label: 'Instagram',
      description: 'Follow us and send a DM'
    },
    {
      key: 'facebook' as const,
      icon: Facebook,
      label: 'Facebook',
      description: 'Visit our page and message us'
    },
    {
      key: 'discord' as const,
      icon: MessageSquare,
      label: 'Discord',
      description: 'Join our community server'
    }
  ]

  if (!mounted) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                type: "spring", 
                duration: 0.4,
                bounce: 0.1
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-k-yellow border-2 border-k-black rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md mx-auto my-auto max-h-[90vh] overflow-y-auto relative"
              style={{ 
                position: 'relative',
                zIndex: 10000
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4">
                <div className="flex-1 pr-4">
                  <h3 
                    id="modal-title"
                    className="text-lg sm:text-xl font-bold text-k-black leading-tight"
                  >
                    Choose Platform
                  </h3>
                  <p 
                    id="modal-description"
                    className="text-k-black/70 text-sm mt-1 leading-relaxed"
                  >
                    Select your preferred way to contact us
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-k-black/70 hover:text-k-black hover:bg-k-black/10 rounded-full p-2 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>

              {/* Social Options */}
              <div className="px-6 pb-4 space-y-2">
                {socialOptions.map(({ key, icon: Icon, label, description }) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      onClick={() => handleSocialClick(key)}
                      className="w-full justify-start p-3 sm:p-4 h-auto bg-k-black hover:bg-k-black/90 text-k-white border-2 border-k-black hover:border-k-black/80 transition-all duration-300 rounded-xl group min-h-[60px] sm:min-h-[64px] shadow-lg hover:shadow-xl"
                      aria-label={`Contact us via ${label}`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 w-full">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-k-white/20 group-hover:bg-k-white/30 transition-colors duration-300 flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-k-white" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <div className="font-semibold text-sm sm:text-base truncate text-k-white">{label}</div>
                          <div className="text-xs sm:text-sm text-k-white/80 truncate">{description}</div>
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="border-t border-k-black/20 pt-4">
                  <p className="text-xs text-k-black/60 text-center leading-relaxed">
                    All platforms offer the same services and support
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
