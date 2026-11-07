import Image from "next/image";
import Link from "next/link";

import { DemoBookingLink } from "@/components/booking/demo-booking-link";
import { BrandOrbit } from "@/components/visuals/brand-orbit";
import { siteConfig } from "@/config/site";
import { getLoomEmbedUrl } from "@/lib/loom";

const demoSteps = [
  ["01", "Lee el sistema", "Cómo se conectan oferta, adquisición, creatividad, conversión y retención en tu marca."],
  ["02", "Encuentra la tensión", "Qué parte del sistema merece contexto antes de sumar otra iniciativa."],
  ["03", "Ordena el siguiente paso", "Qué tendría sentido explorar si existe encaje para trabajar juntos."],
] as const;

function DemoVideo() {
  const embedUrl = getLoomEmbedUrl(process.env.NEXT_PUBLIC_DEMO_LOOM_URL);
  if (!embedUrl) return null;

  return (
    <section className="demo-landing__video" id="demo-video" aria-labelledby="demo-video-title">
      <div className="demo-landing__container">
        <div className="demo-landing__section-heading">
          <p className="eyebrow eyebrow--dark">LA DEMO</p>
          <h2 id="demo-video-title">Mira cómo pensamos el crecimiento.</h2>
        </div>
        <div className="demo-landing__video-frame">
          <iframe src={embedUrl} title="Presentación de DBN Growth" allow="autoplay; fullscreen" allowFullScreen />
        </div>
      </div>
    </section>
  );
}

export function DemoLanding() {
  return (
    <div className="demo-landing">
      <header className="demo-landing__header">
        <Link href="/" aria-label="DBN Growth, inicio">
          <Image src="/brand/dbn-growth-wordmark.png" alt="DBN Growth" width={701} height={122} priority />
        </Link>
        <Link className="demo-landing__back" href="/">Volver a DBN Growth</Link>
      </header>

      <main>
        <section className="demo-landing__hero" aria-labelledby="demo-title">
          <div className="demo-landing__hero-inner container-shell">
            <div className="demo-landing__copy">
              <p className="eyebrow">DEMO DE DBN GROWTH</p>
              <h1 id="demo-title">Para fundadores de suplementos que necesitan ver <span>qué mover primero.</span></h1>
              <p className="demo-landing__lede">En 15 minutos, conoce cómo DBN Growth conecta las decisiones de tu marca e-commerce de nutrición deportiva para ordenar la próxima conversación de crecimiento.</p>
              <div className="demo-landing__actions">
                <DemoBookingLink location="demo_landing_hero">Reserva tu demo de 15 minutos</DemoBookingLink>
                {getLoomEmbedUrl(process.env.NEXT_PUBLIC_DEMO_LOOM_URL) ? (
                  <Link className="button button--secondary" href="#demo-video">Ver la presentación</Link>
                ) : (
                  <Link className="button button--secondary" href="#demo-conversacion">Cómo funciona</Link>
                )}
              </div>
              <p className="demo-landing__note">Sin promesas prefabricadas. Primero, contexto.</p>
            </div>
            <div className="demo-landing__visual"><BrandOrbit variant="hero" /></div>
            <div className="demo-landing__signature" aria-hidden="true">
              <span>DBN / GROWTH PARTNER</span><span>Wellness · Fitness · Performance</span><span>Strategy → Execution → Learning</span>
            </div>
          </div>
        </section>

        <DemoVideo />

        <section className="demo-landing__conversation" id="demo-conversacion" aria-labelledby="demo-conversation-title">
          <div className="demo-landing__container">
            <div className="demo-landing__intro">
              <p className="eyebrow eyebrow--dark">EL ENFOQUE</p>
              <div>
                <h2 id="demo-conversation-title">Una demo breve para mirar tu negocio como un sistema.</h2>
                <p>No es otra presentación genérica. Es un primer espacio para poner sobre la mesa la marca, la oferta, la adquisición y la experiencia que convierte esa atención en crecimiento.</p>
              </div>
            </div>
            <ol className="demo-landing__steps">
              {demoSteps.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className="demo-landing__close" aria-labelledby="demo-close-title">
          <div className="demo-landing__container demo-landing__close-inner">
            <div><p className="eyebrow">DBN GROWTH PARTNER</p><h2 id="demo-close-title">Trae el contexto. Ordenemos la conversación.</h2></div>
            <DemoBookingLink location="demo_landing_footer" variant="secondary">Reserva tu demo de 15 minutos</DemoBookingLink>
          </div>
        </section>
      </main>

      <footer className="demo-landing__footer">
        <div className="demo-landing__container"><span>© 2026 {siteConfig.brandName}</span><div><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos</Link></div></div>
      </footer>
    </div>
  );
}

export const demoLandingMetadata = {
  title: "Demo de DBN Growth",
  description: "Conoce el sistema de Growth Partner de DBN Growth para marcas e-commerce de suplementos y nutrición deportiva.",
  alternates: { canonical: "/demo" },
};
