import Image from "next/image";

type CaseStudyCardProps = { title: string; summary: string };
type TestimonialCardProps = { quote: string; person: string; company: string };
type LogoCloudProps = {
  logos: ReadonlyArray<{ name: string; logo: string; width: number; height: number }>;
};

// Importar estos componentes solo cuando existan datos públicos y verificables.
export function CaseStudyCard({ title, summary }: CaseStudyCardProps) {
  return <article><h3>{title}</h3><p>{summary}</p></article>;
}

export function TestimonialCard({ quote, person, company }: TestimonialCardProps) {
  return <figure><blockquote>{quote}</blockquote><figcaption>{person} · {company}</figcaption></figure>;
}

export function LogoCloud({ logos }: LogoCloudProps) {
  if (logos.length === 0) return null;

  return (
    <ul className="trusted-brands__logos">
      {logos.map((brand) => (
        <li key={brand.logo}>
          <Image
            src={brand.logo}
            alt={brand.name}
            width={brand.width}
            height={brand.height}
            sizes="(max-width: 767px) 35vw, 180px"
          />
        </li>
      ))}
    </ul>
  );
}
