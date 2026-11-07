import type { Metadata } from "next";

import { BookingLanding, getBookingLandingMetadata } from "@/components/booking/booking-landing";

export const metadata: Metadata = getBookingLandingMetadata("strategy");

export default function StrategicSessionPage() {
  return <BookingLanding mode="strategy" />;
}
