import { expect, test } from "@playwright/test";

const routes = [
  "/fr",
  "/fr/journal",
  "/fr/contact",
  "/fr/engagements",
  "/fr/presse",
  "/fr/partenaires",
  "/fr/mentions-legales",
  "/fr/politique-confidentialite",
  "/fr/hotel-jeu-de-paume",
  "/fr/hotel-jeu-de-paume/seminaires/demande-devis",
  "/fr/hotel-angleterre",
  "/fr/hotel-angleterre/chambres",
  "/fr/hotel-angleterre/galerie",
  "/fr/apparts-oncle-louis",
  "/en/journal",
  "/en/contact",
];

for (const route of routes) {
  test(`loads ${route}`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("#main")).toBeVisible();
  });
}

test("journal article renders", async ({ page }) => {
  await page.goto("/fr/journal");
  const firstArticle = page.locator('a[href*="/fr/journal/"]').first();
  await expect(firstArticle).toBeVisible();
  await firstArticle.click();
  await expect(page.locator("article, h1")).toBeVisible();
});

test("contact form is present", async ({ page }) => {
  await page.goto("/fr/contact");
  await expect(page.locator("form")).toBeVisible();
});

test("blog redirects to journal", async ({ page }) => {
  await page.goto("/fr/blog");
  await expect(page).toHaveURL(/\/fr\/journal$/);
});
