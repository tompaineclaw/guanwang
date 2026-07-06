function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

const CARDS = [
  {
    icon: <PinIcon />,
    title: '湘潭市',
    address: '湘潭市九华经开区创新创业中心2楼',
    meta: '500㎡ 共享空间 · 路演厅 · 硬件实验室',
  },
  {
    icon: <ClockIcon />,
    title: '开放时间',
    address: '工作日 09:00 – 22:00 · 周末 10:00 – 18:00',
    meta: '所有在孵 OPC 全天候 7×24 通行 · 访客请提前预约',
  },
]

export default function OfficeSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            OUR OFFICES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            政府园区，欢迎来访
          </h2>
          <p className="text-base text-white/70">
            所有空间都对在孵 OPC 开放。提前 24 小时预约，我们可以安排专属参观与 1v1 咨询。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-white/85 leading-relaxed mb-2">{c.address}</p>
              <p className="text-sm text-white/60 leading-relaxed">{c.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
