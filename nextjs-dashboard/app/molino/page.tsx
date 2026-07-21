import Link from 'next/link'
import CompareSlider from '@/components/CompareSlider'
import { content, type Lang } from '@/data/content'

interface MolinoComparePageProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function MolinoComparePage({ searchParams }: MolinoComparePageProps) {
  const params = await searchParams
  const lang: Lang = params.lang === 'ja' ? 'ja' : 'en'
  const c = content[lang].projects
  const project = c.items.find(item => item.id === '002')

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.15em] text-gaccent mb-8 hover:[text-shadow:0_0_10px_rgba(106,153,85,0.7)]"
        >
          {c.backLabel}
        </Link>

        <h1 className="font-mono text-xl font-extrabold text-gtext mb-6">
          {project?.name}
        </h1>

        <CompareSlider before="/molino-before.png" after="/molino-after.png" tall />
      </div>
    </main>
  )
}
