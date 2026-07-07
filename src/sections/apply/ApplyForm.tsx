import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12l5 5L20 7" />
    </svg>
  )
}

const CHECKLIST = [
  '一项可商业化的专业技能或内容能力',
  '愿意在 12 个月内从 0 到 1 走完全流程',
  '接受 AI 工具栈重塑工作流的心态',
  '可量化的 6 个月收入 / 客户目标',
  '长期主义，把 OPC 当作事业而非 quick win',
]

export default function ApplyForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [searchParams] = useSearchParams()
  const initialPhone = searchParams.get('phone') || ''

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
    if (!payload.name || !payload.phone || !payload.email || !payload.project || !payload.category || !payload.stage || !payload.description) {
      setError('请填写所有必填项后再提交。')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/apply', {
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
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.2] mb-5">
              我们想要看到的
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              不必包装得完美。我们更关注你这个人——你的专业技能、你的动机、你愿意为 OPC 付出多少。
            </p>

            <ul className="space-y-3 text-sm text-white/85">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-blue-300 shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-white/65 leading-relaxed">
              申请前有任何疑问？欢迎
              <Link to="/contact" className="text-blue-300 underline hover:text-blue-200 mx-1">
                联系我们的入驻顾问
              </Link>
              ，我们很乐意先聊一聊。
            </p>
          </div>

          <form onSubmit={onSubmit} noValidate className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-8 space-y-4">
            {/* honeypot: 人类看不见，机器人会填 */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  姓名 <span className="text-red-400">*</span>
                </label>
                <input type="text" name="name" required placeholder="请输入真实姓名"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  联系电话 <span className="text-red-400">*</span>
                </label>
            <input type="tel" name="phone" required placeholder="11 位手机号"
              defaultValue={initialPhone}
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                电子邮箱 <span className="text-red-400">*</span>
              </label>
              <input type="email" name="email" required placeholder="example@yourdomain.com"
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors" />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                项目名称 <span className="text-red-400">*</span>
              </label>
              <input type="text" name="project" required placeholder="一句话概括你的项目"
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  项目方向 <span className="text-red-400">*</span>
                </label>
                <select name="category" required defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:border-blue-300/60 focus:outline-none transition-colors">
                  <option value="" disabled className="bg-[#0c0c0c]">请选择</option>
                  <option className="bg-[#0c0c0c]">AI 工具 / 应用</option>
                  <option className="bg-[#0c0c0c]">大模型 / 基础模型</option>
                  <option className="bg-[#0c0c0c]">开发者工具</option>
                  <option className="bg-[#0c0c0c]">内容 / 创意工具</option>
                  <option className="bg-[#0c0c0c]">企业 SaaS</option>
                  <option className="bg-[#0c0c0c]">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  当前阶段 <span className="text-red-400">*</span>
                </label>
                <select name="stage" required defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:border-blue-300/60 focus:outline-none transition-colors">
                  <option value="" disabled className="bg-[#0c0c0c]">请选择</option>
                  <option className="bg-[#0c0c0c]">仅想法</option>
                  <option className="bg-[#0c0c0c]">已有 MVP</option>
                  <option className="bg-[#0c0c0c]">已有早期用户</option>
                  <option className="bg-[#0c0c0c]">已有收入</option>
                  <option className="bg-[#0c0c0c]">已有融资</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                项目描述 <span className="text-red-400">*</span>
              </label>
              <textarea name="description" required rows={5}
                placeholder="1) 你目前的状态（在职/自由职业/副业）2) 你想做的 OPC 方向 3) 你有什么独特优势 4) 6 个月后你想达成什么"
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors resize-y" />
              <p className="mt-1.5 text-xs text-white/50">提示：具体、生动的项目描述会比漂亮话术更有说服力。</p>
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                项目链接（选填）
              </label>
              <input type="url" name="link" placeholder="https:// 你的产品 / 仓库 / 文档"
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white placeholder-white/35 focus:border-blue-300/60 focus:outline-none transition-colors" />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <span className="text-sm text-white/60">提交后我们会在 48 小时内回复。</span>
              <button type="submit" disabled={submitting}
                className="px-7 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
                {submitting ? '提交中…' : '提交申请'}
              </button>
            </div>

            {error && (
              <div role="alert" className="text-sm text-red-300 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-3">
                {error}
              </div>
            )}
            {success && (
              <div className="text-sm text-green-300 bg-green-500/10 border border-green-400/20 rounded-lg px-4 py-3">
                ✓ 申请已成功提交！我们会在 48 小时内通过邮件联系你。
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
