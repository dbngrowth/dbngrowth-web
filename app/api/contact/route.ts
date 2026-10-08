import { Resend } from "resend";

import {
  type ContactFormInput,
  hasValidationErrors,
  normalizeContactInput,
  validateContactInput,
} from "@/lib/validations";

const contactErrorMessage = "No pudimos procesar tu solicitud. Intenta de nuevo en unos minutos.";

async function saveContactToGoogleSheets(
  input: ContactFormInput,
  webhookUrl: string,
  formSecret: string,
) {
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: formSecret,
        name: input.name,
        email: input.email,
        brand: input.brand,
        website: input.website,
        growthGoal: input.growthGoal,
        bottleneck: input.bottleneck,
        revenue: input.approximateRevenue || "",
        message: input.moreAboutBrand || "",
      }),
    });

    if (!response.ok) {
      console.error("Google Sheets contact insert error", { status: response.status });
      return false;
    }

    let data: { ok?: unknown };
    try {
      data = await response.json() as { ok?: unknown };
    } catch {
      console.error("Google Sheets contact response invalid JSON");
      return false;
    }

    if (data.ok !== true) {
      console.error("Google Sheets contact insert was not confirmed");
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Google Sheets contact insert request failed",
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

    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const formSecret = process.env.DBN_FORM_SECRET;
    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const isDevelopment = process.env.NODE_ENV !== "production";

    if (!googleSheetsWebhookUrl || !formSecret) {
      if (isDevelopment) {
        return Response.json({ ok: true, developmentMode: true });
      }

      console.error("Google Sheets contact configuration missing");
      return Response.json({ message: contactErrorMessage }, { status: 503 });
    }

    const saved = await saveContactToGoogleSheets(input, googleSheetsWebhookUrl, formSecret);
    if (!saved) {
      return Response.json({ message: contactErrorMessage }, { status: 502 });
    }

    if (!resendApiKey || !to || !from) {
      console.error("Resend contact configuration missing after Google Sheets insert");
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
        console.error("Resend contact error after Google Sheets insert", error.name);
        return Response.json({ ok: true, emailSent: false });
      }
    } catch (error) {
      console.error(
        "Resend contact request failed after Google Sheets insert",
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
