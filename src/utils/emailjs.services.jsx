import emailjs from "emailjs-com";

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_nwye6s1",
  TEMPLATE_ID: "template_uni6ca5",
  PUBLIC_KEY: "IbUuNjS3kDnY33WLy",
};

/**
 * Sends a project inquiry email using EmailJS
 * @param {Object} params
 * @param {string} params.name - Client name
 * @param {string} params.email - Client email address
 * @param {string} [params.phone] - Client phone or WhatsApp number
 * @param {string} params.title - Project inquiry title / type
 * @param {string} params.message - Project briefing message
 */
export async function sendInquiryEmail({ name, email, phone, title, message }) {
  const templateParams = {
    name,
    to_name: name,
    from_name: name,
    email,
    reply_to: email,
    phone: phone || "Not provided",
    title,
    project_type: title,
    message,
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
}

export default sendInquiryEmail;
