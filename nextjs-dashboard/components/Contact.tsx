interface ContactProps {
  content: {
    title: string
    headline: string
    sub: string
    email: string
    github: string
    linkedin: string
    cta: string
  }
}

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6 pb-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-20 items-start">
          <div>
            <h2
              className="font-mono text-[13px] font-bold tracking-[0.2em] text-gprimary mb-6"
              style={{ textShadow: '0 0 10px rgba(255,45,120,0.5)' }}
            >
              {content.title}
            </h2>
            <p className="text-[clamp(22px,3vw,36px)] font-bold text-gtext leading-snug mb-4">
              {content.headline}
            </p>
            <p className="text-sm text-gmuted leading-relaxed mb-10">
              {content.sub}
            </p>

            <a
              href={`mailto:${content.email}`}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.15em] text-gbg bg-gprimary rounded px-7 py-3.5 shadow-[0_0_20px_rgba(255,45,120,0.4)] hover:shadow-[0_0_40px_rgba(255,45,120,0.7)] hover:-translate-y-0.5 transition"
            >
              {content.cta} ✉
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${content.email}`}
              className="flex items-center gap-4 px-6 py-5 bg-gcard border border-gborder rounded-lg hover:border-gprimary transition-colors text-gprimary"
            >
              <span className="font-mono text-sm font-bold w-5 text-center shrink-0">✉</span>
              <span className="font-mono text-xs text-[#a0a0b8]">{content.email}</span>
            </a>
            <a
              href={`https://${content.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 bg-gcard border border-gborder rounded-lg hover:border-gpurple transition-colors text-gpurple"
            >
              <span className="font-mono text-sm font-bold w-5 text-center shrink-0">gh</span>
              <span className="font-mono text-xs text-[#a0a0b8]">{content.github}</span>
            </a>
            <a
              href={`https://${content.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 bg-gcard border border-gborder rounded-lg hover:border-gaccent transition-colors text-gaccent"
            >
              <span className="font-mono text-sm font-bold w-5 text-center shrink-0">in</span>
              <span className="font-mono text-xs text-[#a0a0b8]">{content.linkedin}</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-gborder flex justify-between items-center">
          <span className="font-mono text-[11px] text-[#2a2a48] tracking-wider">
            © 2026 — designed & built with 👻 & ☕
          </span>
          <span className="font-mono text-[11px] text-[#2a2a48] tracking-wider">
            Next.js + TypeScript + Tailwind
          </span>
        </div>
      </div>
    </section>
  )
}
