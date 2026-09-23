import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: `Términos de uso del sitio de ${siteConfig.brandName}.`,
  alternates: { canonical: "/terminos" },
};

function hasConfiguredEmail(value: string) {
  return /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(value);
}

export default function TermsPage() {
  const hasEmail = hasConfiguredEmail(siteConfig.email);

  return (
    <LegalShell title="Términos de uso" updated="septiembre de 2026">
      <section>
        <h2>1. Uso del sitio</h2>
        <p>
          Este sitio ofrece información general sobre DBN Growth. Al utilizarlo, aceptas hacerlo de
          forma lícita y sin intentar afectar su seguridad, disponibilidad o contenido.
        </p>
      </section>
      <section>
        <h2>2. Información y resultados</h2>
        <p>
          El contenido del sitio no constituye una oferta vinculante ni una garantía de resultados.
          Cualquier alcance, precio, responsabilidad o condición comercial se definirá por separado
          antes de iniciar un trabajo.
        </p>
      </section>
      <section>
        <h2>3. Propiedad intelectual</h2>
        <p>
          El nombre, identidad visual, textos y materiales propios de DBN Growth no pueden
          reproducirse ni utilizarse comercialmente sin autorización. Los activos de terceros
          pertenecen a sus respectivos titulares.
        </p>
      </section>
      <section>
        <h2>4. Disponibilidad y exactitud</h2>
        <p>
          Procuramos mantener el sitio disponible y la información actualizada, pero no garantizamos
          que todo el contenido esté libre de errores, cambios o interrupciones.
        </p>
      </section>
      <section>
        <h2>5. Contacto</h2>
        <p>
          Para consultas sobre estos términos,
          {hasEmail ? (
            <> escribe a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</>
          ) : (
            <> utiliza el <Link href="/#contacto">formulario de contacto</Link>.</>
          )}
        </p>
      </section>
    </LegalShell>
  );
}
