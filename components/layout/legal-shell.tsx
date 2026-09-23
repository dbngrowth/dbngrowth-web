import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalShell({ children, title, updated }: { children: ReactNode; title: string; updated: string }) {
  return (
    <main className="legal-page">
      <header className="legal-nav">
        <div className="container-shell legal-nav__inner">
          <Link href="/" aria-label="Volver al inicio de DBN Growth">
            <Image
              src="/brand/dbn-growth-wordmark.png"
              alt="DBN Growth"
              width={701}
              height={122}
              loading="eager"
            />
          </Link>
          <Link href="/">Volver al inicio <span aria-hidden="true">→</span></Link>
        </div>
      </header>
      <article className="container-shell legal-content">
        <p className="eyebrow eyebrow--dark">INFORMACIÓN LEGAL</p>
        <h1>{title}</h1>
        <p className="legal-content__updated">Última actualización: {updated}</p>
        {children}
      </article>
    </main>
  );
}
