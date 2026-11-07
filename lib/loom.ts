export function getLoomEmbedUrl(value: string | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !["loom.com", "www.loom.com"].includes(url.hostname)) return null;
    const match = url.pathname.match(/^\/(?:share|embed)\/([a-zA-Z0-9_-]+)\/?$/);
    return match ? `https://www.loom.com/embed/${match[1]}` : null;
  } catch {
    return null;
  }
}
