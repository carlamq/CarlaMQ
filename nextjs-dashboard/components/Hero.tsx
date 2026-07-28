'use client'

import Image from 'next/image'
import type { Lang } from '@/data/content'

interface HeroProps {
  content: {
    greeting: string
    name: string
    nameKana: string
    role: string
    tagline: string
    sub: string
    viewWorkLabel: string
  }
  github: string
  lang: Lang
}

export default function Hero({ content, github, lang }: HeroProps) {
  const [firstPart, ...rest] = content.name.split(' ')
  const lastPart = rest.join(' ')
  const displayFont = lang === 'ja' ? 'font-jp-body' : 'font-display'
  const subFont = lang === 'ja' ? 'font-jp-body' : ''

  return (
    <section id="hero" className="relative overflow-hidden min-h-[calc(56.2vw+72px)] flex items-start pt-[160px]">
      {/* Foto de fondo, recortada desde arriba (no se ve lo que sobre por debajo) */}
      <div className="absolute inset-x-0 top-[72px] bottom-0">
        <Image
          src="/hero-big.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className={`${displayFont} text-base font-semibold tracking-[0.15em] uppercase text-lime mb-5`}>
            {content.greeting}
          </p>

          <h1 className="font-henny text-[clamp(48px,7.5vw,96px)] leading-[1.05] mb-4">
            <span className="text-pink">{firstPart}</span>{' '}
            <span className="text-yellow">{lastPart}</span>
          </h1>

          <span className="inline-block font-jp-title text-xl bg-purple/20 border border-purple text-cream rounded-full px-5 py-1.5 mt-2 mb-7">
            {content.nameKana}
          </span>

          <p className="font-display text-[clamp(24px,3.4vw,40px)] font-semibold text-cream leading-snug mb-4">
            {content.tagline}
          </p>
          <p className={`${subFont} text-cream text-lg font-medium max-w-lg mb-9 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]`}>
            {content.sub}
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-11">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${displayFont} font-bold text-base uppercase tracking-wide text-ink bg-lime rounded-full px-9 py-4 border-2 border-ink hover:-translate-y-0.5 transition-transform`}
            >
              {content.viewWorkLabel} ↗
            </button>
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-base uppercase tracking-wide text-cream bg-transparent border-2 border-purple rounded-full px-9 py-4 hover:bg-purple/20 transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          <div className="font-mono text-[15px] bg-black/60 border-2 border-purple/50 rounded-2xl p-6 max-w-lg">
            <p><span className="text-purple">const</span> <span className="text-yellow">developer</span> = {'{'}</p>
            <p className="pl-4"><span className="text-pink">role</span>: <span className="text-lime">&quot;{content.role}&quot;</span>,</p>
            <p className="pl-4">
              <span className="text-pink">skills</span>: [
              <span className="text-lime">&quot;Next.js&quot;</span>,{' '}
              <span className="text-lime">&quot;TypeScript&quot;</span>,{' '}
              <span className="text-lime">&quot;HTML/CSS&quot;</span>,{' '}
              <span className="text-lime">&quot;JavaScript&quot;</span>],
            </p>
            <p className="pl-4">
              <span className="text-pink">passion</span>:<span className="text-lime">&quot;Building digital experiences.&quot;</span>,
            </p>
            <p>{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// destructuring con "rest" (...) para partir un string

//const [firstPart, ...rest] = content.name.split(' ')
//const lastPart = rest.join(' ')

// content.name.split(' ') convierte "CARLA M. QUINTANAR" en un array: ["CARLA", "M.", "QUINTANAR"].
// Al hacer destructuring, firstPart toma el primer elemento ("CARLA"), y ...rest (el operador "rest") junta todo lo que sobra en un array nuevo (["M.", "QUINTANAR"]).
// Luego .join(' ') los vuelve a pegar en un solo string con espacios: "M. QUINTANAR". Así podemos pintar la primera palabra de un color y el resto de otro,
// sin importar cuántas palabras tenga el nombre.
//
//<p>&nbsp;</p>
//           <p><span className="text-purple">const</span> <span className="text-yellow">mood</span> =</p>
//            <p className="pl-4">coffe <span className="text-orange">&amp;&amp;</span> mattcha</p>
//            <p className="pl-8">? <span className="text-lime">&quot;unstoppable&quot;</span></p>
//             <p className="pl-8">: <span className="text-lime">&quot;debugging...&quot;</span>;</p>