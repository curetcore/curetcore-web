"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type DecorationVariant =
  // Underlines
  | "wave"
  | "swirl"
  | "double"
  | "zigzag"
  | "marker"
  | "thick"
  | "dots"
  // Emphasis
  | "circle"
  | "box"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "scribble"
  // Arrows (pointing)
  | "arrow-curved-down"
  | "arrow-curved-up"
  | "arrow-loop"
  | "arrow-pointer"
  | "arrow-straight"
  | "arrow-bounce"
  // Arrows (flow/connector)
  | "flow-right"
  | "flow-down"
  | "flow-left"
  | "flow-up"
  // Decorative
  | "sparkle"
  | "star-burst"
  | "heart"
  | "lightning"
  | "crown"
  | "fire"
  // Status
  | "checkmark"
  | "x-mark"
  | "question"
  | "exclamation"
  // Containers
  | "brackets"
  | "box-rough"
  | "banner"

interface SVGDecorationProps extends React.ComponentPropsWithoutRef<"svg"> {
  variant?: DecorationVariant
  animated?: boolean
  duration?: number
  delay?: number
}

const decorations: Record<
  DecorationVariant,
  { viewBox: string; paths: string[]; strokeBased?: boolean }
> = {
  // === UNDERLINES ===
  wave: {
    viewBox: "0 0 418 42",
    paths: [
      "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z",
    ],
  },
  swirl: {
    viewBox: "0 0 281 40",
    paths: [
      "M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z",
    ],
  },
  double: {
    viewBox: "0 0 200 20",
    paths: ["M5 6c40-3 80-3 190 0", "M5 14c50-2 100-2 190 0"],
    strokeBased: true,
  },
  zigzag: {
    viewBox: "0 0 200 20",
    paths: [
      "M5 15L15 5l10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 15 10",
    ],
    strokeBased: true,
  },
  marker: {
    viewBox: "0 0 200 15",
    paths: ["M3 8c20-4 40-5 60-4s40 3 60 4 40 0 74-2", "M5 10c30-2 60-2 90-1s60 2 100 0"],
    strokeBased: true,
  },
  thick: {
    viewBox: "0 0 200 20",
    paths: ["M5 10c30-6 70-6 95-4s70 4 95 2"],
  },
  dots: {
    viewBox: "0 0 200 10",
    paths: [
      "M10 5a3 3 0 1 0 0 .1M30 5a3 3 0 1 0 0 .1M50 5a3 3 0 1 0 0 .1M70 5a3 3 0 1 0 0 .1M90 5a3 3 0 1 0 0 .1M110 5a3 3 0 1 0 0 .1M130 5a3 3 0 1 0 0 .1M150 5a3 3 0 1 0 0 .1M170 5a3 3 0 1 0 0 .1M190 5a3 3 0 1 0 0 .1",
    ],
  },

  // === EMPHASIS ===
  circle: {
    viewBox: "0 0 100 100",
    paths: [
      "M50 8 C75 6 92 20 94 50 C96 78 78 94 50 93 C22 92 5 76 6 50 C7 24 25 10 50 8",
      "M50 12 C72 10 88 24 89 50 C90 74 75 88 50 89 C25 90 10 74 11 50 C12 26 28 14 50 12",
    ],
    strokeBased: true,
  },
  box: {
    viewBox: "0 0 200 60",
    paths: [
      "M10 10c60-5 130-5 180 0M190 10c3 15 3 30 0 40M190 50c-60 5-130 5-180 0M10 50c-3-15-3-30 0-40",
    ],
    strokeBased: true,
  },
  highlight: {
    viewBox: "0 0 200 30",
    paths: ["M5 15c30-8 60-10 95-8s65 6 95 10c-30 8-60 10-95 8s-65-6-95-10Z"],
  },
  "strike-through": {
    viewBox: "0 0 200 10",
    paths: ["M5 5c50-2 100-1 190 2"],
    strokeBased: true,
  },
  "crossed-off": {
    viewBox: "0 0 200 60",
    paths: ["M10 10c60 15 120 25 180 40", "M190 10c-60 15-120 25-180 40"],
    strokeBased: true,
  },
  scribble: {
    viewBox: "0 0 200 30",
    paths: ["M5 15c10-8 20-5 30 0s20 8 30 0 20-8 30 0 20 8 30 0 20-8 30 0 20 8 30 0 15-5 10-8"],
    strokeBased: true,
  },

  // === ARROWS ===
  "arrow-curved-down": {
    viewBox: "0 0 60 60",
    paths: ["M10 10c15 5 25 20 35 40", "M40 42l8 10-12-2"],
    strokeBased: true,
  },
  "arrow-curved-up": {
    viewBox: "0 0 60 60",
    paths: ["M10 50c15-5 25-20 35-40", "M40 18l8-10-12 2"],
    strokeBased: true,
  },
  "arrow-loop": {
    viewBox: "0 0 80 60",
    paths: ["M10 30c10-20 30-25 50-15s15 30-5 35-30-5-25-25 20-30 40-20", "M65 28l10-3-5 8"],
    strokeBased: true,
  },
  "arrow-pointer": {
    viewBox: "0 0 40 60",
    paths: ["M20 5v45", "M10 40l10 12 10-12"],
    strokeBased: true,
  },
  "arrow-straight": {
    viewBox: "0 0 100 20",
    paths: ["M5 10h80", "M75 5l12 5-12 5"],
    strokeBased: true,
  },
  "arrow-bounce": {
    viewBox: "0 0 80 50",
    paths: ["M5 40c10-30 20-30 30 0s20 0 30-25", "M60 20l10-8-2 12"],
    strokeBased: true,
  },

  // === FLOW ARROWS ===
  "flow-right": {
    viewBox: "0 0 50 40",
    paths: ["M5 30 C15 30 20 10 40 10", "M35 5 L42 10 L35 15"],
    strokeBased: true,
  },
  "flow-down": {
    viewBox: "0 0 40 50",
    paths: ["M10 5 C10 15 30 20 30 40", "M25 35 L30 42 L35 35"],
    strokeBased: true,
  },
  "flow-left": {
    viewBox: "0 0 50 40",
    paths: ["M45 10 C25 10 20 30 5 30", "M10 25 L3 30 L10 35"],
    strokeBased: true,
  },
  "flow-up": {
    viewBox: "0 0 40 50",
    paths: ["M30 45 C30 35 10 30 10 10", "M5 15 L10 8 L15 15"],
    strokeBased: true,
  },

  // === DECORATIVE ===
  sparkle: {
    viewBox: "0 0 32 32",
    paths: [
      "M16 0c.5 6 2 10 0 16 2-6 6-10 16 0-6-.5-10-2-16 0 6-2 10-6 0-16Z",
      "M16 4l1 5 4-3-3 4 5 1-5 1 3 4-4-3-1 5-1-5-4 3 3-4-5-1 5-1-3-4 4 3 1-5Z",
    ],
  },
  "star-burst": {
    viewBox: "0 0 40 40",
    paths: ["M20 2l3 8 8-3-5 7 7 5-8 3 3 8-8-5-5 7-3-8-8 3 5-7-7-5 8-3-3-8 8 5 5-7z"],
  },
  heart: {
    viewBox: "0 0 40 36",
    paths: ["M20 35S2 22 2 12C2 5 8 1 14 1c4 0 6 3 6 3s2-3 6-3c6 0 12 4 12 11 0 10-18 23-18 23z"],
  },
  lightning: {
    viewBox: "0 0 30 50",
    paths: ["M18 0L5 22h10L8 50l17-28H15L25 0z"],
  },
  crown: {
    viewBox: "0 0 50 35",
    paths: ["M5 30L2 10l12 8 11-15 11 15 12-8-3 20H5z", "M5 30h40"],
  },
  fire: {
    viewBox: "0 0 30 40",
    paths: [
      "M15 0c-5 10-12 15-12 25 0 8 6 15 12 15s12-7 12-15c0-10-7-15-12-25z",
      "M15 40c-4 0-6-4-6-8 0-5 3-8 6-12 3 4 6 7 6 12 0 4-2 8-6 8z",
    ],
  },

  // === STATUS ===
  checkmark: {
    viewBox: "0 0 40 40",
    paths: ["M8 20l8 10 16-20"],
    strokeBased: true,
  },
  "x-mark": {
    viewBox: "0 0 40 40",
    paths: ["M10 10l20 20M30 10L10 30"],
    strokeBased: true,
  },
  question: {
    viewBox: "0 0 30 45",
    paths: ["M8 12c0-8 14-10 14 0s-7 8-7 15", "M15 35a2 2 0 1 0 0 4 2 2 0 0 0 0-4"],
    strokeBased: true,
  },
  exclamation: {
    viewBox: "0 0 20 45",
    paths: ["M10 5v25", "M10 38a2 2 0 1 0 0 4 2 2 0 0 0 0-4"],
    strokeBased: true,
  },

  // === CONTAINERS ===
  brackets: {
    viewBox: "0 0 200 60",
    paths: ["M15 5c-5 0-10 5-10 10v30c0 5 5 10 10 10", "M185 5c5 0 10 5 10 10v30c0 5-5 10-10 10"],
    strokeBased: true,
  },
  "box-rough": {
    viewBox: "0 0 200 60",
    paths: [
      "M8 8c60-4 130-4 185 0M195 8c2 14 3 30 0 45M193 55c-60 3-130 3-185 0M5 53c-2-14-2-30 0-43",
    ],
    strokeBased: true,
  },
  banner: {
    viewBox: "0 0 220 50",
    paths: ["M10 10h200v30H10z", "M0 15l10-5v40l-10-5V15z", "M220 15l-10-5v40l10-5V15z"],
  },
}

