import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: '首页', to: '/', desc: '了解建峰亿腾科技做什么' },
  { label: '核心服务', to: '/services', desc: '6 大孵化服务全清单' },
  { label: '申请入驻', to: '/apply', desc: '5 步从 0 到 1，最快 14 天启动' },
  { label: '关于我们', to: '/about', desc: '团队 / 资质 / 办公地址' },
  { label: '联系', to: '/contact', desc: 'bd@ / hr@ / press@ 三种入口' },
]

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="页面未找到"
        description="您访问的页面不存在或已被移除。可以回到首页或浏览我们的核心服务。"
        path="/404"
        noindex
      />
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <div className="text-[120px] md:text-[180px] font-black leading-none text-white/10 tracking-tighter select-none">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white -mt-6 mb-4">
              页面走丢了
            </h1>
            <p className="text-base text-white/65 leading-relaxed max-w-md mx-auto">
              你访问的页面可能已被移除、改名或暂未上线。<br className="hidden md:inline" />
              下面是当前上线的全部页面，或者直接去申请入驻。
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget)
              const q = String(fd.get('q') || '').trim()
              if (q) window.location.href = `https://www.bing.com/search?q=${encodeURIComponent('site:jianfengyiteng.com.cn ' + q)}`
            }}
            className="mb-8"
          >
            <div className="flex items-stretch gap-2 bg-white/[0.06] border border-white/15 rounded-full px-5 py-2 focus-within:border-blue-300/60">
              <input
                name="q"
                type="search"
                placeholder="站内搜索关键词..."
                autoComplete="off"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none py-2 text-base"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
              >
                搜索
              </button>
            </div>
          </form>

          <ul className="grid sm:grid-cols-2 gap-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-300/40 px-5 py-4 transition-colors group"
                >
                  <div className="text-white font-semibold text-base group-hover:text-blue-200 transition-colors">
                    {l.label} →
                  </div>
                  <div className="text-xs text-white/50 mt-1">{l.desc}</div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
            >
              ← 返回首页
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              联系客服 →
            </Link>
            <a
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent text-white/70 hover:text-white"
            >
              全站地图
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
