import React, { useState, useRef, useEffect } from "react";
import { social_links } from "../../../../data/data";
import { sendInquiryEmail } from "../../../../utils/emailjs.services.jsx";
import {
  MessageSquare,
  Mail,
  MapPin,
  ArrowUpRight,
  Check,
  AlertCircle,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export default function Section2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "website",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const successRef = useRef(null);

  useEffect(() => {
    if (isSuccess && successRef.current) {
      successRef.current.focus();
    }
  }, [isSuccess]);

  const projectTypes = [
    { value: "website", label: "New Website or Web App" },
    { value: "mobile", label: "Mobile App (iOS / Android)" },
    { value: "ecommerce", label: "E-Commerce Store & Checkout" },
    { value: "operations", label: "Custom Business Tool or Dashboard" },
    { value: "branding", label: "Visual Identity & Design System" },
    { value: "other", label: "General Project Consultation" },
  ];

  const validateField = (name, value) => {
    if (name === "name" && !value.trim()) {
      return "Please enter your name.";
    }
    if (name === "email") {
      if (!value.trim()) {
        return "Please enter your email address.";
      }
      if (!value.includes("@") || !value.includes(".")) {
        return "Please enter a valid email address.";
      }
    }
    if (name === "phone" && !value.trim()) {
      return "Please enter a phone or WhatsApp number.";
    }
    if (name === "message" && !value.trim()) {
      return "Please describe what you are looking to build.";
    }
    return undefined;
  };

  const validate = () => {
    const newErrors = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField("phone", formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const msgErr = validateField("message", formData.message);
    if (msgErr) newErrors.message = msgErr;

    return newErrors;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const selectedType = projectTypes.find((t) => t.value === formData.projectType);
    const projectTitle = selectedType ? selectedType.label : formData.projectType;

    try {
      await sendInquiryEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: projectTitle,
        message: formData.message,
      });

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "website",
        message: "",
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setSubmitError(
        "Failed to send your message. Please reach us directly on WhatsApp or email (contact@cookieinc.in)."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-10 w-full py-12 md:py-16 px-6 sm:px-8">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Right Column: Project Inquiry Form */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="rounded-[16px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] p-6 sm:p-8 md:p-9 shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]">
            {isSuccess ? (
              <div
                ref={successRef}
                tabIndex="-1"
                role="status"
                className="flex flex-col items-center text-center py-10 px-4 linear-fade-in outline-none"
              >
                <div className="w-12 h-12 rounded-full border border-white/[0.12] bg-white/[0.02] flex items-center justify-center mb-5 text-[#F7F8F8]">
                  <Check className="w-5 h-5 text-[#F7F8F8]" aria-hidden="true" />
                </div>
                <h2 className="text-[22px] sm:text-[24px] font-medium text-[#F7F8F8] tracking-tight mb-2.5">
                  Message sent
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#8A8F98] max-w-sm leading-relaxed mb-7">
                  Our team in Chennai will review your project details and get back to you within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 rounded-full text-[13px] text-[#8A8F98] hover:text-[#F7F8F8] border border-white/[0.08] hover:border-white/[0.16] bg-white/[0.02] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="linear-fade-in flex flex-col gap-6">
                <div>
                  <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F7F8F8] tracking-[-0.02em] mb-1">
                    Project inquiry
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-[#8A8F98]">
                    Fill out the form below and we will get back to you shortly.
                  </p>
                </div>

                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="field-name"
                    className="text-[13px] sm:text-[14px] font-medium text-[#F7F8F8] flex items-center gap-1"
                  >
                    <span>Your name</span>
                    <span className="text-[#8A8F98] select-none" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    placeholder="e.g. Arun Kumar"
                    aria-required="true"
                    aria-invalid={Boolean(errors.name && touched.name)}
                    aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                    className={`w-full h-[44px] px-3.5 rounded-[10px] bg-white/[0.02] text-[#F7F8F8] text-[16px] sm:text-[14px] placeholder-[#62666D] transition-colors focus:outline-none focus:border-[#D9A55B]/60 focus:ring-4 focus:ring-[#D9A55B]/[0.06] disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.name && touched.name
                        ? "border border-white/40"
                        : "border border-white/[0.08] hover:border-white/[0.16]"
                    }`}
                  />
                  {errors.name && touched.name && (
                    <div id="name-error" className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#F7F8F8] pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#F7F8F8]" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Contact Row: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="field-email"
                      className="text-[13px] sm:text-[14px] font-medium text-[#F7F8F8] flex items-center gap-1"
                    >
                      <span>Email address</span>
                      <span className="text-[#8A8F98] select-none" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="arun@company.com"
                      aria-required="true"
                      aria-invalid={Boolean(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                      className={`w-full h-[44px] px-3.5 rounded-[10px] bg-white/[0.02] text-[#F7F8F8] text-[16px] sm:text-[14px] placeholder-[#62666D] transition-colors focus:outline-none focus:border-[#D9A55B]/60 focus:ring-4 focus:ring-[#D9A55B]/[0.06] disabled:opacity-60 disabled:cursor-not-allowed ${
                        errors.email && touched.email
                          ? "border border-white/40"
                          : "border border-white/[0.08] hover:border-white/[0.16]"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <div id="email-error" className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#F7F8F8] pt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#F7F8F8]" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="field-phone"
                      className="text-[13px] sm:text-[14px] font-medium text-[#F7F8F8] flex items-center gap-1"
                    >
                      <span>Phone / WhatsApp</span>
                      <span className="text-[#8A8F98] select-none" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="field-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="+91 98765 43210"
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone && touched.phone)}
                      aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                      className={`w-full h-[44px] px-3.5 rounded-[10px] bg-white/[0.02] text-[#F7F8F8] text-[16px] sm:text-[14px] placeholder-[#62666D] transition-colors focus:outline-none focus:border-[#D9A55B]/60 focus:ring-4 focus:ring-[#D9A55B]/[0.06] disabled:opacity-60 disabled:cursor-not-allowed ${
                        errors.phone && touched.phone
                          ? "border border-white/40"
                          : "border border-white/[0.08] hover:border-white/[0.16]"
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <div id="phone-error" className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#F7F8F8] pt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#F7F8F8]" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Type Select */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="field-projectType"
                    className="text-[13px] sm:text-[14px] font-medium text-[#F7F8F8]"
                  >
                    What are you looking to build?
                  </label>
                  <div className="relative">
                    <select
                      id="field-projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full h-[44px] pl-3.5 pr-10 rounded-[10px] bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] text-[#F7F8F8] text-[16px] sm:text-[14px] appearance-none cursor-pointer focus:outline-none focus:border-[#D9A55B]/60 focus:ring-4 focus:ring-[#D9A55B]/[0.06] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt.value} value={pt.value} className="bg-[#08090A] text-[#F7F8F8]">
                          {pt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="w-4 h-4 text-[#8A8F98] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="field-message"
                    className="text-[13px] sm:text-[14px] font-medium text-[#F7F8F8] flex items-center gap-1"
                  >
                    <span>Tell us about your project or goals</span>
                    <span className="text-[#8A8F98] select-none" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    placeholder="Share a few sentences on what you need, your target audience, and your preferred timeline."
                    aria-required="true"
                    aria-invalid={Boolean(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                    className={`w-full min-h-[110px] p-3.5 rounded-[10px] bg-white/[0.02] text-[#F7F8F8] text-[16px] sm:text-[14px] placeholder-[#62666D] resize-y transition-colors focus:outline-none focus:border-[#D9A55B]/60 focus:ring-4 focus:ring-[#D9A55B]/[0.06] disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.message && touched.message
                        ? "border border-white/40"
                        : "border border-white/[0.08] hover:border-white/[0.16]"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <div id="message-error" className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#F7F8F8] pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#F7F8F8]" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {submitError && (
                  <p className="text-[13px] text-[#8A8F98] text-center" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[46px] rounded-full bg-[#FAF6EE] hover:bg-[#FFFDF9] text-[#08090A] font-medium text-[14px] sm:text-[15px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_0_24px_rgba(217,165,91,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="inline-block w-3.5 h-3.5 rounded-full border border-[#08090A]/30 border-t-[#08090A] animate-spin"
                        aria-hidden="true"
                      />
                      <span>Sending</span>
                    </>
                  ) : (
                    <span>Send project inquiry</span>
                  )}
                </button>

                <p className="text-[12px] text-[#62666D] text-center">
                  Typically answered within 1 business day · Zero obligation
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Left Column: Direct Channels & What Happens Next */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-10">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F7F8F8] tracking-[-0.02em] mb-2">
              Prefer to talk directly?
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed mb-6">
              Skip the form and reach our founders directly on WhatsApp or email.
            </p>

            <div className="rounded-[14px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] overflow-hidden divide-y divide-white/[0.06] shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]">
              <a
                href={social_links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-4.5 flex items-center justify-between group hover:bg-white/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              >
                <div className="flex items-center gap-3.5">
                  <MessageSquare className="w-[18px] h-[18px] text-[#8A8F98] group-hover:text-[#D9A55B] transition-colors shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] block">
                      WhatsApp Message
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-[#8A8F98]">
                      Fastest for quick inquiries
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#62666D] group-hover:text-[#FAF5EB] transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  aria-hidden="true"
                />
              </a>

              <a
                href="mailto:contact@cookieinc.in"
                className="p-4 sm:p-4.5 flex items-center justify-between group hover:bg-white/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              >
                <div className="flex items-center gap-3.5">
                  <Mail className="w-[18px] h-[18px] text-[#8A8F98] group-hover:text-[#D9A55B] transition-colors shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] block">
                      contact@cookieinc.in
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-[#8A8F98]">
                      Replies within 24 hours
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#62666D] group-hover:text-[#FAF5EB] transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  aria-hidden="true"
                />
              </a>

              <div className="p-4 sm:p-4.5 flex items-center gap-3.5">
                <MapPin className="w-[18px] h-[18px] text-[#D9A55B]/80 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] block">
                    Chennai, India
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-[#8A8F98]">
                    Studio headquarters and engineering base
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[16px] sm:text-[17px] font-medium text-[#F7F8F8] tracking-[-0.01em] mb-6">
              What happens after you reach out?
            </h3>
            <ol className="relative pl-7 space-y-6 before:absolute before:left-[10px] before:top-2 before:bottom-3 before:w-[1px] before:bg-white/[0.08]">
              {[
                {
                  step: "1",
                  title: "Initial review within 24 hours",
                  desc: "We read your requirements and check our immediate schedule.",
                },
                {
                  step: "2",
                  title: "A quick 20-minute discussion",
                  desc: "A no-pressure conversation with the builders to clarify your exact objectives.",
                },
                {
                  step: "3",
                  title: "Fixed scope, price, and timeline",
                  desc: "You get a transparent written quote. No hidden costs, ever.",
                },
              ].map((item, idx) => (
                <li
                  key={item.step}
                  className="relative linear-fade-in"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <span className="absolute -left-7 top-0.5 w-[21px] h-[21px] rounded-full bg-[rgba(217,165,91,0.04)] border border-[#D9A55B]/25 text-[#FAF5EB] font-mono tabular-nums text-[11px] flex items-center justify-center shrink-0 z-10 shadow-[inset_0_1px_0_rgba(217,165,91,0.10)]">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-[#F7F8F8] mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex items-center gap-2.5 text-[13px] text-[#8A8F98]">
            <ShieldCheck className="w-[18px] h-[18px] text-[#8A8F98] shrink-0" aria-hidden="true" />
            <span>We never share your information or send unrequested marketing emails.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
