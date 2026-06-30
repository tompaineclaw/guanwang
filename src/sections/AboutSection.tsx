import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const DECOR_IMAGES = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  bottomLeft:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  bottomRight:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

const ABOUT_TEXT =
  '建峰亿腾科技专注于 OPC 一人公司项目孵化。我们相信，个人创业者是未来商业的重要力量。从商业模式打磨、产品研发到市场落地，我们为每位独立创业者提供全链路成长支持，让每一个有价值的想法真正成为一家企业。'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <FadeIn delay={0.1} x={-80} duration={0.9}>
        <img
          src={DECOR_IMAGES.moon}
          alt=""
          draggable={false}
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
        />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} duration={0.9}>
        <img
          src={DECOR_IMAGES.bottomLeft}
          alt=""
          draggable={false}
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={80} duration={0.9}>
        <img
          src={DECOR_IMAGES.lego}
          alt=""
          draggable={false}
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
        />
      </FadeIn>
      <FadeIn delay={0.3} x={80} duration={0.9}>
        <img
          src={DECOR_IMAGES.bottomRight}
          alt=""
          draggable={false}
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 max-w-[560px] w-full">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            关于我们
          </h2>
        </FadeIn>
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </div>
    </section>
  )
}
