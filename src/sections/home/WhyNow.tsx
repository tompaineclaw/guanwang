const REASONS = [
  {
    num: '01 / AI 工具成熟',
    title: 'AI Agent 让个体生产力 10 倍提升',
    desc: '从写代码到做设计、从客服到运营，AI 工具栈已经成熟到「一个人 = 10 人」是真实可实现的。',
  },
  {
    num: '02 / 平台经济成熟',
    title: '抖音、小红书、微信可低成本触达百万用户',
    desc: '内容平台 + 私域工具让一个人也能建立品牌、获取客户、交付服务。不再依赖传统渠道。',
  },
  {
    num: '03 / 政策支持',
    title: '多种主体形式可选，注册门槛降至历史最低',
    desc: '个体工商户、个人独资企业、一人有限公司……多种法律主体灵活可选，注册流程已大幅简化。',
  },
  {
    num: '04 / 创业成本降低',
    title: '无需团队、办公室，5 万即可启动',
    desc: '云服务按需付费、AI 工具按 token 计费、远程协作工具免费——启动资金可以低至 5 万人民币。',
  },
]

export default function WhyNow() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            WHY NOW
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">为什么是现在？</h2>
          <p className="text-lg text-white/70">四个变量同时到位，OPC 的时代窗口正式打开</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {REASONS.map((r) => (
            <article
              key={r.num}
              className="bg-white/[0.04] border border-white/10 hover:border-white/25 rounded-2xl p-7 transition-colors"
            >
              <div className="text-sm font-bold text-blue-300/80 mb-3">{r.num}</div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">{r.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
