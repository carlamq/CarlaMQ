export default function SectionDivider({ flip = false }: { flip?: boolean }) {
  const cols = 24
  const rows = 2
  const w = 48
  const h = 32
  const totalW = cols * w
  const totalH = rows * h + h / 2

  const scales: { x: number; y: number; key: string }[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      scales.push({
        x: c * w + (r % 2 === 0 ? 0 : w / 2),
        y: r * h,
        key: `${r}-${c}`,
      })
    }
  }

  return (
    <div
      aria-hidden="true" // Esto es para que los lectores de pantalla ignoren este elemento, ya que es solo decorativo
      className={`w-full overflow-hidden opacity-30 ${flip ? 'scale-y-[-1]' : ''}`} //para voltear el patrón verticalmente con scale-y-[-1], así podemos alternar el diseño entre secciones (uno normal, el siguiente volteado).
      style={{ height: `${totalH}px` }} // Establece la altura del contenedor
    >
      <svg
        width={totalW}
        height={totalH}
        viewBox={`0 0 ${totalW} ${totalH}`}
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {scales.map(({ x, y, key }) => (
          <path
            key={key}
            d={`M ${x} ${y + h} A ${w / 2} ${h} 0 0 1 ${x + w} ${y + h}`}
            stroke="rgba(220,220,170,0.6)"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
    </div>
  )
}
