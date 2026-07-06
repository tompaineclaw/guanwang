export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-widest text-white/90 font-semibold">
            CONTACT · 联系我们
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
          找到对的人，
          <br />
          聊对的事
        </h1>
        <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          无论你是想成为 OPC 创始人、希望与建峰亿腾建立合作，还是加入我们的团队——
          <br />
          欢迎从以下任意方式联系。
        </p>
      </div>
    </section>
  )
}
