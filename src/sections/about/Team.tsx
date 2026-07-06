const TEAM = [
  {
    photo: '/assets/images/team/team-2.webp',
    photoAlt: '傅建峰 团队成员照片',
    role: '首席执行官 / CEO',
    name: '傅建峰',
    bio: '建峰亿腾创始人。连续创业者，深耕科技孵化与 AI 应用领域，坚信"一个人 + AI"是未来公司形态，主导公司战略、生态与对外合作。',
  },
  {
    photo: '/assets/images/team/team-7.webp',
    photoAlt: '彭巧 团队成员照片',
    role: '运营总监 / Head of Operations',
    name: '彭巧',
    bio: '负责公司整体运营与服务流程搭建。主导过多个孵化器的落地运营，擅长把复杂业务拆解为可执行的 SOP，聚焦 OPC 学员的全程陪伴。',
  },
  {
    photo: '/assets/images/team/team-8.webp',
    photoAlt: '傅佳其 团队成员照片',
    role: '运营总监 / Head of Operations',
    name: '傅佳其',
    bio: '与彭巧搭档，专注社群运营、用户增长与活动策划。负责 OPC 社群日常运营、学员对接、品牌活动组织与口碑传播。',
  },
  {
    photo: '/assets/images/team/team-4.webp',
    photoAlt: '胡博钒 团队成员照片',
    role: '运营与策划 / Head of Operations & Strategy',
    name: '胡博钒',
    bio: '兼具运营落地与战略规划能力。负责公司业务策略制定、跨部门协同与品牌策划，擅长把抽象目标转化为可量化、可复盘的执行方案。',
  },
  {
    photo: '/assets/images/team/team-1.webp',
    photoAlt: '陈晓思 团队成员照片',
    role: '技术总监 / CTO',
    name: '陈晓思',
    bio: '公司技术负责人。主导大模型应用平台与 AI Agent 系统的架构与工程化落地；擅长把前沿模型能力转化为稳定、可交付的产品级服务。',
  },
  {
    photo: '/assets/images/team/team-3.webp',
    photoAlt: '李立志 团队成员照片',
    role: '核心工程师 / Core Engineer',
    name: '李立志',
    bio: '深耕后端服务与数据管线。负责公司大模型应用核心模块的开发、性能调优与稳定性保障，支撑高并发业务场景。',
  },
  {
    photo: '/assets/images/team/team-5.webp',
    photoAlt: '王宇翔 团队成员照片',
    role: '大数据工程师 / Big Data Engineer',
    name: '王宇翔',
    bio: '专注数据架构与离线/实时计算。负责公司数据中台、用户行为分析体系与业务指标平台的搭建，沉淀可复用的数据资产。',
  },
  {
    photo: '/assets/images/team/team-6.webp',
    photoAlt: '罗煜龙 团队成员照片',
    role: '云计算工程师 / Cloud Engineer',
    name: '罗煜龙',
    bio: '深耕云原生、容器化与服务网格。负责公司基础架构的稳定性、可扩展性与成本优化，保障全链路服务 7×24 高可用运行。',
  },
]

export default function Team() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            THE TEAM
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">由创业者服务创业者</h2>
          <p className="text-base text-white/75 leading-relaxed">
            团队拥有软件设计师、嵌入式系统工程师（高级）、AI算法应用工程师等多项权威认证，具备从云计算架构、图像识别算法、嵌入式硬件开发到 RPA 自动化的全链路技术能力。我们不招聘「专家」，只招聘「曾经的创始人」。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-5 transition-colors"
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white/5">
                <img
                  src={m.photo}
                  alt={m.photoAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs tracking-wider text-blue-300/85 uppercase font-semibold mb-1">
                {m.role}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{m.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
