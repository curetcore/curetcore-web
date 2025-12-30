# Estado Actual - Curetcore Web

## Última Sesión
- **Fecha**: 2025-12-30
- **Resumen**: Limpieza de código, optimización de performance, y configuración de Cloudflare para GEO (bots de IA permitidos)

## Deploy
- **URL**: https://curetcore.com
- **Estado**: ✅ Running
- **Build**: Dockerfile (Next.js standalone)

## Estado Actual
- ✅ Landing page LIVE en producción
- ✅ Foto de Ronaldo integrada
- ✅ OG Image generado (1200x630 - dimensiones estándar)
- ✅ SEO completo (robots.ts, sitemap.ts, llms.txt)
- ✅ GEO activo - bots de IA permitidos (GPTBot, ClaudeBot, PerplexityBot)
- ✅ Performance optimizada (will-change en animaciones)
- ✅ Código limpio (5 componentes sin usar eliminados)

## Arquitectura de Secciones (4 activas)

```
1. Hero     → Quién soy + credibilidad + stats
2. Projects → 3 productos (LectorAI, NCF Manager, Shopify)
3. Stack    → Marquee rotativo de tecnologías
4. CTA      → Llamada a la acción final
```

## Archivos Clave
- `src/app/page.tsx` - Composición de 4 secciones
- `src/components/sections/hero.tsx` - Hero con foto, nav, stats
- `src/components/sections/projects.tsx` - 3 productos con mockups
- `src/components/sections/stack.tsx` - Marquee rotativo de logos
- `src/components/sections/cta.tsx` - CTA final
- `src/config/ecosystem.ts` - Datos centralizados

## GEO (Generative Engine Optimization)
- `/robots.txt` - Permite GPTBot, ClaudeBot, PerplexityBot, Amazonbot
- `/sitemap.xml` - Sitemap dinámico
- `/llms.txt` - Info estructurada para AI crawlers
- **Cloudflare**: Managed robots.txt DESACTIVADO

## Configuración de Dominio
- Host: curetcore.com
- SSL: Via Cloudflare (proxy enabled)
- AI Bots: Permitidos (configurado en Cloudflare)

## Notas para Próxima Sesión
- Si se necesitan más secciones, los archivos eliminados están en git history
