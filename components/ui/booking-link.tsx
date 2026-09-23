"use client";

import { ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { getBookingDestination } from "@/lib/booking";

type BookingLinkProps = {
  location: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
};

export function BookingLink({
  location,
  variant = "primary",
  className,
  onClick,
  children,
}: BookingLinkProps) {
  const destination = getBookingDestination(siteConfig.calendlyUrl);

  return (
    <ButtonLink
      className={className}
      href={destination.href}
      variant={variant}
      trackingName={location}
      target={destination.isExternal ? "_blank" : undefined}
      rel={destination.isExternal ? "noreferrer" : undefined}
      onClick={(event) => {
        if (destination.isExternal) trackEvent("calendly_click", { location });
        onClick?.(event);
      }}
    >
      {children ?? <><span>Agenda una llamada</span><ArrowUpRight className="booking-link__arrow" aria-hidden="true" size={18} /></>}
    </ButtonLink>
  );
}
