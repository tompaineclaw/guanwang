import { Link } from 'react-router-dom'

function SoonLink({ label }: { label: string }) {
  return (
    <span className="text-white/50 cursor-default inline-flex items-center gap-2 text-sm">
      {label}
      <small className="text-[10px] font-medium tracking-wider px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 uppercase">
        敬请期待
      </small>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="建峰亿腾科技" className="w-10 h-10 object-contain" />
              <span className="flex flex-col">
                <span className="text-white font-bold leading-none">建峰亿腾科技</span>
                <span className="text-white/60 text-xs leading-none mt-1">JianfengYiteng Tech</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/65 leading-relaxed">
              专注 OPC 一人公司孵化的科技平台。认知、注册、AI 工具、私域、订单、财税，让独立创业者不再孤军奋战。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">核心服务</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-white/70 hover:text-white">认知培训</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white">公司注册</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white">AI 工具栈</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white">私域社群</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white">订单对接</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white">财税法务</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">公司</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-white">关于我们</Link></li>
              <li><a href="/apply.html" className="text-white/70 hover:text-white">申请入驻</a></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white">联系我们</Link></li>
              <li><a href="mailto:hr@jfyt.com.cn" className="text-white/70 hover:text-white">加入我们</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">资源</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="mailto:press@jfyt.com.cn" className="text-white/70 hover:text-white">媒体咨询</a></li>
              <li><SoonLink label="OPC 创始人手册" /></li>
              <li><SoonLink label="社区论坛" /></li>
              <li><SoonLink label="博客" /></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm text-white/55">© 2026 湖南建峰亿腾科技有限公司</div>
          <div className="flex items-center gap-5 text-sm flex-wrap">
            <a href="/privacy.html" className="text-white/65 hover:text-white">隐私政策</a>
            <a href="/terms.html" className="text-white/65 hover:text-white">服务条款</a>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener"
              className="text-white/65 hover:text-white"
            >
              湘ICP备2026027240号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
