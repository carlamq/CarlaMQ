import Link from 'next/link'
import CompareSlider from './CompareSlider'
import type { Lang } from '@/data/content'

interface ProjectItem {
  id: string
  name: string
  desc: string
  tags: string[]
  year: string
  github?: string
  live?: string
  compare?: { before: string; after: string }
}

interface ProjectsProps {
  content: {
    title: string
    githubLabel: string
    liveLabel: string
    compareLabel: string
    items: ProjectItem[]
  }
  lang: Lang
}

const tagColors = ['bg-pink', 'bg-lime', 'bg-yellow', 'bg-purple']

export default function Projects({ content, lang }: ProjectsProps) {
  const titleFont = lang === 'ja' ? 'font-jp-body' : 'font-display'
  const bodyFont = lang === 'ja' ? 'font-jp-body' : ''
  const linkFont = lang === 'ja' ? 'font-jp-body' : 'font-mono'

  return (
    <section id="projects" className="relative overflow-hidden pt-16 pb-16 px-6 bg-ink">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-14 left-[6%] w-4 h-4 rounded-full bg-pink/40" />
        <div className="absolute top-40 right-[10%] w-3 h-3 rounded-full bg-lime/40" />
        <div className="absolute bottom-24 right-[20%] w-5 h-5 rounded-full bg-yellow/40" />
        <div className="absolute top-1/2 left-[4%] w-3 h-3 rounded-full bg-purple/40" />
        <div className="absolute bottom-12 right-[6%] w-2 h-2 rounded-full bg-orange/40" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <span className={`inline-block ${titleFont} text-sm font-bold uppercase tracking-[0.15em] text-ink bg-yellow rounded-full px-5 py-2 mb-10 -rotate-2`}>
          {content.title}
        </span>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((project, i) => (
            <article key={project.id} className="bg-cream/5 border border-cream/10 rounded-2xl p-7 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] font-bold text-cream/50 tracking-[0.15em]">
                  {`// PROJECT_${project.id}`}
                </span>
                <span className="font-mono text-[10px] text-cream/40 tracking-wider">
                  {project.year}
                </span>
              </div>

              <h3 className={`${titleFont} text-xl font-extrabold text-cream leading-tight`} style={{ whiteSpace: 'pre-line' }}>
                {project.name}
              </h3>

              {project.compare && (
                <CompareSlider before={project.compare.before} after={project.compare.after} />
              )}

              <p className={`${bodyFont} text-sm text-cream/80 leading-relaxed flex-1`} style={{ whiteSpace: 'pre-line' }}>
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] font-bold tracking-[0.08em] text-ink rounded-full px-2.5 py-1 ${tagColors[j % tagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-1">
                <img src="/dr-seus.svg" alt="" className="w-full h-8 object-contain mb-3" />
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkFont} text-[11px] font-bold tracking-[0.1em] text-lime hover:text-lime/70`}
                    >
                      {content.githubLabel}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkFont} text-[11px] font-bold tracking-[0.1em] text-pink hover:text-pink/70`}
                    >
                      {content.liveLabel}
                    </a>
                  )}
                  {project.compare && (
                    <Link
                      href={`/molino?lang=${lang}`}
                      className={`${linkFont} text-[11px] font-bold tracking-[0.1em] text-purple hover:text-purple/70`}
                    >
                      {content.compareLabel}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

//{project.compare && <CompareSlider before={project.compare.before} after={project.compare.after} />}
// Esto renderiza el CompareSlider solo si project.compare existe (no es undefined).
// Es una forma de condicional en JSX: si la primera parte es verdadera, se renderiza la segunda.

//En JavaScript, && evalúa el lado izquierdo primero:
// si es "falsy" (false, undefined, null, 0, ''),
// se detiene ahí y devuelve eso — nunca llega a evaluar el lado derecho.
// Si es "truthy", devuelve el lado derecho. React aprovecha esto:
// si project.compare es undefined (como en tu proyecto de Handcrafted Haven, que no tiene compare),
// React recibe undefined y no renderiza nada. Si sí existe (como en Molino Campo Noble), React renderiza el <CompareSlider>.
// Es la forma más común en React de decir "muestra esto solo si existe ese dato" — por eso definimos compare como opcional (?) en el tipo Project

//Nota sobre hover:[text-shadow:...]: ya viste hover: y valores arbitrarios [...] por separado — 
// aquí se combinan: hover:[text-shadow:...] aplica una propiedad de CSS que Tailwind no tiene como utilidad (text-shadow) 
// pero solo al pasar el mouse encima. Mismo patrón de siempre, dos ideas juntas.

// Recordatorio: tu proyecto de Molino Campo Noble usa /projects/molino-before.jpg y /projects/molino-after.jpg — 
// esos archivos todavía no existen. Cuando tengas esas capturas (las del PDF, antes/después del sitio), 
// guárdalas en public/projects/ con esos nombres exactos para que el slider las encuentre.