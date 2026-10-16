import React, { useState } from "react";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";
import { social_links } from "../data/data";
import {
  MessageSquare,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

/**
 * Contact Us Page (Complete Redesign)
 * The one question: "How do I reach them, and what will happen after I reach out?"
 * Client-first, honest, transparent, accessible.
 */
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "website",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    { value: "website", label: "New Website or Web App" },
    { value: "mobile", label: "Mobile App (iOS / Android)" },
    { value: "ecommerce", label: "E-Commerce Store & Checkout" },
    { value: "operations", label: "Custom Business Tool or Dashboard" },
    { value: "branding", label: "Visual Identity & Design System" },
    { value: "other", label: "General Project Consultation" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a phone or WhatsApp number.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are looking to build.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "website",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
      {/* Linear Ambient Spotlight Cone */}
      <div
        className="linear-spotlight-cone"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-12 md:pt-28 md:pb-16 px-5 sm:px-8 text-center flex flex-col items-center">
        <div className="hero-reveal linear-border-beam mb-4">
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-[#9EA3AD]">
              <span className="w-2 h-2 rounded-full bg-[#59D499] pulse-dot" />
              <span>Currently accepting new client projects</span>
            </div>
          </div>
        </div>

        <h1 className="hero-reveal-delay-1 text-[36px] sm:text-[52px] md:text-[64px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.1] max-w-3xl mb-5">
          Tell us about what you want to build
        </h1>

        <p className="hero-reveal-delay-2 text-[17px] sm:text-[20px] text-[#9EA3AD] max-w-2xl leading-relaxed">
          We will review your notes and reply within 1 business day with clear recommendations and a realistic quote.
        </p>
      </section>

      {/* Linear Traveling Hairline Light Beam */}
      <div className="hairline-beam" />

      {/* Main Content Grid: Direct Channels & Form */}
      <section className="w-full py-12 md:py-16 px-5 sm:px-8">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Alternatives & What Happens Next */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Direct Channel Cards */}
            <div>
              <h2 className="text-[22px] font-semibold text-[#F4F4F6] tracking-tight mb-2">
                Prefer to talk directly?
              </h2>
              <p className="text-[15px] text-[#9EA3AD] leading-relaxed mb-6">
                Skip the form and reach our founders directly on WhatsApp or email.
              </p>

              <div className="flex flex-col gap-3">
                {/* WhatsApp */}
                <a
                  href={social_links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[12px] bg-[#121316] border border-white/10 hover:border-[#59D499]/60 hover:bg-[#181A1E] transition-all flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[8px] bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center text-[#59D499]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[15px] font-medium text-[#F4F4F6] block">
                        WhatsApp Message
                      </span>
                      <span className="text-[13px] text-[#9EA3AD]">
                        Fastest for quick inquiries
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#767B85] group-hover:text-[#59D499] transition-colors" />
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:contact@cookieinc.in"
                  className="p-4 rounded-[12px] bg-[#121316] border border-white/10 hover:border-[#D9A55B]/60 hover:bg-[#181A1E] transition-all flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[8px] bg-[#D9A55B]/15 border border-[#D9A55B]/30 flex items-center justify-center text-[#D9A55B]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[15px] font-medium text-[#F4F4F6] block">
                        contact@cookieinc.in
                      </span>
                      <span className="text-[13px] text-[#9EA3AD]">
                        Replies within 24 hours
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#767B85] group-hover:text-[#D9A55B] transition-colors" />
                </a>

                {/* Chennai Studio HQ */}
                <div className="p-4 rounded-[12px] bg-[#121316] border border-white/10 flex items-center gap-3.5 min-h-[56px]">
                  <div className="w-10 h-10 rounded-[8px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#9EA3AD]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[15px] font-medium text-[#F4F4F6] block">
                      Chennai, India
                    </span>
                    <span className="text-[13px] text-[#9EA3AD]">
                      Studio headquarters and engineering base
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Timeline */}
            <div className="interactive-card p-6 rounded-[16px]">
              <h3 className="text-[17px] font-semibold text-[#F4F4F6] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D9A55B]" />
                What happens after you reach out?
              </h3>
              <ol className="space-y-4 text-[14px]">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/[0.08] text-[#D9A55B] font-semibold text-[12px] flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-[#F4F4F6]">Initial review within 24 hours</p>
                    <p className="text-[#9EA3AD]">We read your requirements and check our immediate schedule.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/[0.08] text-[#D9A55B] font-semibold text-[12px] flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-[#F4F4F6]">A quick 20-minute discussion</p>
                    <p className="text-[#9EA3AD]">A no-pressure conversation with the builders to clarify your exact objectives.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/[0.08] text-[#D9A55B] font-semibold text-[12px] flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-[#F4F4F6]">Fixed scope, price, and timeline</p>
                    <p className="text-[#9EA3AD]">You get a transparent written quote. No hidden costs, ever.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Reassurance Note */}
            <div className="flex items-center gap-3 text-[13px] text-[#767B85] px-1">
              <ShieldCheck className="w-4 h-4 text-[#59D499] shrink-0" />
              <span>We never share your information or send unrequested marketing emails.</span>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="interactive-card p-8 sm:p-10 rounded-[20px]">
              {isSuccess ? (
                <div
                  role="alert"
                  className="flex flex-col items-center text-center py-10 animate-[fade-up_200ms_ease-out]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center text-[#59D499] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-[26px] font-semibold text-[#F4F4F6] tracking-tight mb-3">
                    Thank you! We received your message.
                  </h2>
                  <p className="text-[16px] text-[#9EA3AD] max-w-md leading-relaxed mb-8">
                    Our team in Chennai will review your project details and get back to you within 1 business day.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="ghost"
                    size="md"
                    className="min-h-[44px]"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-[24px] font-semibold text-[#F4F4F6] tracking-tight mb-1">
                      Project inquiry
                    </h2>
                    <p className="text-[14px] text-[#9EA3AD]">
                      Fill out the form below and we will get back to you shortly.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="field-name"
                      className="text-[14px] font-medium text-[#F4F4F6]"
                    >
                      Your name <span className="text-[#D9A55B]">*</span>
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Arun Kumar"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="w-full h-12 px-4 rounded-[8px] bg-[#0A0B0D] border border-white/15 text-[#F4F4F6] text-[15px] placeholder-[#767B85] focus:outline-none focus:ring-2 focus:ring-[#D9A55B] focus:border-transparent transition-all"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-[13px] text-[#FF6363]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Contact Row: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="field-email"
                        className="text-[14px] font-medium text-[#F4F4F6]"
                      >
                        Email address <span className="text-[#D9A55B]">*</span>
                      </label>
                      <input
                        id="field-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="arun@company.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="w-full h-12 px-4 rounded-[8px] bg-[#0A0B0D] border border-white/15 text-[#F4F4F6] text-[15px] placeholder-[#767B85] focus:outline-none focus:ring-2 focus:ring-[#D9A55B] focus:border-transparent transition-all"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[13px] text-[#FF6363]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="field-phone"
                        className="text-[14px] font-medium text-[#F4F4F6]"
                      >
                        Phone / WhatsApp <span className="text-[#D9A55B]">*</span>
                      </label>
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className="w-full h-12 px-4 rounded-[8px] bg-[#0A0B0D] border border-white/15 text-[#F4F4F6] text-[15px] placeholder-[#767B85] focus:outline-none focus:ring-2 focus:ring-[#D9A55B] focus:border-transparent transition-all"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-[13px] text-[#FF6363]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="field-projectType"
                      className="text-[14px] font-medium text-[#F4F4F6]"
                    >
                      What are you looking to build?
                    </label>
                    <select
                      id="field-projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-[8px] bg-[#0A0B0D] border border-white/15 text-[#F4F4F6] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9A55B] focus:border-transparent transition-all cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt.value} value={pt.value} className="bg-[#0A0B0D] text-[#F4F4F6]">
                          {pt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="field-message"
                      className="text-[14px] font-medium text-[#F4F4F6]"
                    >
                      Tell us about your project or goals <span className="text-[#D9A55B]">*</span>
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a few sentences on what you need, your target audience, and your preferred timeline."
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full p-4 rounded-[8px] bg-[#0A0B0D] border border-white/15 text-[#F4F4F6] text-[15px] placeholder-[#767B85] focus:outline-none focus:ring-2 focus:ring-[#D9A55B] focus:border-transparent transition-all resize-y min-h-[110px]"
                    />
                    {errors.message && (
                      <p id="message-error" className="text-[13px] text-[#FF6363]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full min-h-[50px] font-semibold text-[16px] mt-2"
                  >
                    Send project inquiry
                  </Button>

                  <p className="text-[12px] text-[#767B85] text-center">
                    Typically answered within 1 business day · Zero obligation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
