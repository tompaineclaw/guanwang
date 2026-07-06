import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV = [
  { label: '首页', to: '/' },
  { label: '核心服务', to: '/services' },
  { label: '关于我们', to: '/about' },
  { label: '联系', to: '/contact' },
]

function HamburgerIcon() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <line x1="0" y1="1" x2="20" y2="1" />
      <line x1="0" y1="7" x2="20" y2="7" />
      <line x1="0" y1="13" x2="20" y2="13" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group"
          onClick={close}
        >
          <img
            src="/logo.png"
            alt="建峰亿腾科技"
            className="w-9 h-9 rounded-lg object-cover shadow-[0_0_0_1px_rgba(205,221,255,0.12),0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform"
            draggable={false}
          />
          <span className="flex flex-col leading-tight gap-px">
            <span className="text-white font-bold text-base whitespace-nowrap">
              建峰亿腾科技
            </span>
            <span className="text-[10px] font-medium text-white/55 tracking-[0.08em] whitespace-nowrap">
              JianfengYiteng Tech
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `text-[15px] font-normal hover:text-blue-200 transition-colors ${
                  isActive ? 'text-white' : 'text-white/85'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          style={{ width: 40, height: 40 }}
          className="md:hidden flex-none rounded-full border border-white/20 hover:border-white/40 text-white inline-flex items-center justify-center transition-colors"
        >
          <HamburgerIcon />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 px-6 md:px-10 py-6 z-40">
          <nav className="flex flex-col gap-5">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `text-base font-normal hover:text-blue-200 transition-colors ${
                    isActive ? 'text-white' : 'text-white/85'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
