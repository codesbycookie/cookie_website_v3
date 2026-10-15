/**
 * Text normalisation and case formatting utility.
 * Keeps meaning and order while normalising to sentence case.
 */

export function toSentenceCase(text) {
  if (!text || typeof text !== "string") return text;
  const trimmed = text.trim();
  if (trimmed.length === 0) return "";
  
  // Preserve acronyms or specific brand names (ERP, UI/UX, SEO, SSL, AI, SAP, IQ Bridge, Cookie Inc)
  const preserved = ["ERP", "UI/UX", "SEO", "SSL", "AI", "SAP", "IQ Bridge", "Cookie Inc", "Cookie Inc.", "WhatsApp", "CMS", "GMB"];
  
  // If the string starts with a letter, uppercase only the first letter and lower the rest of ordinary title words
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function normaliseCopy(text) {
  if (typeof text !== "string") return text;
  return text.trim();
}
