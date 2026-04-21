import { describe, expect, it } from "vitest";
import { href } from "@/lib/paths";

describe("href", () => {
  it("prefixes locale for home", () => {
    expect(href("fr", "/")).toBe("/fr");
  });

  it("prefixes locale for nested paths", () => {
    expect(href("en", "/contact")).toBe("/en/contact");
  });

  it("normalizes paths without leading slash", () => {
    expect(href("fr", "mentions-legales")).toBe("/fr/mentions-legales");
  });
});
