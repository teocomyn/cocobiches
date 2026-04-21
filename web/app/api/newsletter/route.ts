import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
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

  if (process.env.NEWSLETTER_WEBHOOK_URL) {
    try {
      await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "cocobiches.fr-newsletter" }),
      });
    } catch {
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
  } else {
    console.info("[newsletter]", { email });
  }

  return NextResponse.json({ ok: true });
}
