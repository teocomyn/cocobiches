import Script from "next/script";

/** Analytics respectueux — activer avec NEXT_PUBLIC_PLAUSIBLE_DOMAIN=votredomaine.fr */
export function PlausibleAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="lazyOnload"
    />
  );
}
