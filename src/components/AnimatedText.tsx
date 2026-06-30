import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = Array.from(text)

  const opacities = characters.map((_, i) => {
    const start = i / characters.length
    const end = (i + 1) / characters.length
    return useTransform(scrollYProgress, [start, end], [0.2, 1])
  })

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => (
        <span
          key={i}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <span style={{ visibility: 'hidden' }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
          <motion.span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: opacities[i],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </p>
  )
}
