import { ArrowDown, Check, Layers3, X } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

const agencySteps = ["Campaign", "Deliverable", "Report", "Repeat"];
const dbnSteps = ["Diagnose", "Prioritize", "Build", "Launch", "Measure", "Optimize", "Scale"];

export function DifferenceSection() {
  return (
    <section className="section difference-section" id="diferencia" aria-labelledby="difference-title">
      <div className="container-shell">
        <Reveal>
          <div className="difference-intro">
            <p className="eyebrow">EL DIFERENCIADOR</p>
            <h2 id="difference-title">No vendemos entregables aislados.</h2>
            <p>Construimos sistemas de crecimiento.</p>
          </div>
        </Reveal>

        <div className="comparison-grid">
          <Reveal>
            <article className="comparison-card comparison-card--muted">
              <header><X aria-hidden="true" size={18} /><span>AGENCIA TRADICIONAL</span></header>
              <div className="comparison-card__flow">
                {agencySteps.map((step, index) => (
                  <div key={step}><span>{step}</span>{index < agencySteps.length - 1 ? <ArrowDown aria-hidden="true" /> : null}</div>
                ))}
              </div>
              <p>Organizada alrededor de lo que produce.</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="comparison-card comparison-card--dbn">
              <header><Check aria-hidden="true" size={18} /><span>DBN GROWTH</span></header>
              <div className="comparison-card__flow comparison-card__flow--compact">
                {dbnSteps.map((step, index) => (
                  <div key={step}><span>{step}</span>{index < dbnSteps.length - 1 ? <ArrowDown aria-hidden="true" /> : null}</div>
                ))}
              </div>
              <p>Organizado alrededor de lo que cambia: adquisición, conversión, revenue y eficiencia.</p>
            </article>
          </Reveal>
        </div>

        <div className="difference-note">
          <Layers3 aria-hidden="true" size={24} />
          <p>Las palancas se trabajan como partes de un mismo sistema, no como proyectos que compiten entre sí.</p>
        </div>
      </div>
    </section>
  );
}
