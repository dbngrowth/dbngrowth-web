type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  copy,
  light = false,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={`section-header section-header--${align}${light ? " section-header--light" : ""}`}
    >
      <p className={`eyebrow${light ? "" : " eyebrow--dark"}`}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p className="section-header__copy">{copy}</p> : null}
    </header>
  );
}
