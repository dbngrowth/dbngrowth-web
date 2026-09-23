import Image from "next/image";

type BrandOrbitProps = {
  variant: "hero" | "cta";
};

export function BrandOrbit({ variant }: BrandOrbitProps) {
  return (
    <div className={`brand-orbit brand-orbit--${variant}`} aria-hidden="true">
      <div className="brand-orbit__wash" />
      <span className="brand-orbit__arc brand-orbit__arc--outer" />
      <span className="brand-orbit__arc brand-orbit__arc--inner" />
      <span className="brand-orbit__axis" />
      <Image
        className="brand-orbit__asset"
        src="/brand/dbn-growth-emblem-glow.png"
        alt=""
        width={1536}
        height={1024}
        sizes={variant === "hero" ? "(max-width: 860px) 100vw, 54vw" : "(max-width: 760px) 100vw, 48vw"}
        loading={variant === "hero" ? "eager" : "lazy"}
        fetchPriority={variant === "hero" ? "high" : "auto"}
      />
      {variant === "hero" ? (
        <div className="brand-orbit__category">
          <span>Wellness</span>
          <span>Fitness</span>
          <span>Performance</span>
        </div>
      ) : null}
    </div>
  );
}
