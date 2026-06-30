import { useRef, useState, type ReactNode, type MouseEvent } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate3d(${x / strength}px, ${y / strength}px, 0)`
  }

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    if (
      Math.abs(offsetX) < rect.width / 2 + padding &&
      Math.abs(offsetY) < rect.height / 2 + padding
    ) {
      setIsActive(true)
    }
  }

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = 'translate3d(0px, 0px, 0)'
    }
    setIsActive(false)
  }

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: 'transform' }}
    >
      <div
        ref={innerRef}
        style={{
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
