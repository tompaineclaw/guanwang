import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

function Arrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

const SPECIAL = [
  { label: '申请入驻咨询', href: '/apply' },
  { label: '商务合作 (bd@jfyt.com.cn)', href: 'mailto:bd@jfyt.com.cn' },
  { label: '加入团队 (hr@jfyt.com.cn)', href: 'mailto:hr@jfyt.com.cn' },
  { label: '媒体采访 (press@jfyt.com.cn)', href: 'mailto:press@jfyt.com.cn' },
]

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSuccess(false)
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    // honeypot: 机器人会填，正常用户不会
    if (payload.website) {
      form.reset()
      setSuccess(true)
      return
    }
    if (!payload.name || !payload.email || !payload.type || !payload.message) {
      setError('请填写所有必填项后再提交。')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) {
        throw new Error(json.error || '提交失败，请稍后再试。')
      }
      form.reset()
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败，请稍后再试。')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-24 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.2] mb-5">
              告诉我们一些背景
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-4">
              无论咨询什么，先简单介绍一下自己和你想聊的事，会让我们的回复更有针对性。
            </p>
            <p className="text-base text-white/75 leading-relaxed">
              我们承诺 24 小时内人工回复每一封邮件——不是自动回复，也不是客服机器人。
            </p>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-xs font-medium text-white/60 tracking-[0.12em] uppercase mb-4">
                专项咨询
              </h3>
              <ul className="space-y-3 text-sm text-white/85">
                {SPECIAL.map((s) => (
                  <li key={s.label} className="flex items-center gap-2">
                    <span className="text-blue-300 shrink-0">
                      <Arrow />
                    </span>
                    {s.href.startsWith('mailto:') ? (
                      <a
                        href={s.href}
                        className="hover:text-blue-300 transition-colors"
                      >
                        {s.label} →
                      </a>
                    ) : (
                      <Link
                        to={s.href}
                        className="hover:text-blue-300 transition-colors"
                      >
                        {s.label} →
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-8 space-y-5">
            {/* honeypot: 人类看不见，机器人会填 */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  姓名 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="请输入姓名"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  公司 / 角色（选填）
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="如：某某科技 · 创始人"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  邮箱 <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@yourdomain.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">电话（选填）</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="11 位手机号"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                咨询类型 <span className="text-red-400">*</span>
              </label>
              <select
                name="type"
                required
                defaultValue=""
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:border-blue-300/60 focus:outline-none transition-colors"
              >
                <option value="" disabled className="bg-[#0c0c0c]">请选择</option>
                <option className="bg-[#0c0c0c]">申请入驻咨询</option>
                <option className="bg-[#0c0c0c]">商务合作</option>
                <option className="bg-[#0c0c0c]">媒体采访</option>
                <option className="bg-[#0c0c0c]">加入团队</option>
                <option className="bg-[#0c0c0c]">投资者关系</option>
                <option className="bg-[#0c0c0c]">其他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                留言 <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="简单描述你想聊的事情，方便我们安排最合适的人回复你。"
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <span className="text-sm text-white/60">我们承诺 24 小时内回复。</span>
              <button
                type="submit"
                disabled={submitting}
                className="px-7 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? '发送中…' : '发送消息'}
              </button>
            </div>

            {error && (
              <div role="alert" className="text-sm text-red-300 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-3">
                {error}
              </div>
            )}
            {success && (
              <div className="text-sm text-green-300 bg-green-500/10 border border-green-400/20 rounded-lg px-4 py-3">
                ✓ 消息已发送！我们会尽快通过邮件回复你。
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
