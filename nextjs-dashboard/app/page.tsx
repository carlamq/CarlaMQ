'use client'

import { useState, useRef } from 'react'
import { content, Lang } from '@/data/content'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const [lang, setLang] = useState<Lang>('ja')
  const c = content[lang]

  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : 'en'))

  return (
    <main className="min-h-screen bg-ink">
      <meta name='impact-site-verification' value='fcb92606-d703-4b3c-8831-edc7898406e5'>
      <Nav lang={lang} onLangToggle={toggleLang} content={c.nav} />
      <Hero content={c.hero} github={c.contact.github} lang={lang} />
      <About content={c.about} lang={lang} />
      <Skills content={c.skills} lang={lang} />
      <Projects content={c.projects} lang={lang} />
      <Contact content={c.contact} lang={lang} />
    </main>
  )
}

//      <div ref={terminalRef}>
//       <Terminal key={lang} lang={lang} onLangChange={setLang} />
//     </div>
