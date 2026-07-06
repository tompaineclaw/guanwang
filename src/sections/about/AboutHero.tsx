export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-widest text-white/90 font-semibold">
            ABOUT US · 关于建峰亿腾
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
          为独立创业者
          <br />
          搭建一座基础设施
        </h1>
        <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          我们相信，未来十年最伟大的公司，可能只由一个人和一群 AI 组成。
          <br />
          建峰亿腾要做的，是让这件事变得简单、便宜、可信。
        </p>
      </div>
    </section>
  )
}
