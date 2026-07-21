'use client'

import { useState, useRef, type PointerEvent } from 'react'
import Image from 'next/image'

interface CompareSliderProps {
  before: string
  after: string
  tall?: boolean
}

export default function CompareSlider({ before, after, tall = false }: CompareSliderProps) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const percent = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, percent)))
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={e => updatePos(e.clientX)}
      onPointerMove={e => e.buttons === 1 && updatePos(e.clientX)}
      className={`relative w-full rounded-md overflow-hidden cursor-ew-resize select-none border border-gborder ${tall ? 'aspect-[9/16] bg-gbg' : 'aspect-video'}`}
    >
      <Image src={before} alt="Antes" fill draggable={false} className={tall ? 'object-contain' : 'object-cover'} />
      <Image
        src={after}
        alt="Después"
        fill
        draggable={false}
        className={tall ? 'object-contain' : 'object-cover'}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center text-gbg text-xs font-bold shadow-lg">
          ↔
        </div>
      </div>
    </div>
  )
}

//clip-path — una propiedad de CSS que "recorta" qué parte de un elemento es visible,
// sin cambiar su tamaño real. clip-path: inset(arriba derecha abajo izquierda)
// recorta esa cantidad desde cada lado. La idea del slider: ponemos la foto "después" encima de la foto "antes",
// y le recortamos progresivamente el lado derecho según dónde esté el mouse — así se "revela" la foto de abajo.

//Pointer Events — onPointerDown, onPointerMove son como onClick, pero para arrastrar.
// e.clientX te da la posición horizontal del mouse/dedo en la pantalla.
// e.buttons === 1 verifica que el botón izquierdo del mouse esté presionado en ese momento
// (para solo mover el slider mientras arrastras, no con cualquier movimiento del mouse).

//La foto "antes" (before) va abajo, completa, sin recortar — es la base.
//La foto "después" (after) va encima, pero con clipPath: inset(0 ${100 - pos}% 0 0) — 
// le recorta el (100 - pos)% desde la derecha. 
// Si pos es 30 (el usuario arrastró poquito a la derecha), se recorta el 70% derecho de "después", 
// dejando visible solo su 30% izquierdo — y como está encima de "antes", el otro 70% de la imagen que ves es "antes" asomándose por debajo.
//
// La barrita blanca (div con w-0.5 bg-white) y el círculo con ↔ son solo decoración visual para marcar dónde está el punto de arrastre — 
// no tienen lógica, siguen la posición de pos con style={{ left: ... }}.
//pointer-events-none en la barrita — así el mouse "atraviesa" ese elemento decorativo y el evento de arrastre lo sigue recibiendo el div contenedor de atrás, 
// no la barrita