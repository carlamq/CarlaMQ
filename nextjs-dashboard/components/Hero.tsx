'use client'

import Image from 'next/image'
import { useState, useRef, type PointerEvent } from 'react'



interface HeroProps {
    content: {
        greeting: string
        name: string
        nameKana: string
        role: string
        tagline: string
        sub: string
        terminalHint: string
    }
    onScrollToTerminal: () => void
}

export default function Hero({ content, onScrollToTerminal }: HeroProps) {
  const [hovering, setHovering] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const mask = `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, #000 72px, transparent 130px)`

    return(
        <section
          ref={heroRef}
          id="hero"
          className="relative overflow-hidden min-h-screen pt-[60px] flex items-center"
          onPointerEnter={() => setHovering(true)}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setHovering(false)}
      >
          {/* Línea degradada debajo del Nav */}
          <div
              className="absolute top-[60px] left-0 right-0 h-[3px] pointer-events-none"
              style={{
                  background: 'linear-gradient(90deg, transparent, rgba(155,127,232,0.3) 20%, rgba(255,45,120,0.3) 50%, rgba(155,127,232,0.3) 80%, transparent)',
              }}
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(30,30,60,0.85) 1.2px, transparent 1.4px)',
              backgroundSize: '24px 24px',
          }}
          />
          <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-75"
              style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(255,45,120,0.75) 2px, transparent 2.2px)',
                  backgroundSize: '24px 24px',
                  opacity: hovering ? 1 : 0,
                  maskImage: mask,
                  WebkitMaskImage: mask,
              }}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full grid grid-cols-[1fr_auto] items-center gap-10"> {/* El guion bajo _ dentro de los corchetes representa un espacio (en clases de Tailwind no puedes poner espacios literales)*/}
            <div>
              <p className="font-mono text-xs font-medium text-gaccent tracking-[0.22em] mb-3">
                {content.greeting}
              </p>
              <h1 className="font-mono text-[clamp(36px,5.5vw,74px)] font-extrabold text-gtext leading-[1.05] mb-1.5 tracking-tight">
                {content.name} 
              </h1>
              <p className="font-sans text-[clamp(16px,2vw,24px)] font-bold text-[#dc2626] tracking-[0.15em] mb-3.5">
                {content.nameKana}
              </p>
              <div className="w-[70px] h-[3px] bg-linear-to-r from-[#dc2626] via-gprimary to-gpurple rounded mb-5" />
              <p className="font-mono text-xs font-bold text-gprimary tracking-[0.2em] mb-4">
                {content.role}
              </p>
              <p className="text-[clamp(16px,2.2vw,26px)] font-bold text-gtext mb-2.5 leading-snug">
                {content.tagline}
              </p>
              <p className="text-sm text-gmuted mb-9 leading-relaxed max-w-[460px]">
                {content.sub}
              </p>
              <div className="flex items-center gap-3.5 flex-wrap">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-mono text-[11px] font-bold tracking-[0.15em] text-gbg bg-gprimary rounded px-6 py-3 shadow-[0_0_20px_rgba(255,45,120,0.45)] hover:shadow-[0_0_36px_rgba(255,45,120,0.8)] hover:-translate-y-0.5 transition"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={onScrollToTerminal}
                  className="font-mono text-[11px] font-bold tracking-[0.15em] text-gaccent bg-transparent border border-gaccent/35 rounded px-6 py-3 hover:border-gaccent hover:shadow-[0_0_16px_rgba(0,255,179,0.25)] transition"
                >
                  {content.terminalHint}
                </button>
              </div>
            </div>

          <div className="photo-drop relative w-60 h-60 rounded-full overflow-hidden border-4 border-gprimary shadow-[0_0_30px_rgba(255,45,120,0.5)]">

                <Image src="/carla.jpg" alt="Carla M. Quintanar" fill className="object-cover" />
            </div>

          </div>
        </section>       
    )
}

/* | clamp(36px, 5.5vw, 74px)| — función nativa de CSS (no de Tailwind) para tipografía fluida: nunca más chico que 36px, nunca más grande que 74px, y en medio se ajusta según 5.5vw (5.5% del ancho de la ventana). Así el título se ve bien en celular y en pantalla grande sin escribir media queries.

| bg-linear-to-r | — en Tailwind v3 esto se llamaba bg-gradient-to-r; en v4 lo renombraron a bg-linear-to-r (para dejar espacio a bg-conic-* y bg-radial-*, otros tipos de gradiente nuevos). Crea un degradado de izquierda a derecha entre los colores en from-, via-, to-.

| onScrollToTerminal | — todavía no existe la Terminal (Lección 6), así que por ahora esta prop va a ser una función vacía temporal. La dejamos preparada para conectarla de verdad más adelante. */