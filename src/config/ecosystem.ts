// Configuración central del ecosistema CURET
// Fuente: ~/.claude/skills/seo/ECOSYSTEM.md

export const ECOSYSTEM = {
  matrix: {
    name: "CURET",
    trademark: "CURET®",
    url: "https://curetshop.com",
    tagline: "La Zapatería Dominicana",
    stats: {
      customers: "100,000+",
      sales: "800,000+",
      employees: "20+",
      stores: 3,
      warehouses: 4,
      yearsInBusiness: 8,
      googleRating: 4.8,
      googleReviews: 1121,
    },
  },
  techDivision: {
    name: "Curetcore",
    url: "https://curetcore.com",
    description: "División tecnológica de CURET",
  },
  author: {
    name: "Ronaldo Paulino",
    title: "Software Engineer & Entrepreneur",
    subtitle: "CEO & Fundador de CURET",
    bio: "Desde 2017 construyendo soluciones que transforman negocios. Fundé CURET como una zapatería local y la convertí en una empresa con más de 100,000 clientes. Ahora lidero la división tecnológica creando productos digitales que resuelven problemas reales.",
    image: "/ronaldo.jpg",
    instagram: "https://instagram.com/_ronaldopaulino/",
    github: "https://github.com/curetcore",
    linkedin: "https://linkedin.com/in/ronaldopaulino",
    email: "ronaldo@curetcore.com",
  },
  apps: [
    {
      name: "LectorAI",
      tagline: "Traductor de Libros con IA",
      url: "https://lectorai.curetcore.com",
      description: "Traduce libros completos manteniendo el estilo y contexto del autor original. Perfecto para editoriales y autores independientes.",
      icon: "BookOpenIcon",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
      platforms: ["web", "apple"] as const,
      status: "live" as const,
      users: "500+",
      rating: 4.9,
    },
    {
      name: "NCF Manager",
      tagline: "Facturación Fiscal Simplificada",
      url: "https://ncf.curetcore.com",
      description: "Gestiona comprobantes fiscales NCF de la DGII sin complicaciones. Conecta múltiples RNCs y automatiza tu facturación.",
      icon: "DocumentTextIcon",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      platforms: ["web"] as const,
      status: "live" as const,
      users: "200+",
      rating: 4.8,
    },
    {
      name: "Shopify Apps",
      tagline: "E-commerce Potenciado",
      url: "https://shopify.curetcore.com",
      description: "Suite de apps y temas premium para Shopify. Mejora conversiones, automatiza procesos y escala tu tienda.",
      icon: "ShoppingBagIcon",
      color: "violet",
      gradient: "from-violet-500 to-fuchsia-600",
      platforms: ["shopify"] as const,
      status: "live" as const,
      users: "50+",
      rating: 5.0,
    },
  ],
  stack: [
    { name: "Shopify", type: "Partner", category: "ecommerce" },
    { name: "Apple", type: "Developer", category: "mobile" },
    { name: "Claude", type: "Code", category: "ai" },
    { name: "GitHub", type: "", category: "dev" },
    { name: "AWS", type: "", category: "cloud" },
    { name: "Easypanel", type: "", category: "hosting" },
    { name: "Vercel", type: "", category: "hosting" },
    { name: "Stripe", type: "", category: "payments" },
  ],
  timeline: [
    {
      name: "Fundación de CURET",
      description:
        "Fundé CURET con una visión: ofrecer calzado de calidad hecho por manos dominicanas.",
      date: "2017",
      dateTime: "2017",
      milestone: "start",
    },
    {
      name: "100,000 Clientes",
      description:
        "100,000 clientes después, lancé la división tecnológica para resolver problemas reales de negocios.",
      date: "2020",
      dateTime: "2020",
      milestone: "growth",
    },
    {
      name: "LectorAI",
      description:
        "Democratizando la traducción de libros con inteligencia artificial.",
      date: "2023",
      dateTime: "2023",
      milestone: "product",
    },
    {
      name: "NCF Manager",
      description:
        "Simplificando la facturación fiscal en República Dominicana.",
      date: "2024",
      dateTime: "2024",
      milestone: "product",
    },
  ],
  location: {
    city: "Santo Domingo",
    country: "República Dominicana",
    countryCode: "DO",
  },
  socialProof: {
    googleRating: 4.8,
    googleReviews: 1121,
    totalUsers: "750+",
    uptime: "99.9%",
  },
} as const;

// Stats para la sección de métricas
export const STATS = [
  {
    id: 1,
    name: "Clientes CURET",
    value: "100K+",
    icon: "users",
    description: "Familias dominicanas",
  },
  {
    id: 2,
    name: "Ventas realizadas",
    value: "800K+",
    icon: "shopping",
    description: "Transacciones exitosas",
  },
  {
    id: 3,
    name: "Años de experiencia",
    value: "8+",
    icon: "calendar",
    description: "Construyendo soluciones",
  },
  {
    id: 4,
    name: "Profesionales",
    value: "20+",
    icon: "team",
    description: "Talento dominicano",
  },
] as const;

// Navegación principal
export const NAVIGATION = {
  main: [
    { name: "Productos", href: "#productos" },
    { name: "Historia", href: "#historia" },
    { name: "Stack", href: "#stack" },
  ],
  products: ECOSYSTEM.apps.map((app) => ({
    name: app.name,
    href: app.url,
  })),
  social: [
    {
      name: "GitHub",
      href: ECOSYSTEM.author.github,
    },
    {
      name: "Instagram",
      href: ECOSYSTEM.author.instagram,
    },
    {
      name: "LinkedIn",
      href: ECOSYSTEM.author.linkedin,
    },
  ],
} as const;
