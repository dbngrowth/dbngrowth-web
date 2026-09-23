import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AudienceSection } from "@/components/sections/audience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FounderSection } from "@/components/sections/founder-section";
import { GrowthSystemSection } from "@/components/sections/growth-system-section";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustedBrandsSection } from "@/components/sections/trusted-brands-section";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { getPublicSiteUrl } from "@/lib/site-url";

export default function Home() {
  const configuredSiteUrl = getPublicSiteUrl();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.brandName,
      url: configuredSiteUrl,
      logo: `${configuredSiteUrl}/brand/dbn-growth-icon.png`,
      description: siteConfig.seo.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.brandName,
      description: siteConfig.seo.description,
      areaServed: "Online",
      serviceType: "Growth Partner para marcas e-commerce de wellness, fitness y nutrición deportiva",
      url: configuredSiteUrl,
    },
  ];

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Hero />
        <section className="section partnership-section" aria-labelledby="partnership-title">
          <div className="partnership-section__orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container-shell partnership-grid">
            <div className="partnership-intro">
              <p className="eyebrow eyebrow--dark">UNA RELACIÓN, UNA PRIORIDAD</p>
              <span className="partnership-index" aria-hidden="true">01 / 03</span>
            </div>
            <div>
              <Reveal className="partnership-copy">
                <h2 id="partnership-title">
                  {siteConfig.partnership.title}{" "}
                  <span>{siteConfig.partnership.emphasis}</span>
                </h2>
                <p>{siteConfig.partnership.description}</p>
              </Reveal>
              <ul className="partnership-principles" aria-label="Principios de la relación DBN">
                {siteConfig.partnership.principles.map((principle, index) => (
                  <li key={principle}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <strong>{principle}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <ProblemSection />
        <GrowthSystemSection />
        <ServicesSection />
        <TrustedBrandsSection />
        <AudienceSection />
        <FounderSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
