# Estado Actual - Curetcore Web

## Última Sesión
- **Fecha**: 2025-12-30
- **Resumen**: Deploy exitoso a producción en Easypanel. Landing page LIVE en https://curetcore.com

## Deploy Completado
- **Proyecto**: apps/curetcore-web
- **URL**: https://curetcore.com
- **Build**: Dockerfile (Next.js standalone)
- **Puerto interno**: 80 (overriden por Easypanel)
- **Estado**: ✅ Running

## Archivos Clave
- `src/app/page.tsx` - Nueva estructura de 6 secciones
- `src/components/sections/hero.tsx` - Layout 2 columnas, stats integrados, partner logos
- `src/components/sections/featured-product.tsx` - Spotlight de LectorAI
- `src/components/sections/products.tsx` - NCF Manager + Shopify Apps
- `src/components/sections/cta.tsx` - CTA final
- `src/config/ecosystem.ts` - Datos centralizados
- `Dockerfile` - Multi-stage build para standalone
- `next.config.ts` - output: "standalone"

## Estado Actual
- ✅ Deploy en Easypanel (apps/curetcore-web)
- ✅ HTTPS funcionando via Cloudflare
- ✅ Nueva estructura narrativa implementada
- ✅ Logos SVG reales (Shopify, Apple, AWS, Stripe)
- ✅ Featured Product con mockup interactivo
- ⚠️ Foto `/public/ronaldo.jpg` pendiente (usando placeholder)
- ⚠️ OG Image `/public/og-image.png` pendiente

## Arquitectura de Secciones

```
1. Hero        → Quién soy + credibilidad
2. Featured    → LectorAI (producto estrella)
3. Products    → NCF Manager + Shopify Apps
4. Timeline    → Historia 2017-2024
5. Stack       → Tecnologías/Partners
6. CTA         → Llamada a la acción final
```

## Configuración de Dominio
- Host: curetcore.com
- Destino: http://apps_curetcore-web:80/
- SSL: Via Cloudflare (proxy enabled)

## Notas Técnicas
- Next.js corre en puerto 80 dentro del contenedor (Easypanel override)
- La configuración de dominio debe apuntar a :80, no :3000
- El servicio viejo `curetcore-web_curetcore-web` fue eliminado

## Próximos Pasos
1. Agregar foto real de Ronaldo (`/public/ronaldo.jpg`)
2. Crear OG Image para compartir en redes
3. Verificar SEO y JSON-LD
4. Limpiar archivos no usados (stats.tsx, social-proof.tsx)
