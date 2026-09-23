import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

export function ServicesSection() {
  return (
    <section className="section services-section" id="capacidades" aria-labelledby="services-title">
      <div className="container-shell services-grid">
        <Reveal>
          <SectionHeader
            id="services-title"
            eyebrow="CAPACIDADES CONECTADAS"
            title="Las capacidades cambian. La lógica no."
            copy="No empezamos intentando vender un canal concreto. Primero definimos la prioridad; después conectamos las capacidades que pueden moverla."
          />
          <div className="capabilities-thesis" aria-hidden="true">
            <span>PROBLEMA</span><i /><span>PRIORIDAD</span><i /><span>EJECUCIÓN</span>
          </div>
        </Reveal>
        <Reveal className="capabilities-composition" delay={0.08}>
          <p className="capabilities-composition__label">CAPACIDADES / 01—06</p>
          <ul className="capabilities-list" aria-label="Capacidades de DBN Growth">
            {siteConfig.capabilities.map((capability, index) => (
              <li key={capability}>
                <span aria-hidden="true">0{index + 1}</span>
                <strong lang="en">{capability}</strong>
                <i aria-hidden="true" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
