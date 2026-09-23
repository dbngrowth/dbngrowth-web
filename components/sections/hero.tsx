import { ArrowDownRight } from "lucide-react";

import { BookingLink } from "@/components/ui/booking-link";
import { ButtonLink } from "@/components/ui/button";
import { BrandOrbit } from "@/components/visuals/brand-orbit";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container-shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
          <h1 id="hero-title">
            {siteConfig.hero.title} <span>{siteConfig.hero.emphasis}</span>
          </h1>
          <p className="hero__lede">{siteConfig.hero.description}</p>
          <div className="hero__actions">
            <BookingLink location="hero" />
            <ButtonLink href="#sistema" variant="secondary" trackingName="hero_system">
              {siteConfig.hero.secondaryCta}
              <ArrowDownRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
          <p className="hero__note">{siteConfig.hero.note}</p>
        </div>
        <div className="hero__visual">
          <BrandOrbit variant="hero" />
        </div>
        <div className="hero__signature" aria-hidden="true">
          <span>DBN / GROWTH PARTNER</span>
          <span>Wellness · Fitness · Performance</span>
          <span>Strategy → Execution → Learning</span>
        </div>
      </div>
    </section>
  );
}
