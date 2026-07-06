import { Helmet } from 'react-helmet-async'
import ContactHero from '../sections/contact/ContactHero'
import ContactCards from '../sections/contact/ContactCards'
import ContactForm from '../sections/contact/ContactForm'
import OfficeSection from '../sections/contact/OfficeSection'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>联系我们 · 建峰亿腾科技</title>
        <meta
          name="description"
          content="联系建峰亿腾科技 — 商务合作、入驻咨询、媒体采访、加入团队。"
        />
      </Helmet>

      <ContactHero />
      <ContactCards />
      <ContactForm />
      <OfficeSection />
    </>
  )
}
