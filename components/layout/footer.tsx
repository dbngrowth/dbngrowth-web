import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

function isHttpsUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !/[\[\]]/.test(value);
  } catch {
    return false;
  }
}

export function Footer() {
  const hasEmail = /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(siteConfig.email);
  const socialLinks = [
    { label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
    { label: "Instagram", href: siteConfig.socialLinks.instagram },
  ].filter((link) => isHttpsUrl(link.href));

  return (
    <footer className="site-footer">
      <div className="site-footer__visual" aria-hidden="true">
        <span />
        <span />
        <Image src="/brand/dbn-growth-icon.png" alt="" width={477} height={495} sizes="360px" />
      </div>
      <div className="container-shell site-footer__top">
        <div className="site-footer__brand">
          <Link href="/#inicio" aria-label="DBN Growth — inicio">
            <Image src="/brand/dbn-growth-wordmark.png" alt="DBN Growth" width={701} height={122} />
          </Link>
          <p>Growth Partner para e-commerce de wellness, fitness y nutrición deportiva.</p>
          <span>UNA PRIORIDAD. UN SISTEMA CONECTADO.</span>
        </div>
        <nav className="site-footer__nav" aria-label="Navegación del pie de página">
          <p>EXPLORA</p>
          {siteConfig.navigation.map((item) => (
            <Link href={`/${item.href}`} key={item.href}>{item.label}</Link>
          ))}
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div className="site-footer__contact">
          <p>CONVERSEMOS</p>
          {hasEmail ? (
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          ) : (
            <Link href="/#contacto">Comparte tu contexto</Link>
          )}
          {socialLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>
          ))}
        </div>
      </div>
      <div className="container-shell site-footer__bottom">
        <span>© 2026 DBN Growth. Todos los derechos reservados.</span>
        <div><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos</Link></div>
      </div>
    </footer>
  );
}
