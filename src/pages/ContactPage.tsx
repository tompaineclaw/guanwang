import SEO from '../components/SEO'
import ContactHero from '../sections/contact/ContactHero'
import ContactCards from '../sections/contact/ContactCards'
import ContactForm from '../sections/contact/ContactForm'
import OfficeSection from '../sections/contact/OfficeSection'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="联系我们"
        description="联系建峰亿腾科技 — 商务合作、入驻咨询、媒体采访、加入团队。"
        path="/contact"
      />

      <ContactHero />
      <ContactCards />
      <ContactForm />
      <OfficeSection />
    </>
  )
}
