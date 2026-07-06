import SEO from '../components/SEO'
import AboutHero from '../sections/about/AboutHero'
import Mission from '../sections/about/Mission'
import Team from '../sections/about/Team'
import Credentials from '../sections/about/Credentials'
import FinalCta from '../sections/home/FinalCta'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="关于我们"
        description="建峰亿腾科技是 OPC 一人公司孵化器，我们相信「一个人 + AI」是未来公司形态。"
        path="/about"
      />

      <AboutHero />
      <Mission />
      <Team />
      <Credentials />
      <FinalCta />
    </>
  )
}
