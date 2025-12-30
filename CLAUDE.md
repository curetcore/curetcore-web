# Curetcore Web - CLAUDE.md

## Descripcion
Landing page / portfolio de Ronaldo Paulino. Hub SEO central del ecosistema CURET.

## Stack
- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS v4.1
- **UI Components**: HeadlessUI, Heroicons
- **Font**: Bricolage Grotesque (Google Fonts)
- **Hosting**: Easypanel → curetcore.com

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Metadata SEO + font
│   ├── page.tsx            # Composicion de secciones
│   ├── globals.css         # Tailwind + animaciones
│   ├── robots.ts           # Robots.txt con AI bots
│   ├── sitemap.ts          # Sitemap dinamico
│   └── llms.txt/route.ts   # GEO para AI crawlers
├── components/
│   ├── sections/
│   │   ├── hero.tsx        # Hero con foto, nav, stats
│   │   ├── projects.tsx    # 3 productos con mockups
│   │   ├── stack.tsx       # Marquee rotativo de logos
│   │   └── cta.tsx         # Call to action final
│   ├── seo/
│   │   └── jsonld.tsx      # Person + Organizations schemas
│   └── ui/
│       └── logos.tsx       # Componentes SVG de logos
└── config/
    └── ecosystem.ts        # Datos centralizados
```

## Configuracion Central

Todos los datos estan en `src/config/ecosystem.ts`:
- Informacion del autor
- Apps y productos
- Stack/partners
- Links de navegacion

## SEO

### Metadata
- Title: "Curetcore - Ronaldo Paulino | Software Engineer & Entrepreneur"
- Open Graph configurado
- Twitter Card configurado

### GEO (Generative Engine Optimization)
- `/robots.txt` - Permite GPTBot, ClaudeBot, PerplexityBot
- `/sitemap.xml` - Sitemap dinamico
- `/llms.txt` - Informacion estructurada para AI crawlers

### JSON-LD Schemas
4 schemas interconectados:
1. **Person** (@id: curetcore.com/#ronaldo)
2. **Organization CURET** (@id: curetshop.com/#organization)
3. **Organization Curetcore** (@id: curetcore.com/#organization)
4. **WebSite** (@id: curetcore.com/#website)

### Security Headers (next.config.ts)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## Assets Requeridos

| Archivo | Ubicacion | Estado |
|---------|-----------|--------|
| ronaldo.jpg | `/public/ronaldo.jpg` | OK |
| og-image.png | `/public/og-image.png` | OK |

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build produccion
npm run start    # Servidor produccion
```

## Deploy

- **Autodeploy**: `git push` → Easypanel detecta y despliega
- Domain: curetcore.com
- Puerto: 3000

## Animaciones

### Marquee rotativo (stack.tsx)
```css
.animate-scroll {
  animation: scroll 30s linear infinite;
  will-change: transform;
}
```
- Pausa en hover
- Fade en los bordes con gradientes

## Estilo

- **Font**: Bricolage Grotesque (extrabold para titulos)
- **Highlights**: `bg-amber-100 text-zinc-900` para palabras clave
- **Dark mode**: Por defecto
- **Colores**: indigo-400/500, gray-900/400, amber-100

## Branding

**Obligatorio**: Footer incluye "Hecho por Ronaldo Paulino" → Instagram
