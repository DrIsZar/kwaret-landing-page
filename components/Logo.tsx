import Image from 'next/image'

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-4 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-k-yellow/20 rounded-full blur-lg scale-110" />
        <Image 
          src="/kwaret-logo.png" 
          alt="Kwaret TN" 
          width={64} 
          height={64} 
          className="rounded-full relative z-10 border-2 border-white shadow-glow" 
          priority
        />
      </div>
      {showText && (
        <span className="font-bold tracking-wide text-white text-2xl lg:text-3xl">
          Kwaret TN
        </span>
      )}
    </div>
  )
}
