const FAQ = [
  {
    q: '我还没有注册公司，可以申请吗？',
    a: '完全可以，而且我们鼓励。公司注册是孵化流程的第 3 步，我们会 0 费用帮你代办。',
  },
  {
    q: '我还在上班，能做 OPC 吗？',
    a: '可以先以副业形式启动。我们的「启航版」套餐就是为过渡期设计的，孵化期内可灵活安排时间。',
  },
  {
    q: '申请被拒后还能再申请吗？',
    a: '可以，但建议间隔 3 个月。我们会附上具体反馈，你可以针对问题打磨后再次提交。',
  },
  {
    q: '孵化结束后，会不会被踢出社群？',
    a: '不会。创始人社群是终身制的，毕业后仍可继续参加活动、享受资源对接。',
  },
]

export default function ApplyFAQ() {
  return (
    <section className="py-24 md:py-32 bg-black/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">常见问题</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-7"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
