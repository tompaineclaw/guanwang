import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return
    } catch (e) {
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) return
      } catch (e2) {}
    }
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  function save(choice: 'all' | 'necessary') {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch (e) {
      try {
        sessionStorage.setItem(STORAGE_KEY, choice)
      } catch (e2) {}
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie 同意提示"
      className="fixed left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-6 z-50 max-w-[720px] md:ml-auto md:mr-0
                 bg-[rgba(15,18,28,0.96)] backdrop-blur-md border border-blue-400/30 rounded-2xl shadow-2xl
                 text-white/85 p-5 animate-[slideUp_0.4s_ease-out]"
      style={{ animation: 'slideUp 0.4s ease-out' }}
    >
      <div className="font-bold text-white text-[15px] mb-2 flex items-center gap-2">
        <span aria-hidden>🍪</span>
        <span>我们使用 Cookie</span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed mb-4">
        为了提供更好的浏览体验、记住您的偏好，以及匿名分析访问情况，
        本站使用必要的 Cookie 和本地存储。继续浏览即表示您同意我们的{' '}
        <a href="/privacy.html" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">
          隐私政策
        </a>
        。
      </p>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={() => save('all')}
          className="flex-1 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
        >
          接受全部
        </button>
        <button
          type="button"
          onClick={() => save('necessary')}
          className="flex-1 px-4 py-2.5 rounded-lg border border-white/25 text-white/85 hover:border-blue-300 hover:text-white text-sm font-semibold transition-colors"
        >
          仅必要
        </button>
      </div>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
