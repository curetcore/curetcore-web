import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/jsonld";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curetcore.com"),
  title: "Curetcore - Ronaldo Paulino | Software Engineer & Entrepreneur",
  description:
    "Divisi\u00f3n tecnol\u00f3gica de CURET. Productos digitales: LectorAI, NCF Manager, Shopify Apps. Por Ronaldo Paulino, CEO & Fundador de CURET.",
  keywords: [
    "Ronaldo Paulino",
    "Curetcore",
    "CURET",
    "LectorAI",
    "NCF Manager",
    "Software Engineer",
    "Rep\u00fablica Dominicana",
    "Shopify Apps",
  ],
  authors: [{ name: "Ronaldo Paulino", url: "https://instagram.com/_ronaldopaulino/" }],
  creator: "Ronaldo Paulino",
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://curetcore.com",
    siteName: "Curetcore",
    title: "Curetcore - Ronaldo Paulino | Software Engineer",
    description:
      "Divisi\u00f3n tecnol\u00f3gica de CURET. Productos digitales que resuelven problemas reales.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Curetcore - Ronaldo Paulino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curetcore - Ronaldo Paulino",
    description: "Divisi\u00f3n tecnol\u00f3gica de CURET. Productos digitales.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://curetcore.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${bricolage.variable} font-sans antialiased bg-gray-900 text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
