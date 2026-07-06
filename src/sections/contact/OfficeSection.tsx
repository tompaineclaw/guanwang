import { useEffect, useRef } from 'react'

const BAIDU_AK = 'rAWT5SpoNJueKyGfHx5a1FBHkVmAmbRy'

function BaiduMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false

    const ensureScript = (): Promise<void> => {
      const W = window as any
      if (W.BMap?.Map) return Promise.resolve()
      return new Promise((resolve, reject) => {
        let s = document.querySelector<HTMLScriptElement>('script[data-baidu-map]')
        if (!s) {
          s = document.createElement('script')
          // 用 getscript 而不是 api：api?v=3.0 会用 document.write 注入脚本，异步加载时会清空整个文档
          s.src = `https://api.map.baidu.com/getscript?v=3.0&ak=${BAIDU_AK}&services=&t=${Date.now()}`
          s.async = true
          s.defer = true
          s.dataset.baiduMap = 'true'
          document.head.appendChild(s)
        }
        s.addEventListener('load', () => resolve(), { once: true })
        s.addEventListener('error', () => reject(new Error('baidu map script failed')), { once: true })
        // 已注入但 BMap 尚未初始化完，等一会儿再试
        if (W.BMap?.Map) resolve()
      })
    }

    ensureScript()
      .then(() => {
        if (cancelled || !containerRef.current) return
        const BMap = (window as any).BMap
        if (!BMap?.Map) {
          console.error('[BaiduMap] BMap 未加载，请检查 ak 与 Referer 白名单')
          if (containerRef.current) {
            containerRef.current.innerHTML =
              '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.6);font-size:13px;text-align:center;padding:0 24px;">百度地图加载失败，请在浏览器控制台查看详情<br/>(常见原因：ak 未配置 Referer 白名单)</div>'
          }
          return
        }

        const map = new BMap.Map(containerRef.current)
        mapRef.current = map
        map.enableScrollWheelZoom(true)
        map.addControl(new BMap.NavigationControl())
        map.addControl(new BMap.ScaleControl())

        // 先用 GCJ02 坐标快速定位（用户给的就是 GCJ02）
        const point = new BMap.Point(OFFICE.lng, OFFICE.lat)
        map.centerAndZoom(point, 17)

        const marker = new BMap.Marker(point)
        map.addOverlay(marker)

        const label = new BMap.Label(OFFICE.name, {
          position: point,
          offset: new BMap.Size(-60, -45),
        })
        label.setStyle({
          background: 'rgba(0,0,0,0.78)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        })
        map.addOverlay(label)

        // 异步修正坐标：GCJ02 -> BD09，确保 marker 落在 BD09 坐标系下的正确位置
        if (BMap.Convertor) {
          new BMap.Convertor().translate([point], 2, 3, (converted: any[]) => {
            if (cancelled || !converted?.[0]) return
            const bd = converted[0]
            map.setCenter(bd)
            marker.setPosition(bd)
            label.setPosition(bd)
          })
        }
      })
      .catch((err) => console.error('[BaiduMap] init failed:', err))

    return () => {
      cancelled = true
      mapRef.current?.destroy?.()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-[420px] md:h-[480px] bg-[#0a1224]" />
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
  )
}

const OFFICE = {
  name: '建峰亿腾 · 湘潭办公室',
  address: '湖南省湘潭市九华经开区创新创业中心 2 楼',
  // 高德/百度坐标都是「经度,纬度」。这里用九华经开区创新创业中心附近坐标
  // 微信/QQ Maps 也用同一组坐标，跳转链接会到对应 app
  coords: '112.91305269219647,27.922306019820617',
  lat: 27.922306019820617,
  lng: 112.91305269219647,
}

const CARDS = [
  {
    icon: <PinIcon />,
    title: '湘潭市',
    address: '湘潭市九华经开区创新创业中心 2 楼',
    meta: '500㎡ 共享空间 · 路演厅 · 硬件实验室',
  },
  {
    icon: <ClockIcon />,
    title: '开放时间',
    address: '工作日 09:00 – 22:00 · 周末 10:00 – 18:00',
    meta: '所有在孵 OPC 全天候 7×24 通行 · 访客请提前预约',
  },
]

// 三家地图的跳转链接（打开 app / web 大图）
// 三家地图 iframe embed URL（都用 gcj02 坐标系，腾讯/高德/百度都是）
const TENCENT_EMBED = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${OFFICE.lng},${OFFICE.lat};title:${encodeURIComponent('建峰亿腾科技 · 湘潭办公室')};addr:${encodeURIComponent(OFFICE.address)};src=jianfengyiteng`
const AMAP_EMBED = `https://m.amap.com/p/poi/?type=poi&src=m.amap.com&keyword=${encodeURIComponent(OFFICE.address)}&coordinate=gaode&lng=${OFFICE.lng}&lat=${OFFICE.lat}`
const BAIDU_EMBED = `https://map.baidu.com/poi/?wd=${encodeURIComponent(OFFICE.address)}&coord_type=gcj02&pid=jianfengyiteng&src=jianfengyiteng#l13`

const MAP_LINKS = [
  {
    label: '在腾讯地图中打开',
    href: TENCENT_EMBED,
  },
  {
    label: '在高德地图中打开',
    href: `https://uri.amap.com/marker?position=${OFFICE.lng},${OFFICE.lat}&name=${encodeURIComponent(OFFICE.name)}&src=jianfengyiteng&coordinate=gcj02&callnative=1`,
  },
  {
    label: '在百度地图中打开',
    href: `https://api.map.baidu.com/marker?location=${OFFICE.lat},${OFFICE.lng}&title=${encodeURIComponent(OFFICE.name)}&content=${encodeURIComponent(OFFICE.address)}&output=html&coord_type=gcj02&src=jianfengyiteng`,
  },
]

export default function OfficeSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.16em] font-bold text-blue-300 uppercase mb-4">
            OUR OFFICES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            政府园区，欢迎来访
          </h2>
          <p className="text-base text-white/70">
            所有空间都对在孵 OPC 开放。提前 24 小时预约，我们可以安排专属参观与 1v1 咨询。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {/* 左列：两张卡片 */}
          <div className="grid gap-5">
            {CARDS.map((c) => (
              <article
                key={c.title}
                className="bg-white/[0.04] border border-white/10 hover:border-blue-300/40 rounded-2xl p-7 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-white/85 leading-relaxed mb-2">{c.address}</p>
                <p className="text-sm text-white/60 leading-relaxed">{c.meta}</p>
              </article>
            ))}
          </div>

          {/* 右列：地图 */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] flex flex-col">
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-sm text-white/85">
              <span className="text-blue-300">
                <MapIcon />
              </span>
              <span className="font-medium">{OFFICE.name}</span>
              <span className="text-white/50 hidden md:inline">· {OFFICE.address}</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              {MAP_LINKS.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 transition-colors whitespace-nowrap"
                >
                  {m.label} →
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-full md:max-w-3xl md:mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#0a1224]">
            {/* 百度地图嵌入 — 真实地理坐标，可缩放/拖动 */}
            <BaiduMap />
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-black/40 backdrop-blur">
              {MAP_LINKS.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-center text-xs text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {m.label} →
                </a>
              ))}
            </div>
          </div>

          <div className="px-5 py-3 text-xs text-white/45 flex flex-wrap items-center justify-between gap-2 border-t border-white/10">
            <span>坐标 {OFFICE.lat}, {OFFICE.lng} · WGS84</span>
            <span>地图显示可能与实际地标有偏差，以导航 app 路线为准</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
