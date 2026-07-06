import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV = [
  { label: '首页', to: '/' },
  { label: '核心服务', to: '/services' },
  { label: '关于我们', to: '/about' },
  { label: '联系', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/logo.png"
            alt="建峰亿腾科技"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            draggable={false}
          />
          <span className="text-white font-bold text-lg leading-none whitespace-nowrap">
            建峰亿腾科技
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `font-medium text-[15px] hover:opacity-80 transition-opacity ${
                  isActive ? 'text-white' : 'text-white/80'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="/apply.html"
            className="ml-2 inline-flex items-center gap-1 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            申请入驻
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2 -mr-2"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href="/apply.html"
              className="mt-2 inline-flex items-center justify-center gap-1 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold"
            >
              申请入驻
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
