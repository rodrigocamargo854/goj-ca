// components/SpotifyEmbed.tsx
"use client";

export default function SpotifyEmbed({
  playlistUrl,
  title = "Spotify player",
}: { playlistUrl: string; title?: string }) {
  const embedUrl = playlistUrl
    .replace("open.spotify.com/", "open.spotify.com/embed/")
    .split("?")[0] + "?utm_source=generator&theme=0" 

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative w-full" style={{ paddingTop: "152px" }}>
        <iframe
          title={title}
          src={embedUrl}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="absolute inset-0 w-full h-full rounded-xl border-2 border-black shadow-pixel"
        />
      </div>
    </div>
  );
}
