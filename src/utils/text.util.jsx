/**
 * Text normalisation and case formatting utility.
 * Keeps meaning and order while normalising to sentence case.
 */

export function toSentenceCase(text) {
  if (!text || typeof text !== "string") return text;
  const trimmed = text.trim();
  if (trimmed.length === 0) return "";
  
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function normaliseCopy(text) {
  if (typeof text !== "string") return text;
  return text.trim();
}
