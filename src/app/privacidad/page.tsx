import { Metadata } from "next";
import Link from "next/link";
import { ECOSYSTEM } from "@/config/ecosystem";

export const metadata: Metadata = {
  title: "Politica de privacidad - Curetcore",
  description:
    "Politica de privacidad de Curetcore y sus productos digitales: LectorAI, NCF Manager, Curetcore Connector, Stock Value.",
  alternates: {
    canonical: "https://curetcore.com/privacidad",
  },
};

export default function PrivacidadPage() {
  const lastUpdated = "6 de enero de 2026";

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
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Politica de privacidad
          </h1>
          <p className="text-gray-400">
            Ultima actualizacion: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-invert prose-gray max-w-none">
          {/* Introduccion */}
          <section className="mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              En <strong>Curetcore</strong>, una division de{" "}
              <a
                href={ECOSYSTEM.matrix.url}
                className="text-indigo-400 hover:text-indigo-300"
              >
                {ECOSYSTEM.matrix.trademark}
              </a>
              , respetamos tu privacidad y nos comprometemos a proteger tus
              datos personales. Esta politica describe como recopilamos, usamos
              y protegemos tu informacion cuando utilizas nuestros productos y
              servicios.
            </p>
          </section>

          {/* Productos cubiertos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Productos cubiertos
            </h2>
            <p className="text-gray-300 mb-4">
              Esta politica aplica a todos los productos de Curetcore:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>LectorAI</strong> - Traduccion de libros con IA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>NCF Manager</strong> - Gestion de comprobantes fiscales
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Curetcore Connector</strong> - App de Shopify para
                  integracion de servicios
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Stock Value</strong> - App de Shopify para valoracion
                  de inventario
                </span>
              </li>
            </ul>
          </section>

          {/* Datos que recopilamos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Datos que recopilamos
            </h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              Informacion de cuenta
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Nombre y apellido</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Correo electronico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Numero de telefono (opcional)</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              Datos de Shopify (Curetcore Connector)
            </h3>
            <p className="text-gray-300 mb-4">
              Cuando instalas Curetcore Connector en tu tienda Shopify,
              accedemos a:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Ordenes</strong> - Para generar comprobantes fiscales
                  (NCF)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Clientes</strong> - Nombre, email, telefono y direccion
                  para facturacion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Productos</strong> - Para sincronizacion con sistemas
                  ERP
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              Datos de Shopify (Stock Value)
            </h3>
            <p className="text-gray-300 mb-4">
              Cuando instalas Stock Value en tu tienda Shopify, accedemos a:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Inventario</strong> - Cantidades de stock para calcular
                  valoracion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Productos</strong> - Precios y variantes para calcular
                  valor total
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Ubicaciones</strong> - Para valoracion por almacen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Ordenes</strong> - Para calcular costo promedio
                  ponderado (COGS)
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              Datos fiscales (NCF Manager)
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>RNC (Registro Nacional del Contribuyente)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Razon social de la empresa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Direccion fiscal</span>
              </li>
            </ul>
          </section>

          {/* Como usamos tus datos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Como usamos tus datos
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">1.</span>
                <span>
                  <strong>Funcionalidad del servicio</strong> - Generar
                  comprobantes fiscales, traducir libros, sincronizar datos con
                  tu ERP.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">2.</span>
                <span>
                  <strong>Administracion de tu cuenta</strong> - Autenticacion,
                  soporte al cliente, comunicaciones sobre el servicio.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">3.</span>
                <span>
                  <strong>Cumplimiento legal</strong> - Obligaciones fiscales con
                  la DGII y otras autoridades.
                </span>
              </li>
            </ul>
          </section>

          {/* Proteccion de datos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Como protegemos tus datos
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Encriptacion SSL/TLS en todas las comunicaciones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  Bases de datos encriptadas en reposo (AES-256)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  Acceso restringido a datos sensibles (principio de minimo
                  privilegio)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Autenticacion OAuth 2.0 (sin almacenar contrasenas)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>Hosting en AWS con certificaciones SOC 2</span>
              </li>
            </ul>
          </section>

          {/* Compartir datos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Con quien compartimos tus datos
            </h2>
            <p className="text-gray-300 mb-4">
              <strong>No vendemos tus datos.</strong> Solo compartimos
              informacion con:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>DGII</strong> - Cuando generas comprobantes fiscales
                  (requerido por ley)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Proveedores de infraestructura</strong> - AWS, para
                  hosting seguro
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Procesadores de pago</strong> - Stripe, para pagos
                  seguros
                </span>
              </li>
            </ul>
          </section>

          {/* Tus derechos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Tus derechos</h2>
            <p className="text-gray-300 mb-4">
              Tienes derecho a:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Acceder</strong> - Solicitar una copia de tus datos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Rectificar</strong> - Corregir datos incorrectos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Eliminar</strong> - Solicitar la eliminacion de tus
                  datos (con excepciones legales)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Portabilidad</strong> - Exportar tus datos en formato
                  estandar
                </span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              Para ejercer estos derechos, contactanos en{" "}
              <a
                href="mailto:privacidad@curetcore.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                privacidad@curetcore.com
              </a>
            </p>
          </section>

          {/* GDPR y Shopify */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cumplimiento GDPR (Shopify)
            </h2>
            <p className="text-gray-300 mb-4">
              Nuestras apps de Shopify (Curetcore Connector y Stock Value) cumplen
              con los requisitos de GDPR:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  Procesamos solicitudes de datos de clientes dentro de 10 dias
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  Eliminamos datos de clientes cuando lo solicitan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  Eliminamos todos los datos de la tienda dentro de 48 horas
                  despues de desinstalar la app
                </span>
              </li>
            </ul>
          </section>

          {/* Retencion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Retencion de datos
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Datos de cuenta</strong> - Mientras mantengas tu cuenta
                  activa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Comprobantes fiscales</strong> - 10 anos (requerido por
                  ley dominicana)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">•</span>
                <span>
                  <strong>Logs de sincronizacion</strong> - 90 dias
                </span>
              </li>
            </ul>
          </section>

          {/* Contacto */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre esta politica de privacidad:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
              <p className="text-white font-semibold mb-2">Curetcore</p>
              <p className="text-gray-400">Una division de {ECOSYSTEM.matrix.trademark}</p>
              <p className="text-gray-300 mt-4">
                Email:{" "}
                <a
                  href="mailto:privacidad@curetcore.com"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  privacidad@curetcore.com
                </a>
              </p>
              <p className="text-gray-300">
                Soporte:{" "}
                <a
                  href="mailto:soporte@curetcore.com"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  soporte@curetcore.com
                </a>
              </p>
              <p className="text-gray-400 mt-4">
                {ECOSYSTEM.location.city}, {ECOSYSTEM.location.country}
              </p>
            </div>
          </section>

          {/* Cambios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Cambios a esta politica
            </h2>
            <p className="text-gray-300">
              Podemos actualizar esta politica periodicamente. Te notificaremos
              de cambios significativos por email o mediante un aviso en
              nuestros productos. La fecha de ultima actualizacion siempre
              estara visible al inicio de este documento.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
