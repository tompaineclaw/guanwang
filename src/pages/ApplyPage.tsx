import SEO from '../components/SEO'
import ApplyHero from '../sections/apply/ApplyHero'
import ProcessFlow from '../sections/apply/ProcessFlow'
import ApplyForm from '../sections/apply/ApplyForm'
import ApplyFAQ from '../sections/apply/ApplyFAQ'
import FinalCta from '../sections/home/FinalCta'

export default function ApplyPage() {
  return (
    <>
      <SEO
        title="申请流程"
        description="建峰亿腾科技 OPC 一人公司孵化申请流程：5 步从 0 到 1，最快 14 天启动。"
        path="/apply"
      />

      <ApplyHero />
      <ProcessFlow />
      <ApplyForm />
      <ApplyFAQ />
      <FinalCta />
    </>
  )
}