const animationClasses: Record<DecorationVariant, string> = {
  // Underlines
  wave: "animate-draw-underline",
  swirl: "animate-draw-underline",
  double: "animate-draw-underline",
  zigzag: "animate-draw-underline",
  marker: "animate-draw-underline",
  thick: "animate-draw-underline",
  dots: "animate-fade-dots",
  // Emphasis
  circle: "animate-draw-circle",
  box: "animate-draw-circle",
  highlight: "animate-fade-scale",
  "strike-through": "animate-draw-underline",
  "crossed-off": "animate-draw-underline",
  scribble: "animate-draw-underline",
  // Arrows
  "arrow-curved-down": "animate-draw-arrow",
  "arrow-curved-up": "animate-draw-arrow",
  "arrow-loop": "animate-draw-arrow",
  "arrow-pointer": "animate-draw-arrow",
  "arrow-straight": "animate-draw-arrow",
  "arrow-bounce": "animate-draw-arrow",
  // Flow arrows
  "flow-right": "animate-draw-arrow",
  "flow-down": "animate-draw-arrow",
  "flow-left": "animate-draw-arrow",
  "flow-up": "animate-draw-arrow",
  // Decorative
  sparkle: "animate-sparkle",
  "star-burst": "animate-sparkle",
  heart: "animate-pulse-heart",
  lightning: "animate-flash",
  crown: "animate-fade-scale",
  fire: "animate-flicker",
  // Status
  checkmark: "animate-draw-check",
  "x-mark": "animate-draw-check",
  question: "animate-fade-scale",
  exclamation: "animate-bounce-in",
  // Containers
  brackets: "animate-fade-scale",
  "box-rough": "animate-draw-circle",
  banner: "animate-fade-scale",
}

