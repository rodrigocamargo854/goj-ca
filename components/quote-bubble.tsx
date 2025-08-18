interface QuoteBubbleProps {
  quote: string
  className?: string
}

export default function QuoteBubble({ quote, className }: QuoteBubbleProps) {
  return (
    <div className={`relative bg-white border-2 border-black shadow-pixel p-4 font-mono-pixel text-sm ${className}`}>
      {/* Speech bubble tail */}
      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b-2 border-r-2 border-black transform rotate-45"></div>
      <p>"{quote}"</p>
    </div>
  )
}
