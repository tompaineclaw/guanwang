function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8l9 5 9-5M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8l9-5 9 5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const CARDS = [
  {
    icon: <MailIcon />,
    title: '邮件联系',
    value: 'ceo@jfyt.com.cn',
    sub: (
      <>
        通用咨询 · 入驻问题 · 媒体采访
        <br />
        我们会在 24 小时内回复
      </>
    ),
  },
  {
    icon: <PhoneIcon />,
    title: '电话',
    value: '+86 15347327999',
    sub: (
      <>
        工作日 09:00 – 18:00
        <br />
        商务合作请发邮件优先
      </>
    ),
  },
  {
    icon: <PinIcon />,
    title: '办公地点',
    value: '湘潭市',
    sub: (
      <>
        湖南省湘潭市
        <br />
        九华经开区
        <br />
        创新创业中心2楼
      </>
    ),
  },
]

export default function ContactCards() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5">
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <div className="text-xl text-blue-300 font-semibold mb-3 break-all">{c.value}</div>
              <div className="text-sm text-white/65 leading-relaxed">{c.sub}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
