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

export default function CarloAcutisPage() {
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
      date: "Sábado, 15 de Fevereiro",
      time: "16:00",
      location: "Sala Pastoral",
      address: "Catedral São Paulo Apóstolo, Blumenau/SC",
    },
    {
      date: "Sábado, 22 de Fevereiro",
      time: "16:00",
      location: "Sala Pastoral",
      address: "Catedral São Paulo Apóstolo, Blumenau/SC",
    },
  ]

  const materials = [
    { name: "Vida de Carlo Acutis", type: "bible", link: "#" },
    { name: "Orações do Terço", type: "rosary", link: "#" },
    { name: "Milagres Eucarísticos", type: "host", link: "#" },
  ]

  const galleryImages = [
    "/young-people-praying.png",
    "/eucharistic-adoration.png",
    "/placeholder-69mso.png",
    "/blessed-carlo-acutis.png",
    "/church-youth-activities.png",
    "/diverse-prayer-group.png",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", whatsapp: "", age: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b-2 border-black z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PixelIcon type="halo" size={20} className="text-secondary" />
            <span className="font-pixel text-xs">CA</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <button onClick={() => scrollToSection("about")} className="font-mono-pixel text-sm hover:text-accent">
                Sobre
              </button>
              <button onClick={() => scrollToSection("agenda")} className="font-mono-pixel text-sm hover:text-accent">
                Agenda
              </button>
              <button
                onClick={() => scrollToSection("materials")}
                className="font-mono-pixel text-sm hover:text-accent"
              >
                Materiais
              </button>
              <button onClick={() => scrollToSection("contact")} className="font-mono-pixel text-sm hover:text-accent">
                Contato
              </button>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pixel-pattern relative pt-16">
        <div className="text-center space-y-6 px-4">
          <div className="flex justify-center mb-4">
            <PixelIcon type="halo" size={48} className="text-secondary" />
          </div>
          <h1 className="font-pixel text-lg md:text-2xl lg:text-3xl text-center leading-relaxed">
            GRUPO DE JOVENS
            <br />
            CARLO ACUTIS
          </h1>
          <p className="font-mono-pixel text-sm md:text-base max-w-md mx-auto">
            Holiness in the ordinary, a heart in the Eucharist
          </p>
          <PixelButton size="lg" onClick={() => scrollToSection("agenda")}>
            Próximo Encontro
          </PixelButton>
        </div>
      </section>

      {/* Sawtooth Divider */}
      <div className="sawtooth-divider text-black dark:text-white"></div>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">SOBRE CARLO ACUTIS</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="font-mono-pixel text-sm leading-relaxed">
                Carlo Acutis foi um jovem italiano que viveu de 1991 a 2006. Apaixonado pela Eucaristia e pela
                tecnologia, ele usou seus talentos para evangelizar e aproximar as pessoas de Jesus.
              </p>
              <p className="font-mono-pixel text-sm leading-relaxed">
                Beatificado em 2020, Carlo é exemplo de santidade para os jovens de hoje, mostrando que é possível viver
                uma vida santa no mundo moderno, usando a tecnologia para o bem.
              </p>
              <p className="font-mono-pixel text-sm leading-relaxed">
                Seu maior projeto foi catalogar os milagres eucarísticos pelo mundo, criando uma exposição que continua
                tocando corações até hoje.
              </p>
              <PixelButton
                variant="outline"
                onClick={() => window.open("https://www.miracolieucaristici.org", "_blank", "noopener")}
              >
                Milagres Eucarísticos
              </PixelButton>
            </div>

            <div className="space-y-4">
              <h3 className="font-pixel text-sm mb-4">FRASES DE CARLO</h3>
              {quotes.map((quote, index) => (
                <QuoteBubble key={index} quote={quote} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sawtooth Divider */}
      <div className="sawtooth-divider text-secondary"></div>

      {/* Agenda Section */}
      <section id="agenda" className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">PRÓXIMOS ENCONTROS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {agenda.map((event, index) => (
              <ScheduleCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">MATERIAIS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <PixelCard key={index} className="text-center space-y-4">
                <PixelIcon type={material.type as any} size={32} className="mx-auto text-secondary" />
                <h3 className="font-mono-pixel text-sm font-bold">{material.name}</h3>
                <PixelButton size="sm" variant="outline">
                  Download
                </PixelButton>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">GALERIA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(image)}
                className="border-2 border-black shadow-pixel hover:shadow-pixel-lg transition-shadow"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-md">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">QUERO PARTICIPAR</h2>
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
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="border-2 border-black shadow-pixel font-mono-pixel"
                />
              </div>
              <PixelButton type="submit" className="w-full">
                Enviar
              </PixelButton>
            </form>
          </PixelCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-pixel text-xl md:text-2xl mb-12">CONTATO</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PixelCard>
              <h3 className="font-mono-pixel font-bold mb-4">WhatsApp</h3>
              <p className="font-mono-pixel text-sm mb-4">+55 47 9 0000-0000</p>
              <PixelButton variant="outline">Enviar Mensagem</PixelButton>
            </PixelCard>
            <PixelCard>
              <h3 className="font-mono-pixel font-bold mb-4">Email</h3>
              <p className="font-mono-pixel text-sm mb-4">grupocarlo@paroquia.org</p>
              <PixelButton variant="outline">Enviar Email</PixelButton>
            </PixelCard>
          </div>
          <div className="mt-8">
            <p className="font-mono-pixel text-sm">
              Catedral São Paulo Apóstolo
              <br />
              Blumenau/SC
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-black">
        <div className="container mx-auto text-center">
          <p className="font-pixel text-xs mb-4">"Jesus, the Eucharist: my road to Heaven"</p>
          <p className="font-mono-pixel text-xs text-muted-foreground">Grupo de Jovens Carlo Acutis © 2025</p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery"
              className="max-w-full max-h-full border-2 border-white"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-2 right-2 bg-white text-black font-pixel text-xs px-2 py-1 border-2 border-black"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
