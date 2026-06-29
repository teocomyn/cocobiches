import { describe, expect, it } from "vitest";
import { seminaireDevisSchema } from "@/lib/validation/seminaire-devis";
import { contactFormSchema } from "@/lib/validation/contact";
import { HOTELS, hotelTag } from "@/lib/hotels-data";

describe("hotels-data", () => {
  it("uses consistent room counts", () => {
    expect(HOTELS.angleterre.rooms).toBe(20);
    expect(HOTELS.jeudepaume.rooms).toBe(16);
    expect(HOTELS.onclelouis.rooms).toBe(12);
  });

  it("builds French tags", () => {
    expect(hotelTag(HOTELS.jeudepaume, "fr")).toContain("16");
  });
});

describe("contactFormSchema", () => {
  it("rejects honeypot", () => {
    const r = contactFormSchema.safeParse({
      name: "Test",
      email: "a@b.com",
      message: "Hello world test",
      website: "spam",
    });
    expect(r.success).toBe(false);
  });
});

describe("seminaireDevisSchema", () => {
  it("accepts valid payload", () => {
    const r = seminaireDevisSchema.safeParse({
      name: "Marie",
      email: "marie@corp.com",
      company: "Corp",
      dates: "12-14 septembre 2026",
      participants: 25,
      format: "journee",
      yurt: true,
    });
    expect(r.success).toBe(true);
  });
});
