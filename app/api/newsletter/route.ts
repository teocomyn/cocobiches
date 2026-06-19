import { NextResponse } from "next/server";
import { escapeHtml } from "@/lib/html-escape";
import { relayWebhook, sendEmail, subscribeNewsletterBrevo } from "@/lib/email/dispatch";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { newsletterSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`newsletter:${ip}`, 6, 60_000);
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

  const parsed = newsletterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { email } = parsed.data;

  const sent =
    (await subscribeNewsletterBrevo(email)) ||
    (await relayWebhook(process.env.NEWSLETTER_WEBHOOK_URL, {
      email,
      source: "cocobiches.fr-newsletter",
    })) ||
    (await sendEmail({
      to: process.env.NEWSLETTER_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "bonjour@cocobiches.com",
      subject: "[Cocobiches] Inscription newsletter",
      html: `<p>Nouvelle inscription : ${escapeHtml(email)}</p>`,
    }));

  if (!sent) {
    if (process.env.NODE_ENV === "development") {
      console.info("[newsletter]", { email: `${email.slice(0, 3)}…` });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
