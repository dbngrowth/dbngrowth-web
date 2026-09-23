import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { BookingLink } from "@/components/ui/booking-link";
import { siteConfig } from "@/config/site";

function isConfigured(value: string) {
  return value.trim().length > 0 && !/\[[^\]]+\]/.test(value);
}

export function FounderSection() {
  const { founder } = siteConfig;
  const hasName = isConfigured(founder.name);
  const hasBio = isConfigured(founder.bio);
  const hasRole = isConfigured(founder.role);
  const hasPhoto = isConfigured(founder.photo) && founder.photo.startsWith("/") && !founder.photo.startsWith("//");

  return (
    <section className="section founder-section" id="sobre-dbn" aria-labelledby="founder-title">
      <div className="container-shell founder-grid">
        <Reveal className="founder-portrait" delay={0.04}>
          {hasPhoto ? (
            <div className="founder-portrait__image">
              <Image
                src={founder.photo}
                alt={hasName ? `${founder.name}, Growth Partner de DBN Growth` : "Growth Partner de DBN Growth"}
                fill
                sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1199px) 40vw, 470px"
              />
            </div>
          ) : (
            <div className="founder-portrait__placeholder" aria-hidden="true">
              <div className="founder-portrait__rings"><i /><i /><i /></div>
              <span className="founder-portrait__monogram">DBN</span>
            </div>
          )}
          {hasPhoto ? <p className="founder-portrait__meta">Detrás de DBN Growth</p> : null}
        </Reveal>

        <Reveal className="founder-copy">
          <p className="eyebrow eyebrow--dark">SOBRE DBN</p>
          <h2 id="founder-title">Más cerca del negocio. Menos cerca del modelo de agencia.</h2>
          <p>
            DBN Growth es la marca desde la que trabajo como Growth Partner. La idea es sencilla: entender primero el negocio,
            detectar qué está frenando la siguiente etapa y conectar estrategia y ejecución alrededor de esa prioridad.
          </p>
          <div className="founder-copy__axis" aria-hidden="true">
            <span>NEGOCIO</span><i /><span>PRIORIDAD</span><i /><span>EJECUCIÓN</span>
          </div>
          {hasName ? (
            <div className="founder-copy__identity">
              <h3>{founder.name}</h3>
              {hasRole ? <p>{founder.role}</p> : null}
            </div>
          ) : null}
          {hasBio ? <p className="founder-copy__bio">{founder.bio}</p> : null}
          <BookingLink location="founder" variant="text" className="founder-copy__link">
            Agenda una primera conversación
          </BookingLink>
        </Reveal>
      </div>
    </section>
  );
}
