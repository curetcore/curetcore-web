"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import {
  ShoppingBagIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    id: "curet",
    name: "CURET",
    tagline: "La Zapatería Dominicana",
    url: "https://curetshop.com",
    description:
      "E-commerce de calzado y accesorios de cuero hechos por manos dominicanas. Desde 2017 ofreciendo productos de calidad con envíos a todo el país.",
    icon: ShoppingBagIcon,
    gradient: "from-amber-500 to-orange-600",
    highlightColor: "bg-amber-100 text-amber-900",
    stats: [
      { value: "100K+", label: "Clientes" },
      { value: "800K+", label: "Ventas" },
      { value: "4.8", label: "Google", hasStar: true },
    ],
    features: [
      "Zapatos Oxford, Loafers y Derby",
      "Billeteras y accesorios de cuero",
      "Envíos a todo el país",
    ],
    platforms: ["Shopify"],
    mockup: {
      type: "ecommerce",
      products: [
        { name: "Oxford Luxe", price: "RD$5,500", rating: "5.0" },
        { name: "Mocasín Royal", price: "RD$5,000", rating: "4.8" },
        { name: "Sandalia Sierra", price: "RD$2,200", rating: "4.9" },
      ],
    },
  },
  {
    id: "lectorai",
    name: "LectorAI",
    tagline: "Traductor de Libros con IA",
    url: "https://lectorai.curetcore.com",
    description:
      "La herramienta de traducción de libros más avanzada del mercado. Usa inteligencia artificial de última generación para traducir documentos completos manteniendo el contexto y estilo original.",
    icon: BookOpenIcon,
    gradient: "from-indigo-500 to-purple-600",
    highlightColor: "bg-indigo-100 text-indigo-900",
    stats: [
      { value: "500+", label: "Usuarios" },
      { value: "10K+", label: "Libros" },
      { value: "4.9", label: "Rating", hasStar: true },
    ],
    features: [
      "Traduce libros completos en minutos",
      "50+ idiomas soportados",
      "Preserva el formato original",
    ],
    platforms: ["Web App", "App Store"],
    mockup: {
      type: "translation",
      books: [
        { title: "The Art of War", lang: "ES", progress: 100 },
        { title: "Atomic Habits", lang: "ES", progress: 100 },
        { title: "Deep Work", lang: "ES", progress: 67 },
      ],
    },
  },
  {
    id: "ncf",
    name: "NCF Manager",
    tagline: "Facturación Fiscal Simplificada",
    url: "https://ncf.curetcore.com",
    description:
      "Sistema de facturación fiscal para República Dominicana. Automatiza la generación de NCF, valida RNC con la DGII y envía facturas por email y WhatsApp.",
    icon: DocumentTextIcon,
    gradient: "from-emerald-500 to-teal-600",
    highlightColor: "bg-emerald-100 text-emerald-900",
    stats: [
      { value: "500+", label: "Empresas" },
      { value: "1M+", label: "Facturas" },
      { value: "4.8", label: "Rating", hasStar: true },
    ],
    features: [
      "Validación automática con DGII",
      "Soporte multi-RNC",
      "Integración con Shopify",
    ],
    platforms: ["Web App", "iOS"],
    mockup: {
      type: "invoicing",
      invoices: [
        { ncf: "B0100000145", client: "Tech Solutions SRL", amount: "RD$45,000" },
        { ncf: "B0100000144", client: "Comercial López", amount: "RD$12,500" },
        { ncf: "B0100000143", client: "Distribuidora Norte", amount: "RD$78,200" },
      ],
    },
  },
];

