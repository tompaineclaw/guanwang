import { Link } from 'react-router-dom'

const PACKAGES = [
  {
    name: '启航版',
    price: '0 元',
    duration: '12 个月',
    desc: '适合刚启动的独立创业者。认知培训 + 公司注册 0 费 + 私域社群基础版 + 财税代办首年免费。',
    cta: '立即申请',
    href: '/apply',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    name: '加速版',
    price: '0.5% 股权',
    duration: '24 个月',
    desc: '适合已有 MVP 的团队。在启航版基础上加 AI 工具栈配置 + 订单对接优先权 + 创始人俱乐部核心会员。',
    cta: '立即申请',
    href: '/apply',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    name: '旗舰版',
    price: '2% 股权',
    duration: '36 个月',
    desc: '适合高潜力项目。包含 6 项服务全开 + 1v1 战略导师 + 海外架构搭建 + 投资人直推。',
    cta: '预约面谈',
    href: '/contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
]

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export default function Packages() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            PACKAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">三档孵化套餐</h2>
          <p className="text-base text-white/70">
            无论你是刚有想法的独立创业者，还是已经有早期产品的成熟团队，都有适合你的方案。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {p.name} · <span className="text-blue-300">{p.price}</span> / {p.duration}
              </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1">{p.desc}</p>
            <Link
              to={p.href}
              className="inline-flex items-center gap-1.5 text-sm text-blue-300 hover:text-blue-200 font-medium"
            >
              {p.cta} <Arrow />
            </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
