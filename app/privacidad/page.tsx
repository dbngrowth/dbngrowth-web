import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.brandName}.`,
  alternates: { canonical: "/privacidad" },
};

function hasConfiguredEmail(value: string) {
  return /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(value);
}

export default function PrivacyPage() {
  const hasEmail = hasConfiguredEmail(siteConfig.email);

  return (
    <LegalShell title="Política de privacidad" updated="septiembre de 2026">
      <section>
        <h2>1. Alcance</h2>
        <p>
          Esta política explica cómo DBN Growth trata la información que una persona comparte
          voluntariamente a través de este sitio y de sus canales de contacto.
        </p>
      </section>
      <section>
        <h2>2. Información que podemos recibir</h2>
        <p>
          Podemos recibir datos como nombre, email, marca, sitio web, objetivo de crecimiento y
          contexto de negocio. Si se habilita analítica, también pueden procesarse datos técnicos y
          de uso de forma agregada mediante los proveedores configurados para el sitio.
        </p>
      </section>
      <section>
        <h2>3. Para qué se utiliza</h2>
        <p>
          La información se utiliza para responder consultas, evaluar solicitudes, coordinar
          conversaciones, operar el sitio y comprender su rendimiento. DBN Growth no vende datos
          personales a terceros.
        </p>
      </section>
      <section>
        <h2>4. Proveedores y conservación</h2>
        <p>
          El sitio puede utilizar servicios como Vercel, Resend, Calendly y Google Analytics, además de
          Supabase para almacenar las solicitudes enviadas mediante el formulario, cuando hayan sido
          configurados. La información se conserva solo durante el tiempo razonablemente necesario para
          atender la solicitud, operar el servicio o cumplir obligaciones aplicables.
        </p>
      </section>
      <section>
        <h2>5. Solicitudes y contacto</h2>
        <p>
          Puedes solicitar acceso, corrección o eliminación de la información que hayas compartido.
          {hasEmail ? (
            <> Escríbenos a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</>
          ) : (
            <> Utiliza el <Link href="/#contacto">formulario de contacto</Link> del sitio.</>
          )}
          {" "}Los derechos concretos dependerán de la legislación aplicable.
        </p>
      </section>
    </LegalShell>
  );
}
