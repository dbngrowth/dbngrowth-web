import { Reveal } from "@/components/motion/reveal";
import { BookingLink } from "@/components/ui/booking-link";
import { BrandOrbit } from "@/components/visuals/brand-orbit";

export function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container-shell cta-section__inner">
        <Reveal className="cta-section__content">
          <p className="eyebrow">EL PRÓXIMO PASO</p>
          <h2 id="cta-title">Si tu marca ya vende pero el siguiente tramo no está claro, conversemos.</h2>
          <p>
            Una primera conversación sin compromiso para entender tu situación, detectar la prioridad y explorar cómo —y si— DBN puede aportar valor.
          </p>
          <div className="cta-section__actions">
            <BookingLink location="final_cta" />
          </div>
        </Reveal>
        <div className="cta-section__visual">
          <BrandOrbit variant="cta" />
        </div>
      </div>
    </section>
  );
}
