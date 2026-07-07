import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PHONE_RE = /^\d{11}$/

export default function Hero() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const trimmed = phone.trim()
    if (trimmed && !PHONE_RE.test(trimmed)) {
      setError('请输入 11 位手机号')
      return
    }
    const params = trimmed ? `?phone=${encodeURIComponent(trimmed)}` : ''
    navigate(`/apply${params}`)
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-10 py-24 md:py-32">
      <div className="w-full max-w-[900px] mx-auto flex flex-col items-center text-center gap-8 md:gap-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 text-xs font-bold uppercase tracking-[0.12em] text-blue-200">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(82,102,235,0.9)]" />
          OPC ONE-PERSON COMPANY · 2026
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
          AI 时代，一人即公司
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 tracking-[0.02em]">
          <strong className="font-semibold">建峰亿腾科技专注 OPC 一人公司孵化。从认知、注册、AI 工具栈到首批客户，我们陪你从 0 到 1。</strong>
        </p>

        <div className="w-full max-w-[480px]">
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <label htmlFor="hero-phone" className="sr-only">手机号</label>
            <input
              id="hero-phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 11))}
              placeholder="输入你的手机号，开启 OPC 之旅"
              maxLength={11}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'hero-phone-error' : undefined}
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-300/70"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              申请入驻
            </button>
          </form>
          {error && (
            <p id="hero-phone-error" role="alert" className="mt-3 text-sm text-red-300">
              {error}
            </p>
          )}
          <p className="mt-4 text-sm text-white/55">
            一人公司在此起步 · 申请审核周期 3–5 个工作日
          </p>
        </div>
      </div>
    </section>
  )
}
