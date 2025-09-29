import { Badge } from '@/components/ui/badge'

interface BrandBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  className?: string
}

export default function BrandBadge({ 
  children, 
  variant = 'default', 
  className 
}: BrandBadgeProps) {
  return (
    <Badge 
      variant={variant} 
      className={`font-medium ${className}`}
    >
      {children}
    </Badge>
  )
}
