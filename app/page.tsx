"use client"

import type React from "react"
import { useState } from "react"
import PixelButton from "@/components/pixel-button"
import PixelCard from "@/components/pixel-card"
import QuoteBubble from "@/components/quote-bubble"
import ScheduleCard from "@/components/schedule-card"
import PixelIcon from "@/components/pixel-icon"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Countdown from "@/components/Countdown"

export default function AboutUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    age: "",
  })
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const quotes = [
    "The Eucharist is my road to Heaven.",
    "All are born as originals, but many die as copies.",
    "To be always united with Jesus: this is my plan of life.",
  ]

  const agenda = [
    {
      date: "Sábado, 30 de Agosto",
      time: "16:00",
      location: "Igreja Santa Luzia",
      address: "Igreja Santa Luzia | Garcia ,  Blumenau/SC",
    },

    {
      date: " ",
      time: "16:00",
      location: "Igreja Santa Luzia",
      address: "Igreja Santa Luzia | Garcia ,  Blumenau/SC",
    },
  ]

  const materials = [
    { name: "Vida de Carlo Acutis", type: "bible", link: "#" },
    { name: "Orações do Terço", type: "rosary", link: "#" },
    { name: "Milagres Eucarísticos", type: "host", link: "#" },
  ]

  const galleryImages = [
    "/young-people-praying.jpg",
    "/eucharistic-adoration.jpg",
    "/carlo-ac5.jpg",
    "/blessed-carlo-acutis.png",
    "/church-youth-activities.jpg",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", whatsapp: "", age: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b-2 border-black z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Ir para o topo"
          >
            <PixelIcon type="halo" size={20} className="text-secondary" />
            <span className="font-pixel text-xs">CA</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-4">
              <button onClick={() => scrollToSection("about")} className="font-mono-pixel text-sm hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">
                Sobre
              </button>
              <button onClick={() => scrollToSection("agenda")} className="font-mono-pixel text-sm hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">
                Agenda
              </button>
              <button onClick={() => scrollToSection("materials")} className="font-mono-pixel text-sm hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">
                Materiais
              </button>
              <button onClick={() => scrollToSection("contact")} className="font-mono-pixel text-sm hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">
                Contato
              </button>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-[75vh] flex items-center justify-center pixel-pattern relative pt-24 md:pt-28 px-4">
        <div className="text-center space-y-6 w-full max-w-2xl">
          <div className="flex justify-center mb-2">
            <PixelIcon type="halo" size={60} className="text-secondary" />
          </div>
                <Countdown />
          <h1 className="font-pixel text-xl sm:text-2xl lg:text-3xl leading-relaxed">
            GOJ  CARLO ACUTIS
          </h1>
          <p className="font-mono-pixel text-xl sm:text-base">
            Santidade no ordinário, um coração na Eucaristia.
          </p>
          
        </div>
      </section>

      {/* DIVISOR */}
      <div className="sawtooth-divider text-black dark:text-white" />

      {/* ABOUT */}
      <section id="about" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-center mb-10">QUEM SOMOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {/* Fundação + missão */}
              <p className="font-mono-pixel text-sm leading-relaxed">
                Nosso grupo foi fundado em <strong>____</strong>, com a missão de <strong>____</strong>: formar jovens que buscam a santidade no cotidiano, a partir da oração, da vida sacramental e do serviço.
              </p>
              {/* Inspiração em Carlo */}
              <p className="font-mono-pixel text-sm leading-relaxed">
                Inspirados por <strong>Carlo Acutis</strong>, jovem apaixonado pela Eucaristia e pela evangelização através da tecnologia, queremos viver uma fé alegre, criativa e comprometida com o Evangelho.
              </p>
              {/* Breve bio de Carlo */}
              <p className="font-mono-pixel text-sm leading-relaxed">
                Carlo (1991–2006) utilizou seus talentos para aproximar pessoas de Jesus, deixando como legado sua exposição sobre os <em>Milagres Eucarísticos</em>, que segue tocando corações no mundo todo.
              </p>

              <PixelButton
                variant="outline"
                onClick={() => window.open("https://www.miracolieucaristici.org", "_blank", "noopener")}
                className="focus:ring-2 focus:ring-accent"
              >
                Milagres Eucarísticos
              </PixelButton>
            </div>

            {/* Frases */}
            <div className="space-y-4">
              <h3 className="font-pixel text-sm mb-4">FRASES DE CARLO</h3>
              {quotes.map((quote, index) => (
                <QuoteBubble key={index} quote={quote} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="sawtooth-divider text-secondary" />

      {/* AGENDA */}
      <section id="agenda" className="py-16 px-4 bg-secondary/5 scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-center mb-10">PRÓXIMOS ENCONTROS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agenda.map((event, index) => (
              <ScheduleCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAIS */}
      <section id="materials" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-center mb-10">MATERIAIS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <PixelCard key={index} className="text-center space-y-4">
                <PixelIcon type={material.type as any} size={32} className="mx-auto text-secondary" />
                <h3 className="font-mono-pixel text-sm font-bold">{material.name}</h3>
                <a
                  href={material.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <PixelButton size="sm" variant="outline" className="focus:ring-2 focus:ring-accent">
                    Download
                  </PixelButton>
                </a>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-center mb-10">GALERIA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(image)}
                className="border-2 border-black shadow-pixel hover:shadow-pixel-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`Abrir imagem ${index + 1}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-md">
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-center mb-10">QUERO PARTICIPAR</h2>
          <PixelCard>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="font-mono-pixel text-sm">
                  Nome *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-2 border-black shadow-pixel font-mono-pixel"
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-mono-pixel text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-2 border-black shadow-pixel font-mono-pixel"
                />
              </div>
              <div>
                <Label htmlFor="whatsapp" className="font-mono-pixel text-sm">
                  WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  required
                  placeholder="+55 47 9 0000-0000"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="border-2 border-black shadow-pixel font-mono-pixel"
                />
              </div>
              <div>
                <Label htmlFor="age" className="font-mono-pixel text-sm">
                  Idade
                </Label>
                <Input
                  id="age"
                  type="number"
                  inputMode="numeric"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="border-2 border-black shadow-pixel font-mono-pixel"
                />
              </div>
              <PixelButton type="submit" className="w-full focus:ring-2 focus:ring-accent">
                Enviar
              </PixelButton>
            </form>
          </PixelCard>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="py-16 px-4 bg-secondary/5 scroll-mt-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl mb-10">CONTATO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col sm:flex-row gap-6">
  <PixelCard className="flex-1">
    <h3 className="font-mono-pixel font-bold mb-4">WhatsApp</h3>
    <p className="font-mono-pixel text-sm mb-4">+55 47 9 0000-0000</p>
    <PixelButton variant="outline" className="focus:ring-2 focus:ring-accent">
      Enviar Mensagem
    </PixelButton>
  </PixelCard>

  <PixelCard className="flex-1">
    <h3 className="font-mono-pixel font-bold mb-4">Email</h3>
    <p className="font-mono-pixel text-sm mb-4">grupocarlo@paroquia.org</p>
    <PixelButton variant="outline" className="focus:ring-2 focus:ring-accent">
      Enviar Email
    </PixelButton>
  </PixelCard>
</div>

          </div>
          <div className="mt-8">
            <p className="font-mono-pixel text-sm">
              Paróquia Santa Luzia              <br />
              Blumenau/SC
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t-2 border-black">
        <div className="container mx-auto text-center">
          <p className="font-pixel text-xs mb-4">"Jesus, the Eucharist: my road to Heaven"</p>
          <p className="font-mono-pixel text-xs text-muted-foreground">Grupo de Jovens Carlo Acutis © 2025</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery"
              className="max-w-full max-h-full border-2 border-white"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-2 right-2 bg-white text-black font-pixel text-xs px-2 py-1 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Fechar"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* CTA fixo no mobile (remova se não quiser) */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <PixelButton onClick={() => scrollToSection("agenda")} className="w-full">
            Próximo Encontro
          </PixelButton>
        </div>
      </div>
    </div>
  )
}
