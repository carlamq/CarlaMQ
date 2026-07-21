interface SkillsProps {
  content: {
    title: string
    categories: { name: string; items: string[] }[]
  }
}

export default function Skills({ content }: SkillsProps) {
  return (
    <section id="skills" className="relative overflow-hidden py-24 px-6">

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h2
          className="font-mono text-[13px] font-bold tracking-[0.2em] text-gprimary mb-12"
          style={{ textShadow: '0 0 10px rgba(86,156,214,0.5)' }}
        >
          {content.title}
        </h2>

        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
          {content.categories.map(cat => (
            <div key={cat.name} className="bg-gcard border border-gborder rounded-lg p-7">
              <div className="mb-5">
                <span
                  className="font-mono text-[10px] font-extrabold tracking-[0.2em] text-gpurple"
                  style={{ textShadow: '0 0 8px rgba(220,220,170,0.5)' }}
                >
                  {cat.name}
                </span>
                <div className="mt-2 h-px bg-linear-to-r from-gpurple/40 to-transparent" />
              </div>

              <div className="font-mono text-xs flex flex-col gap-2">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-gprimary shrink-0">›</span>
                    <span className="skill-tag text-[#a0a0b8] px-1.5 py-0.5 rounded border border-transparent">
                      {item}
                    </span>
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
