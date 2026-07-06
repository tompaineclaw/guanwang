import { Helmet } from 'react-helmet-async'
import Hero from '../sections/home/Hero'
import Stats from '../sections/home/Stats'
import WhatIsOpc from '../sections/home/WhatIsOpc'
import CoreServices from '../sections/home/CoreServices'
import WhyNow from '../sections/home/WhyNow'
import WhoIsItFor from '../sections/home/WhoIsItFor'
import Process from '../sections/home/Process'
import CaseStudies from '../sections/home/CaseStudies'
import FinalCta from '../sections/home/FinalCta'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>建峰亿腾科技 · OPC 一人公司孵化器</title>
        <meta
          name="description"
          content="建峰亿腾科技专注 OPC 一人公司孵化，提供认知培训、公司注册、AI 工具栈配置、私域社群、订单对接、财税法务等全流程孵化服务。"
        />
      </Helmet>

      <Hero />
      <Stats />
      <WhatIsOpc />
      <CoreServices />
      <WhyNow />
      <WhoIsItFor />
      <Process />
      <CaseStudies />
      <FinalCta />
    </>
  )
}
