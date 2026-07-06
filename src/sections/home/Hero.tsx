import { useState } from 'react'

export default function Hero() {
  const [phone, setPhone] = useState('')
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-widest text-white/90 font-semibold">
            OPC ONE-PERSON COMPANY · 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white mb-6">
          建峰亿腾科技
        </h1>

        <p className="text-xl md:text-2xl text-white/95 font-semibold mb-4">
          <strong>AI 时代，一人即公司</strong>
        </p>

        <p className="text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
          建峰亿腾科技专注 OPC 一人公司孵化。从认知、注册、AI 工具栈到首批客户，我们陪你从 0 到 1。
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = '/apply.html'
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="输入你的手机号，开启 OPC 之旅"
            pattern="[0-9]{11}"
            maxLength={11}
            required
            className="flex-1 px-5 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            申请入驻
          </button>
        </form>

        <p className="mt-5 text-sm text-white/60">
          一人公司在此起步 · 申请审核周期 3–5 个工作日
        </p>
      </div>
    </section>
  )
}