export function SVGDecoration({
  variant = "wave",
  animated = false,
  duration,
  delay,
  className,
  style,
  ...props
}: SVGDecorationProps) {
  const config = decorations[variant]
  const { viewBox, paths, strokeBased } = config
  const ref = useRef<SVGSVGElement>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (!animated) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [animated])

  const animationClass = shouldAnimate ? animationClasses[variant] : ""

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={cn(animationClass, className)}
      style={{
        ...style,
        ...(duration ? { animationDuration: `${duration}ms` } : {}),
        ...(delay ? { animationDelay: `${delay}ms` } : {}),
      }}
      {...props}
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={strokeBased ? "none" : undefined}
          strokeLinecap={strokeBased ? "round" : undefined}
          strokeLinejoin={strokeBased ? "round" : undefined}
        />
      ))}
    </svg>
  )
}

// Helper to get all variants by category
export const decorationCategories = {
  underlines: ["wave", "swirl", "double", "zigzag", "marker", "thick", "dots"] as const,
  emphasis: ["circle", "box", "highlight", "strike-through", "crossed-off", "scribble"] as const,
  arrows: [
    "arrow-curved-down",
    "arrow-curved-up",
    "arrow-loop",
    "arrow-pointer",
    "arrow-straight",
    "arrow-bounce",
  ] as const,
  flow: ["flow-right", "flow-down", "flow-left", "flow-up"] as const,
  decorative: ["sparkle", "star-burst", "heart", "lightning", "crown", "fire"] as const,
  status: ["checkmark", "x-mark", "question", "exclamation"] as const,
  containers: ["brackets", "box-rough", "banner"] as const,
}

export const allDecorationVariants = Object.values(decorationCategories).flat()
