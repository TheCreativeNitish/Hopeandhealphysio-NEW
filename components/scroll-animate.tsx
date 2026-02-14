"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up"
  delay?: number
}

export function ScrollAnimate({ 
  children, 
  className = "", 
  animation = "slide-up",
  delay = 0 
}: ScrollAnimateProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animation)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [animation, delay])

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}
