"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import {
  ShoppingBagIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  LinkIcon,
  ChartBarIcon,
  CubeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    id: "curet",
    name: "CURET",
    tagline: "Cuero dominicano, calidad mundial",
    url: "https://curetshop.com",
    description:
      "El e-commerce de calzado más confiable de RD. +100K clientes, rating 4.8 en Google. Zapatos hechos a mano que duran años.",
    icon: ShoppingBagIcon,
    gradient: "from-amber-500 to-orange-600",
    highlightColor: "bg-amber-100 text-amber-900",
    accentColor: "amber",
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
    tagline: "Tu biblioteca, cualquier idioma",
    url: "https://lectorai.curetcore.com",
    description:
      "Traduce libros enteros en minutos, no semanas. IA que entiende contexto, mantiene el estilo, y no suena a Google Translate.",
    icon: BookOpenIcon,
    gradient: "from-indigo-500 to-purple-600",
    highlightColor: "bg-indigo-100 text-indigo-900",
    accentColor: "indigo",
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
    id: "connector",
    name: "Curetcore Connector",
    tagline: "Hub central para Shopify",
    url: "https://apps.shopify.com/curetcore-connector",
    description:
      "Conecta tu tienda Shopify con todo el ecosistema Curetcore. NCF Manager, Zintable y más, todo sincronizado automáticamente.",
    icon: LinkIcon,
    gradient: "from-emerald-500 to-teal-600",
    highlightColor: "bg-emerald-100 text-emerald-900",
    accentColor: "emerald",
    stats: [
      { value: "Gratis", label: "Precio" },
      { value: "3+", label: "Apps" },
      { value: "OAuth", label: "Seguro" },
    ],
    features: [
      "Conexión OAuth segura con Shopify",
      "Sincronización automática de datos",
      "Dashboard unificado",
    ],
    platforms: ["Shopify App"],
    mockup: {
      type: "connector",
      apps: [
        { name: "NCF Manager", status: "Conectada", events: 47 },
        { name: "Zintable", status: "Pendiente", events: 0 },
        { name: "Stock Value", status: "Conectada", events: 23 },
      ],
    },
  },
  {
    id: "ncf",
    name: "NCF Manager",
    tagline: "Facturas en 30 segundos",
    url: "https://ncf.curetcore.com",
    description:
      "Olvídate del Excel. Genera NCF válidos, conecta con DGII automáticamente, y envía facturas por WhatsApp. +500 empresas ya lo usan.",
    icon: DocumentTextIcon,
    gradient: "from-emerald-500 to-teal-600",
    highlightColor: "bg-emerald-100 text-emerald-900",
    accentColor: "emerald",
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
    platforms: ["Web App", "Shopify App"],
    mockup: {
      type: "invoicing",
      invoices: [
        { ncf: "B0100000145", client: "Tech Solutions SRL", amount: "RD$45,000" },
        { ncf: "B0100000144", client: "Comercial López", amount: "RD$12,500" },
        { ncf: "B0100000143", client: "Distribuidora Norte", amount: "RD$78,200" },
      ],
    },
  },
  {
    id: "stockvalue",
    name: "Stock Value",
    tagline: "Valoración de inventario",
    url: "https://apps.shopify.com/stock-value",
    description:
      "Conoce el valor real de tu inventario por ubicación. Costo promedio ponderado, análisis ABC, alertas de dead stock y más.",
    icon: ChartBarIcon,
    gradient: "from-green-500 to-emerald-600",
    highlightColor: "bg-green-100 text-green-900",
    accentColor: "green",
    stats: [
      { value: "$9.99", label: "Pro/mes" },
      { value: "ABC", label: "Análisis" },
      { value: "Multi", label: "Ubicación" },
    ],
    features: [
      "Valoración por ubicación",
      "Costo promedio ponderado (COGS)",
      "Alertas de stock bajo",
    ],
    platforms: ["Shopify App"],
    mockup: {
      type: "inventory",
      locations: [
        { name: "Almacén Principal", value: "$125,000", items: 450 },
        { name: "Tienda Centro", value: "$45,000", items: 120 },
        { name: "Tienda Norte", value: "$32,000", items: 85 },
      ],
    },
  },
  {
    id: "zintable",
    name: "Zintable",
    tagline: "Gestión de inventario inteligente",
    url: "https://zintable.curetcore.com",
    description:
      "Control total de tu inventario multi-almacén. Seguimiento de lotes, fechas de vencimiento, y reportes en tiempo real.",
    icon: CubeIcon,
    gradient: "from-cyan-500 to-blue-600",
    highlightColor: "bg-cyan-100 text-cyan-900",
    accentColor: "cyan",
    stats: [
      { value: "Real-time", label: "Sync" },
      { value: "Multi", label: "Almacén" },
      { value: "Lotes", label: "Tracking" },
    ],
    features: [
      "Multi-almacén en tiempo real",
      "Seguimiento de lotes y vencimientos",
      "Reportes personalizados",
    ],
    platforms: ["Web App"],
    mockup: {
      type: "warehouse",
      items: [
        { sku: "ZAP-001", name: "Oxford Negro", qty: 150, location: "A-01" },
        { sku: "ZAP-002", name: "Mocasín Café", qty: 85, location: "A-02" },
        { sku: "ACC-010", name: "Billetera Classic", qty: 200, location: "B-01" },
      ],
    },
  },
  {
    id: "importacion",
    name: "Sistema de Importación",
    tagline: "Importaciones sin complicaciones",
    url: "https://importacion.curetcore.com",
    description:
      "Gestiona tus importaciones de principio a fin. Tracking de contenedores, costos de landing, y documentación aduanal.",
    icon: TruckIcon,
    gradient: "from-blue-500 to-indigo-600",
    highlightColor: "bg-blue-100 text-blue-900",
    accentColor: "blue",
    stats: [
      { value: "Tracking", label: "Container" },
      { value: "Costos", label: "Landing" },
      { value: "Docs", label: "Aduanales" },
    ],
    features: [
      "Tracking de contenedores en tiempo real",
      "Cálculo automático de costos de landing",
      "Gestión de documentos aduanales",
    ],
    platforms: ["Web App"],
    mockup: {
      type: "import",
      shipments: [
        { container: "MSKU1234567", origin: "China", status: "En tránsito", eta: "15 días" },
        { container: "COSCO987654", origin: "Vietnam", status: "En puerto", eta: "3 días" },
        { container: "EVER1122334", origin: "China", status: "Entregado", eta: "Completado" },
      ],
    },
  },
];

