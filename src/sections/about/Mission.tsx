const ITEMS = [
  {
    title: '我们的使命',
    desc: '把原本只有大公司才能调用的算力、模型、空间、资本，开放给每一位独立创业者。我们相信真正的创新，往往诞生于最小的组织。',
  },
  {
    title: '我们的愿景',
    desc: '在 2030 年前，帮助 10,000 位独立创业者在全球范围内成立自己的 OPC，并让其中至少 100 家成为独角兽。',
  },
  {
    title: '我们如何工作',
    desc: '不写 PPT，不开长会。每个季度发布一个可量化的里程碑，所有团队以创始人为客户对象工作。透明，是我们的底层公约。',
  },
  {
    title: '我们的承诺',
    desc: '对创业者承诺：12 个月内不收一分钱孵化费，融资成功后再结算。对团队承诺：把公司做成长期主义，不被短期增长绑架。',
  },
]

export default function Mission() {
  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            MISSION & VISION
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">使命 · 愿景 · 价值观</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{it.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
