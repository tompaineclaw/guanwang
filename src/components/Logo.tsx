type LogoProps = {
  size?: number
  className?: string
}

export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <picture>
      <source srcSet="/logo-256.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt="建峰亿腾科技"
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    </picture>
  )
}
