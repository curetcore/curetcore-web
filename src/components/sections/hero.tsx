"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { ECOSYSTEM, NAVIGATION } from "@/config/ecosystem";
import { logos } from "@/components/ui/logos";

const partnerLogos = [
  { name: "Shopify", Logo: logos.Shopify },
  { name: "Apple", Logo: logos.Apple },
  { name: "AWS", Logo: logos.AWS },
  { name: "Stripe", Logo: logos.Stripe },
];

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-[500px] rounded-full bg-indigo-500/20 blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 size-[400px] rounded-full bg-purple-500/20 blur-[128px]" />
      </div>

      {/* Header */}
      <header className="relative z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="size-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-white">
                {ECOSYSTEM.techDivision.name}
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {NAVIGATION.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a
              href={ECOSYSTEM.author.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contacto
            </a>
            <a
              href={ECOSYSTEM.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <div className="size-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold text-white">{ECOSYSTEM.techDivision.name}</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {NAVIGATION.main.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero content */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-20 sm:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Left: Photo + Quick stats */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Photo */}
              <div className="relative group">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
                <img
                  src={ECOSYSTEM.author.image}
                  alt={ECOSYSTEM.author.name}
                  className="relative size-40 sm:size-48 rounded-full object-cover ring-4 ring-white/20"
                />
                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 size-6 rounded-full bg-emerald-500 ring-4 ring-gray-900 flex items-center justify-center">
                  <span className="size-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              {/* Quick stats under photo */}
              <div className="mt-8 flex items-center gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-xs text-gray-500">Años</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <div className="text-2xl font-bold text-white">100K+</div>
                  <div className="text-xs text-gray-500">Clientes</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-white">4.8</span>
                    <StarIcon className="size-5 text-amber-400" />
                  </div>
                  <div className="text-xs text-gray-500">Google</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="mt-12 lg:mt-0 flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6">
                <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Disponible para proyectos
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {ECOSYSTEM.author.name}
              </h1>

              <p className="mt-2 text-xl text-indigo-400 font-medium">
                {ECOSYSTEM.author.title}
              </p>

              <p className="mt-1 text-lg text-gray-400">
                {ECOSYSTEM.author.subtitle}
              </p>

              <p className="mt-6 text-lg text-gray-400 max-w-xl">
                Construyo productos digitales que resuelven problemas reales.
                Desde traducción de libros con IA hasta sistemas de facturación fiscal.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#productos"
                  className="w-full sm:w-auto rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition-all hover:scale-105"
                >
                  Ver productos
                </a>
                <a
                  href={ECOSYSTEM.author.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-xl bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-all"
                >
                  Hablemos
                </a>
              </div>

              {/* Partner logos */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                  Trabajo con
                </p>
                <div className="flex items-center gap-8 justify-center lg:justify-start">
                  {partnerLogos.map(({ name, Logo }) => (
                    <div key={name} className="text-gray-500 hover:text-gray-300 transition-colors">
                      <Logo className="h-6 w-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
