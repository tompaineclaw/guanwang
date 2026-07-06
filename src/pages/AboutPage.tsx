import { Helmet } from 'react-helmet-async'
import AboutHero from '../sections/about/AboutHero'
import Mission from '../sections/about/Mission'
import Team from '../sections/about/Team'
import Credentials from '../sections/about/Credentials'
import FinalCta from '../sections/home/FinalCta'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>关于我们 · 建峰亿腾科技</title>
        <meta
          name="description"
          content="建峰亿腾科技是 OPC 一人公司孵化器，我们相信「一个人 + AI」是未来公司形态。"
        />
      </Helmet>

      <AboutHero />
      <Mission />
      <Team />
      <Credentials />
      <FinalCta />
    </>
  )
}
