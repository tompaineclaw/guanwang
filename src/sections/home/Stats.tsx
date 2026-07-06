const STATS = [
  { num: '800', unit: '+', label: '已服务 OPC 学员' },
  { num: '6', unit: '项', label: '核心孵化服务' },
  { num: '12', unit: '个月', label: '全流程陪伴周期' },
  { num: '98', unit: '%', label: '学员满意度' },
]

export default function Stats() {
  return (
    <section className="py-12 md:py-16 border-y border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white leading-none">
                {s.num}
                <span className="text-lg md:text-xl text-white/70 ml-0.5">{s.unit}</span>
              </div>
              <div className="mt-2 text-sm text-white/65">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
