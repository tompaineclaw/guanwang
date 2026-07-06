import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

type NavItemProps = {
  label: string
  to?: string
  href?: string
}

const NAV: NavItemProps[] = [
  { label: '首页', to: '/' },
  { label: '核心服务', to: '/services' },
  { label: '申请流程', to: '/apply' },
  { label: '关于我们', to: '/about' },
  { label: '联系', to: '/contact' },
]

function NavItem({ label, to, href }: NavItemProps) {
  if (href) {
    return (
      <a
        href={href}
        className="text-base md:text-lg font-medium text-white/85 hover:text-blue-200 transition-colors whitespace-nowrap"
      >
        {label}
      </a>
    )
  }
  return (
    <NavLink
      to={to!}
      end={to === '/'}
      className={({ isActive }) =>
        `text-base md:text-lg font-medium hover:text-blue-200 transition-colors whitespace-nowrap ${
          isActive ? 'text-white' : 'text-white/85'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-4 flex items-center justify-between gap-3 md:gap-6">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group"
        >
          <Logo
            size={36}
            className="rounded-lg shadow-[0_0_0_1px_rgba(205,221,255,0.12),0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform"
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

        <nav className="flex items-center gap-3 md:gap-8 flex-wrap justify-end">
          {NAV.map((n) => (
            <NavItem
              key={n.label}
              label={n.label}
              to={n.to}
              href={n.href}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}
