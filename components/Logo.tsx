import Image from 'next/image'

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image 
        src="/kwaret-logo.png" 
        alt="Kwaret TN" 
        width={44} 
        height={44} 
        className="rounded-full" 
        priority
      />
      {showText && (
        <span className="ml-2 font-semibold tracking-wide text-k-white">
          Kwaret TN
        </span>
      )}
    </div>
  )
}
