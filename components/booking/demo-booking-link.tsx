"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { getBookingDestination } from "@/lib/booking";

type DemoBookingLinkProps = {
  location: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "text";
};

export function DemoBookingLink({
  location,
  children,
  className,
  variant = "primary",
}: DemoBookingLinkProps) {
  const destination = getBookingDestination(process.env.NEXT_PUBLIC_DEMO_BOOKING_URL || "");
  const href = destination.isExternal ? destination.href : "/#contacto";

  return (
    <ButtonLink
      className={className}
      href={href}
      variant={variant}
      trackingName={location}
      target={destination.isExternal ? "_blank" : undefined}
      rel={destination.isExternal ? "noreferrer" : undefined}
      onClick={() => {
        if (destination.isExternal) trackEvent("calendly_click", { location });
      }}
    >
      {children ?? (
        <>
          <span>Reserva tu conversación</span>
          <ArrowUpRight className="booking-link__arrow" aria-hidden="true" size={18} />
        </>
      )}
    </ButtonLink>
  );
}
