"use client";

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

export function Stack() {
  // Duplicate the stack for seamless infinite scroll
  const items = [...ECOSYSTEM.stack, ...ECOSYSTEM.stack];

  return (
    <div id="stack" className="relative bg-gray-900 py-16 sm:py-20 overflow-hidden">
      {/* Header - minimal */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Powered by
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-900 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {items.map((item, index) => {
            const LogoComponent = logoMap[item.name];

            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-3 mx-8 shrink-0"
              >
                <div className="flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  {LogoComponent ? (
                    <LogoComponent className="h-8 w-auto" />
                  ) : (
                    <span className="text-xl font-bold">{item.name}</span>
                  )}
                </div>
                <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
