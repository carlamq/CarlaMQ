'use client'

import { useState, useRef } from 'react'
import { content, Lang } from '@/data/content'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import Terminal from '@/components/Terminal'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const [lang, setLang] = useState<Lang>('ja')
  const c = content[lang]
  const terminalRef = useRef<HTMLDivElement>(null)

  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : 'en'))
  const scrollToTerminal = () => terminalRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="min-h-screen">
      <Nav lang={lang} onLangToggle={toggleLang} content={c.nav} />
      <Hero content={c.hero} onScrollToTerminal={scrollToTerminal} />
      <SectionDivider />
      <div ref={terminalRef}>
        <Terminal key={lang} lang={lang} onLangChange={setLang} />
      </div>
      <SectionDivider />
      <About content={c.about} />
      <SectionDivider />
      <Skills content={c.skills} />
      <SectionDivider />
      <Projects content={c.projects} lang={lang} />
      <SectionDivider />
      <Contact content={c.contact} />
      <SectionDivider />
    </main>
  )
}
