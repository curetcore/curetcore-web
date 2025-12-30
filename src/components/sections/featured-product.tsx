"use client";

import { ECOSYSTEM } from "@/config/ecosystem";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  BookOpenIcon,
  LanguageIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { logos } from "@/components/ui/logos";

const features = [
  {
    icon: BookOpenIcon,
    title: "Traduce libros completos",
    description: "Sube tu PDF y obtén una traducción profesional en minutos",
  },
  {
    icon: LanguageIcon,
    title: "50+ idiomas soportados",
    description: "Inglés, español, francés, alemán, japonés y muchos más",
  },
  {
    icon: SparklesIcon,
    title: "Preserva formato",
    description: "Mantiene la estructura original del documento",
  },
];

export function FeaturedProduct() {
  const lectorai = ECOSYSTEM.apps.find((app) => app.name === "LectorAI");

  return (
    <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-indigo-500/10 to-transparent" />
        <div className="absolute bottom-0 left-1/4 size-[600px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6">
              <SparklesIcon className="size-4" />
              Producto destacado
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Conoce{" "}
              <span className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-lg">
                {lectorai?.name}
              </span>
            </h2>

            <p className="mt-2 text-xl text-indigo-400 font-medium">
              {lectorai?.tagline}
            </p>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              La herramienta de traducción de libros más avanzada del mercado.
              Usa inteligencia artificial de última generación para traducir
              documentos completos manteniendo el contexto y estilo original.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">
                  {lectorai?.users}
                </span>
                <span className="text-sm text-gray-400">Usuarios activos</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-white">
                    {lectorai?.rating}
                  </span>
                  <StarIcon className="size-6 text-amber-400" />
                </div>
                <span className="text-sm text-gray-400">Calificación</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10K+</span>
                <span className="text-sm text-gray-400">Libros traducidos</span>
              </div>
            </div>

            {/* Features list */}
            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                    <feature.icon className="size-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={lectorai?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition-all hover:scale-105"
              >
                Probar LectorAI
                <ArrowTopRightOnSquareIcon className="size-4" />
              </a>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Disponible en:</span>
                <div className="flex items-center gap-2">
                  <logos.WebApp className="h-6 w-auto text-gray-400 hover:text-white transition-colors" />
                  <logos.AppStore className="h-6 w-auto text-gray-400 hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mockup/Visual */}
          <div className="mt-16 lg:mt-0 lg:flex-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />

              {/* App mockup card */}
              <div className="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 overflow-hidden backdrop-blur-sm">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/50" />
                    <div className="size-3 rounded-full bg-yellow-500/50" />
                    <div className="size-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="rounded-md bg-gray-700/50 px-3 py-1 text-xs text-gray-400">
                      lectorai.curet.app
                    </div>
                  </div>
                </div>

                {/* App content mockup */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <BookOpenIcon className="size-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">LectorAI</div>
                        <div className="text-xs text-gray-400">
                          Traducción con IA
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-400">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      En línea
                    </div>
                  </div>

                  {/* Upload area */}
                  <div className="rounded-xl border-2 border-dashed border-white/10 p-8 text-center hover:border-indigo-500/50 transition-colors">
                    <div className="mx-auto size-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4">
                      <BookOpenIcon className="size-8 text-indigo-400" />
                    </div>
                    <p className="text-sm font-medium text-white">
                      Arrastra tu libro aquí
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      PDF, EPUB hasta 50MB
                    </p>
                  </div>

                  {/* Recent translations */}
                  <div className="mt-6">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                      Traducciones recientes
                    </p>
                    <div className="space-y-2">
                      {[
                        { title: "The Art of War", lang: "ES", progress: 100 },
                        {
                          title: "Atomic Habits",
                          lang: "ES",
                          progress: 100,
                        },
                        { title: "Deep Work", lang: "ES", progress: 67 },
                      ].map((book) => (
                        <div
                          key={book.title}
                          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
                        >
                          <div className="size-8 rounded-lg bg-gray-600/50 flex items-center justify-center">
                            <BookOpenIcon className="size-4 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white truncate">
                              {book.title}
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1 rounded-full bg-gray-600 overflow-hidden">
                                <div
                                  className="h-full bg-indigo-500 rounded-full"
                                  style={{ width: `${book.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-400">
                                {book.progress}%
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-indigo-400">
                            → {book.lang}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
