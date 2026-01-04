"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0, rootMargin: "20% 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    const fallback = setTimeout(() => setIsVisible(true), delay + 1200)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  )
}
