import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

export function AudienceSection() {
  return (
    <section className="section audience-section" id="para-quien" aria-labelledby="audience-title">
      <div className="container-shell">
        <Reveal>
          <SectionHeader
            id="audience-title"
            eyebrow="PARA QUIÉN"
            title="DBN no es para todas las marcas."
            copy="El mejor encaje está en e-commerce que ya tienen producto validado, ventas reales y una siguiente etapa que construir. No está planteado para empezar un negocio desde cero."
          />
        </Reveal>
        <div className="audience-grid">
          {siteConfig.audiences.map((audience, index) => (
            <Reveal delay={index * 0.05} key={audience.title}>
              <article className="audience-item">
                <span className="audience-item__number" aria-hidden="true">0{index + 1}</span>
                <span className="audience-item__orbit" aria-hidden="true"><i /></span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
