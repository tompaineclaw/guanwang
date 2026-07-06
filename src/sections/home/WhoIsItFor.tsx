const AUDIENCE = [
  {
    num: '01',
    title: '有专业技能的自由职业者',
    desc: '设计师、程序员、咨询师——你已经在接单，但缺方法、缺公司主体、缺规模化路径。',
  },
  {
    num: '02',
    title: '内容创作者想商业化',
    desc: '博主、主播、知识 IP——你有流量、有粉丝，但不知道怎么把影响力变成可持续的业务。',
  },
  {
    num: '03',
    title: '有创业想法但不想组团队',
    desc: '不想被团队管理消耗、不想处理复杂的人际关系——你只想做产品和客户。',
  },
  {
    num: '04',
    title: '已经在做副业想转全职',
    desc: '副业已经能 cover 生活费，但缺方法论、缺资源把它做成主业。OPC 是最稳的过渡形态。',
  },
]

export default function WhoIsItFor() {
  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            WHO IS IT FOR
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">谁适合 OPC？</h2>
          <p className="text-lg text-white/70">如果你是以下四类人之一，OPC 可能就是你的最优解</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCE.map((a) => (
            <article
              key={a.num}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors"
            >
              <div className="text-3xl font-black text-blue-300/60 mb-4">{a.num}</div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{a.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
