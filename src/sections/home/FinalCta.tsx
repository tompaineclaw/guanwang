import { Link, useLocation } from 'react-router-dom'

export default function FinalCta() {
  const location = useLocation()
  const isApplyPage = location.pathname === '/apply'

  function handleApplyClick(e: React.MouseEvent) {
    // 在 /apply 页面点击时，Link 默认不会触发滚动
    // 手动拦截，平滑滚动到页面顶部
    if (isApplyPage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-6">
          YOUR OPC STARTS HERE
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
          把下一个想法，
          <br />
          变成你的一人公司
        </h2>
        <p className="text-lg text-white/75 mb-10">
          我们准备好了全流程陪跑。剩下的，只需要你。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/apply"
            onClick={handleApplyClick}
            className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors"
          >
            申请入驻 OPC
          </Link>
          <a
            href="/services"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
          >
            查看核心服务
          </a>
        </div>
      </div>
    </section>
  )
}
