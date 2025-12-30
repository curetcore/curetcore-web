import { ECOSYSTEM } from "@/config/ecosystem";
import { StarIcon } from "@heroicons/react/24/solid";
import { logos } from "@/components/ui/logos";

export function SocialProof() {
  const { googleRating, googleReviews } = ECOSYSTEM.matrix.stats;

  return (
    <div className="relative bg-gray-900 py-16 sm:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Google rating card */}
          <div className="inline-flex flex-col items-center rounded-2xl bg-gray-800/50 px-8 py-6 ring-1 ring-white/10">
            {/* Google logo */}
            <div className="flex items-center gap-3">
              <logos.Google className="size-8" />
              <span className="text-sm font-medium text-gray-400">Google Reviews</span>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-5xl font-bold text-white">{googleRating}</span>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`size-5 ${
                        i < Math.floor(googleRating)
                          ? "text-amber-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {googleReviews.toLocaleString()} reseñas
                </span>
              </div>
            </div>

            {/* Trust text */}
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Calificación de clientes reales de{" "}
              <a
                href={ECOSYSTEM.matrix.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                {ECOSYSTEM.matrix.trademark}
              </a>
            </p>
          </div>

          {/* Quote */}
          <blockquote className="mt-12">
            <p className="text-xl font-medium text-white sm:text-2xl italic">
              &ldquo;La mejor zapatería de República Dominicana. Calidad, servicio y atención excepcional.&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm text-gray-400">
                — Cliente verificado, Google Maps
              </p>
            </footer>
          </blockquote>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">{ECOSYSTEM.socialProof.totalUsers}</span>
              <span className="mt-1 text-sm text-gray-400">Usuarios activos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">{ECOSYSTEM.socialProof.uptime}</span>
              <span className="mt-1 text-sm text-gray-400">Uptime garantizado</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-emerald-400">24/7</span>
              <span className="mt-1 text-sm text-gray-400">Soporte disponible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
