import { Helmet } from 'react-helmet-async'
import ApplyHero from '../sections/apply/ApplyHero'
import ProcessFlow from '../sections/apply/ProcessFlow'
import ApplyForm from '../sections/apply/ApplyForm'
import ApplyFAQ from '../sections/apply/ApplyFAQ'
import FinalCta from '../sections/home/FinalCta'

export default function ApplyPage() {
  return (
    <>
      <Helmet>
        <title>申请流程 · 建峰亿腾科技</title>
        <meta
          name="description"
          content="建峰亿腾科技 OPC 一人公司孵化申请流程：5 步从 0 到 1，最快 14 天启动。"
        />
      </Helmet>

      <ApplyHero />
      <ProcessFlow />
      <ApplyForm />
      <ApplyFAQ />
      <FinalCta />
    </>
  )
}
