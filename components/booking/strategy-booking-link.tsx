"use client";

import { RouteBookingLink } from "@/components/booking/demo-booking-link";
import type { ComponentProps } from "react";

type StrategyBookingLinkProps = Omit<ComponentProps<typeof RouteBookingLink>, "bookingUrl">;

export function StrategyBookingLink(props: StrategyBookingLinkProps) {
  return <RouteBookingLink {...props} bookingUrl={process.env.NEXT_PUBLIC_STRATEGY_BOOKING_URL || ""} />;
}
