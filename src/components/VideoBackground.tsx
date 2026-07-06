const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function VideoBackground() {
  return (
    <>
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-0"
        style={{ background: 'rgba(12, 12, 12, 0.78)' }}
        aria-hidden="true"
      />
    </>
  )
}
