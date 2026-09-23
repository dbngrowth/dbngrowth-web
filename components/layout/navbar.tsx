"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BookingLink } from "@/components/ui/booking-link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 861px)");
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [menuOpen]);

  return (
    <header
      className="site-nav"
      data-scrolled={scrolled}
      data-menu-open={menuOpen}
      ref={headerRef}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <nav className="container-shell site-nav__inner" aria-label="Navegación principal">
        <a className="site-nav__brand" href="#inicio" aria-label="DBN Growth, inicio" onClick={() => setMenuOpen(false)}>
          <Image
            className="site-nav__logo"
            src="/brand/dbn-growth-wordmark.png"
            alt="DBN Growth"
            width={701}
            height={122}
            loading="eager"
          />
        </a>

        <div className="site-nav__links">
          {siteConfig.navigation.map((item) => (
            <a className="site-nav__link" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <BookingLink className="button--nav" location="navbar_booking" onClick={() => setMenuOpen(false)} />
        <button
          className="site-nav__menu-button"
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <nav className="mobile-menu" id="mobile-menu" aria-label="Navegación móvil" hidden={!menuOpen}>
        <div className="container-shell mobile-menu__inner">
          {siteConfig.navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
          <BookingLink className="mobile-menu__contact" location="mobile_menu_booking" variant="text" onClick={() => setMenuOpen(false)} />
        </div>
      </nav>
    </header>
  );
}
