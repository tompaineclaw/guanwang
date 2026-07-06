type Props = {
  id: string
  num: string
  title: string
  desc: string
  bullets: string[]
  img: string
  imgAlt: string
}

export default function ServiceDetail({ id, num, title, desc, bullets, img, imgAlt }: Props) {
  return (
    <section id={id} className="py-20 md:py-24 even:bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-3 block">
              {num} — {labelOf(num)}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.2] mb-5 whitespace-pre-line">
              {title}
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-6">{desc}</p>
            <ul className="space-y-2.5 text-sm text-white/85">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="text-blue-300 mt-1 shrink-0">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={img}
              alt={imgAlt}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function labelOf(num: string): string {
  const map: Record<string, string> = {
    '01': '认知培训',
    '02': '公司注册',
    '03': 'AI 工具栈',
    '04': '私域社群',
    '05': '订单对接',
    '06': '财税法务',
  }
  return map[num] || ''
}
