import { Resend } from "resend";

import {
  type ContactFormInput,
  hasValidationErrors,
  normalizeContactInput,
  validateContactInput,
} from "@/lib/validations";

const contactErrorMessage = "No pudimos procesar tu solicitud. Intenta de nuevo en unos minutos.";

function buildContactMessage(input: ContactFormInput) {
  return [
    `Website: ${input.website}`,
    `Objetivo: ${input.growthGoal}`,
    `Cuello de botella: ${input.bottleneck}`,
    input.approximateRevenue ? `Ingresos aproximados: ${input.approximateRevenue}` : "",
    input.moreAboutBrand ? `Más información: ${input.moreAboutBrand}` : "",
  ].filter(Boolean).join("\n");
}

async function saveContactSubmission(
  input: ContactFormInput,
  supabaseUrl: string,
  supabaseSecretKey: string,
) {
  const endpoint = `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/contact_submissions`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        apikey: supabaseSecretKey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        company: input.brand,
        message: buildContactMessage(input),
      }),
    });

    if (response.ok) return true;

    let code = "unknown";
    try {
      const payload = await response.json() as { code?: unknown };
      if (typeof payload.code === "string") code = payload.code;
    } catch {
      // The HTTP status is enough for a safe server-side diagnostic.
    }

    console.error("Supabase contact insert error", { status: response.status, code });
    return false;
  } catch (error) {
    console.error(
      "Supabase contact insert request failed",
      error instanceof Error ? error.name : "UnknownError",
    );
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const input = normalizeContactInput(await request.json());

    if (input.companyWebsite) {
      return Response.json({ ok: true });
    }

    const errors = validateContactInput(input);
    if (hasValidationErrors(errors)) {
      return Response.json(
        { message: "Revisa los campos indicados.", errors },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const isDevelopment = process.env.NODE_ENV !== "production";

    if (!supabaseUrl || !supabaseSecretKey) {
      if (isDevelopment) {
        return Response.json({ ok: true, developmentMode: true });
      }

      console.error("Supabase contact configuration missing");
      return Response.json({ message: contactErrorMessage }, { status: 503 });
    }

    const saved = await saveContactSubmission(input, supabaseUrl, supabaseSecretKey);
    if (!saved) {
      return Response.json({ message: contactErrorMessage }, { status: 502 });
    }

    if (!resendApiKey || !to || !from) {
      console.error("Resend contact configuration missing after Supabase insert");
      return Response.json({ ok: true, developmentMode: isDevelopment, emailSent: false });
    }

    try {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: input.email,
        subject: `Nuevo diagnóstico — ${input.brand}`,
        text: [
          `Nombre: ${input.name}`,
          `Email: ${input.email}`,
          `Marca: ${input.brand}`,
          `Website: ${input.website}`,
          `Ingresos aproximados: ${input.approximateRevenue || "No indicado"}`,
          `Objetivo: ${input.growthGoal}`,
          `Cuello de botella: ${input.bottleneck}`,
          `Más información: ${input.moreAboutBrand || "No indicada"}`,
        ].join("\n\n"),
      });

      if (error) {
        console.error("Resend contact error after Supabase insert", error.name);
        return Response.json({ ok: true, emailSent: false });
      }
    } catch (error) {
      console.error(
        "Resend contact request failed after Supabase insert",
        error instanceof Error ? error.name : "UnknownError",
      );
      return Response.json({ ok: true, emailSent: false });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { message: "No pudimos procesar tu solicitud." },
      { status: 400 },
    );
  }
}
