import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    num: '01',
    name: '项目孵化',
    desc: '商业模式梳理、产品定位与早期运营陪伴，帮助 OPC 项目从概念走向落地。',
  },
  {
    num: '02',
    name: '产品研发',
    desc: '提供专业的技术研发支持，从 MVP 搭建到产品迭代，让一人公司拥有强大的产品力。',
  },
  {
    num: '03',
    name: '资源对接',
    desc: '链接投资机构、行业专家与渠道资源，为 OPC 项目铺设成长所需的生态网络。',
  },
  {
    num: '04',
    name: '品牌打造',
    desc: '从命名、视觉到内容传播，为一人公司塑造清晰、专业的品牌形象。',
  },
  {
    num: '05',
    name: '增长陪跑',
    desc: '提供市场推广、用户运营与数据复盘，陪伴 OPC 项目长期稳健增长。',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        服务
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div
              className={`flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] ${
                i === SERVICES.length - 1 ? 'border-b' : ''
              }`}
            >
              <div
                className="font-black leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.num}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 mt-2 sm:mt-3"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
