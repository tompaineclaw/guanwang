const STEPS = [
  { num: '01', title: '认知觉醒', desc: '理解 OPC 是什么、为什么是趋势、是否适合你。', time: '1–2 周' },
  { num: '02', title: '定位与赛道', desc: '找到你的细分市场、目标客户、价值主张。', time: '1–2 周' },
  { num: '03', title: '公司注册', desc: '选择主体形式，完成注册、税务、银行开户。', time: '1 周' },
  { num: '04', title: 'AI 工具栈配置', desc: '搭建你的 AI 工作流：内容、客服、订单、运营。', time: '2–3 周' },
  { num: '05', title: '冷启动与商业化', desc: '首批客户、内容矩阵、私域转化、规模化。', time: '持续' },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            INCUBATION PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">孵化流程</h2>
          <p className="text-lg text-white/70 mb-2">5 步从 0 到 1</p>
          <p className="text-base text-white/65">
            我们用结构化方法，把「一个人开公司」变成可执行的路径。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-3xl font-black text-white tabular-nums">{s.num}</span>
                <span className="text-[10px] font-bold tracking-widest text-blue-300/80 uppercase">
                  STEP
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{s.desc}</p>
              <div className="text-xs font-semibold text-blue-300/90 bg-blue-500/10 inline-block px-2.5 py-1 rounded">
                {s.time}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
