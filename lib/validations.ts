export type ContactFormInput = {
  name: string;
  email: string;
  brand: string;
  website: string;
  approximateRevenue: string;
  growthGoal: string;
  bottleneck: string;
  moreAboutBrand: string;
  companyWebsite: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedGoals = new Set([
  "Revenue",
  "Customer acquisition",
  "Conversion",
  "ROAS / profitability",
  "Retention",
  "Operations",
  "Otro",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function normalizeContactInput(value: unknown): ContactFormInput {
  const input = typeof value === "object" && value !== null ? value as Record<string, unknown> : {};
  return {
    name: clean(input.name, 100),
    email: clean(input.email, 180).toLowerCase(),
    brand: clean(input.brand, 140),
    website: clean(input.website, 240),
    approximateRevenue: clean(input.approximateRevenue, 100),
    growthGoal: clean(input.growthGoal, 80),
    bottleneck: clean(input.bottleneck, 1800),
    moreAboutBrand: clean(input.moreAboutBrand, 2400),
    companyWebsite: clean(input.companyWebsite, 200),
  };
}

export function validateContactInput(input: ContactFormInput): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (input.name.length < 2) errors.name = "Escribe tu nombre.";
  if (!emailPattern.test(input.email)) errors.email = "Escribe un email válido.";
  if (input.brand.length < 2) errors.brand = "Escribe el nombre de tu marca.";
  if (input.website.length < 4) errors.website = "Escribe el sitio web de tu marca.";
  if (!allowedGoals.has(input.growthGoal)) errors.growthGoal = "Selecciona qué quieres hacer crecer.";
  if (input.bottleneck.length < 20) {
    errors.bottleneck = "Cuéntanos un poco más sobre el principal cuello de botella.";
  }
  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