// Color mappings for dynamic styling
const colorMap: Record<string, { bg: string; text: string; accent: string; ring: string; glow: string }> = {
  amber: { bg: "bg-amber-500/20", text: "text-amber-400", accent: "bg-amber-500", ring: "ring-amber-500/20", glow: "from-amber-500/20 via-orange-500/20 to-yellow-500/20" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400", accent: "bg-indigo-500", ring: "ring-indigo-500/20", glow: "from-indigo-500/20 via-purple-500/20 to-pink-500/20" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", accent: "bg-emerald-500", ring: "ring-emerald-500/20", glow: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20" },
  green: { bg: "bg-green-500/20", text: "text-green-400", accent: "bg-green-500", ring: "ring-green-500/20", glow: "from-green-500/20 via-emerald-500/20 to-teal-500/20" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", accent: "bg-cyan-500", ring: "ring-cyan-500/20", glow: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20" },
  blue: { bg: "bg-blue-500/20", text: "text-blue-400", accent: "bg-blue-500", ring: "ring-blue-500/20", glow: "from-blue-500/20 via-indigo-500/20 to-purple-500/20" },
};

function EcommerceMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "ecommerce") return null;
  const colors = colorMap[color] || colorMap.emerald;
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
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <ShoppingBagIcon className={`size-5 ${colors.text}`} />
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

function TranslationMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "translation") return null;
  const colors = colorMap[color] || colorMap.emerald;
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
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <BookOpenIcon className={`size-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{book.title}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 rounded-full bg-gray-600 overflow-hidden">
                <div
                  className={`h-full ${colors.accent} rounded-full`}
                  style={{ width: `${book.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">{book.progress}%</span>
            </div>
          </div>
          <span className={`text-xs font-medium ${colors.text}`}>→ {book.lang}</span>
        </div>
      ))}
    </div>
  );
}

function InvoicingMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "invoicing") return null;
  const colors = colorMap[color] || colorMap.emerald;
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
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <DocumentTextIcon className={`size-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{invoice.client}</p>
            <p className="text-xs text-gray-400">{invoice.ncf}</p>
          </div>
          <span className={`text-xs font-medium ${colors.text}`}>{invoice.amount}</span>
        </div>
      ))}
    </div>
  );
}

function ConnectorMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "connector") return null;
  const colors = colorMap[color] || colorMap.emerald;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Apps conectadas
      </p>
      {data.apps?.map((app) => (
        <div
          key={app.name}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <LinkIcon className={`size-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{app.name}</p>
            <p className="text-xs text-gray-400">{app.events} eventos sincronizados</p>
          </div>
          <span className={`text-xs font-medium ${app.status === "Conectada" ? "text-emerald-400" : "text-amber-400"}`}>
            {app.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function InventoryMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "inventory") return null;
  const colors = colorMap[color] || colorMap.emerald;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Valoración por ubicación
      </p>
      {data.locations?.map((loc) => (
        <div
          key={loc.name}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <ChartBarIcon className={`size-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{loc.name}</p>
            <p className="text-xs text-gray-400">{loc.items} productos</p>
          </div>
          <span className={`text-xs font-medium ${colors.text}`}>{loc.value}</span>
        </div>
      ))}
    </div>
  );
}

function WarehouseMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "warehouse") return null;
  const colors = colorMap[color] || colorMap.emerald;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Inventario en tiempo real
      </p>
      {data.items?.map((item) => (
        <div
          key={item.sku}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <CubeIcon className={`size-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{item.name}</p>
            <p className="text-xs text-gray-400">{item.sku} | {item.location}</p>
          </div>
          <span className={`text-xs font-medium ${colors.text}`}>{item.qty} uds</span>
        </div>
      ))}
    </div>
  );
}

function ImportMockup({ data, color }: { data: typeof projects[0]["mockup"]; color: string }) {
  if (data.type !== "import") return null;
  const colors = colorMap[color] || colorMap.emerald;
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        Envíos en tránsito
      </p>
      {data.shipments?.map((ship) => (
        <div
          key={ship.container}
          className="flex items-center gap-3 rounded-lg bg-gray-700/30 px-3 py-2"
        >
          <div className={`size-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <TruckIcon className={`size-5 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{ship.container}</p>
            <p className="text-xs text-gray-400">{ship.origin} | {ship.status}</p>
          </div>
          <span className={`text-xs font-medium ${colors.text}`}>{ship.eta}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectMockup({ project }: { project: typeof projects[0] }) {
  const Icon = project.icon;
  const color = project.accentColor;

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
            {project.url.replace("https://", "").replace("apps.shopify.com/", "")}
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
        <EcommerceMockup data={project.mockup} color={color} />
        <TranslationMockup data={project.mockup} color={color} />
        <InvoicingMockup data={project.mockup} color={color} />
        <ConnectorMockup data={project.mockup} color={color} />
        <InventoryMockup data={project.mockup} color={color} />
        <WarehouseMockup data={project.mockup} color={color} />
        <ImportMockup data={project.mockup} color={color} />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div id="productos" className="relative bg-gray-900 overflow-hidden">
      {/* Section header */}
      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-lg">Productos</span> del ecosistema
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Soluciones que transforman negocios. Desde e-commerce hasta facturación fiscal.
          </p>
        </div>
      </div>

      {projects.map((project, index) => {
        const Icon = project.icon;
        const isImageRight = index % 2 === 0;
        const colors = colorMap[project.accentColor] || colorMap.emerald;

        return (
          <div
            key={project.id}
            className="relative py-16 sm:py-24 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0">
              <div className={`absolute ${isImageRight ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 w-1/2 h-96 bg-linear-to-${isImageRight ? "l" : "r"} ${colors.glow} blur-3xl opacity-30`} />
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className={`flex flex-col ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"} lg:items-center lg:gap-16`}>
                {/* Content */}
                <div className="flex-1">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm ring-1 ring-inset mb-6 ${colors.bg} ${colors.text} ${colors.ring}`}>
                    <Icon className="size-4" />
                    {project.tagline}
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
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
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-3xl font-bold text-white">{stat.value}</span>
                          {"hasStar" in stat && stat.hasStar && <StarIcon className="size-6 text-amber-400" />}
                        </div>
                        <span className="text-sm text-gray-400">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircleIcon className={`size-5 ${colors.text}`} />
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
                      className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 ${colors.accent} shadow-${project.accentColor}-500/25`}
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
                    <div className={`absolute -inset-4 rounded-3xl blur-2xl bg-linear-to-tr ${colors.glow}`} />
                    <ProjectMockup project={project} />
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
