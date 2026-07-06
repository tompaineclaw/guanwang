import { useState } from 'react'

const CERTS = [
  {
    img: '/assets/images/certs/llm-engineer.jpg',
    alt: 'LLM Engineer 认证证书',
    name: 'LLM Engineer',
    org: 'Datawhale × 趋动云 × 杭州市人工智能学会',
    row: 'DWLLME0006607',
  },
  {
    img: '/assets/images/certs/llm-finetuning-engineer.jpg',
    alt: 'Fine-tuning Engineer 认证证书',
    name: 'Fine-tuning Engineer',
    org: 'Datawhale × 科大讯飞 × 讯飞星辰',
    row: 'DWFT008906',
  },
  {
    img: '/assets/images/certs/prompt-engineer.jpg',
    alt: 'Prompt Engineer 认证证书',
    name: 'Prompt Engineer · 提示词工程师',
    org: 'Datawhale × 讯飞星火 × 讯飞开放平台',
    row: 'DWPE037159',
  },
  {
    img: '/assets/images/certs/ai-coding-programming.jpg',
    alt: 'AI+编程能力认证证书',
    name: 'AI+编程能力认证',
    org: 'Datawhale × 豆包MarsCode',
    row: 'AICODING07466 · 李立志 · 2026-04-30',
  },
  {
    img: '/assets/images/certs/agent-engineer.jpg',
    alt: 'Agent Engineer 认证证书',
    name: 'Agent Engineer',
    org: 'ModelScope 魔搭社区 × Datawhale',
    row: 'DWAE021587 · 陈晓思 · 2026-04',
  },
  {
    img: '/assets/images/certs/microsoft-ai-essentials.jpg',
    alt: 'Microsoft AI Essentials 认证证书',
    name: 'AI Essentials · 人工智能基础',
    org: 'Microsoft via LinkedIn Learning',
    row: 'fe4c00902c4503tdddd3681225f14414602a03t70fcd81ldb2b5d666etsaa0ea8',
  },
  {
    img: '/assets/images/certs/ai-trainer-advanced.jpg',
    alt: '人工智能训练师（高级）认证证书',
    name: 'AI Trainer (Advanced) · 人工智能训练师（高级）',
    org: '达摩院 · 机器智能技术事业部',
    row: 'AIT260502124307000161',
  },
  {
    img: '/assets/images/certs/ai-trainer-advanced-chenxiaosi.jpg',
    alt: '人工智能训练师（高级） 认证证书 — 陈晓思',
    name: 'AI Trainer (Advanced) · 人工智能训练师（高级）',
    org: '达摩院 · 机器智能技术事业部',
    row: 'AIT260430145923000143 · 陈晓思 · 2026-04-30',
  },
  {
    img: '/assets/images/certs/llm-development-engineer.jpg',
    alt: '大模型开发工程师认证证书',
    name: 'LLM Development Engineer · 大模型开发工程师',
    org: '浪潮信息 × Datawhale',
    row: '李立志 · Datawhale 大模型开发认证',
  },
  {
    img: '/assets/images/certs/openai-completion.jpg',
    alt: 'OpenAI Certificate of Completion',
    name: 'Certificate of Completion',
    org: 'OpenAI',
    row: '2026-04-25',
  },
]

function ZoomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  )
}

export default function Credentials() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)

  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            TEAM CREDENTIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">核心团队专业认证</h2>
          <p className="text-base text-white/70">
            技术团队持续在大模型工程化方向深耕，已获得行业领先机构颁发的多项专业认证。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c) => (
            <button
              key={c.row + c.name}
              type="button"
              onClick={() => setLightbox({ src: c.img, title: c.name })}
              className="group text-left bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-4 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-white/5">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute right-3 bottom-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIcon />
                </span>
              </div>
              <div className="text-base font-bold text-white mb-1">{c.name}</div>
              <div className="text-sm text-white/65 mb-2">{c.org}</div>
              <div className="text-xs text-white/45 font-mono">{c.row}</div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center"
            onClick={() => setLightbox(null)}
            aria-label="关闭"
          >
            ×
          </button>
          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-white text-center text-sm">{lightbox.title}</div>
          </div>
        </div>
      )}
    </section>
  )
}
