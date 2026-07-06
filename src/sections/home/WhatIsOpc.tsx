const BULLETS = [
  { num: '01', strong: '独立持有', text: '公司由你一个人所有，决策权 100% 在你手里' },
  { num: '02', strong: 'AI 驱动', text: '一个人 + 一套 AI 工具栈 = 10 人团队的生产力' },
  { num: '03', strong: '小而美', text: '没有团队管理、没有办公室、启动成本可以低至 5 万' },
]

export default function WhatIsOpc() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            WHAT IS OPC
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">什么是 OPC</h2>
          <p className="text-lg text-white/70">OPC：AI 时代的新公司形态</p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-xl text-white/90 leading-relaxed">
              OPC（One Person Company）<strong className="text-white">一人公司</strong>，是指由一个人独立持有、运营、决策的公司主体。
            </p>
            <p className="text-base text-white/75 leading-relaxed">
              借助 AI 工具栈，一人可以完成原本需要 10 人团队的工作。这不是「自由职业」的优雅说法——它是一种全新的公司形态，一种在 AI 时代第一次变得可行的创业方式。
            </p>
            <ul className="space-y-5 mt-8">
              {BULLETS.map((b) => (
                <li key={b.num} className="flex gap-5">
                  <span className="shrink-0 w-10 text-right text-2xl font-black text-blue-300/70 tabular-nums">
                    {b.num}
                  </span>
                  <div className="text-base text-white/85 leading-relaxed pt-1">
                    <strong className="text-white font-semibold">{b.strong}</strong> · {b.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur border border-white/10 rounded-3xl p-10 lg:p-12">
            <div className="space-y-6 text-center">
              <div>
                <span className="text-2xl md:text-3xl text-white font-bold">1 个人</span>
              </div>
              <div className="text-3xl text-blue-300/70 font-light">+</div>
              <div>
                <span className="text-2xl md:text-3xl text-white font-bold">AI 工具栈</span>
              </div>
              <div className="text-3xl text-blue-300/70 font-light">=</div>
              <div className="pt-2">
                <span className="text-3xl md:text-4xl text-blue-300 font-black">一家公司</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
