import { Hero } from "@/components/sections/hero";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { Products } from "@/components/sections/products";
import { Timeline } from "@/components/sections/timeline";
import { Stack } from "@/components/sections/stack";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main>
      {/* 1. Who I am + credibility */}
      <Hero />

      {/* 2. Flagship product spotlight */}
      <FeaturedProduct />

      {/* 3. Other products (compact) */}
      <Products />

      {/* 4. My journey */}
      <Timeline />

      {/* 5. Technologies I work with */}
      <Stack />

      {/* 6. Final call to action */}
      <CTA />
    </main>
  );
}
