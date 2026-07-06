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
    <span className="relative block w-4 h-[1.5px] bg-white/85">
      <span className="absolute left-0 -top-[5px] w-4 h-[1.5px] bg-white/85" />
      <span className="absolute left-0 top-[5px] w-4 h-[1.5px] bg-white/85" />
    </span>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0 group" onClick={close}>
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
          type="button"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full border border-white/20 hover:border-white/40 inline-flex items-center justify-center transition-colors"
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
                  `text-base font-medium hover:opacity-80 transition-opacity ${
                    isActive ? 'text-white' : 'text-white/80'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href="/apply.html"
              onClick={close}
              className="mt-1 inline-flex items-center justify-center gap-1 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold self-start"
            >
              申请入驻
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
