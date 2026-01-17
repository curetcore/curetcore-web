import { ECOSYSTEM } from "@/config/ecosystem";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { SVGDecoration } from "@/components/ui/svg-decoration";
import { SVGAnnotation } from "@/components/ui/svg-annotation";

const contactOptions = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "DM me",
    description: "La forma más rápida de contactarme",
    href: ECOSYSTEM.author.instagram,
    label: "@_ronaldopaulino",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: CodeBracketIcon,
    title: "Fork my stuff",
    description: "Todo mi código es open source",
    href: ECOSYSTEM.author.github,
    label: "GitHub",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: EnvelopeIcon,
    title: "Work together",
    description: "Proyectos serios y partnerships",
    href: `mailto:${ECOSYSTEM.author.email}`,
    label: ECOSYSTEM.author.email,
    color: "from-emerald-500 to-green-500",
  },
];

export function CTA() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Main heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let's build something{" "}
            <span className="relative inline-block bg-amber-100 text-zinc-900 px-3 py-1 rounded-lg">
              cool
              <SVGDecoration
                variant="swirl"
                animated
                className="absolute -bottom-3 left-0 h-3 w-full fill-amber-400"
              />
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
            ¿Tienes una{" "}
            <span className="relative inline-block">
              idea
              <SVGDecoration
                variant="wave"
                animated
                delay={200}
                className="absolute -bottom-1 left-0 h-1.5 w-full fill-emerald-500/40"
              />
            </span>
            ? ¿Necesitas un dev? ¿Quieres colaborar?
            <br />
            Solo escríbeme.
          </p>

          {/* Primary CTA */}
          <div className="mt-10 relative inline-block">
            <SVGAnnotation
              text="La gente está obsesionada"
              direction="top-right"
              color="text-amber-400"
              size="sm"
              animated
              className="absolute -top-12 -right-8 hidden sm:block"
            />
            <a
              href={ECOSYSTEM.author.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all hover:scale-105"
            >
              <ChatBubbleLeftRightIcon className="size-6" />
              Hit me up
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
                <span className="mt-3 text-sm font-medium text-emerald-400 group-hover:text-emerald-300">
                  {option.label}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
