"use client"

import { SVGDecoration, decorationCategories, type DecorationVariant } from "@/components/ui/svg-decoration"
import { SVGAnnotation } from "@/components/ui/svg-annotation"
import {
  ArrowPathIcon,
  ClipboardIcon,
  CheckIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            SVG{" "}
            <span className="relative inline-block text-emerald-400">
              Decorations
              <SVGDecoration
                variant="wave"
                animated
                className="absolute -bottom-2 left-0 h-3 w-full fill-emerald-500"
              />
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Hand-drawn SVG decorations para dar personalidad a tus interfaces.
            Inspirado en{" "}
            <span className="relative inline-block">
              DataFast
              <SVGDecoration
                variant="circle"
                animated
                className="absolute -inset-2 stroke-amber-500/50 fill-none stroke-[1.5]"
              />
            </span>{" "}
            y CodeFast.
          </p>

          <div className="mt-12 relative inline-block">
            <SVGAnnotation
              text="Explora los componentes"
              direction="top-right"
              color="text-emerald-400"
              size="lg"
              className="absolute -top-16 -right-8"
            />
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ver catalogo
              <ArrowPathIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Casos de{" "}
            <span className="relative inline-block">
              uso
              <SVGDecoration
                variant="swirl"
                animated
                className="absolute -bottom-1 left-0 h-2 w-full fill-amber-500"
              />
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pricing Card */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700">
              <h3 className="text-lg font-semibold mb-4">Precios destacados</h3>
              <div className="text-center py-8">
                <span className="relative inline-block">
                  <span className="text-5xl font-bold">$49</span>
                  <SVGDecoration
                    variant="circle"
                    animated
                    className="absolute -inset-4 stroke-emerald-500 fill-none stroke-2"
                  />
                </span>
                <p className="text-zinc-400 mt-2">/mes</p>
              </div>
            </div>

            {/* Feature List */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700">
              <h3 className="text-lg font-semibold mb-4">Listas de features</h3>
              <ul className="space-y-3">
                {["Ilimitado", "Soporte 24/7", "API Access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <SVGDecoration
                      variant="checkmark"
                      animated
                      delay={i * 150}
                      className="w-5 h-5 stroke-emerald-500 stroke-2 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Badge/Label */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700">
              <h3 className="text-lg font-semibold mb-4">Badges destacados</h3>
              <div className="flex items-center gap-4 justify-center py-8">
                <span className="relative inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                  Pro
                  <SVGDecoration
                    variant="sparkle"
                    animated
                    className="w-4 h-4 fill-amber-400"
                  />
                </span>
                <span className="relative inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                  Nuevo
                  <SVGDecoration
                    variant="star-burst"
                    animated
                    className="w-4 h-4 fill-amber-400"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process/Flywheel */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Flujos y{" "}
            <span className="relative inline-block">
              procesos
              <SVGDecoration
                variant="marker"
                animated
                className="absolute -bottom-1 left-0 h-2 w-full stroke-indigo-500 stroke-[3]"
              />
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {[
              { icon: RocketLaunchIcon, label: "Lanza" },
              { icon: ChartBarIcon, label: "Mide" },
              { icon: ArrowPathIcon, label: "Itera" },
            ].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <SVGDecoration
                    variant="flow-right"
                    animated
                    delay={i * 200}
                    className="w-12 h-10 stroke-zinc-500 fill-none stroke-2 hidden md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annotations Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Anotaciones{" "}
            <span className="relative inline-block">
              handwritten
              <SVGDecoration
                variant="double"
                animated
                className="absolute -bottom-1 left-0 h-2 w-full stroke-pink-500 stroke-2"
              />
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <SVGAnnotation
                text="Este boton convierte"
                direction="top-left"
                color="text-emerald-400"
                className="absolute -top-12 left-4"
              />
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-4 rounded-lg transition-colors">
                Comenzar ahora
              </button>
            </div>

            <div className="relative">
              <SVGAnnotation
                text="Pruebalo gratis"
                direction="top-right"
                color="text-amber-400"
                className="absolute -top-12 right-4"
              />
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 font-semibold px-6 py-4 rounded-lg transition-colors">
                Ver demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Catalogo{" "}
            <span className="relative inline-block">
              completo
              <SVGDecoration
                variant="zigzag"
                animated
                className="absolute -bottom-1 left-0 h-2 w-full stroke-emerald-500 stroke-2"
              />
            </span>
          </h2>
          <p className="text-zinc-400 text-center mb-16">
            Todas las variantes disponibles
          </p>

          {Object.entries(decorationCategories).map(([category, variants]) => (
            <div key={category} className="mb-16">
              <h3 className="text-xl font-semibold mb-6 capitalize text-zinc-300">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {variants.map((variant) => (
                  <DecorationCard key={variant} variant={variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-emerald-950/20 to-transparent">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Listo para{" "}
            <span className="relative inline-block">
              usarlo
              <SVGDecoration
                variant="swirl"
                animated
                className="absolute -bottom-1 left-0 h-2 w-full fill-emerald-500"
              />
            </span>
            ?
          </h2>
          <p className="text-zinc-400 mb-8">
            Copia los componentes y empieza a darle personalidad a tu UI.
          </p>
          <a
            href="https://github.com/curetcore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Ver en GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

function DecorationCard({ variant }: { variant: DecorationVariant }) {
  const [copied, setCopied] = useState(false)

  const isStrokeBased = [
    "double",
    "zigzag",
    "marker",
    "circle",
    "box",
    "strike-through",
    "crossed-off",
    "scribble",
    "arrow-curved-down",
    "arrow-curved-up",
    "arrow-loop",
    "arrow-pointer",
    "arrow-straight",
    "arrow-bounce",
    "flow-right",
    "flow-down",
    "flow-left",
    "flow-up",
    "checkmark",
    "x-mark",
    "question",
    "exclamation",
    "brackets",
    "box-rough",
  ].includes(variant)

  const copyCode = () => {
    const code = `<SVGDecoration variant="${variant}" animated className="${isStrokeBased ? "stroke-emerald-500 stroke-2" : "fill-emerald-500"}" />`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      onClick={copyCode}
      className="group relative bg-zinc-800/50 rounded-xl p-4 border border-zinc-700 hover:border-zinc-500 cursor-pointer transition-colors"
    >
      <div className="h-16 flex items-center justify-center mb-3">
        <SVGDecoration
          variant={variant}
          animated
          className={`w-full max-w-[80px] h-10 ${
            isStrokeBased ? "stroke-emerald-500 stroke-2 fill-none" : "fill-emerald-500"
          }`}
        />
      </div>
      <p className="text-xs text-center text-zinc-400 truncate">{variant}</p>

      {/* Copy indicator */}
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <CheckIcon className="w-6 h-6 text-emerald-500" />
        ) : (
          <ClipboardIcon className="w-6 h-6 text-zinc-400" />
        )}
      </div>
    </div>
  )
}
