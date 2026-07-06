const STEPS = [
  {
    num: 'STEP 01',
    title: '在线申请',
    desc: '填写下方表单，介绍你自己与 OPC 方向。提交后即时收到确认邮件。',
    time: '⏱ 5 分钟',
  },
  {
    num: 'STEP 02',
    title: '48h 评估',
    desc: '团队从动机、技能、商业化潜力三个维度评分，通过者将收到面试邀请。',
    time: '⏱ 48 小时',
  },
  {
    num: 'STEP 03',
    title: '1v1 面试',
    desc: '30 分钟视频会议，深入了解你的背景，明确孵化期目标与里程碑。',
    time: '⏱ 7 天内',
  },
  {
    num: 'STEP 04',
    title: '认知培训',
    desc: '2 周工作坊 + 1v1 咨询，建立对 OPC 与 AI 时代的系统认知。',
    time: '⏱ 1–2 周',
  },
]

export default function ProcessFlow() {
  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            THE PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            从申请到启动，最快 14 天
          </h2>
          <p className="text-base text-white/70">
            没有冗长的文书，没有复杂的尽调流程。把时间留给思考，把流程交给我们。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors"
            >
              <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{s.desc}</p>
              <div className="text-xs text-white/55 pt-3 border-t border-white/10">
                {s.time}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
