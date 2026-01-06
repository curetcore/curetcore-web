import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas frecuentes - Curetcore",
  description:
    "Respuestas a las preguntas mas comunes sobre Curetcore Connector, NCF Manager y LectorAI.",
  alternates: {
    canonical: "https://curetcore.com/faq",
  },
};

const faqs = [
  {
    category: "Curetcore Connector",
    questions: [
      {
        q: "Que es Curetcore Connector?",
        a: "Es una app gratuita de Shopify que conecta tu tienda con los servicios de Curetcore como NCF Manager (comprobantes fiscales) y futuros productos. Funciona como un hub central para todas las integraciones.",
      },
      {
        q: "Es gratis usar Curetcore Connector?",
        a: "Si, la app de Connector es completamente gratis. La monetizacion ocurre en los servicios individuales como NCF Manager, que tiene un plan gratuito y planes de pago para mayor volumen.",
      },
      {
        q: "Que permisos necesita la app?",
        a: "La app solicita acceso a ordenes, clientes y productos. Esto es necesario para generar comprobantes fiscales con la informacion correcta del cliente y sincronizar datos con tu sistema.",
      },
      {
        q: "Puedo desinstalar la app?",
        a: "Si, puedes desinstalar en cualquier momento desde tu admin de Shopify. Eliminaremos todos tus datos dentro de 48 horas. Los comprobantes fiscales ya generados se mantienen por requisitos legales.",
      },
      {
        q: "La app afecta el rendimiento de mi tienda?",
        a: "No. La app funciona en segundo plano recibiendo webhooks de Shopify. No afecta la velocidad de carga de tu tienda ni la experiencia de compra de tus clientes.",
      },
    ],
  },
  {
    category: "NCF Manager",
    questions: [
      {
        q: "Que es un NCF?",
        a: "NCF (Numero de Comprobante Fiscal) es el sistema de facturacion electronica de la DGII en Republica Dominicana. Toda empresa que venda productos o servicios debe emitir NCFs.",
      },
      {
        q: "Necesito tener un RNC para usar NCF Manager?",
        a: "Si, necesitas un RNC (Registro Nacional del Contribuyente) activo y autorizado por la DGII para emitir comprobantes fiscales. NCF Manager te ayuda a gestionar los NCFs, pero no puede crearlos sin autorizacion de la DGII.",
      },
      {
        q: "Que tipos de comprobantes soporta?",
        a: "Soportamos todos los tipos principales: Consumidor Final (02), Credito Fiscal (01), Gubernamental (15), Regimenes Especiales (14) y Notas de Credito (04).",
      },
      {
        q: "Se conecta directamente con la DGII?",
        a: "NCF Manager genera los comprobantes en formato valido y puede enviarlos a la DGII segun tu configuracion. Tambien puedes exportarlos para envio manual si lo prefieres.",
      },
      {
        q: "Cuanto cuesta NCF Manager?",
        a: "El plan gratuito incluye 10 NCFs por mes. Los planes de pago comienzan desde $9.99/mes para mayor volumen. Visita ncf.curetcore.com para ver todos los planes.",
      },
    ],
  },
  {
    category: "LectorAI",
    questions: [
      {
        q: "Que idiomas soporta LectorAI?",
        a: "Actualmente traducimos de ingles a espanol con alta calidad. Estamos trabajando en agregar mas pares de idiomas como frances, portugues y aleman.",
      },
      {
        q: "Se pierde el formato del libro?",
        a: "No. LectorAI mantiene la estructura del libro: capitulos, parrafos, dialogos, citas y formato especial. El resultado es un libro listo para publicar.",
      },
      {
        q: "Cuanto tiempo toma traducir un libro?",
        a: "Depende del largo. Un libro de 200 paginas tipicamente toma 2-4 horas. Recibes notificaciones por email cuando cada capitulo esta listo.",
      },
      {
        q: "Puedo revisar antes de publicar?",
        a: "Si, puedes revisar y editar cada capitulo traducido. El sistema aprende de tus correcciones para mejorar las traducciones futuras.",
      },
    ],
  },
  {
    category: "Soporte y cuenta",
    questions: [
      {
        q: "Como contacto a soporte?",
        a: "Puedes escribirnos a soporte@curetcore.com o usar el chat dentro de cada aplicacion. Respondemos en menos de 24 horas habiles.",
      },
      {
        q: "Puedo usar una cuenta para multiples tiendas?",
        a: "Si, puedes conectar multiples tiendas Shopify a tu cuenta de Curetcore. Cada tienda tendra su propia configuracion y limites segun tu plan.",
      },
      {
        q: "Como elimino mi cuenta?",
        a: "Contactanos a privacidad@curetcore.com con tu solicitud. Procesaremos la eliminacion dentro de 10 dias habiles, excepto datos que debemos retener por ley.",
      },
      {
        q: "Ofrecen capacitacion o onboarding?",
        a: "Si, para clientes con planes de pago ofrecemos sesiones de onboarding gratuitas por videollamada. Tambien tenemos documentacion y videos tutoriales.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            &larr; Volver a Curetcore
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Preguntas frecuentes
          </h1>
          <p className="text-lg text-gray-400">
            Respuestas a las preguntas mas comunes sobre nuestros productos.
          </p>
        </header>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category) => (
            <section key={category.category}>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
                {category.category}
              </h2>
              <dl className="space-y-6">
                {category.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 rounded-lg p-6 border border-white/5 hover:border-white/10 transition"
                  >
                    <dt className="text-lg font-semibold text-white mb-3">
                      {faq.q}
                    </dt>
                    <dd className="text-gray-300 leading-relaxed">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-500/10 rounded-2xl p-8 border border-indigo-500/20">
          <h3 className="text-xl font-bold text-white mb-2">
            No encontraste tu respuesta?
          </h3>
          <p className="text-gray-300 mb-6">
            Nuestro equipo esta listo para ayudarte con cualquier pregunta.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:soporte@curetcore.com"
              className="inline-flex items-center gap-2 bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-400 transition"
            >
              Contactar soporte
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white/20 transition"
            >
              Ver documentacion
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
