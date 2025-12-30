import { STATS } from "@/config/ecosystem";
import {
  UserGroupIcon,
  ShoppingCartIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  users: UserGroupIcon,
  shopping: ShoppingCartIcon,
  calendar: CalendarDaysIcon,
  team: UsersIcon,
};

const gradientMap = {
  users: "from-indigo-500 to-purple-500",
  shopping: "from-emerald-500 to-teal-500",
  calendar: "from-amber-500 to-orange-500",
  team: "from-pink-500 to-rose-500",
};

export function Stats() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 size-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 size-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Números que hablan por sí solos
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Más de 8 años construyendo soluciones que transforman negocios en República Dominicana.
            </p>
          </div>

          {/* Stats grid */}
          <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap];
              const gradient = gradientMap[stat.icon as keyof typeof gradientMap];

              return (
                <div
                  key={stat.id}
                  className="group relative flex flex-col items-center rounded-2xl bg-gray-800/50 p-8 ring-1 ring-white/10 transition-all duration-300 hover:bg-gray-800/70 hover:ring-white/20 hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className={`flex size-14 items-center justify-center rounded-xl bg-linear-to-br ${gradient} shadow-lg transition-transform group-hover:scale-110`}>
                    <Icon className="size-7 text-white" />
                  </div>

                  {/* Value */}
                  <dd className="mt-6 text-4xl font-bold tracking-tight text-white">
                    {stat.value}
                  </dd>

                  {/* Label */}
                  <dt className="mt-2 text-sm font-medium text-white">
                    {stat.name}
                  </dt>

                  {/* Description */}
                  <p className="mt-1 text-xs text-gray-500">
                    {stat.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 size-20 overflow-hidden rounded-tr-2xl">
                    <div className={`absolute -top-10 -right-10 size-20 bg-linear-to-br ${gradient} opacity-10 blur-xl transition-opacity group-hover:opacity-20`} />
                  </div>
                </div>
              );
            })}
          </dl>

          {/* Bottom note */}
          <p className="mt-12 text-center text-sm text-gray-500">
            * Datos actualizados a diciembre 2024. Cifras reales del ecosistema CURET.
          </p>
        </div>
      </div>
    </div>
  );
}
