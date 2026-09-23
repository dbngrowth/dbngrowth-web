function normalizeHttpsUrl(value: string | undefined) {
  const candidate = value?.trim();
  if (!candidate || /[\[\]{}<>]/.test(candidate)) return null;

  try {
    const url = new URL(candidate.startsWith("http") ? candidate : `https://${candidate}`);
    if (url.protocol !== "https:" || !url.hostname.includes(".")) return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function getPublicSiteUrl() {
  const configured = normalizeHttpsUrl(process.env.NEXT_PUBLIC_SITE_URL);
  if (configured) return configured;

  const vercel = normalizeHttpsUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL,
  );
  if (vercel) return vercel;

  return "http://localhost:3000";
}
