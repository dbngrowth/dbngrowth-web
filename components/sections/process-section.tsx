import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

export function ProcessSection() {
  return (
    <section className="section process-section" id="proceso" aria-labelledby="process-title">
      <div className="container-shell">
        <Reveal>
          <SectionHeader
            id="process-title"
            eyebrow="CÓMO TRABAJAMOS"
            title="Entender. Priorizar. Ejecutar. Aprender."
            copy="Un proceso claro para saber qué mover primero sin convertir la relación en una lista infinita de entregables."
          />
          <ol className="process-timeline">
            {siteConfig.process.map((step) => (
              <li className="process-step" key={step.number}>
                <span className="process-step__number" aria-hidden="true">{step.number}</span>
                <span className="process-step__node" aria-hidden="true" />
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
