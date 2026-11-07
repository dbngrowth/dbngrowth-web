import type { Metadata } from "next";

import { BookingLanding, getBookingLandingMetadata } from "@/components/booking/booking-landing";

export const metadata: Metadata = getBookingLandingMetadata("demo");

export default function DemoPage() {
  return <BookingLanding mode="demo" />;
}
