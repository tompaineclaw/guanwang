import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-10 py-24 md:py-32">
      <div className="w-full max-w-[900px] mx-auto flex flex-col items-center text-center gap-8 md:gap-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 text-xs font-bold uppercase tracking-[0.12em] text-blue-200">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(82,102,235,0.9)]" />
          OPC ONE-PERSON COMPANY · 2026
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
          建峰亿腾科技
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 tracking-[0.02em]">
          <strong className="font-semibold">AI 时代，一人即公司</strong>
        </p>

        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
          建峰亿腾科技专注 OPC 一人公司孵化。从认知、注册、AI 工具栈到首批客户，我们陪你从 0 到 1。
        </p>

        <div className="w-full max-w-[480px]">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/apply')
            }}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="输入你的手机号，开启 OPC 之旅"
              pattern="[0-9]{11}"
              maxLength={11}
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-300/70"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              申请入驻
            </button>
          </form>
          <p className="mt-4 text-sm text-white/55">
            一人公司在此起步 · 申请审核周期 3–5 个工作日
          </p>
        </div>
      </div>
    </section>
  )
}
