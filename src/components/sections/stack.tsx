import { ECOSYSTEM } from "@/config/ecosystem";
import { logos } from "@/components/ui/logos";

const logoMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Shopify: logos.Shopify,
  Apple: logos.Apple,
  Claude: logos.Claude,
  GitHub: logos.GitHub,
  AWS: logos.AWS,
  Easypanel: logos.Easypanel,
  Vercel: logos.Vercel,
  Stripe: logos.Stripe,
};

const categoryColors: Record<string, string> = {
  ecommerce: "text-green-400",
  mobile: "text-gray-300",
  ai: "text-orange-400",
  dev: "text-white",
  cloud: "text-amber-400",
  hosting: "text-indigo-400",
  payments: "text-violet-400",
};

export function Stack() {
  return (
    <div id="stack" className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-gray-900/95 to-gray-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-400">
            Stack & Partners
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tecnologías que impulsan la innovación
          </p>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Trabajo con las mejores herramientas y plataformas del mercado para entregar productos de clase mundial.
          </p>
        </div>

        {/* Logos grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
          {ECOSYSTEM.stack.map((item) => {
            const LogoComponent = logoMap[item.name];
            const colorClass = categoryColors[item.category] || "text-gray-400";

            return (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center rounded-2xl bg-gray-800/30 p-6 ring-1 ring-white/5 transition-all duration-300 hover:bg-gray-800/60 hover:ring-white/10 hover:scale-105"
              >
                {/* Logo */}
                <div className={`flex size-16 items-center justify-center ${colorClass} transition-transform group-hover:scale-110`}>
                  {LogoComponent ? (
                    <LogoComponent className="size-12" />
                  ) : (
                    <span className="text-3xl font-bold">{item.name.charAt(0)}</span>
                  )}
                </div>

                {/* Name and type */}
                <span className="mt-4 text-sm font-medium text-white">
                  {item.name}
                </span>
                {item.type && (
                  <span className="mt-1 text-xs text-indigo-400 font-medium">
                    {item.type}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-400" />
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-400" />
            <span>99.9% uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-400" />
            <span>SOC 2 compliant partners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