function EcommerceMockup({ data }: { data: typeof projects[0]["mockup"] }) {
  if (data.type !== "ecommerce") return null;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Productos destacados
      </p>
      {data.products?.map((product) => (
        <div
          key={product.name}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className="size-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <ShoppingBagIcon className="size-5 text-amber-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{product.name}</p>
            <p className="text-xs text-gray-400">{product.price}</p>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="size-3 text-amber-400" />
            <span className="text-xs text-white">{product.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function TranslationMockup({ data }: { data: typeof projects[0]["mockup"] }) {
  if (data.type !== "translation") return null;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Traducciones recientes
      </p>
      {data.books?.map((book) => (
        <div
          key={book.title}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className="size-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <BookOpenIcon className="size-5 text-indigo-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{book.title}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 rounded-full bg-gray-600 overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${book.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">{book.progress}%</span>
            </div>
          </div>
          <span className="text-xs font-medium text-indigo-400">→ {book.lang}</span>
        </div>
      ))}
    </div>
  );
}

function InvoicingMockup({ data }: { data: typeof projects[0]["mockup"] }) {
  if (data.type !== "invoicing") return null;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Facturas recientes
      </p>
      {data.invoices?.map((invoice) => (
        <div
          key={invoice.ncf}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className="size-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <DocumentTextIcon className="size-5 text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{invoice.client}</p>
            <p className="text-xs text-gray-400">{invoice.ncf}</p>
          </div>
          <span className="text-xs font-medium text-emerald-400">{invoice.amount}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectMockup({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = project.icon;
  const colors = {
    curet: { bg: "bg-amber-500/20", text: "text-amber-400", accent: "bg-amber-500" },
    lectorai: { bg: "bg-indigo-500/20", text: "text-indigo-400", accent: "bg-indigo-500" },
    ncf: { bg: "bg-emerald-500/20", text: "text-emerald-400", accent: "bg-emerald-500" },
  }[project.id] || { bg: "bg-gray-500/20", text: "text-gray-400", accent: "bg-gray-500" };

  return (
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
            {project.url.replace("https://", "")}
          </div>
        </div>
      </div>

      {/* App content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`size-10 rounded-xl bg-linear-to-br ${project.gradient} flex items-center justify-center`}>
              <Icon className="size-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-white">{project.name}</div>
              <div className="text-xs text-gray-400">{project.tagline}</div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-emerald-400">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            En línea
          </div>
        </div>

        {/* Mockup content based on type */}
        {project.mockup.type === "ecommerce" && <EcommerceMockup data={project.mockup} />}
        {project.mockup.type === "translation" && <TranslationMockup data={project.mockup} />}
        {project.mockup.type === "invoicing" && <InvoicingMockup data={project.mockup} />}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div id="productos" className="relative bg-gray-900 overflow-hidden">
      {projects.map((project, index) => {
        const Icon = project.icon;
        const isImageRight = index % 2 === 0;

        return (
          <div
            key={project.id}
            className="relative py-24 sm:py-32 overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0">
              {index === 0 && (
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-amber-500/10 to-transparent" />
              )}
              {index === 1 && (
                <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-500/10 to-transparent" />
              )}
              {index === 2 && (
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-emerald-500/10 to-transparent" />
              )}
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className={`flex flex-col ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"} lg:items-center lg:gap-16`}>
                {/* Content */}
                <div className="flex-1">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm ring-1 ring-inset mb-6 ${
                    project.id === "curet" ? "bg-amber-500/10 text-amber-400 ring-amber-500/20" :
                    project.id === "lectorai" ? "bg-indigo-500/10 text-indigo-400 ring-indigo-500/20" :
                    "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
                  }`}>
                    <Icon className="size-4" />
                    {project.tagline}
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Conoce{" "}
                    <span className={`${project.highlightColor} px-3 py-1 rounded-lg`}>
                      {project.name}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="mt-6 text-lg text-gray-400 max-w-xl">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-8 flex items-center gap-8">
                    {project.stats.map((stat, i) => (
                      <div key={stat.label} className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-3xl font-bold text-white">{stat.value}</span>
                          {stat.hasStar && <StarIcon className="size-6 text-amber-400" />}
                        </div>
                        <span className="text-sm text-gray-400">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircleIcon className={`size-5 ${
                          project.id === "curet" ? "text-amber-400" :
                          project.id === "lectorai" ? "text-indigo-400" :
                          "text-emerald-400"
                        }`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex items-center gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 ${
                        project.id === "curet" ? "bg-amber-500 shadow-amber-500/25 hover:bg-amber-400" :
                        project.id === "lectorai" ? "bg-indigo-500 shadow-indigo-500/25 hover:bg-indigo-400" :
                        "bg-emerald-500 shadow-emerald-500/25 hover:bg-emerald-400"
                      }`}
                    >
                      Visitar {project.name}
                      <ArrowTopRightOnSquareIcon className="size-4" />
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      {project.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mockup */}
                <div className="mt-16 lg:mt-0 lg:flex-1">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 rounded-3xl blur-2xl ${
                      project.id === "curet" ? "bg-linear-to-tr from-amber-500/20 via-orange-500/20 to-yellow-500/20" :
                      project.id === "lectorai" ? "bg-linear-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20" :
                      "bg-linear-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
                    }`} />
                    <ProjectMockup project={project} index={index} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
