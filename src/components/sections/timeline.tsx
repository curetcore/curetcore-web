import { ECOSYSTEM } from "@/config/ecosystem";
import {
  RocketLaunchIcon,
  TrophyIcon,
  SparklesIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const milestoneIcons = {
  start: RocketLaunchIcon,
  growth: TrophyIcon,
  product: SparklesIcon,
};

const milestoneColors = {
  start: "from-amber-500 to-orange-500",
  growth: "from-emerald-500 to-teal-500",
  product: "from-indigo-500 to-purple-500",
};

export function Timeline() {
  return (
    <div id="historia" className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 ring-1 ring-inset ring-amber-500/20 mb-6">
            <DocumentCheckIcon className="size-4" />
            Trayectoria
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            De una zapatería a productos digitales
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Una historia de perseverancia, innovación y compromiso con la excelencia dominicana.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500/0 via-indigo-500/50 to-purple-500/0 hidden lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {ECOSYSTEM.timeline.map((item, index) => {
              const Icon = milestoneIcons[item.milestone as keyof typeof milestoneIcons] || SparklesIcon;
              const gradient = milestoneColors[item.milestone as keyof typeof milestoneColors] || "from-indigo-500 to-purple-500";

              return (
                <div
                  key={item.name}
                  className="group relative flex flex-col items-center lg:items-start"
                >
                  {/* Year badge with icon */}
                  <div className="relative flex flex-col items-center">
                    <div className={`flex size-16 items-center justify-center rounded-2xl bg-linear-to-br ${gradient} shadow-lg ring-4 ring-gray-900 transition-transform group-hover:scale-110`}>
                      <Icon className="size-8 text-white" />
                    </div>
                    <time
                      dateTime={item.dateTime}
                      className="mt-4 text-2xl font-bold text-white"
                    >
                      {item.date}
                    </time>
                  </div>

                  {/* Content card */}
                  <div className="mt-6 text-center lg:text-left">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Index indicator */}
                  <div className="absolute -top-2 -right-2 lg:top-0 lg:right-auto lg:left-12 size-6 rounded-full bg-gray-800 ring-2 ring-gray-700 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-400">{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-800/50 px-4 py-2 text-sm text-gray-400 ring-1 ring-white/10">
            <span className="size-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>2025 → Expansión en progreso...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
