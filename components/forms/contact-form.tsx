"use client";

import { ArrowUpRight, CalendarCheck, LoaderCircle } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

import { BookingLink } from "@/components/ui/booking-link";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { getBookingDestination } from "@/lib/booking";
import {
  ContactFormErrors,
  ContactFormInput,
  hasValidationErrors,
  normalizeContactInput,
  validateContactInput,
} from "@/lib/validations";

const initialForm: ContactFormInput = {
  name: "",
  email: "",
  brand: "",
  website: "",
  approximateRevenue: "",
  growthGoal: "",
  bottleneck: "",
  moreAboutBrand: "",
  companyWebsite: "",
};

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; developmentMode: boolean }
  | { status: "error"; message: string };

export function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const hasStarted = useRef(false);
  const calendlyConfigured = getBookingDestination(siteConfig.calendlyUrl).isExternal;

  function handleStart() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("diagnostic_form_start", { form: "growth_diagnostic" });
  }

  function updateField(name: keyof ContactFormInput, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = normalizeContactInput(form);
    const validationErrors = validateContactInput(normalized);
    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) {
      const firstInvalid = Object.keys(validationErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setSubmission({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalized),
      });
      const result = await response.json() as { developmentMode?: boolean; message?: string };
      if (!response.ok) throw new Error(result.message || "No pudimos enviar el formulario.");

      trackEvent("diagnostic_form_submit", { form: "growth_diagnostic" });
      setSubmission({ status: "success", developmentMode: Boolean(result.developmentMode) });
    } catch (error) {
      setSubmission({
        status: "error",
        message: error instanceof Error ? error.message : "No pudimos enviar el formulario. Intenta de nuevo.",
      });
    }
  }

  if (submission.status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon"><CalendarCheck aria-hidden="true" /></span>
        <p className="eyebrow eyebrow--dark">CONTEXTO RECIBIDO</p>
        <h3>Gracias.</h3>
        <p>
          Ya tenemos el contexto básico de tu marca. El siguiente paso es ver si tiene sentido conversar.
        </p>
        {submission.developmentMode ? (
          <p className="form-success__dev">
            Modo de demostración: el formulario fue validado, pero el envío de email aún no está configurado.
          </p>
        ) : null}
        {calendlyConfigured ? (
          <BookingLink location="form_success" />
        ) : (
          <div className="form-success__pending">
            La agenda online estará disponible próximamente.
          </div>
        )}
      </div>
    );
  }

  return (
    <form className="contact-form" onFocusCapture={handleStart} onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field label="Nombre" name="name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
        <Field label="Marca" name="brand" error={errors.brand}>
          <input id="brand" name="brand" autoComplete="organization" value={form.brand} onChange={(e) => updateField("brand", e.target.value)} aria-invalid={Boolean(errors.brand)} aria-describedby={errors.brand ? "brand-error" : undefined} />
        </Field>
        <Field label="Website" name="website" error={errors.website}>
          <input id="website" name="website" inputMode="url" placeholder="tumarca.com" value={form.website} onChange={(e) => updateField("website", e.target.value)} aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} />
        </Field>
        <Field label="¿Qué quieres hacer crecer?" name="growthGoal" error={errors.growthGoal}>
          <select id="growthGoal" name="growthGoal" value={form.growthGoal} onChange={(e) => updateField("growthGoal", e.target.value)} aria-invalid={Boolean(errors.growthGoal)} aria-describedby={errors.growthGoal ? "growthGoal-error" : undefined}>
            <option value="">Selecciona una opción</option>
            {[
              ["Revenue", "Revenue"],
              ["Customer acquisition", "Adquisición de clientes"],
              ["Conversion", "Conversión"],
              ["ROAS / profitability", "Rentabilidad / ROAS"],
              ["Retention", "Retención / recompra"],
              ["Operations", "Operación / capacidad de ejecución"],
              ["Otro", "Otro"],
            ].map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </Field>
      </div>

      <Field label="¿Cuál es tu principal cuello de botella ahora mismo?" name="bottleneck" error={errors.bottleneck}>
        <textarea id="bottleneck" name="bottleneck" rows={3} value={form.bottleneck} onChange={(e) => updateField("bottleneck", e.target.value)} aria-invalid={Boolean(errors.bottleneck)} aria-describedby={errors.bottleneck ? "bottleneck-error" : undefined} />
      </Field>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" value={form.companyWebsite} onChange={(e) => updateField("companyWebsite", e.target.value)} />
      </div>

      {submission.status === "error" ? <p className="form-error form-error--submit" role="alert">{submission.message}</p> : null}

      <button className="button button--primary contact-form__submit" disabled={submission.status === "loading"} type="submit">
        {submission.status === "loading" ? <LoaderCircle className="spin" aria-hidden="true" size={18} /> : null}
        {submission.status === "loading" ? "Enviando…" : "Enviar contexto"}
        {submission.status !== "loading" ? <ArrowUpRight aria-hidden="true" size={18} /> : null}
      </button>
    </form>
  );
}

function Field({
  children,
  error,
  label,
  name,
}: {
  children: React.ReactNode;
  error?: string;
  label: string;
  name: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {children}
      {error ? <p className="form-error" id={`${name}-error`}>{error}</p> : null}
    </div>
  );
}
