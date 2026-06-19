export type PressDownload = {
  id: "kit" | "logos" | "photos";
  href: string;
  ext: string;
  size?: string;
};

export const PRESS_DOWNLOADS: PressDownload[] = [
  { id: "kit", href: "/press/dossier-presse-cocobiches.html", ext: "HTML" },
  { id: "logos", href: "/brand/cocobiches-logo.png", ext: "PNG" },
  { id: "photos", href: "/press/photos-cocobiches.zip", ext: "ZIP", size: "~1 Mo" },
];

export const PRESS_EMAIL = "presse@cocobiches.com";
