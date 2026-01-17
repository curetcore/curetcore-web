import { Metadata } from "next";
import Link from "next/link";
import { SVGDecoration } from "@/components/ui/svg-decoration";

export const metadata: Metadata = {
  title: "Documentacion - Curetcore",
  description:
    "Guias, tutoriales y documentacion tecnica para Curetcore Connector, NCF Manager y LectorAI.",
  alternates: {
    canonical: "https://curetcore.com/docs",
  },
};

const products = [
  {
    name: "Curetcore Connector",
    description:
      "App de Shopify que conecta tu tienda con el ecosistema Curetcore.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
    color: "indigo",
    guides: [
      {
        title: "Instalacion",
        description: "Como instalar Curetcore Connector en tu tienda Shopify",
        href: "#instalacion-connector",
      },
      {
        title: "Conectar NCF Manager",
        description: "Configura la generacion automatica de comprobantes fiscales",
        href: "#conectar-ncf",
      },
      {
        title: "Dashboard",
        description: "Entiende las metricas y graficas del dashboard",
        href: "#dashboard",
      },
      {
        title: "Webhooks",
        description: "Como funcionan las sincronizaciones automaticas",
        href: "#webhooks",
      },
    ],
  },
  {
    name: "NCF Manager",
    description:
      "Gestion de comprobantes fiscales NCF para la DGII dominicana.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    color: "emerald",
    guides: [
      {
        title: "Primeros pasos",
        description: "Configura tu empresa y RNC para emitir NCFs",
        href: "#ncf-inicio",
      },
      {
        title: "Tipos de comprobantes",
        description: "Consumidor final, credito fiscal, gubernamental y mas",
        href: "#tipos-ncf",
      },
      {
        title: "Generar NCF manual",
        description: "Crear un comprobante paso a paso",
        href: "#ncf-manual",
      },
      {
        title: "Automatizacion con Shopify",
        description: "Genera NCFs automaticamente al crear ordenes",
        href: "#ncf-automatico",
      },
      {
        title: "Reportes DGII",
        description: "Exporta datos para tus declaraciones fiscales",
        href: "#reportes-dgii",
      },
    ],
  },
  {
    name: "LectorAI",
    description: "Traduccion de libros con inteligencia artificial.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    color: "purple",
    guides: [
      {
        title: "Subir un libro",
        description: "Formatos soportados y como preparar tu archivo",
        href: "#subir-libro",
      },
      {
        title: "Proceso de traduccion",
        description: "Que sucede durante la traduccion y tiempos estimados",
        href: "#proceso-traduccion",
      },
      {
        title: "Revisar y editar",
        description: "Como revisar capitulos y hacer correcciones",
        href: "#revisar-editar",
      },
      {
        title: "Exportar",
        description: "Descarga tu libro traducido en EPUB, PDF o DOCX",
        href: "#exportar",
      },
    ],
  },
];

const quickLinks = [
  {
    title: "API Reference",
    description: "Documentacion tecnica para desarrolladores",
    href: "#api",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Preguntas frecuentes",
    description: "Respuestas rapidas a dudas comunes",
    href: "/faq",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Contactar soporte",
    description: "Ayuda personalizada de nuestro equipo",
    href: "/soporte",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            &larr; Volver a Curetcore
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            <span className="relative inline-block">
              Documentacion
              <SVGDecoration
                variant="marker"
                animated
                className="absolute -bottom-2 left-0 h-2 w-full stroke-amber-500 fill-none stroke-2"
              />
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            <span className="relative inline-block">
              Guias
              <SVGDecoration
                variant="marker"
                animated
                delay={200}
                className="absolute -bottom-1 left-0 h-1.5 w-full stroke-amber-500/50 fill-none stroke-2"
              />
            </span>
            , tutoriales y recursos para aprovechar al maximo los productos
            de Curetcore.
          </p>
        </header>

        {/* Quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-white/5 hover:border-white/10 hover:bg-gray-800/50 transition"
            >
              <div className="text-indigo-400">{link.icon}</div>
              <div>
                <h3 className="font-semibold text-white">{link.title}</h3>
                <p className="text-sm text-gray-400">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Products */}
        <div className="space-y-16">
          {products.map((product) => (
            <section key={product.name}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${
                    product.color === "indigo"
                      ? "bg-indigo-500/10 text-indigo-400"
                      : product.color === "emerald"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {product.name}
                  </h2>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.guides.map((guide) => (
                  <a
                    key={guide.title}
                    href={guide.href}
                    className="group p-5 bg-gray-800/20 rounded-lg border border-white/5 hover:border-white/10 hover:bg-gray-800/40 transition"
                  >
                    <h3 className="font-semibold text-white group-hover:text-indigo-400 transition mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-400">{guide.description}</p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <span>Documentacion en desarrollo - Nuevas guias cada semana</span>
          </div>
        </div>
      </div>
    </main>
  );
}
