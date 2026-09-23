"use client";

export type AnalyticsEvent =
  | "cta_click"
  | "diagnostic_form_start"
  | "diagnostic_form_submit"
  | "calendly_click"
  | "service_interaction";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, parameters?: Record<string, string>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, parameters);
}
