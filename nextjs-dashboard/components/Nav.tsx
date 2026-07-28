'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lang } from '@/data/content'

interface NavProps {
  lang: Lang
  onLangToggle: () => void
  content: {
    about: string
    projects: string
    skills: string
    contact: string
  }
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav({ lang, onLangToggle, content }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const displayFont = lang === 'ja' ? 'font-jp-body' : 'font-display'
  const links = [
    { label: content.about, id: 'about' },
    { label: content.skills, id: 'skills' },
    { label: content.projects, id: 'projects' },
    { label: content.contact, id: 'contact' },
  ]

  const goTo = (id: string) => {
    scrollTo(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-ink/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="shrink-0 self-start">
          <Image src="/carlamq-logo.png" alt="CarlaMQ" width={400} height={300} className="h-[140px] w-auto block -mt-3" />
        </button>

        <div className="hidden min-[1000px]:flex items-center gap-7">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`${displayFont} text-[13px] font-semibold tracking-[0.05em] uppercase text-cream/80 hover:text-lime transition-colors`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={onLangToggle}
            className="font-display text-xs font-bold tracking-[0.05em] text-ink bg-yellow rounded-full px-3 py-1.5 hover:brightness-110 transition"
          >
            {lang === 'en' ? '🇯🇵 JA' : '🇺🇸 EN'}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="font-display text-[13px] font-bold tracking-[0.03em] uppercase text-ink bg-lime rounded-full px-5 py-2 border-2 border-ink hover:-translate-y-0.5 transition-transform"
          >
            Let&apos;s Talk ⚡
          </button>
        </div>

        <button
          onClick={() => setIsOpen((o) => !o)}
          className="min-[1000px]:hidden flex flex-col justify-center gap-1.5 w-10 h-10 shrink-0"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="min-[1000px]:hidden bg-ink border-t border-white/10 px-6 py-6 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-5">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`${displayFont} text-base font-semibold tracking-[0.05em] uppercase text-cream/80 hover:text-lime transition-colors`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={onLangToggle}
            className="font-display text-xs font-bold tracking-[0.05em] text-ink bg-yellow rounded-full px-3 py-1.5 hover:brightness-110 transition"
          >
            {lang === 'en' ? '🇯🇵 JA' : '🇺🇸 EN'}
          </button>

          <button
            onClick={() => goTo('contact')}
            className="font-display text-[13px] font-bold tracking-[0.03em] uppercase text-ink bg-lime rounded-full px-5 py-2 border-2 border-ink hover:-translate-y-0.5 transition-transform"
          >
            Let&apos;s Talk ⚡
          </button>
        </div>
      )}
    </nav>
  )
}
