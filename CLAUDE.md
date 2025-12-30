# Curetcore Web - CLAUDE.md

## Descripción
Landing page / portfolio de Ronaldo Paulino. Hub SEO central del ecosistema CURET.

## Stack
- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS v4.1
- **UI Components**: HeadlessUI, Heroicons
- **Hosting**: Easypanel → curetcore.com

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Metadata SEO + dark mode
│   ├── page.tsx            # Composición de secciones
│   └── globals.css         # Tailwind imports
├── components/
│   ├── sections/
│   │   ├── hero.tsx        # Hero con foto y nav responsive
│   │   ├── stats.tsx       # 4 métricas CURET
│   │   ├── timeline.tsx    # Historia 2017-2024
│   │   ├── products.tsx    # Cards de apps
│   │   └── stack.tsx       # Logo cloud partners
│   ├── layout/
│   │   └── footer.tsx      # 4-column + "Hecho por RP"
│   └── seo/
│       └── jsonld.tsx      # Person + Organizations schemas
└── config/
    └── ecosystem.ts        # Datos centralizados
```

## Configuración Central

Todos los datos están en `src/config/ecosystem.ts`:
- Stats CURET (100K+ clientes, 800K+ ventas, etc.)
- Información del autor
- Apps y productos
- Timeline
- Stack/partners
- Links de navegación

## SEO

### Metadata
- Title: "Curetcore - Ronaldo Paulino | Software Engineer & Entrepreneur"
- Open Graph configurado
- Twitter Card configurado

### JSON-LD Schemas
4 schemas interconectados:
1. **Person** (@id: curetcore.com/#ronaldo)
2. **Organization CURET** (@id: curetshop.com/#organization)
3. **Organization Curetcore** (@id: curetcore.com/#organization)
4. **WebSite** (@id: curetcore.com/#website)

## Assets Requeridos

| Archivo | Ubicación | Estado |
|---------|-----------|--------|
| ronaldo.jpg | `/public/ronaldo.jpg` | PENDIENTE |
| og-image.png | `/public/og-image.png` | PENDIENTE |
| logos SVG | `/public/logos/` | PENDIENTE |

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
```

## Deploy

Configurar en Easypanel:
- Domain: curetcore.com
- Build: `npm run build`
- Start: `npm run start`
- Puerto: 3000

## Componentes Usados (Tailwind Plus)

- Hero: Adaptado de `marketing/heroes/01-simple-centered`
- Stats: Adaptado de `marketing/stats/02-simple-grid`
- Timeline: Adaptado de `marketing/stats/05-timeline`
- Products: Feature grid custom
- Footer: Adaptado de `marketing/footers/4-column-with-company-mission`

## Branding

**Obligatorio**: Footer incluye "Hecho por Ronaldo Paulino" → Instagram

## Notas

- Dark mode por defecto (`className="dark"` en html)
- Font: Inter (Google Fonts)
- Colores principales: indigo-400/500, gray-900/400
