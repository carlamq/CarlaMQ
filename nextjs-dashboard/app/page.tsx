'use client'

import { useState } from 'react'
import { content, Lang } from '@/data/content'
import Nav from '@/components/Nav'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const c = content[lang]

  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : 'en'))

  return (
    <main className="min-h-screen">
      <Nav lang={lang} onLangToggle={toggleLang} content={c.nav} />
    </main>
  )
}