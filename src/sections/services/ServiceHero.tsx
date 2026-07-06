export default function ServiceHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-widest text-white/90 font-semibold">
            CORE SERVICES · 6 项核心服务
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
          从 0 到 1 的
          <br />
          全流程支持
        </h1>
        <p className="text-xl text-white/85">我们不只给方法，更给工具、给资源、给客户。</p>
      </div>
    </section>
  )
}
