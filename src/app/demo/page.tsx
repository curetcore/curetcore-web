'use client'

import { useState } from 'react'
import { SVGDecoration, decorationCategories, type DecorationVariant } from '@/components/ui/svg-decoration'
import { SVGAnnotation, AnnotationPointer } from '@/components/ui/svg-annotation'
import {
  ArrowPathIcon,
  ClipboardIcon,
  CheckIcon,
  StarIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

// ============================================
// CONFIGURATION
// ============================================

const colorPalettes = {
  brand: { fill: 'fill-emerald-500', stroke: 'stroke-emerald-500', text: 'text-emerald-500', label: 'Marca' },
  action: { fill: 'fill-amber-400', stroke: 'stroke-amber-400', text: 'text-amber-400', label: 'Accion' },
  premium: { fill: 'fill-violet-500', stroke: 'stroke-violet-500', text: 'text-violet-500', label: 'Premium' },
  new: { fill: 'fill-cyan-500', stroke: 'stroke-cyan-500', text: 'text-cyan-500', label: 'Nuevo' },
  urgent: { fill: 'fill-red-500', stroke: 'stroke-red-500', text: 'text-red-500', label: 'Urgencia' },
}

const strokeVariants = new Set([
  'double', 'zigzag', 'marker', 'circle', 'box', 'strike-through', 'crossed-off', 'scribble',
  'arrow-curved-down', 'arrow-curved-up', 'arrow-loop', 'arrow-pointer', 'arrow-straight', 'arrow-bounce',
  'flow-right', 'flow-down', 'flow-left', 'flow-up',
  'checkmark', 'x-mark', 'question', 'exclamation', 'brackets', 'box-rough'
])

const categoryLabels: Record<string, string> = {
  underlines: 'Underlines',
  emphasis: 'Enfasis',
  arrows: 'Flechas',
  flow: 'Flujo',
  decorative: 'Decorativos',
  status: 'Status',
  containers: 'Contenedores',
}

// ============================================
// COMPONENTS
// ============================================

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors"
      title="Copiar codigo"
    >
      {copied ? (
        <CheckIcon className="size-4 text-emerald-400" />
      ) : (
        <ClipboardIcon className="size-4 text-zinc-400" />
      )}
    </button>
  )
}

function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="relative">
      {title && <p className="text-sm text-zinc-400 mb-2">{title}</p>}
      <pre className="p-4 rounded-xl bg-zinc-900 text-zinc-100 overflow-x-auto text-sm border border-zinc-800">
        <code>{code}</code>
      </pre>
      <CopyButton code={code} />
    </div>
  )
}

function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="text-2xl font-bold flex items-center gap-2 scroll-mt-24">
      {children}
    </h2>
  )
}

function ExampleCard({ title, children, code }: { title: string; children: React.ReactNode; code?: string }) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          {code && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-xs text-emerald-400 hover:underline"
            >
              {showCode ? 'Ocultar codigo' : 'Ver codigo'}
            </button>
          )}
        </div>
        {children}
      </div>
      {showCode && code && (
        <div className="border-t border-zinc-800 p-4 bg-zinc-950">
          <pre className="text-xs text-zinc-300 overflow-x-auto"><code>{code}</code></pre>
        </div>
      )}
    </div>
  )
}

