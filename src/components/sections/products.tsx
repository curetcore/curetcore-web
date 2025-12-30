import { ECOSYSTEM } from "@/config/ecosystem";
import {
  DocumentTextIcon,
  ArrowRightIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const iconMap = {
  DocumentTextIcon,
};

const platformLabels = {
  web: "Web App",
  apple: "App Store",
};

export function Products() {
  // Filter out LectorAI since it's featured
  const otherApps = ECOSYSTEM.apps.filter((app) => app.name !== "LectorAI");

  return (
    <div
      id="productos"
      className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-6">
            <RocketLaunchIcon className="size-4" />
            Más productos
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            También en{" "}
            <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-lg">
              producción
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Herramientas especializadas para negocios dominicanos.
          </p>
        </div>

        {/* Products - centered for single/few items */}
        <div className="grid gap-8 max-w-2xl mx-auto">
          {otherApps.map((app) => {
            const Icon = iconMap[app.icon as keyof typeof iconMap];
            return (
              <div
                key={app.name}
                className="group relative flex flex-col sm:flex-row gap-6 rounded-2xl bg-gray-800/30 p-6 ring-1 ring-white/5 transition-all duration-300 hover:bg-gray-800/50 hover:ring-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02]"
              >
                {/* Icon */}
                <div
                  className={`flex size-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${app.gradient} shadow-lg`}
                >
                  {Icon && <Icon className="size-8 text-white" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {app.name}
                      </h3>
                      <p className="text-sm text-gray-400">{app.tagline}</p>
                    </div>

                    {/* Status badge */}
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">{app.description}</p>

                  {/* Meta row */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <UserGroupIcon className="size-4" />
                      <span>{app.users}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="size-4 text-amber-400" />
                      <span className="text-white">{app.rating}</span>
                    </div>
                    {app.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1 text-gray-400"
                      >
                        <CheckBadgeIcon className="size-4 text-indigo-400" />
                        {platformLabels[platform]}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Ver {app.name}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
