"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { ECOSYSTEM, NAVIGATION } from "@/config/ecosystem";
import { logos } from "@/components/ui/logos";
import { SVGDecoration } from "@/components/ui/svg-decoration";
import { SVGAnnotation } from "@/components/ui/svg-annotation";

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
      {/* Background effects - optimizado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 size-[600px] rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="size-8 rounded-lg bg-emerald-500 flex items-center justify-center">
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
                <div className="size-8 rounded-lg bg-emerald-500 flex items-center justify-center">
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
        <div className="mx-auto max-w-3xl py-20 sm:py-32 text-center">
          {/* Photo */}
          <div className="relative group inline-block mb-8">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-500 via-green-500 to-amber-500 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
            <Image
              src={ECOSYSTEM.author.image}
              alt={ECOSYSTEM.author.name}
              width={160}
              height={160}
              priority
              className="relative size-32 sm:size-40 rounded-full object-cover ring-4 ring-white/20"
            />
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 size-5 rounded-full bg-emerald-500 ring-4 ring-gray-900 flex items-center justify-center">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div>
              <div className="relative inline-block text-2xl font-extrabold text-white">
                8+
                <SVGDecoration
                  variant="thick"
                  animated
                  delay={100}
                  className="absolute -bottom-1 left-0 h-1.5 w-full fill-emerald-500/60"
                />
              </div>
              <div className="text-xs text-gray-400 font-medium">Años</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="relative inline-block text-2xl font-extrabold text-white">
                100K+
                <SVGDecoration
                  variant="thick"
                  animated
                  delay={200}
                  className="absolute -bottom-1 left-0 h-1.5 w-full fill-emerald-500/60"
                />
              </div>
              <div className="text-xs text-gray-400 font-medium">Clientes</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="flex items-center justify-center gap-1">
                <span className="relative inline-block text-2xl font-extrabold text-white">
                  4.8
                  <SVGDecoration
                    variant="thick"
                    animated
                    delay={300}
                    className="absolute -bottom-1 left-0 h-1.5 w-full fill-amber-400/60"
                  />
                </span>
                <StarIcon className="size-5 text-amber-400" />
              </div>
              <div className="text-xs text-gray-400 font-medium">Google</div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Ronaldo{" "}
            <span className="relative inline-block bg-amber-100 text-zinc-900 px-3 py-1 rounded-lg">
              Paulino
              <SVGDecoration
                variant="swirl"
                animated
                className="absolute -bottom-3 left-0 h-3 w-full fill-amber-400"
              />
            </span>
          </h1>

          {/* Titles */}
          <p className="mt-4 text-xl text-emerald-400 font-semibold">
            <span className="relative inline-block">
              Software Engineer
              <SVGDecoration
                variant="wave"
                animated
                delay={300}
                className="absolute -bottom-1 left-0 h-2 w-full fill-emerald-500/50"
              />
            </span>
            {" & Entrepreneur"}
          </p>
          <p className="mt-1 text-lg text-gray-400">
            Haciendo cosas cool en República Dominicana
          </p>

          {/* Description */}
          <p className="mt-6 text-lg/7 text-gray-300 max-w-xl mx-auto text-pretty">
            Creo productos que la gente realmente usa. IA, e-commerce,
            fintech — si tiene código, probablemente lo puedo construir.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative">
              <SVGAnnotation
                text="Mira lo que he creado"
                direction="top-left"
                color="text-amber-400"
                size="sm"
                animated
                className="absolute -top-10 -left-4 hidden sm:block"
              />
              <a
                href="#productos"
                className="w-full sm:w-auto rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-all duration-200"
              >
                Ver productos
              </a>
            </div>
            <a
              href={ECOSYSTEM.author.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl bg-white/5 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10 hover:ring-white/25 transition-all duration-200"
            >
              Hablemos
            </a>
          </div>

          {/* Partner logos */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
              Building with
            </p>
            <div className="flex items-center justify-center gap-8">
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
  );
}
