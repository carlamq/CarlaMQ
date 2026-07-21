import type { CSSProperties } from 'react'

export function OniMask({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <ellipse cx="60" cy="68" rx="42" ry="48" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M36 28 L28 5 L44 22" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M84 28 L92 5 L76 22" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M32 52 Q47 44 60 52 Q73 44 88 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="44" cy="62" rx="9" ry="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="76" cy="62" rx="9" ry="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="44" cy="62" r="4" fill="currentColor" />
      <circle cx="76" cy="62" r="4" fill="currentColor" />
      <circle cx="60" cy="76" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M36 92 Q48 104 60 96 Q72 104 84 92" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="48" y1="93" x2="48" y2="102" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="96" x2="60" y2="106" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="72" y1="93" x2="72" y2="102" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function Kappa({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <ellipse cx="50" cy="22" rx="28" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="50" cy="22" rx="18" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="50" cy="36" rx="24" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M40 40 Q50 48 60 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="62" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="32" r="2.5" fill="currentColor" />
      <circle cx="62" cy="32" r="2.5" fill="currentColor" />
      <ellipse cx="50" cy="82" rx="30" ry="34" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="50" cy="82" rx="20" ry="24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="30" y1="82" x2="70" y2="82" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M20 72 Q5 68 8 82 Q8 90 20 88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M80 72 Q95 68 92 82 Q92 90 80 88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="42" y1="56" x2="40" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="58" y1="56" x2="60" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function TenguFan({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      {[-50, -30, -10, 10, 30, 50].map((angle, i) => (
        <line
          key={i}
          x1="50" y1="90"
          x2={50 + 70 * Math.sin((angle * Math.PI) / 180)}
          y2={90 - 70 * Math.cos((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity={0.7 + i * 0.05}
        />
      ))}
      <path
        d={`M ${50 + 70 * Math.sin((-50 * Math.PI) / 180)} ${90 - 70 * Math.cos((-50 * Math.PI) / 180)}
            A 70 70 0 0 1 ${50 + 70 * Math.sin((50 * Math.PI) / 180)} ${90 - 70 * Math.cos((50 * Math.PI) / 180)}`}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <ellipse cx="50" cy="90" rx="5" ry="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d={`M ${50 + 50 * Math.sin((-50 * Math.PI) / 180)} ${90 - 50 * Math.cos((-50 * Math.PI) / 180)}
            A 50 50 0 0 1 ${50 + 50 * Math.sin((50 * Math.PI) / 180)} ${90 - 50 * Math.cos((50 * Math.PI) / 180)}`}
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}
