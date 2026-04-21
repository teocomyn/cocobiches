import { ImageResponse } from "next/og";
import { getLocaleFromParams } from "@/lib/locale-params";

export const runtime = "edge";
export const alt = "Cocobiches";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = (await getLocaleFromParams(params)) ?? "fr";
  const line =
    locale === "fr"
      ? "Trois maisons à Versailles"
      : "Three houses in Versailles";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#2d3077",
          color: "#f4e7db",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          padding: 56,
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-0.04em" }}>
          Cocobiches
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 28,
            opacity: 0.92,
            fontWeight: 500,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {line}
        </div>
      </div>
    ),
    { ...size },
  );
}
