"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";

type ButtonLinkProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick" | "rel" | "target"> & {
  children: ReactNode;
  className?: string;
  href: string;
  trackingName: string;
  variant?: "primary" | "secondary" | "text";
};

export function ButtonLink({
  children,
  className = "",
  href,
  onClick,
  rel,
  target,
  trackingName,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      href={href}
      rel={rel}
      target={target}
      data-analytics={trackingName}
      onClick={(event) => {
        trackEvent("cta_click", { location: trackingName });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
