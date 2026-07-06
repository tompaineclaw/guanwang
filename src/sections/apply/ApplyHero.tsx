export default function ApplyHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center px-6 md:px-10 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs tracking-widest text-white/90 font-semibold">
            APPLY · 申请入驻
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white mb-6">
          5 步从 0 到 1，
          <br />
          先迈出第一步
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          我们用最简单的方式评估每一个申请：看你这个人、你的技能、你对 OPC 的认知。
        </p>
      </div>
    </section>
  )
}
