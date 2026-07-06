import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: '认知培训',
    desc: 'OPC 工作坊、行业研究、社群分享。先打开认知，再谈创业。',
    href: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M2 3h20l-2 9H4L2 3zM5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M9 7h6" />
      </svg>
    ),
  },
  {
    title: '公司注册',
    desc: '主体选择、注册代办、税务登记、银行开户。3 个工作日下证。',
    href: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    title: 'AI 工具栈',
    desc: 'Coze / Dify / 飞书多维表 / Notion AI 等配置，2-3 周搭好你的 AI 工作流。',
    href: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: '私域社群',
    desc: '创始人俱乐部、每周分享、资源对接。800+ 同行者陪你走通这条路。',
    href: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-1a6 6 0 0 1 12 0v1M16 11a4 4 0 0 1 4 4M22 21v-1a5 5 0 0 0-4-4.9" />
      </svg>
    ),
  },
  {
    title: '订单对接',
    desc: '客户、项目、订单流量分发。让好产品不被埋没。',
    href: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M16 11V7a4 4 0 0 0-8 0v4M5 11h14l-1 10H6L5 11z" />
      </svg>
    ),
  },
  {
    title: '财税法务',
    desc: '一人公司特化财税、合同模板、法律咨询。让你专注业务，告别后顾之忧。',
    href: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M9 11l3 3 7-7" />
        <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
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

export default function CoreServices() {
  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            CORE SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">核心服务</h2>
          <p className="text-lg text-white/70 mb-2">从 0 到 1 的全流程支持</p>
          <p className="text-base text-white/65">
            我们提供<strong className="text-white">认知培训、公司注册、AI 工具栈配置、私域社群、订单对接、财税法务</strong>，覆盖从想法到规模化全链路。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">{s.desc}</p>
              <Link
                to={s.href}
                className="inline-flex items-center gap-1.5 text-sm text-blue-300 hover:text-blue-200 font-medium"
              >
                Learn more <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
