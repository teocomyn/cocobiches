import { NextResponse } from "next/server";
import { relayWebhook, sendEmail } from "@/lib/email/dispatch";
import { escapeHtml, nl2brEscaped } from "@/lib/html-escape";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { seminaireDevisSchema } from "@/lib/validation/seminaire-devis";

const FORMAT_LABELS: Record<string, string> = {
  journee: "Journée d'étude",
  "demi-journee": "Demi-journée",
  residentiel: "Séminaire résidentiel",
  privatisation: "Privatisation",
};

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`seminaire:${ip}`, 5, 60_000);
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

  const parsed = seminaireDevisSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to =
    process.env.SEMINAIRE_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    "events.hoteljdp.versailles@gmail.com";

  const html = `
    <h2>Demande de devis séminaire · Jeu de Paume</h2>
    <ul>
      <li><strong>Nom :</strong> ${escapeHtml(data.name)}</li>
      <li><strong>Email :</strong> ${escapeHtml(data.email)}</li>
      <li><strong>Entreprise :</strong> ${escapeHtml(data.company)}</li>
      <li><strong>Téléphone :</strong> ${escapeHtml(data.phone ?? "—")}</li>
      <li><strong>Dates :</strong> ${escapeHtml(data.dates)}</li>
      <li><strong>Participants :</strong> ${escapeHtml(String(data.participants))}</li>
      <li><strong>Format :</strong> ${escapeHtml(FORMAT_LABELS[data.format] ?? data.format)}</li>
      <li><strong>Yourte :</strong> ${data.yurt ? "Oui" : "Non"}</li>
    </ul>
    ${data.message ? `<p>${nl2brEscaped(data.message)}</p>` : ""}
  `;

  const sent =
    (await sendEmail({
      to,
      subject: `[Jeu de Paume] Devis séminaire · ${data.company}`,
      replyTo: data.email,
      html,
    })) ||
    (await relayWebhook(process.env.CONTACT_WEBHOOK_URL, {
      source: "cocobiches.fr-seminaire-devis",
      ...data,
    }));

  if (!sent) {
    if (process.env.NODE_ENV === "development") {
      console.info("[seminaire-devis]", { company: data.company, participants: data.participants });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  await sendEmail({
    to: data.email,
    subject: "Cocobiches · demande de devis séminaire reçue",
    html: `<p>Bonjour ${escapeHtml(data.name)},</p><p>Nous avons bien reçu votre demande de devis pour <strong>${escapeHtml(data.company)}</strong>. Fanny et l'équipe événements du Jeu de Paume vous recontacteront rapidement.</p>`,
  }).catch(() => undefined);

  return NextResponse.json({ ok: true });
}
