import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
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

  // Branchement futur : Resend, SendGrid, etc.
  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "cocobiches.fr",
          name,
          email,
          message,
        }),
      });
    } catch {
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
  } else {
    console.info("[contact]", { name, email, len: message.length });
  }

  return NextResponse.json({ ok: true });
}
