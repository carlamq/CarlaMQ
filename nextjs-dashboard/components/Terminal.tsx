'use client'

import { useState, useRef, useEffect, type KeyboardEvent } from 'react'
import { Lang, content as allContent } from '@/data/content'

interface TerminalProps {
    lang: Lang
    onLangChange: (l: Lang) => void
}

interface HistoryEntry { // Definimos la interfaz HistoryEntry para representar cada entrada en el historial de la terminal
    type: 'input' | 'output' | 'error'
    lines: string[]
}

const GITHUB_URL = 'https://github.com/carlamq'


export default function Terminal({ lang, onLangChange }: TerminalProps) {
    const c = allContent[lang].terminal //importamos content pero le ponemos un alias c para evitar choques de nombres con la variable content que ya tenemos en el componente Home
    const [history, setHistory] = useState<HistoryEntry[]>([
 
        { type: 'output', lines: c.welcome },
    ])
    const [input, setInput] = useState('')
    const [cmdHistory, setCmdHistory] = useState<string[]>([])
    const [cmdIdx, setCmdIdx] = useState(-1)
    const outputRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        const el = outputRef.current
        if (el) el.scrollTop = el.scrollHeight
    }, [history])

    //useEffect(() => {
    //    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    //}, [history]) //un array vacio [] se ejecuta solo una vez al montar el component, pero si le pasamos [history] se ejecuta cada vez que history cambia,
    //lo cual es lo que queremos para hacer scroll hacia abajo cada vez que se agrega una nueva entrada al historial
    
    const scrollSection = (id: string) => {
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 400)
    }

    const processCommand = (raw: string) => {
        const cmd = raw.trim().toLowerCase()
        const tc = allContent[lang].terminal //tc = terminal commands

        const inputEntry: HistoryEntry = { type: 'input', lines: [`${tc.prompt} ${raw}`] }

        if (!cmd) {
            setHistory(h => [...h, inputEntry])
            return
        }

        let output: HistoryEntry

        if (cmd === 'help') {
            output = { type: 'output', lines: tc.help }
        } else if (cmd === 'clear') {
            setHistory([{ type: 'output', lines: tc.welcome }])
            return
        } else if (cmd === 'about') {
            scrollSection('about')
            output = { type: 'output', lines: [tc.scrollMsg('about')] }
        } else if (cmd === 'projects') {
            scrollSection('projects')
            output = { type: 'output', lines: [tc.scrollMsg('projects')] }
        } else if (cmd === 'skills') {
            scrollSection('skills')
            output = { type: 'output', lines: [tc.scrollMsg('skills')] }
        } else if (cmd === 'contact') {
            scrollSection('contact')
            output = { type: 'output', lines: [tc.scrollMsg('contact')] }
        } else if (cmd === 'whoami') {
            output = { type: 'output', lines: tc.whoami }
        } else if (cmd === 'ls') {
            output = { type: 'output', lines: tc.ls }
        } else if (cmd === 'boo') {
            output = { type: 'output', lines: tc.boo }
        } else if (cmd === 'github') {
            window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
            output = { type: 'output', lines: [tc.githubMsg] }
        } else if (cmd === 'lang en') {
            onLangChange('en')
            output = { type: 'output', lines: [allContent['en'].terminal.langMsg] }
        } else if (cmd === 'lang ja') {
            onLangChange('ja')
            output = { type: 'output', lines: [allContent['ja'].terminal.langMsg] }
        } else {
            output = { type: 'error', lines: tc.notFound(cmd) }
        }
        setHistory(h => [...h, inputEntry, output])
        setCmdHistory(h => [raw, ...h])
        setCmdIdx(-1)
            
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            processCommand(input)
            setInput('')
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            const newIdx = Math.min(cmdIdx + 1, cmdHistory.length - 1)
            setCmdIdx(newIdx)
            setInput(cmdHistory[newIdx] ?? '')
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            const newIdx = Math.max(cmdIdx - 1, -1)
            setCmdIdx(newIdx)
            setInput(newIdx === -1 ? '' : cmdHistory[newIdx] ?? '')
        } else if (e.key === 'Tab') {
            e.preventDefault()
            const commands = ['help', 'about', 'projects', 'skills', 'contact', 'github', 'whoami', 'ls', 'boo', 'clear', 'lang en', 'lang ja']
            const match = commands.find(c => c.startsWith(input) && c !== input)
            if (match) setInput(match)
        }
    }

    const getLineColor = (entry: HistoryEntry, line: string): string => {
        if (entry.type === 'input') return '#d4d4d4'
        if (entry.type === 'error') return '#f44747'
        if (line.includes('→')) return '#808080'
        if (line.includes('╔') || line.includes('╚') || line.includes('║') || line.includes('┌') || line.includes('└') || line.includes('│') || line.includes('─')) return '#dcdcaa'
        if (line.includes('BOO') || line.includes('わっ') || line.includes('👻')) return '#f44747'
        return '#6a9955'
    }
    return (
        <div
            className="flex flex-col h-full bg-gbg cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Área de salida */}
            <div ref={outputRef} className="flex-1 p-3 overflow-y-auto font-mono text-[13px] leading-relaxed">
                {history.map((entry, i) =>
                    entry.lines.map((line, j) => (
                        <div
                            key={`${i}-${j}`}
                            className="term-line whitespace-pre min-h-[1.6em]"
                            style={{ color: getLineColor(entry, line) }}
                        >
                            {line}
                        </div>
                    ))
                )}
                <div />
            </div>

            {/* Fila de input */}
            <div className="flex items-center gap-2 px-3 py-2 border-t border-gborder shrink-0">
                <span className="font-mono text-[13px] text-gpurple whitespace-nowrap shrink-0">
                    {c.prompt}
                </span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    autoComplete="off"
                    className="flex-1 bg-transparent border-none outline-none font-mono text-[13px] text-gtext caret-gaccent"
                />
                <span className="cursor-blink inline-block w-2 h-4 bg-gaccent shadow-[0_0_8px_rgba(106,153,85,0.8)] shrink-0" />
            </div>
        </div>
    )
}



