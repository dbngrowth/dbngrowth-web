import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { siteConfig } from "@/config/site";
import { getPublicSiteUrl } from "@/lib/site-url";

import "./globals.css";
import "./sections.css";
import "./redesign.css";
import "./final-polish.css";
import "./booking-landing.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const metadataBase = new URL(getPublicSiteUrl());

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.seo.title,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/",
    siteName: siteConfig.brandName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
