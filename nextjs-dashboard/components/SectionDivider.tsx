const COLORS = ['#c8f542', '#ff5fa8', '#ffd23f', '#8b5cf6', '#ff7a30']

export default function SectionDivider() {
  const cols = 20
  const w = 60
  const h = 44
  const totalW = cols * w

  const scallops: { x: number; color: string }[] = []
  for (let c = 0; c < cols; c++) {
    scallops.push({ x: c * w, color: COLORS[c % COLORS.length] })
  }

  return (
    <div aria-hidden="true" className="w-full overflow-hidden leading-[0] bg-ink" style={{ height: `${h}px` }}>
      <svg
        width={totalW}
        height={h}
        viewBox={`0 0 ${totalW} ${h}`}
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {scallops.map(({ x, color }, i) => (
          <path
            key={i}
            d={`M ${x} 0 A ${w / 2} ${h} 0 0 0 ${x + w} 0 Z`}
            fill={color}
          />
        ))}
      </svg>
    </div>
  )
}
