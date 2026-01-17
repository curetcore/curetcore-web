import { Metadata } from "next";
import Link from "next/link";
import { ECOSYSTEM } from "@/config/ecosystem";
import { SVGDecoration } from "@/components/ui/svg-decoration";

export const metadata: Metadata = {
  title: "Soporte - Curetcore",
  description:
    "Contacta a nuestro equipo de soporte. Ayuda con Curetcore Connector, NCF Manager y LectorAI.",
  alternates: {
    canonical: "https://curetcore.com/soporte",
  },
};

const supportOptions = [
  {
    title: "Email",
    description: "Respuesta en menos de 24 horas habiles",
    value: "soporte@curetcore.com",
    href: "mailto:soporte@curetcore.com",
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    description: "Soporte rapido para urgencias",
    value: "+1 (809) 555-0123",
    href: "https://wa.me/18095550123",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const products = [
  {
    name: "Curetcore Connector",
    description: "App de Shopify",
    status: "online",
    statusText: "Operativo",
  },
  {
    name: "NCF Manager",
    description: "Comprobantes fiscales",
    status: "online",
    statusText: "Operativo",
  },
  {
    name: "LectorAI",
    description: "Traduccion de libros",
    status: "online",
    statusText: "Operativo",
  },
];

export default function SoportePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            &larr; Volver a Curetcore
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            <span className="relative inline-block">
              Soporte
              <SVGDecoration
                variant="wave"
                animated
                className="absolute -bottom-2 left-0 h-3 w-full fill-indigo-500"
              />
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Estamos aqui para{" "}
            <span className="relative inline-block">
              ayudarte
              <SVGDecoration
                variant="wave"
                animated
                delay={200}
                className="absolute -bottom-1 left-0 h-1.5 w-full fill-indigo-500/40"
              />
            </span>
            . Elige el canal que prefieras.
          </p>
        </header>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {supportOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              className="group p-6 bg-gray-800/30 rounded-xl border border-white/5 hover:border-indigo-500/50 hover:bg-gray-800/50 transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:bg-indigo-500/20 transition">
                  {option.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {option.description}
                  </p>
                  <p className="text-indigo-400 font-medium">{option.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Status */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">
            Estado de los servicios
          </h2>
          <div className="bg-gray-800/30 rounded-xl border border-white/5 divide-y divide-white/5">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-4"
              >
                <div>
                  <h3 className="font-medium text-white">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      product.status === "online"
                        ? "bg-emerald-400"
                        : "bg-amber-400"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      product.status === "online"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    {product.statusText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">
            Recursos de autoservicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/faq"
              className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-white/5 hover:border-white/10 transition"
            >
              <svg
                className="h-6 w-6 text-indigo-400"
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
              <div>
                <h3 className="font-medium text-white">Preguntas frecuentes</h3>
                <p className="text-sm text-gray-400">
                  Respuestas rapidas a dudas comunes
                </p>
              </div>
            </Link>
            <Link
              href="/docs"
              className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-white/5 hover:border-white/10 transition"
            >
              <svg
                className="h-6 w-6 text-indigo-400"
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
              <div>
                <h3 className="font-medium text-white">Documentacion</h3>
                <p className="text-sm text-gray-400">
                  Guias y tutoriales detallados
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Business hours */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">
            Horario de atencion
          </h2>
          <div className="bg-gray-800/30 rounded-xl border border-white/5 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-white mb-2">Email</h3>
                <p className="text-gray-400 text-sm">
                  Lunes a viernes: 9:00 AM - 6:00 PM (AST)
                </p>
                <p className="text-gray-400 text-sm">
                  Respuesta en menos de 24 horas habiles
                </p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm">
                  Lunes a viernes: 9:00 AM - 5:00 PM (AST)
                </p>
                <p className="text-gray-400 text-sm">
                  Para urgencias y consultas rapidas
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-500">
                Zona horaria: Atlantic Standard Time (AST) -{" "}
                {ECOSYSTEM.location.city}, {ECOSYSTEM.location.country}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
