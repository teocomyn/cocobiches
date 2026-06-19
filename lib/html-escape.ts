/** Escape user input before interpolation into HTML emails. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function nl2brEscaped(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}
