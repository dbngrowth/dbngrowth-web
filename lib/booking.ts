type BookingDestination = {
  href: string;
  isExternal: boolean;
};

export function getBookingDestination(value: string): BookingDestination {
  const fallback = { href: "#contacto", isExternal: false };
  const candidate = value.trim();

  try {
    const url = new URL(candidate);
    const hasPlaceholder = /[<>\[\]{}]/.test(decodeURIComponent(candidate));
    const isReservedHost = /(^|\.)(localhost|example\.(com|net|org))$|\.(test|invalid|example|local)$/.test(url.hostname);

    if (
      !/^https:\/\//i.test(candidate) ||
      url.protocol !== "https:" ||
      !url.hostname.includes(".") ||
      url.username ||
      url.password ||
      /\s/.test(candidate) ||
      hasPlaceholder ||
      isReservedHost
    ) {
      return fallback;
    }

    return { href: url.href, isExternal: true };
  } catch {
    return fallback;
  }
}
