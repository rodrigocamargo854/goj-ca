interface PixelIconProps {
  type: "bible" | "rosary" | "host" | "halo"
  size?: number
  className?: string
}

export default function PixelIcon({ type, size = 16, className = "" }: PixelIconProps) {
  const icons = {
    bible: (
      <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
        <rect x="2" y="2" width="12" height="12" fill="currentColor" />
        <rect x="4" y="4" width="8" height="1" fill="white" />
        <rect x="4" y="6" width="8" height="1" fill="white" />
        <rect x="4" y="8" width="6" height="1" fill="white" />
        <rect x="4" y="10" width="8" height="1" fill="white" />
        <rect x="7" y="6" width="2" height="4" fill="#C8102E" />
      </svg>
    ),
    rosary: (
      <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
        <circle cx="8" cy="3" r="1" fill="currentColor" />
        <circle cx="8" cy="6" r="1" fill="currentColor" />
        <circle cx="8" cy="9" r="1" fill="currentColor" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <rect x="7" y="4" width="2" height="1" fill="currentColor" />
        <rect x="7" y="7" width="2" height="1" fill="currentColor" />
        <rect x="7" y="10" width="2" height="1" fill="currentColor" />
        <rect x="6" y="13" width="4" height="2" fill="#C8102E" />
      </svg>
    ),
    host: (
      <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
        <circle cx="8" cy="8" r="6" fill="white" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="4" width="4" height="8" fill="#C8102E" />
        <rect x="4" y="6" width="8" height="4" fill="#C8102E" />
      </svg>
    ),
    halo: (
      <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
        <rect x="2" y="6" width="2" height="4" fill="#FFD700" />
        <rect x="4" y="4" width="2" height="2" fill="#FFD700" />
        <rect x="4" y="10" width="2" height="2" fill="#FFD700" />
        <rect x="6" y="2" width="4" height="2" fill="#FFD700" />
        <rect x="6" y="12" width="4" height="2" fill="#FFD700" />
        <rect x="10" y="4" width="2" height="2" fill="#FFD700" />
        <rect x="10" y="10" width="2" height="2" fill="#FFD700" />
        <rect x="12" y="6" width="2" height="4" fill="#FFD700" />
      </svg>
    ),
  }

  return icons[type] || null
}
