import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main>
      {/* 1. Who I am + credibility */}
      <Hero />

      {/* 2. Featured projects */}
      <Projects />

      {/* 3. Technologies I work with */}
      <Stack />

      {/* 4. Final call to action */}
      <CTA />
    </main>
  );
}
