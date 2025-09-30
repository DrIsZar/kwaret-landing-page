'use client'

import { motion } from 'framer-motion'

interface GradientIllustrationsProps {
  variant?: 'hero' | 'section' | 'floating'
  className?: string
}

export default function GradientIllustrations({ variant = 'section', className = '' }: GradientIllustrationsProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Large background circles - yellow focused */}
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-k-yellow/25 via-k-yellow/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-k-yellow/20 via-k-yellow/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating yellow circles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-k-yellow/60 rounded-full"
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-k-yellow/70 rounded-full"
          animate={{
            y: [15, -15, 15],
            x: [8, -8, 8],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    )
  }

  if (variant === 'floating') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Clean floating yellow circles - minimal and elegant */}
        <motion.div
          className="absolute top-20 right-20 w-3 h-3 bg-k-yellow/50 rounded-full"
          animate={{
            y: [-8, 8, -8],
            x: [-4, 4, -4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 left-16 w-2 h-2 bg-k-yellow/60 rounded-full"
          animate={{
            y: [8, -8, 8],
            x: [4, -4, 4],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-2 h-2 bg-k-yellow/70 rounded-full"
          animate={{
            y: [-6, 6, -6],
            x: [-3, 3, -3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    )
  }

  // Default section variant
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle yellow background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-k-yellow/15 via-k-yellow/8 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-k-yellow/12 via-k-yellow/6 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Minimal floating yellow circles */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-2 h-2 bg-k-yellow/60 rounded-full"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-k-yellow/70 rounded-full"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  )
}