//cuando conectemos <Terminal> en page.tsx al final de esta lección,
// vamos a escribir <Terminal key={lang} ... />.
// Ese key={lang} hace que, cada vez que el usuario cambie de idioma,
// React destruya la Terminal vieja y cree una nueva —
// y como useState<HistoryEntry[]>([{ type: 'output', lines: c.welcome }])
// se vuelve a ejecutar desde cero en el componente nuevo,
// el mensaje de bienvenida sale automáticamente en el idioma correcto.
// Mismo resultado que el useEffect que borramos, pero sin el problema de rendimiento que señaló ESLint

//2* funciona la navegación con flechas:
// cmdHistory guarda los comandos con el más reciente primero
// (recuerda: en processCommand hacíamos setCmdHistory(h => [raw, ...h]), agregando al inicio).
// Así, cmdIdx empieza en -1 (nada seleccionado, el input está vacío o lo que el usuario esté escribiendo).
// Cada ArrowUp sube el índice (va más atrás en el tiempo), cada ArrowDown lo baja (vuelve hacia el presente), hasta llegar de nuevo a -1 = input vacío.

//dentro de esta función usas c como nombre de variable en commands.find(c => ...) —
// pero c ya existe más arriba en el componente (const c = allContent[lang].terminal, línea 20).
// Como es un parámetro de una función flecha, JavaScript crea un c nuevo solo dentro de esa función que "tapa" temporalmente al de afuera (se llama shadowing) —
// no rompe nada, pero puede ser confuso de leer. Está bien dejarlo así por ahora (así lo tenía el original),
// pero si alguna vez te da un bug raro relacionado con c, este es un sospechoso clásico.


