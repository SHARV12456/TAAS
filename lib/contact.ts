export const DESIGNER_NAME = "Sharvayu Sawant";
export const WHATSAPP_NUMBER = "917400162509";
export const WHATSAPP_DISPLAY = "+91 74001 62509";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(message);

export const WHATSAPP_URL = buildWhatsAppUrl(
  "Hi TAAS, I have a question about my space/project. Please let me know the next step."
);

export const ADVANCE_TERMS = Object.freeze([
  "₹25,000 upfront confirms your slot.",
  "Reschedule free up to 48 hours before the visit.",
  "Refund: 50% if cancelled before the visit; none after.",
]);

export const CONTACT = Object.freeze({
  DESIGNER_NAME,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  ADVANCE_TERMS,
  buildWhatsAppUrl,
});

export const ADVANCE_TERMS_TEXT = ADVANCE_TERMS.join(" ");
