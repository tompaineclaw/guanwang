import { useEffect, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function VideoBackground() {
  // 用户偏好减少动效时，只渲染遮罩不渲染视频
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mql.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return (
    <>
      {!prefersReducedMotion && (
        <video
          className="fixed inset-0 w-full h-full object-cover z-0"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
      <div
        className="fixed inset-0 z-0"
        style={{ background: 'rgba(12, 12, 12, 0.78)' }}
        aria-hidden="true"
      />
    </>
  )
}
