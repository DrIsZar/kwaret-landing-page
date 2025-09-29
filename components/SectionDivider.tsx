interface SectionDividerProps {
  variant?: 'subtle' | 'accent' | 'none'
  className?: string
}

export default function SectionDivider({ variant = 'subtle', className = '' }: SectionDividerProps) {
  if (variant === 'none') return null

  if (variant === 'accent') {
    return (
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-k-yellow/30 to-transparent ${className}`} />
    )
  }

  // Default subtle variant
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-k-gray/20 to-transparent ${className}`} />
  )
}
