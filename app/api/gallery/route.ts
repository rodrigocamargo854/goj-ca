// app/api/gallery/route.ts
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// IMPORTANTE: garante Node.js runtime (fs não funciona no edge)
export const runtime = "nodejs"
// Evita cache do Next nessa rota
export const dynamic = "force-dynamic"

function listImagesFrom(dirAbs: string, webPrefix: string) {
  const allow = new Set([
    ".jpg",".jpeg",".png",".webp",".gif",
    ".JPG",".JPEG",".PNG",".WEBP",".GIF",
  ])
  if (!fs.existsSync(dirAbs)) return []
  return fs.readdirSync(dirAbs)
    .filter((f) => allow.has(path.extname(f)))
    .map((f) => `${webPrefix}/${f}`)
}

export async function GET() {
  try {
    const pub = path.join(process.cwd(), "public")
    const fromGallery = listImagesFrom(path.join(pub, "gallery"), "/gallery")
    const fromRoot    = listImagesFrom(pub, "") 

    const all = Array.from(new Set([...fromGallery, ...fromRoot]))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    return NextResponse.json({ images: all })
  } catch (e) {
    console.error("Erro lendo imagens:", e)
    return NextResponse.json({ images: [], error: "fs-failed" }, { status: 500 })
  }
}
