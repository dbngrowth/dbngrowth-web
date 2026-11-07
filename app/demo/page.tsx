import type { Metadata } from "next";

import { DemoLanding, demoLandingMetadata } from "@/components/booking/demo-landing";

export const metadata: Metadata = demoLandingMetadata;

export default function DemoPage() {
  return <DemoLanding />;
}
