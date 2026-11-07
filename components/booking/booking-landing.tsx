import Image from "next/image";
import Link from "next/link";

import { DemoBookingLink } from "@/components/booking/demo-booking-link";
import { siteConfig } from "@/config/site";

type BookingLandingProps = {
  mode: "demo" | "strategy";
};

const pageCopy = {
  demo: {
    eyebrow: "DEMO DE DBN GROWTH",
    title: "Una conversación para entender qué puede mover tu crecimiento.",
    description:
      "Conoce cómo DBN Growth conecta estrategia, oferta, adquisición, creatividad, conversión y retención alrededor de la prioridad de tu negocio.",
    introTitle: "No necesitas otra presentación genérica.",
    intro:
      "La demo parte de tu contexto. Revisamos cómo estás creciendo hoy, qué está limitando el siguiente paso y dónde tendría sentido concentrar la atención.",
    cta: "Reserva la demo",
    ctaLocation: "demo_landing_hero",
    pageTitle: "Demo de DBN Growth",
    pageDescription: "Conoce el enfoque de Growth Partner de DBN Growth.",
  },
  strategy: {
    eyebrow: "SESIÓN ESTRATÉGICA",
    title: "Aterriza la prioridad que más importa ahora.",
    description:
      "Una conversación de trabajo para poner contexto, números y restricción sobre la mesa antes de decidir qué mover.",
    introTitle: "La estrategia empieza por entender el sistema.",
    intro:
      "Hablamos de la marca, la oferta, la adquisición, la conversión y la retención como partes conectadas. El objetivo es salir con mayor claridad sobre el siguiente paso, no con una lista de entregables.",
    cta: "Reserva tu sesión",
    ctaLocation: "strategy_landing_hero",
    pageTitle: "Sesión estratégica — DBN Growth",
    pageDescription: "Reserva una conversación estratégica con DBN Growth.",
  },
} as const;

const conversationSteps = [
  ["01", "Contexto", "Qué está pasando en el negocio y qué has intentado hasta ahora."],
  ["02", "Prioridad", "Qué restricción merece atención antes de sumar más iniciativas."],
  ["03", "Siguiente paso", "Qué tendría sentido explorar, si existe encaje para hacerlo juntos."],
] as const;

export function BookingLanding({ mode }: BookingLandingProps) {
  const copy = pageCopy[mode];

  return (
    <div className="booking-landing">
      <header className="booking-landing__header">
        <Link href="/" aria-label="DBN Growth, inicio">
          <Image
            src="/brand/dbn-growth-wordmark.png"
            alt="DBN Growth"
            width={701}
            height={122}
            priority
          />
        </Link>
        <Link className="booking-landing__back" href="/">
          Volver a DBN Growth
        </Link>
      </header>

      <main>
        <section className="booking-landing__hero" aria-labelledby="booking-title">
          <div className="booking-landing__hero-grid">
            <div>
              <p className="booking-landing__eyebrow">{copy.eyebrow}</p>
              <h1 id="booking-title">{copy.title}</h1>
              <p className="booking-landing__lede">{copy.description}</p>
              <div className="booking-landing__actions">
                <DemoBookingLink location={copy.ctaLocation}>{copy.cta}</DemoBookingLink>
                <Link className="button button--secondary" href="#conversacion">
                  Cómo funciona
                </Link>
              </div>
              <p className="booking-landing__note">Sin promesas prefabricadas. Primero, contexto.</p>
            </div>
            <div className="booking-landing__orb" aria-hidden="true">
              <Image
                src="/brand/dbn-growth-emblem-glow.png"
                alt=""
                width={720}
                height={720}
                priority
              />
            </div>
          </div>
        </section>

        <section className="booking-landing__intro" id="conversacion" aria-labelledby="intro-title">
          <div className="booking-landing__container booking-landing__intro-grid">
            <p className="booking-landing__eyebrow booking-landing__eyebrow--dark">EL ENFOQUE</p>
            <div>
              <h2 id="intro-title">{copy.introTitle}</h2>
              <p>{copy.intro}</p>
            </div>
          </div>
        </section>

        <section className="booking-landing__steps" aria-labelledby="steps-title">
          <div className="booking-landing__container">
            <div className="booking-landing__section-heading">
              <p className="booking-landing__eyebrow">LA CONVERSACIÓN</p>
              <h2 id="steps-title">Tres puntos para ordenar la conversación.</h2>
            </div>
            <ol className="booking-landing__step-list">
              {conversationSteps.map(([number, title, description]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="booking-landing__close" aria-labelledby="close-title">
          <div className="booking-landing__container booking-landing__close-inner">
            <div>
              <p className="booking-landing__eyebrow">DBN GROWTH PARTNER</p>
              <h2 id="close-title">Una prioridad. Las capacidades correctas. Un sistema conectado.</h2>
            </div>
            <DemoBookingLink location={`${copy.ctaLocation}_footer`} variant="secondary">
              {copy.cta}
            </DemoBookingLink>
          </div>
        </section>
      </main>

      <footer className="booking-landing__footer">
        <div className="booking-landing__container">
          <span>© 2026 {siteConfig.brandName}</span>
          <div>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/terminos">Términos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function getBookingLandingMetadata(mode: BookingLandingProps["mode"]) {
  return {
    title: pageCopy[mode].pageTitle,
    description: pageCopy[mode].pageDescription,
    alternates: { canonical: `/${mode === "demo" ? "demo" : "sesion-estrategica"}` },
  };
}
