import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GrowthSystemVisual } from "@/components/visuals/growth-system-visual";
import { siteConfig } from "@/config/site";

export function GrowthSystemSection() {
  return (
    <section className="section system-section" id="sistema" aria-labelledby="system-title">
      <div className="container-shell">
        <div className="system-section__intro">
          <Reveal>
            <SectionHeader
              id="system-title"
              eyebrow="DBN GROWTH SYSTEM"
              title="El crecimiento no es una campaña. Es un sistema."
              copy="Oferta, adquisición, conversión y retención no viven en silos. El sistema empieza identificando qué está frenando el crecimiento y conectando las palancas que deben moverse juntas."
              light
            />
          </Reveal>
          <p className="system-section__note">
            No es una fórmula milagrosa ni un playbook rígido. Es una forma de decidir qué mover primero, medir lo que ocurre y aprender qué viene después.
          </p>
        </div>
        <GrowthSystemVisual stages={siteConfig.growthSystem} />
      </div>
    </section>
  );
}
