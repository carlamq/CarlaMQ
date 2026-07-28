import type { Lang } from '@/data/content'

interface SkillsProps {
  lang: Lang
  content: {
    title: string
    categories: { name: string; items: string[] }[]
  }
}

const cardColors = ['border-yellow', 'border-pink', 'border-lime', 'border-purple']
const dotColors = ['bg-yellow', 'bg-pink', 'bg-lime', 'bg-purple']
const cardRotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1']


export default function Skills({ lang, content }: SkillsProps) {
  const titleFont = lang === 'ja' ? 'font-jp-body' : 'font-hand'
  const sectionTitleFont = lang === 'ja' ? 'font-jp-body' : 'font-display'
  return (
    
    <section id="skills" className="relative overflow-hidden pt-16 pb-24 px-6 bg-morado"
      style={{ clipPath: 'polygon(0 0, 100% 60px, 100% 100%, 0 100%)' }}
    >
     
      <div className="absolute inset-0 pointer-events-none">      
        <div className="absolute top-10 right-[8%] w-4 h-4 rounded-full bg-pink/40" />
        <div className="absolute top-32 right-[20%] w-3 h-3 rounded-full bg-lime/40" />
        <div className="absolute bottom-20 left-[15%] w-5 h-5 rounded-full bg-yellow/40" />
        <div className="absolute top-1/2 right-[6%] w-3 h-3 rounded-full bg-purple/40" />
        <div className="absolute bottom-10 left-[35%] w-2 h-2 rounded-full bg-orange/40" />

        <svg className="absolute top-8 left-[10%] w-40 h-10 opacity-30" viewBox="0 0 100 20" fill="none">
          <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="#c8f542" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <svg className="absolute bottom-6 right-[6%] w-16 h-16 opacity-25" viewBox="0 0 100 100" fill="none">
          <path d="M50 50 a4 4 0 0 1 8 0 a8 8 0 0 1 -16 0 a12 12 0 0 1 24 0 a16 16 0 0 1 -32 0 a20 20 0 0 1 40 0" stroke="#e6e3e3" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>


      <div className="relative z-10 max-w-[1200px] mx-auto">
        <span className={`inline-block ${sectionTitleFont} text-sm font-bold uppercase tracking-[0.15em] text-ink bg-yellow rounded-full px-5 py-2 mb-10 -rotate-2`}>
          {content.title}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {content.categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`bg-ink border-[3px] ${cardColors[i % cardColors.length]} p-7 ${cardRotations[i % cardRotations.length]} transition-transform duration-200 hover:scale-105 hover:rotate-0`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              <div className="mb-5">
                <span className={`${titleFont} text-lg text-cream tracking-wide`}>
                 {cat.name}
                </span>
              </div>

              <div className="font-sans text-sm flex flex-col gap-2">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[i % dotColors.length]}`} />
                    <span className="text-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

//polygon(...) define 4 puntos, uno por cada esquina de la sección, en orden (arriba-izquierda, arriba-derecha, abajo-derecha, abajo-izquierda). Cada punto es (x y):
//0 60px = esquina superior izquierda, empujada 60px hacia abajo.
//100% 0 = esquina superior derecha, en su lugar normal (arriba del todo).
//100% 100% y 0 100% = las dos esquinas de abajo, sin cambio (para que el borde de abajo siga recto).
//Al bajar solo la esquina izquierda de arriba y dejar la derecha en su sitio, el navegador dibuja una línea recta entre esas dos — y esa línea es la diagonal que buscas. Todo lo que quede "fuera" de ese polígono (el triangulito arriba a la izquierda) se vuelve invisible, dejando ver el negro de detrás.