function Button({ children, className = '', size = 'default', variant = 'default', ...props }: {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'lg'
  variant?: 'default' | 'outline'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClass = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors'
  const sizeClass = size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'
  const variantClass = variant === 'outline'
    ? 'border border-zinc-600 text-white hover:bg-zinc-800'
    : 'bg-emerald-500 text-black hover:bg-emerald-600'

  return (
    <button className={`${baseClass} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function DemoPage() {
  const [animationKey, setAnimationKey] = useState(0)
  const [selectedPalette, setSelectedPalette] = useState<keyof typeof colorPalettes>('brand')
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  const resetAnimations = () => setAnimationKey(prev => prev + 1)
  const palette = colorPalettes[selectedPalette]

  const containerClass = viewMode === 'mobile' ? 'max-w-sm' : viewMode === 'tablet' ? 'max-w-2xl' : 'max-w-6xl'

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-xl font-bold">SVG Decorations</h1>

          <div className="flex flex-wrap items-center gap-3">
            {/* Replay */}
            <button onClick={resetAnimations} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-sm">
              <ArrowPathIcon className="size-4" />
              Replay
            </button>

            {/* View Mode */}
            <div className="flex rounded-lg border border-zinc-700 overflow-hidden">
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-2 ${viewMode === 'mobile' ? 'bg-emerald-500 text-black' : 'hover:bg-zinc-800'}`}
              >
                <DevicePhoneMobileIcon className="size-4" />
              </button>
              <button
                onClick={() => setViewMode('tablet')}
                className={`p-2 border-x border-zinc-700 ${viewMode === 'tablet' ? 'bg-emerald-500 text-black' : 'hover:bg-zinc-800'}`}
              >
                <DevicePhoneMobileIcon className="size-4 rotate-90" />
              </button>
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-2 ${viewMode === 'desktop' ? 'bg-emerald-500 text-black' : 'hover:bg-zinc-800'}`}
              >
                <ComputerDesktopIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Palette Selector */}
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center gap-2 border-t border-zinc-800">
          {Object.entries(colorPalettes).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedPalette(key as keyof typeof colorPalettes)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedPalette === key
                  ? `${value.text} ring-2 ring-current`
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {value.label}
            </button>
          ))}
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-[105px] z-40 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-4 text-sm">
          {['heroes', 'headlines', 'pricing', 'features', 'stats', 'flywheel', 'annotations', 'all-variants', 'code'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-zinc-400 hover:text-white whitespace-nowrap capitalize"
            >
              {section.replace('-', ' ')}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className={`mx-auto px-4 py-8 space-y-16 transition-all ${containerClass}`}>

        {/* ============================================ */}
        {/* HEROES */}
        {/* ============================================ */}
        <section className="space-y-8">
          <SectionTitle id="heroes">Heroes</SectionTitle>

          {/* Hero 1: Centered with wave */}
          <div className="p-8 rounded-2xl bg-linear-to-br from-zinc-900 to-zinc-800 text-center">
            <p className="text-sm text-zinc-400 uppercase tracking-wider mb-4">La plataforma #1</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Gestiona tu negocio{' '}
              <span className="relative inline-block">
                sin limites
                <SVGDecoration
                  key={`hero1-${animationKey}`}
                  variant="wave"
                  animated
                  className={`absolute -bottom-2 left-0 h-4 w-full ${palette.fill}`}
                />
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              Todo lo que necesitas para escalar tu empresa en una sola plataforma.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                Comenzar gratis
              </Button>
              <Button size="lg" variant="outline">
                Ver demo
              </Button>
            </div>
          </div>

          {/* Hero 2: Split with circle */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-4">
                  <SVGDecoration variant="sparkle" className="size-4 fill-emerald-500" />
                  Nuevo
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                  Automatiza{' '}
                  <span className="relative inline-block">
                    todo
                    <SVGDecoration
                      key={`hero2-${animationKey}`}
                      variant="circle"
                      animated
                      className={`absolute -inset-2 ${palette.stroke} fill-none stroke-[2.5]`}
                    />
                  </span>
                  {' '}tu flujo
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  Conecta tus herramientas favoritas y deja que la magia suceda.
                </p>
                <Button size="lg">
                  Empezar ahora
                  <SVGDecoration variant="arrow-straight" className="ml-2 w-6 h-4 stroke-current stroke-2" />
                </Button>
              </div>
              <div className="bg-linear-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl aspect-video flex items-center justify-center border border-zinc-800">
                <span className="text-zinc-500">Preview</span>
              </div>
            </div>
          </div>

          {/* Hero 3: With floating elements */}
          <div className="relative p-8 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 overflow-hidden">
            <SVGDecoration variant="sparkle" className="absolute top-8 right-12 size-8 fill-white/30" />
            <SVGDecoration variant="star-burst" className="absolute bottom-12 left-8 size-12 fill-white/20" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                El futuro es{' '}
                <span className="relative inline-block">
                  ahora
                  <SVGDecoration
                    key={`hero3-${animationKey}`}
                    variant="swirl"
                    animated
                    className="absolute -bottom-1 left-0 h-3 w-full fill-amber-300"
                  />
                </span>
              </h2>
              <p className="text-violet-200 text-lg mb-8">
                No esperes mas para transformar tu manera de trabajar.
              </p>
              <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50">
                <SparklesIcon className="size-5 mr-2" />
                Prueba Pro gratis
              </Button>
            </div>
          </div>

          {/* Hero 4: Minimal with highlight */}
          <div className="p-12 text-center">
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Factura en minutos,{' '}
              <span className="relative inline-block bg-emerald-500/20 px-3 py-1">
                no en horas
                <SVGDecoration
                  key={`hero4-${animationKey}`}
                  variant="marker"
                  animated
                  className={`absolute -bottom-1 left-0 h-2 w-full ${palette.stroke} stroke-2`}
                />
              </span>
            </h2>
          </div>
        </section>

        {/* ============================================ */}
        {/* HEADLINES */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="headlines">Headlines</SectionTitle>

          <div className="grid gap-6">
            {/* All underline variants */}
            {(['wave', 'swirl', 'double', 'zigzag', 'marker', 'thick'] as const).map((variant) => (
              <ExampleCard
                key={variant}
                title={`Underline: ${variant}`}
                code={`<span className="relative inline-block">
  texto
  <SVGDecoration variant="${variant}" className="absolute -bottom-2 left-0 h-3 w-full ${strokeVariants.has(variant) ? 'stroke-emerald-500 stroke-2' : 'fill-emerald-500'}" />
</span>`}
              >
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Destaca lo{' '}
                  <span className="relative inline-block">
                    importante
                    <SVGDecoration
                      key={`${variant}-${animationKey}`}
                      variant={variant}
                      animated
                      className={`absolute -bottom-2 left-0 h-3 w-full ${strokeVariants.has(variant) ? `${palette.stroke} stroke-2` : palette.fill}`}
                    />
                  </span>
                </h3>
              </ExampleCard>
            ))}

            {/* Circle around word */}
            <ExampleCard title="Circulo alrededor de palabra">
              <h3 className="text-3xl font-extrabold tracking-tight">
                Envio{' '}
                <span className="relative inline-block">
                  gratis
                  <SVGDecoration
                    key={`circle-ex-${animationKey}`}
                    variant="circle"
                    animated
                    className={`absolute -inset-2 ${palette.stroke} fill-none stroke-[2.5]`}
                  />
                </span>
                {' '}hoy
              </h3>
            </ExampleCard>

            {/* Box variant */}
            <ExampleCard title="Caja alrededor de palabra">
              <h3 className="text-3xl font-extrabold tracking-tight">
                Oferta{' '}
                <span className="relative inline-block px-3 py-1">
                  especial
                  <SVGDecoration
                    key={`box-ex-${animationKey}`}
                    variant="box"
                    animated
                    className={`absolute inset-0 ${palette.stroke} fill-none stroke-2`}
                  />
                </span>
              </h3>
            </ExampleCard>

            {/* Combined styles */}
            <ExampleCard title="Combinado: fondo + underline + sparkle">
              <h3 className="text-3xl font-extrabold tracking-tight">
                Plan{' '}
                <span className="relative inline-block bg-emerald-500/20 px-3">
                  Pro
                  <SVGDecoration
                    key={`combo-swirl-${animationKey}`}
                    variant="swirl"
                    animated
                    className={`absolute -bottom-1 left-0 h-2 w-full ${palette.fill}`}
                  />
                  <SVGDecoration
                    key={`combo-sparkle-${animationKey}`}
                    variant="sparkle"
                    animated
                    delay={500}
                    className={`absolute -top-4 -right-5 size-6 ${palette.fill}`}
                  />
                </span>
                {' '}ilimitado
              </h3>
            </ExampleCard>

            {/* Strike through */}
            <ExampleCard title="Strike-through para precios">
              <div className="flex items-center gap-4">
                <span className="relative text-3xl text-zinc-500">
                  $99
                  <SVGDecoration
                    key={`strike-${animationKey}`}
                    variant="strike-through"
                    animated
                    className="absolute inset-0 stroke-red-400 stroke-2"
                  />
                </span>
                <span className="text-4xl font-bold text-emerald-400">$49</span>
              </div>
            </ExampleCard>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRICING */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="pricing">Pricing</SectionTitle>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0</div>
              <ul className="space-y-2 mb-6">
                {['10 facturas/mes', 'Soporte email'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <SVGDecoration variant="checkmark" className="size-5 stroke-emerald-500 stroke-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Comenzar</Button>
            </div>

            {/* Pro - Popular */}
            <div className="relative p-6 rounded-xl border-2 border-emerald-500 bg-zinc-900/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="relative inline-flex items-center px-3 py-1 bg-emerald-500 text-black text-sm font-medium rounded-full">
                  Popular
                  <SVGDecoration
                    key={`crown-${animationKey}`}
                    variant="crown"
                    animated
                    className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-5 fill-amber-400"
                  />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 mt-2">Pro</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="relative text-xl text-zinc-500 line-through">$99</span>
                <span className="text-4xl font-bold">$49</span>
                <span className="text-sm text-zinc-400">de por vida</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['Ilimitado', 'Soporte prioritario', 'API access', 'Exportar PDF'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <SVGDecoration variant="checkmark" className="size-5 stroke-emerald-500 stroke-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                Obtener Pro
                <SVGDecoration variant="sparkle" className="ml-2 size-4 fill-current" />
              </Button>
            </div>

            {/* Enterprise */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                {['Todo de Pro', 'SLA garantizado', 'Onboarding dedicado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <SVGDecoration variant="checkmark" className="size-5 stroke-emerald-500 stroke-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Contactar</Button>
            </div>
          </div>

          {/* Guarantee badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <ShieldCheckIcon className="size-6 text-emerald-500" />
              <span className="font-medium">
                Garantia de{' '}
                <span className="relative inline-block">
                  30 dias
                  <SVGDecoration variant="wave" className="absolute -bottom-1 left-0 h-2 w-full fill-emerald-400" />
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FEATURES */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="features">Features</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BoltIcon, title: 'Ultra rapido', desc: 'Respuestas en milisegundos', variant: 'lightning' as const },
              { icon: ShieldCheckIcon, title: 'Seguro', desc: 'Encriptacion de extremo a extremo', variant: 'checkmark' as const },
              { icon: ChartBarIcon, title: 'Analytics', desc: 'Metricas en tiempo real', variant: 'sparkle' as const },
              { icon: UserGroupIcon, title: 'Colaboracion', desc: 'Trabaja en equipo sin limites', variant: 'star-burst' as const },
              { icon: CreditCardIcon, title: 'Pagos', desc: 'Integracion con Stripe', variant: 'heart' as const },
              { icon: RocketLaunchIcon, title: 'Escalable', desc: 'Crece sin preocupaciones', variant: 'fire' as const },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 group hover:border-emerald-500/50 transition-colors">
                <div className="relative inline-block mb-4">
                  <feature.icon className="size-8 text-emerald-500" />
                  <SVGDecoration
                    variant={feature.variant}
                    className={`absolute -top-2 -right-3 size-5 ${palette.fill} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================ */}
        {/* STATS */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="stats">Stats & Metrics</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10,000+', label: 'Usuarios', decoration: 'sparkle' as const },
              { value: '99.9%', label: 'Uptime', decoration: 'checkmark' as const },
              { value: '$2M+', label: 'Procesado', decoration: 'lightning' as const },
              { value: '4.9/5', label: 'Rating', decoration: 'star-burst' as const },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center group">
                <div className="relative inline-block">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <SVGDecoration
                    variant={stat.decoration}
                    className={`absolute -top-2 -right-4 size-6 ${palette.fill} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Big stat with circle */}
          <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center">
            <div className="relative inline-block">
              <span className="text-6xl sm:text-7xl font-bold">$49</span>
              <SVGDecoration
                key={`bigstat-${animationKey}`}
                variant="circle"
                animated
                className={`absolute -inset-4 ${palette.stroke} fill-none stroke-[3]`}
              />
            </div>
            <p className="text-xl text-zinc-400 mt-4">Pago unico. Para siempre.</p>
          </div>
        </section>

        {/* ============================================ */}
        {/* FLYWHEEL / PROCESS FLOW */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="flywheel">Flywheel / Process Flow</SectionTitle>
          <p className="text-zinc-400">
            Flechas de flujo para conectar pasos en un proceso circular (estilo CodeFast).
          </p>

          {/* Flywheel circular */}
          <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
            <h3 className="text-xl font-bold text-center mb-8">
              Start a learning{' '}
              <span className="relative inline-block">
                flywheel
                <SVGDecoration
                  variant="swirl"
                  animated
                  className={`absolute -bottom-1 left-0 h-2 w-full ${palette.fill}`}
                />
              </span>
            </h3>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {/* Row 1 */}
              <div className="flex justify-end items-center">
                <SVGDecoration
                  key={`flow1-${animationKey}`}
                  variant="flow-right"
                  animated
                  delay={0}
                  className={`w-10 h-8 ${palette.stroke} fill-none stroke-2`}
                />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-2">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="text-sm font-medium">Aprende</div>
              </div>
              <div className="flex justify-start items-center">
                <SVGDecoration
                  key={`flow2-${animationKey}`}
                  variant="flow-down"
                  animated
                  delay={200}
                  className={`w-8 h-10 ${palette.stroke} fill-none stroke-2`}
                />
              </div>

              {/* Row 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <div className="text-sm font-medium">Feedback</div>
              </div>
              <div />
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-2">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm font-medium">Construye</div>
              </div>

              {/* Row 3 */}
              <div className="flex justify-end items-center">
                <SVGDecoration
                  key={`flow3-${animationKey}`}
                  variant="flow-up"
                  animated
                  delay={600}
                  className={`w-8 h-10 ${palette.stroke} fill-none stroke-2`}
                />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-2">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="text-sm font-medium">Lanza</div>
              </div>
              <div className="flex justify-start items-center">
                <SVGDecoration
                  key={`flow4-${animationKey}`}
                  variant="flow-left"
                  animated
                  delay={400}
                  className={`w-10 h-8 ${palette.stroke} fill-none stroke-2`}
                />
              </div>
            </div>
          </div>

          {/* Linear process */}
          <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
            <h3 className="text-xl font-bold text-center mb-8">Proceso lineal con flechas</h3>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              {[
                { label: 'Registra', num: '1' },
                { label: 'Configura', num: '2' },
                { label: 'Usa', num: '3' },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl font-bold text-emerald-400">{step.num}</span>
                    </div>
                    <div className="text-sm">{step.label}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <SVGDecoration
                      key={`linear${i}-${animationKey}`}
                      variant="flow-right"
                      animated
                      delay={i * 200}
                      className={`w-12 h-8 ${palette.stroke} fill-none stroke-2 hidden sm:block`}
                    />
                  )}
                </div>
              ))}
              <div className="text-center px-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                  <SVGDecoration variant="checkmark" className="w-6 h-6 stroke-emerald-500 fill-none stroke-2" />
                </div>
                <div className="text-sm">Listo</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANNOTATIONS */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="annotations">Annotations</SectionTitle>
          <p className="text-zinc-400">
            Anotaciones con texto handwritten + flecha apuntando. Estilo DataFast.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Annotation pointing to button */}
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 relative">
              <h4 className="text-sm font-medium text-zinc-400 mb-6">Apuntando a boton</h4>
              <div className="flex flex-col items-center gap-4">
                <SVGAnnotation
                  text="Prueba esto"
                  direction="bottom-right"
                  color="text-emerald-400"
                  animated
                />
                <Button size="lg">Comenzar gratis</Button>
              </div>
            </div>

            {/* Annotation with sparkle */}
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h4 className="text-sm font-medium text-zinc-400 mb-6">Con sparkle</h4>
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <SVGAnnotation
                    text="La gente esta obsesionada"
                    direction="bottom-left"
                    color="text-amber-400"
                    animated
                  />
                  <SVGDecoration
                    variant="sparkle"
                    className="absolute -top-2 right-0 size-5 fill-amber-400"
                  />
                </div>
                <div className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-medium">
                  Feature Pro
                </div>
              </div>
            </div>

            {/* Annotation horizontal */}
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h4 className="text-sm font-medium text-zinc-400 mb-6">Horizontal</h4>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                  $49
                </div>
                <SVGAnnotation
                  text="Oferta unica"
                  direction="left"
                  color="text-violet-400"
                  size="lg"
                  animated
                />
              </div>
            </div>

            {/* AnnotationPointer wrapping element */}
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h4 className="text-sm font-medium text-zinc-400 mb-6">Envolviendo elemento</h4>
              <div className="flex justify-center">
                <AnnotationPointer
                  text="Nuevo"
                  direction="top-right"
                  color="text-cyan-400"
                  size="sm"
                  animated
                >
                  <div className="px-6 py-3 rounded-lg border-2 border-cyan-500 font-medium">
                    Dashboard v2.0
                  </div>
                </AnnotationPointer>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ALL VARIANTS */}
        {/* ============================================ */}
        <section className="space-y-8">
          <SectionTitle id="all-variants">Todas las variantes</SectionTitle>

          {Object.entries(decorationCategories).map(([category, variants]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-400">
                {categoryLabels[category]} ({variants.length})
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {variants.map((variant) => {
                  const needsStroke = strokeVariants.has(variant)
                  return (
                    <div
                      key={variant}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition-colors"
                    >
                      <div className="size-10 flex items-center justify-center">
                        <SVGDecoration
                          key={`${variant}-${animationKey}`}
                          variant={variant as DecorationVariant}
                          animated
                          className={`w-full h-full ${needsStroke ? `${palette.stroke} stroke-2` : palette.fill}`}
                        />
                      </div>
                      <span className="text-[10px] text-center font-mono text-zinc-500">
                        {variant}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        {/* ============================================ */}
        {/* CODE EXAMPLES */}
        {/* ============================================ */}
        <section className="space-y-6">
          <SectionTitle id="code">Codigo</SectionTitle>

          <CodeBlock
            title="Importar componente"
            code={`import { SVGDecoration } from '@/components/ui/svg-decoration'`}
          />

          <CodeBlock
            title="Underline basico"
            code={`<span className="relative inline-block">
  texto destacado
  <SVGDecoration
    variant="wave"
    animated
    className="absolute -bottom-2 left-0 h-3 w-full fill-amber-400"
  />
</span>`}
          />

          <CodeBlock
            title="Circulo alrededor"
            code={`<span className="relative inline-block">
  gratis
  <SVGDecoration
    variant="circle"
    animated
    className="absolute -inset-2 stroke-emerald-500 fill-none stroke-[2.5]"
  />
</span>`}
          />

          <CodeBlock
            title="Combinacion multiple"
            code={`<span className="relative inline-block bg-amber-100/50 px-3">
  Pro
  <SVGDecoration variant="swirl" className="absolute -bottom-1 left-0 h-2 w-full fill-amber-500" />
  <SVGDecoration variant="sparkle" delay={500} className="absolute -top-4 -right-5 size-6 fill-amber-400" />
</span>`}
          />

          <CodeBlock
            title="Variantes disponibles"
            code={`// Underlines
'wave' | 'swirl' | 'double' | 'zigzag' | 'marker' | 'thick' | 'dots'

// Emphasis
'circle' | 'box' | 'highlight' | 'strike-through' | 'crossed-off' | 'scribble'

// Arrows
'arrow-curved-down' | 'arrow-curved-up' | 'arrow-loop' | 'arrow-pointer' | 'arrow-straight' | 'arrow-bounce'

// Flow
'flow-right' | 'flow-down' | 'flow-left' | 'flow-up'

// Decorative
'sparkle' | 'star-burst' | 'heart' | 'lightning' | 'crown' | 'fire'

// Status
'checkmark' | 'x-mark' | 'question' | 'exclamation'

// Containers
'brackets' | 'box-rough' | 'banner'`}
          />
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-zinc-800">
          <p className="text-zinc-400">
            30+ variantes SVG hand-drawn para UI moderna
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            Hecho por{' '}
            <a href="https://instagram.com/_ronaldopaulino" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
              Ronaldo Paulino
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}
