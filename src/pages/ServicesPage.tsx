import { Helmet } from 'react-helmet-async'
import ServiceHero from '../sections/services/ServiceHero'
import ServiceDetail from '../sections/services/ServiceDetail'
import Packages from '../sections/services/Packages'
import FinalCta from '../sections/home/FinalCta'

const SERVICES = [
  {
    id: 'training',
    num: '01',
    title: '先打开认知，再谈创业',
    img: '/assets/images/services/training.jpg',
    imgAlt: 'OPC 工作坊',
    desc: '每周线下工作坊 + 线上行业研究分享 + 创始人闭门会。我们用 3 个月帮你建立对 OPC、AI 时代创业、个体商业的系统认知。',
    bullets: [
      '每周三晚 OPC 工作坊（北京 / 上海 / 深圳 / 线上）',
      '每月 1 场行业研究深度分享',
      '季度创始人闭门会（限 30 人）',
      '完整 OPC 入门在线课程（60+ 节）',
      'OPC 行业白皮书与年度报告',
    ],
  },
  {
    id: 'registration',
    num: '02',
    title: '3 个工作日下证，所有主体形式一站搞定',
    img: '/assets/images/services/registration.jpg',
    imgAlt: '公司注册',
    desc: '个体工商户、个人独资企业、一人有限公司、有限公司——根据你的业务和税务规划，给出最优主体建议，并 0 费用代办全套注册手续。',
    bullets: [
      '主体形式专业建议（基于业务模型和长期规划）',
      '公司注册 0 费用代办，3 个工作日下证',
      '印章刻制、税务登记、银行开户一站完成',
      '社保 / 公积金 / 商业保险开户代办',
      '境外架构（开曼 / BVI / 新加坡）搭建咨询',
    ],
  },
  {
    id: 'ai-stack',
    num: '03',
    title: '2–3 周，搭好你的 AI 工作流',
    img: '/assets/images/services/ai-stack.jpg',
    imgAlt: 'AI 工具栈',
    desc: '我们不教你用 AI 工具，我们直接帮你配好。基于 Coze / Dify / 飞书多维表 / Notion AI / Cursor 等主流工具，搭建专属于你业务的工作流。',
    bullets: [
      'Coze / Dify 智能体配置（内容、客服、销售）',
      '飞书多维表 + 自动化流程（CRM、项目管理）',
      'Notion AI 知识库搭建（沉淀 SOP 和方法论）',
      'Cursor / Claude Code 编程工作流',
      '2–3 周完成配置 + 1v1 培训使用',
    ],
  },
  {
    id: 'community',
    num: '04',
    title: '800+ 同行者，陪你走通这条路',
    img: '/assets/images/services/community.jpg',
    imgAlt: '创始人社群',
    desc: '创始人俱乐部采用邀请制，所有成员都是已经走通或正在走通 OPC 路径的独立创业者。每周分享、资源对接、同行互助——你不再孤军奋战。',
    bullets: [
      '创始人俱乐部（邀请制，限 800 人）',
      '每周日晚 8 点线上分享会（行业、方法论、案例）',
      '每月 1 城线下 meetup（北京 / 上海 / 深圳 / 杭州）',
      '资源对接：客户、项目、合作伙伴',
      '24/7 创始人互助社群（微信 + 飞书）',
    ],
  },
  {
    id: 'orders',
    num: '05',
    title: '好产品，不该被埋没',
    img: '/assets/images/services/orders.jpg',
    imgAlt: '订单对接',
    desc: '我们与 200+ 中小品牌、独立工作室、内容平台建立了稳定的供需对接网络。学员产品优先进入对接池，按行业、品类、定价精准撮合。',
    bullets: [
      '200+ 客户资源池（品牌、工作室、内容平台）',
      '一对一供需撮合（按行业、品类、定价）',
      '优质产品进入孵化器官方推荐位',
      '累计已为学员对接订单 3.6 亿+',
    ],
  },
  {
    id: 'finance-legal',
    num: '06',
    title: '让你专注业务，告别后顾之忧',
    img: '/assets/images/services/finance-legal.jpg',
    imgAlt: '财税法务',
    desc: '一人公司形态特殊，财税处理与企业完全不同。我们提供专为 OPC 优化的财税代办 + 法务支持服务，前 12 个月费用全部由孵化器承担。',
    bullets: [
      '一人公司特化代理记账（季度报税）',
      '个人 / 公司资金往来的合规规划',
      '常用合同模板库（销售、雇佣、外包、NDA）',
      '1v1 法律咨询（每月 1 小时）',
      '知识产权保护（商标、软著、版权）代办',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>核心服务 · 建峰亿腾科技</title>
        <meta
          name="description"
          content="建峰亿腾科技为 OPC 一人公司提供 6 大核心孵化服务：认知培训、公司注册、AI 工具栈、私域社群、订单对接、财税法务。"
        />
      </Helmet>

      <ServiceHero />
      {SERVICES.map((s) => (
        <ServiceDetail key={s.id} {...s} />
      ))}
      <Packages />
      <FinalCta />
    </>
  )
}
