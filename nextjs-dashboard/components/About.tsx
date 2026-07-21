interface AboutProps {
  content: {
    title: string
    body: string[]
    facts: { icon: string; label: string }[]
  }
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden py-24 px-6">
      <div
        aria-hidden="true"
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 font-sans text-[320px] font-black text-transparent leading-none select-none pointer-events-none"
        style={{ WebkitTextStroke: '1px rgba(30,30,60,0.6)' }}
      >
        私
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-start">
        <div className="pt-30">
          <h2
            className="font-mono text-[13px] font-bold tracking-[0.2em] text-gprimary mb-6"
            style={{ textShadow: '0 0 10px rgba(255,45,120,0.5)' }}
          >
            {content.title}
          </h2>

          {content.body.map((para, i) => (
            <p
              key={i}
              className={`text-[15px] leading-relaxed mb-4 ${i === 0 ? 'text-gtext' : 'text-[#a0a0b8]'}`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-mono text-[11px] text-[#2a2a48] leading-tight mb-8 select-none overflow-hidden">
            {[
              '  ╔══════════════════════════════╗',
              '  ║   cat about.json             ║',
              '  ╚══════════════════════════════╝',
              '  {',
              '    "based_in": "japan",',
              '    "caffeinated": true,',
              '    "available_for_hire": true,',
              '    "bugs_fixed": "∞"',
              '  }',
            ].map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          {content.facts.map((fact, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 px-4 py-3 bg-gcard border border-gborder rounded-md hover:border-gpurple/40 transition-colors"
            >
              <span className="text-xl shrink-0">{fact.icon}</span>
              <span className="font-mono text-xs text-[#a0a0b8] tracking-wide">{fact.label}</span>
            </div>
          ))}
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