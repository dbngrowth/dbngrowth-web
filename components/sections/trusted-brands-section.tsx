import { LogoCloud } from "@/components/social-proof/placeholder-components";
import { siteConfig } from "@/config/site";

export function TrustedBrandsSection() {
  const brands = siteConfig.trustedBrands.filter(
    (brand) => brand.logo.startsWith("/") && !brand.logo.startsWith("//"),
  );

  if (brands.length === 0) return null;

  return (
    <section className="section trusted-brands-section" aria-labelledby="trusted-brands-title">
      <div className="container-shell">
        <h2 id="trusted-brands-title">El Growth Partner de confianza para…</h2>
        <LogoCloud logos={brands} />
      </div>
    </section>
  );
}
