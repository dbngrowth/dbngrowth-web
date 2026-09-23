import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

export function ProblemSection() {
  return (
    <section className="section problem-section" id="problema" aria-labelledby="problem-title">
      <div className="container-shell problem-grid">
        <Reveal>
          <SectionHeader
            id="problem-title"
            eyebrow="EL PROBLEMA"
            title="El problema rara vez es “necesitamos más marketing”."
            copy="El crecimiento se frena cuando las decisiones importantes se toman por separado."
          />
        </Reveal>
        <ol className="editorial-list">
          {siteConfig.problems.map((problem, index) => (
            <Reveal delay={index * 0.05} key={problem.number}>
              <li className="editorial-row">
                <span className="editorial-row__number" aria-hidden="true">{problem.number}</span>
                <span className="editorial-row__node" aria-hidden="true" />
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
