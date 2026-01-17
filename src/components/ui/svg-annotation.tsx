"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type AnnotationDirection =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"

export interface SVGAnnotationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Texto de la anotacion */
  text: string
  /** Direccion de la flecha */
  direction?: AnnotationDirection
  /** Animar al entrar en viewport */
  animated?: boolean
  /** Color del texto y flecha (clase Tailwind) */
  color?: string
  /** Tamano del texto */
  size?: "sm" | "md" | "lg"
}

// Paths de flechas para cada direccion
const arrowPaths: Record<AnnotationDirection, { viewBox: string; path: string }> = {
  "top-left": {
    viewBox: "0 0 50 50",
    path: "M45 45 C30 40 20 30 10 10 M10 10 L10 22 M10 10 L22 10",
  },
  "top-right": {
    viewBox: "0 0 50 50",
    path: "M5 45 C20 40 30 30 40 10 M40 10 L40 22 M40 10 L28 10",
  },
  "bottom-left": {
    viewBox: "0 0 50 50",
    path: "M45 5 C30 10 20 20 10 40 M10 40 L10 28 M10 40 L22 40",
  },
  "bottom-right": {
    viewBox: "0 0 50 50",
    path: "M5 5 C20 10 30 20 40 40 M40 40 L40 28 M40 40 L28 40",
  },
  left: {
    viewBox: "0 0 60 30",
    path: "M55 15 C40 12 25 18 10 15 M10 15 L18 8 M10 15 L18 22",
  },
  right: {
    viewBox: "0 0 60 30",
    path: "M5 15 C20 12 35 18 50 15 M50 15 L42 8 M50 15 L42 22",
  },
}

// Posicionamiento del texto relativo a la flecha
const textPosition: Record<AnnotationDirection, string> = {
  "top-left": "bottom-full right-0 mb-1 text-right",
  "top-right": "bottom-full left-0 mb-1 text-left",
  "bottom-left": "top-full right-0 mt-1 text-right",
  "bottom-right": "top-full left-0 mt-1 text-left",
  left: "right-full top-1/2 -translate-y-1/2 mr-2 text-right",
  right: "left-full top-1/2 -translate-y-1/2 ml-2 text-left",
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}

const arrowSizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
}

export function SVGAnnotation({
  text,
  direction = "bottom-right",
  animated = true,
  color = "text-zinc-400",
  size = "md",
  className,
  ...props
}: SVGAnnotationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!animated)

  useEffect(() => {
    if (!animated) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [animated])

  const arrow = arrowPaths[direction]

  return (
    <div
      ref={ref}
      className={cn(
        "relative inline-flex flex-col items-center",
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-500",
        className
      )}
      {...props}
    >
      {/* Texto con fuente handwritten */}
      <span
        className={cn(
          "font-handwriting whitespace-nowrap",
          sizeClasses[size],
          color,
          isVisible && animated && "animate-fade-in"
        )}
      >
        {text}
      </span>

      {/* Flecha SVG */}
      <svg
        viewBox={arrow.viewBox}
        className={cn(
          arrowSizes[size],
          color,
          "fill-none stroke-current stroke-2",
          isVisible && animated && "animate-draw-arrow"
        )}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: animated ? 200 : 0,
          strokeDashoffset: animated && !isVisible ? 200 : 0,
        }}
      >
        <path d={arrow.path} />
      </svg>
    </div>
  )
}

/**
 * Componente alternativo para posicionar anotacion junto a un elemento
 */
export function AnnotationPointer({
  text,
  direction = "bottom-right",
  animated = true,
  color = "text-zinc-400",
  size = "md",
  className,
  children,
  ...props
}: SVGAnnotationProps & { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!animated)

  useEffect(() => {
    if (!animated) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [animated])

  const arrow = arrowPaths[direction]

  return (
    <div ref={ref} className={cn("relative inline-block", className)} {...props}>
      {children}

      {/* Anotacion posicionada */}
      <div
        className={cn(
          "absolute pointer-events-none",
          textPosition[direction],
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity duration-500"
        )}
      >
        <span className={cn("block font-handwriting whitespace-nowrap", sizeClasses[size], color)}>
          {text}
        </span>
        <svg
          viewBox={arrow.viewBox}
          className={cn(arrowSizes[size], color, "fill-none stroke-current stroke-2")}
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <path d={arrow.path} />
        </svg>
      </div>
    </div>
  )
}
