import { ECOSYSTEM } from "@/config/ecosystem";

// Person Schema - Ronaldo Paulino
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://curetcore.com/#ronaldo",
  name: ECOSYSTEM.author.name,
  url: ECOSYSTEM.techDivision.url,
  image: `${ECOSYSTEM.techDivision.url}${ECOSYSTEM.author.image}`,
  sameAs: [
    "https://ronaldopaulino.com",
    ECOSYSTEM.author.instagram,
    ECOSYSTEM.author.github,
    ECOSYSTEM.author.linkedin,
  ],
  jobTitle: "CEO & Founder",
  worksFor: {
    "@id": "https://curetshop.com/#organization",
  },
  founder: [
    { "@id": "https://curetshop.com/#organization" },
    { "@id": "https://curetcore.com/#organization" },
  ],
  knowsAbout: [
    "Software Engineering",
    "E-commerce",
    "Retail Operations",
    "Business Management",
    "Artificial Intelligence",
  ],
};

// Organization Schema - CURET (Matriz)
const matrixOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://curetshop.com/#organization",
  name: "CURET",
  alternateName: ECOSYSTEM.matrix.tagline,
  url: ECOSYSTEM.matrix.url,
  foundingDate: "2017",
  founder: {
    "@id": "https://curetcore.com/#ronaldo",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 20,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: ECOSYSTEM.matrix.stats.googleRating.toString(),
    reviewCount: ECOSYSTEM.matrix.stats.googleReviews.toString(),
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: ECOSYSTEM.location.city,
    addressCountry: ECOSYSTEM.location.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: "Dominican Republic",
  },
  subOrganization: {
    "@id": "https://curetcore.com/#organization",
  },
  slogan: `${ECOSYSTEM.matrix.tagline} - Calidad hecha por manos dominicanas`,
};

// Organization Schema - Curetcore (Divisi\u00f3n Tech)
const techOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://curetcore.com/#organization",
  name: ECOSYSTEM.techDivision.name,
  url: ECOSYSTEM.techDivision.url,
  description: ECOSYSTEM.techDivision.description,
  founder: {
    "@id": "https://curetcore.com/#ronaldo",
  },
  parentOrganization: {
    "@id": "https://curetshop.com/#organization",
  },
  sameAs: [ECOSYSTEM.author.github],
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://curetcore.com/#website",
  url: ECOSYSTEM.techDivision.url,
  name: ECOSYSTEM.techDivision.name,
  description: ECOSYSTEM.techDivision.description,
  publisher: {
    "@id": "https://curetcore.com/#organization",
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(matrixOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
