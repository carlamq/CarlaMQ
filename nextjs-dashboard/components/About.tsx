import type { Lang } from '@/data/content'

interface AboutProps {
  lang: Lang
  content: {
    title: string
    body: { mobile: string; tablet: string; desktop: string }[]
    facts: { icon: string; label: string }[]
  }
}

const factColors = ['bg-pink', 'bg-lime', 'bg-yellow', 'bg-purple']
const factRotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export default function About({ lang, content }: AboutProps) {
  const bodyFont = lang === 'ja' ? 'font-jp-body' : 'font-sans'
  const factFont = lang === 'ja' ? 'font-jp-body' : 'font-hand'
  const titleFont = lang === 'ja' ? 'font-jp-body' : 'font-display'

  return (
    <section id="about" className="relative pt-16 pb-16 px-6 bg-ink">
      <div className="max-w-[1100px] mx-auto">
        <span className={`inline-block ${titleFont} text-sm font-bold uppercase tracking-[0.15em] text-ink bg-yellow rounded-full px-5 py-2 mb-10 -rotate-2`}>
          {content.title}
        </span>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[8%] w-4 h-4 rounded-full bg-pink/40" />
        <div className="absolute top-32 left-[20%] w-3 h-3 rounded-full bg-lime/40" />
        <div className="absolute bottom-20 right-[15%] w-5 h-5 rounded-full bg-yellow/40" />
        <div className="absolute top-1/2 right-[6%] w-3 h-3 rounded-full bg-purple/40" />
        <div className="absolute bottom-10 left-[35%] w-2 h-2 rounded-full bg-orange/40" />

        <svg className="absolute top-8 right-[10%] w-40 h-10 opacity-30" viewBox="0 0 100 20" fill="none">
          <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="#ff66c4" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <svg className="absolute bottom-6 left-[6%] w-16 h-16 opacity-25" viewBox="0 0 100 100" fill="none">
          <path d="M50 50 a4 4 0 0 1 8 0 a8 8 0 0 1 -16 0 a12 12 0 0 1 24 0 a16 16 0 0 1 -32 0 a20 20 0 0 1 40 0" stroke="#e6e3e3" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>


        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start">
          <div>
            {content.body.map((para, i) => (
              <div key={i} className="mb-5">
                <p className={`${bodyFont} text-cream/90 text-base block md:hidden`} style={{ whiteSpace: 'pre-line' }}>
                  {para.mobile}
                </p>
                <p className={`${bodyFont} text-cream/90 text-base hidden md:block lg:hidden`} style={{ whiteSpace: 'pre-line' }}>
                  {para.tablet}
                </p>
                <p className={`${bodyFont} text-cream/90 text-lg hidden lg:block`} style={{ whiteSpace: 'pre-line' }}>
                  {para.desktop}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {content.facts.map((fact, i) => (
              <div
                key={i}
                // text-sm (14px) celular · md:text-base (16px) tablet (≥768px) · lg:text-xl (20px) escritorio (≥1024px)
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border-2 border-ink text-ink text-sm md:text-base lg:text-xl whitespace-nowrap ${factFont} ${factColors[i % factColors.length]} ${factRotations[i % factRotations.length]} shadow-[3px_3px_0_rgba(0,0,0,0.5)] transition-transform duration-200 hover:scale-105 hover:rotate-0`}
              >
                <span className="text-2xl">{fact.icon}</span>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


// text-transparent + style={{ WebkitTextStroke: '1px ...' }} —
// WebkitTextStroke (contorno de texto) no existe como utilidad de Tailwind ni como propiedad estándar de CSS
// (es específica de motores tipo WebKit/Chrome/Safari, por eso el prefijo), así que va como style inline.
// Hace que el texto sea hueco (relleno transparente, solo el borde visible) — el efecto de "marca de agua".

// className={`... ${i === 0 ? 'text-gtext' : 'text-[#a0a0b8]'}`} —
// un ternario dentro de un template literal para elegir la clase de color:
// el primer párrafo (i === 0) se ve más brillante que el resto, para darle jerarquía visual al texto principal.

//--------No incluí el bloque decorativo de "cat about.json" que tenía el original (una cajita ASCII falsa) — 
// me pareció innecesario para tu versión; si luego quieres agregarlo como adorno, es fácil.