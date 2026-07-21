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

export default function Projects({ content, lang }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-gcard/40">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="font-mono text-[13px] font-bold tracking-[0.2em] text-gprimary mb-12"
          style={{ textShadow: '0 0 10px rgba(255,45,120,0.5)' }}
        >
          {content.title}
        </h2>

        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {content.items.map(project => (
            <article key={project.id} className="project-card bg-gcard border border-gborder rounded-lg p-7 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] font-bold text-gmuted tracking-[0.15em]">
                  {`// PROJECT_${project.id}`}
                </span>
                <span className="font-mono text-[10px] text-[#2a2a48] tracking-wider">
                  {project.year}
                </span>
              </div>

              <h3 className="font-mono text-xl font-extrabold text-gtext leading-tight">
                {project.name}
              </h3>

              {project.compare && (
                <CompareSlider before={project.compare.before} after={project.compare.after} />
              )}

              <p className="text-[13px] text-[#6a6a88] leading-relaxed flex-1" style={{ whiteSpace: 'pre-line' }}>
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="skill-tag font-mono text-[10px] font-bold tracking-[0.08em] text-gpurple bg-gpurple/10 border border-gpurple/20 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-1 pt-3 border-t border-gborder">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] font-bold tracking-[0.1em] text-gaccent hover:[text-shadow:0_0_10px_rgba(0,255,179,0.7)]"
                  >
                    {content.githubLabel}
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] font-bold tracking-[0.1em] text-gprimary hover:[text-shadow:0_0_10px_rgba(255,45,120,0.7)]"
                  >
                    {content.liveLabel}
                  </a>
                )}
                {project.compare && (
                  <Link
                    href={`/molino?lang=${lang}`}
                    className="font-mono text-[11px] font-bold tracking-[0.1em] text-gprimary hover:[text-shadow:0_0_10px_rgba(255,45,120,0.7)]"
                  >
                    {content.compareLabel}
                  </Link>
                )}
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
// aquí se combinan: hover:[text-shadow:0_0_10px_rgba(0,255,179,0.7)] aplica una propiedad de CSS que Tailwind no tiene como utilidad (text-shadow) 
// pero solo al pasar el mouse encima. Mismo patrón de siempre, dos ideas juntas.

// Recordatorio: tu proyecto de Molino Campo Noble usa /projects/molino-before.jpg y /projects/molino-after.jpg — 
// esos archivos todavía no existen. Cuando tengas esas capturas (las del PDF, antes/después del sitio), 
// guárdalas en public/projects/ con esos nombres exactos para que el slider las encuentre.