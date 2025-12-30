import { ECOSYSTEM } from "@/config/ecosystem";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const contactOptions = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Hablemos",
    description: "DM en Instagram para consultas rápidas",
    href: ECOSYSTEM.author.instagram,
    label: "@_ronaldopaulino",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: CodeBracketIcon,
    title: "Colaboremos",
    description: "Proyectos open source y contribuciones",
    href: ECOSYSTEM.author.github,
    label: "GitHub",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: EnvelopeIcon,
    title: "Proyectos",
    description: "Para propuestas de trabajo o partnerships",
    href: `mailto:${ECOSYSTEM.author.email}`,
    label: ECOSYSTEM.author.email,
    color: "from-indigo-500 to-purple-500",
  },
];

export function CTA() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Main heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            ¿Listo para construir algo{" "}
            <span className="bg-amber-100 text-zinc-900 px-3 py-1 rounded-lg">
              increíble
            </span>
            ?
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
            Ya sea que tengas una idea, necesites ayuda técnica, o quieras
            colaborar en un proyecto — estoy disponible para escucharte.
          </p>

          {/* Primary CTA */}
          <div className="mt-10">
            <a
              href={ECOSYSTEM.author.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition-all hover:scale-105"
            >
              <ChatBubbleLeftRightIcon className="size-6" />
              Envíame un mensaje
            </a>
          </div>

          {/* Contact options */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-2xl bg-gray-800/30 p-6 ring-1 ring-white/5 transition-all hover:bg-gray-800/50 hover:ring-white/10"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-xl bg-linear-to-br ${option.color}`}
                >
                  <option.icon className="size-6 text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{option.title}</h3>
                <p className="mt-1 text-sm text-gray-400 text-center">
                  {option.description}
                </p>
                <span className="mt-3 text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
                  {option.label}
                </span>
              </a>
            ))}
          </div>

          {/* Availability indicator */}
          <div className="mt-12 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Actualmente disponible para nuevos proyectos
          </div>
        </div>
      </div>
    </div>
  );
}
