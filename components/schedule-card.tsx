"use client"

import PixelButton from "./pixel-button"
import PixelCard from "./pixel-card"

interface ScheduleCardProps {
  date: string
  time: string
  location: string
  address: string
}

export default function ScheduleCard({ date, time, location, address }: ScheduleCardProps) {
  const handleViewMap = () => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com?q=${encodedAddress}`, "_blank", "noopener")
  }

  const handleConfirmAttendance = () => {
    // This would open a modal in a real implementation
    alert("Funcionalidade de confirmação será implementada em breve!")
  }

  return (
    <PixelCard className="bg-gradient-to-br from-accent/10 to-secondary/10">
      <div className="space-y-3">
        <div className="font-pixel text-xs text-secondary">{date}</div>
        <div className="font-mono-pixel text-sm">
          <div className="font-bold">{time}</div>
          <div>{location}</div>
          <div className="text-xs text-muted-foreground mt-1">{address}</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <PixelButton size="sm" variant="outline" onClick={handleViewMap}>
            Ver no Mapa
          </PixelButton>
          <PixelButton size="sm" onClick={handleConfirmAttendance}>
            Confirmar
          </PixelButton>
        </div>
      </div>
    </PixelCard>
  )
}
