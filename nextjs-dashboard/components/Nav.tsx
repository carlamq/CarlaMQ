'use client'

import { Lang } from '@/data/content'

interface NavProps { //define la forma que deben tener las props que recibe el componente Nav, en este caso, lang y onLangToggle
    lang: Lang
    onLangToggle: () => void //cambia el idioma de la página cuando se hace clic en el botón de cambio de idioma
    content: { //objeto con las 4 etiquetas de texto del menú — este es justo content[lang].nav que armamos en la lección pasada.
        about: string
        projects: string
        skills: string
        contact: string
    }
}

const scrollTo = (id: string) => { //funcion auxiliar que usa un API nativa del navegador
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) //función que hace scroll a la sección correspondiente cuando se hace clic en un enlace del menú
    //document.getElementById(id) busca un elemento HTML por su id,
    // y .scrollIntoView({ behavior: 'smooth' }) hace scroll suave hasta ahí. El ?. (optional chaining) evita un error si por alguna razón ese id no existe en la página.
}

export default function Nav({ lang, onLangToggle, content }: NavProps) {
    const links = [ 
        {label: content.about, id: 'about'},
        {label: content.projects, id: 'projects'},
        {label: content.skills, id: 'skills'},
        {label: content.contact, id: 'contact'},
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-gborder backdrop-blur-md bg-gbg/85"> {/*corchetes [ ] en una clase de Tailwind significan "valor arbitrario" */}
            <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer font-mono font-extrabold text-[15px] tracking-[0.08em]"
                >
                    <span className="text-[22px]">👻</span>
                    <span className="neon-pink">{lang === 'ja' ? 'ポートフォリオ' : 'PORTFOLIO'}</span>
                </button>

                <div className="flex items-center gap-8">
                    {links.map(({label, id}) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="nav-link bg-transparent border-none cursor-pointer font-mono text-[11px] font-bold tracking-[0.15em] text-gmuted hover:text-gtext transition-colors duration-200 py-1"
                        >
                            {label}
                        </button>
                    ))}

                    <button
                        onClick={onLangToggle}
                        className="flex items-center gap-1.5 bg-transparent border border-gborder rounded font-mono text-[11px] font-bold tracking-[0.12em] text-gtext px-3 py-1.5 transition-[border-color,box-shadow] duration-200 hover:border-gprimary hover:shadow-[0_0_10px_rgba(86,156,214,0.3)]"
                    >
                        <span>{lang === 'en' ? '🇯🇵' : '🇺🇸'}</span>
                        <span className="text-gpurple">{lang === 'en' ? 'JA' : 'EN'}</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}