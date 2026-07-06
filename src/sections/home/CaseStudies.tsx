const CASES = [
  {
    avatar: '林',
    name: '林筱',
    role: '知识 IP · 25 万粉',
    body: (
      <>
        通过 OPC 工作坊 + AI 工具栈配置，把我的小红书账号从副业做成了主业。现在一个人就是一家公司，
        <strong className="text-white">月收入 5 倍于之前上班</strong>。
      </>
    ),
  },
  {
    avatar: '陈',
    name: '陈默',
    role: '独立开发者 · 全栈',
    body: (
      <>
        公司注册 + 财税代办完全不用操心，我一个人接了之前 5 人团队都搞不定的外包项目。
        <strong className="text-white">年收入翻 3 倍</strong>，时间还更自由。
      </>
    ),
  },
  {
    avatar: '苏',
    name: '苏琪',
    role: '品牌设计师 · 独立工作室',
    body: (
      <>
        创始人俱乐部的资源对接帮了大忙——第一笔 8 万的订单就是社群里的同行介绍的。私域社群不只是人脉，
        <strong className="text-white">是真金白银</strong>。
      </>
    ),
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">学员案例</h2>
          <p className="text-lg text-white/70 mb-2">正在用 OPC 改变轨迹的人</p>
          <p className="text-base text-white/65">从想法到一人公司，他们已经走通。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CASES.map((c) => (
            <article
              key={c.name}
              className="bg-white/[0.04] border border-white/10 hover:border-white/25 rounded-2xl p-7 transition-colors"
            >
              <div className="text-5xl text-blue-300/40 font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-sm text-white/85 leading-relaxed mb-6">{c.body}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div
                  className="w-11 h-11 rounded-full bg-blue-500/20 text-blue-200 font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {c.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{c.name}</div>
                  <div className="text-white/55 text-xs">{c.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
