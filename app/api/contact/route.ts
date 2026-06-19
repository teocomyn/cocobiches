import { NextResponse } from "next/server";
import { relayWebhook, sendEmail } from "@/lib/email/dispatch";
import { escapeHtml, nl2brEscaped } from "@/lib/html-escape";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`contact:${ip}`, 8, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limit" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? "bonjour@cocobiches.com";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const sent =
    (await sendEmail({
      to,
      subject: `[Cocobiches] Contact · ${name}`,
      replyTo: email,
      html: `<p><strong>${safeName}</strong> &lt;${safeEmail}&gt;</p><p>${nl2brEscaped(message)}</p>`,
    })) ||
    (await relayWebhook(process.env.CONTACT_WEBHOOK_URL, {
      source: "cocobiches.fr",
      name,
      email,
      message,
    }));

  if (!sent) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", { name, len: message.length });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  await sendEmail({
    to: email,
    subject: `Cocobiches · nous avons bien reçu votre message`,
    html: confirmationHtml(safeName, message),
  }).catch(() => undefined);

  return NextResponse.json({ ok: true });
}

function confirmationHtml(name: string, message: string): string {
  return `<p>Bonjour ${name},</p><p>Merci pour votre message. Notre équipe à Versailles vous répondra sous 24 à 48 h ouvrées.</p><blockquote style="border-left:3px solid #2d3077;padding-left:12px;color:#4a4a4a">${nl2brEscaped(message)}</blockquote><p>À très bientôt,<br/>L'équipe Cocobiches</p>`;
}
