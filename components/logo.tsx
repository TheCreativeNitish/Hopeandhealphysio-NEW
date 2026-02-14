import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { container: "h-8 w-8", text: "text-sm", subtext: "text-[10px]" },
    md: { container: "h-9 w-9 sm:h-10 sm:w-10", text: "text-base sm:text-lg", subtext: "text-xs" },
    lg: { container: "h-12 w-12", text: "text-lg sm:text-xl", subtext: "text-sm" },
  }

  const sizes = sizeMap[size]

  return (
    <Link href="/" className={`flex items-center gap-2.5 transition-transform hover:scale-105 ${className}`}>
      {/* Logo Badge */}
      <div className={`flex-shrink-0 flex items-center justify-center rounded-lg text-white shadow-md transition-all hover:shadow-lg overflow-hidden ${sizes.container}`}>
        <Image 
          src="https://ik.imagekit.io/dvl5mhvik/logo.png.png"
          alt="Hope and Heal Logo"
          width={48}
          height={48}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* Text Branding */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold leading-tight text-primary transition-colors hover:text-orange-600 ${sizes.text}`} style={{ fontFamily: '"Montserrat", "Inter", sans-serif', letterSpacing: '0.02em' }}>
            Hope and Heal
          </span>
          <span className={`text-muted-foreground font-medium ${sizes.subtext}`}>
            Physiotherapy
          </span>
        </div>
      )}
    </Link>
  )
}
