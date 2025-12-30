export async function GET() {
  const content = `# Curetcore - Ronaldo Paulino

## About
Ronaldo Paulino is a Software Engineer and Entrepreneur from the Dominican Republic.
He builds digital products that solve real problems: AI-powered book translation,
e-commerce platforms, and fiscal invoicing systems.

## Products

### CURET (curetshop.com)
- Dominican leather shoe e-commerce
- 100K+ customers, 4.8 Google rating
- Handmade Oxford, Loafers, Derby shoes
- Ships nationwide in Dominican Republic
- Founded in 2017

### LectorAI (lectorai.curetcore.com)
- AI-powered book translation tool
- Translates entire books in minutes
- 50+ languages supported
- Preserves original formatting and style
- Available on Web and App Store

### NCF Manager (ncf.curetcore.com)
- Fiscal invoicing system for Dominican Republic
- Automatic NCF generation
- DGII validation
- WhatsApp invoice delivery
- 500+ businesses, 1M+ invoices generated

## Contact
- Instagram: @_ronaldopaulino
- GitHub: github.com/curetcore
- Email: ronaldo@curetcore.com

## Tech Stack
Shopify, Apple, Claude AI, GitHub, AWS, Easypanel, Vercel, Stripe

## Location
Dominican Republic
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
