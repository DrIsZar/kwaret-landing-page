'use client'

import { useState, useEffect } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileFilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  onApply: () => void
  children: React.ReactNode
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  onApply,
  children,
}: MobileFilterDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-k-black border-l border-k-gray z-50 md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-k-black border-b border-k-gray p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-k-yellow" />
                <h2 className="text-lg font-semibold text-k-white">Filters</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-k-gray rounded-lg transition-colors"
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">{children}</div>

            {/* Footer - Sticky Apply Button */}
            <div className="sticky bottom-0 bg-k-black border-t border-k-gray p-4">
              <Button
                onClick={() => {
                  onApply()
                  onClose()
                }}
                className="w-full"
                size="lg"
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

