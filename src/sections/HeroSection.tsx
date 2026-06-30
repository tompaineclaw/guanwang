import type { MouseEvent } from 'react'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

const NAV_LINKS = [
  { label: '关于', target: 'about' },
  { label: '方案', target: '' },
  { label: '案例', target: 'projects' },
  { label: '联系', target: 'contact-btn' },
]

export default function HeroSection() {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!target) return
    e.preventDefault()
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-30 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.target ? `#${link.target}` : '#'}
              onClick={(e) => handleNavClick(e, link.target)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[10px] sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            建峰亿腾
          </h1>
        </FadeIn>
      </div>

      <div className="flex-1 relative">
        <FadeIn delay={0.6} y={30}>
          <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
            <Magnet padding={150} strength={3}>
              <img
                src={PORTRAIT_URL}
                alt="建峰亿腾科技"
                draggable={false}
                className="w-full h-auto select-none"
              />
            </Magnet>
          </div>
        </FadeIn>
      </div>

      <div className="relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            专注 OPC 一人公司项目孵化，助力独立创业者从 0 到 1
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div id="contact-btn">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
