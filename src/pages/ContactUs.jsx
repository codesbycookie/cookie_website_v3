import React, { useState } from "react";
import { social_links } from "../data/data";
import SectionHeading from "../components/shared/SectionHeading";
import Card from "../components/shared/Card";
import Button from "../components/shared/Button";
import Badge from "../components/shared/Badge";
import FormField from "../components/shared/FormField";
import {
  MessageSquare,
  Mail,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"

  const serviceOptions = [
    { label: "Web Application Development", value: "web-development" },
    { label: "Native Mobile App Development", value: "mobile-development" },
    { label: "Custom ERP & CRM Systems", value: "erp-systems" },
    { label: "UI/UX Design & Design Systems", value: "ui-ux-design" },
    { label: "Brand Strategy & Identity", value: "branding" },
    { label: "Digital Growth & Marketing", value: "digital-marketing" },
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone / WhatsApp number is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Please describe your project scope or objectives";
    }
    return errs;
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
      return;
    }

    setStatus("loading");
    setErrors({});

    // Simulate backend transmission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "web-development",
        message: "",
      });
    }, 700);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero / Header */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 bg-[#08090A] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
            Contact
          </div>

          <h1 className="reveal gradient-text text-[40px] sm:text-[58px] md:text-[72px] font-medium tracking-[-0.04em] leading-[1.05] mb-6" style={{ animationDelay: "60ms" }}>
            Let us build something together
          </h1>

          <p className="reveal text-[17px] sm:text-[20px] text-[#8A8F98] max-w-xl leading-relaxed" style={{ animationDelay: "120ms" }}>
            Direct access to our founders in Chennai. Tell us about your idea and get a reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Split Layout: Channels on Left, Form on Right */}
      <section className="w-full py-20 md:py-28 bg-[#08090A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct channels & studio telemetry */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-[24px] font-semibold text-[#F4F4F6] mb-3">
                  Direct channels
                </h2>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                  Choose your preferred channel for discovery calls, RFPs, or technical consultations.
                </p>
              </div>

              {/* Channel Cards */}
              <div className="flex flex-col gap-4">
                {/* WhatsApp */}
                <a
                  href={social_links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-[10px] bg-[#2F3031]/50 border border-[#494B4D] hover:border-[#59D499] hover:bg-[#2F3031] transition-all duration-100 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[6px] bg-[#08090A] border border-[#494B4D] flex items-center justify-center text-[#59D499]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[14px] font-semibold text-[#F4F4F6] block">
                        WhatsApp Studio
                      </span>
                      <span className="font-mono text-[12px] text-[#8A8F98]">
                        wa.cookie.org.in · Instant chat
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8A8F98] group-hover:text-[#59D499] transition-colors" />
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:contact@cookieinc.in"
                  className="p-5 rounded-[10px] bg-[#2F3031]/50 border border-[#494B4D] hover:border-[#57C1FF] hover:bg-[#2F3031] transition-all duration-100 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[6px] bg-[#08090A] border border-[#494B4D] flex items-center justify-center text-[#57C1FF]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[14px] font-semibold text-[#F4F4F6] block">
                        Direct Email
                      </span>
                      <span className="font-mono text-[12px] text-[#8A8F98]">
                        contact@cookieinc.in
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8A8F98] group-hover:text-[#57C1FF] transition-colors" />
                </a>

                {/* Google My Business */}
                <a
                  href={social_links.gmb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-[10px] bg-[#2F3031]/50 border border-[#494B4D] hover:border-[#FFC533] hover:bg-[#2F3031] transition-all duration-100 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[6px] bg-[#08090A] border border-[#494B4D] flex items-center justify-center text-[#FFC533]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[14px] font-semibold text-[#F4F4F6] block">
                        Chennai Studio HQ
                      </span>
                      <span className="font-mono text-[12px] text-[#8A8F98]">
                        Google My Business verification
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8A8F98] group-hover:text-[#FFC533] transition-colors" />
                </a>
              </div>

              {/* Guarantees & SLA Card */}
              <div className="p-6 rounded-[12px] bg-[#08090A] border border-[#494B4D] flex flex-col gap-4 font-mono text-[12px]">
                <div className="flex items-center gap-2.5 text-[#59D499]">
                  <Clock className="w-4 h-4" />
                  <span>24-Hour SLA on all discovery briefs</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#D0D6E0]">
                  <ShieldCheck className="w-4 h-4 text-[#57C1FF]" />
                  <span>Strict NDA and intellectual property protection</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form with All States */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[12px] bg-[#2F3031]/40 border border-[#494B4D] shadow-[0_20px_80px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <div className="mb-8">
                  <h2 className="text-[22px] font-semibold text-[#F4F4F6] mb-1">
                    Project Dispatch Form
                  </h2>
                  <p className="text-[13px] text-[#8A8F98]">
                    Fields marked with an asterisk (<span className="text-[#D9A55B]">*</span>) are mandatory.
                  </p>
                </div>

                {status === "success" ? (
                  <div
                    role="status"
                    className="p-8 rounded-[8px] bg-[#59D499]/10 border border-[#59D499]/50 flex flex-col items-center text-center gap-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-[#59D499]" />
                    <h3 className="text-[20px] font-semibold text-[#F4F4F6]">
                      Transmission Confirmed
                    </h3>
                    <p className="text-[14px] text-[#D0D6E0] max-w-md">
                      Thank you. Your project brief has been routed to our technical architect. We will review your requirements and reply within 24 hours.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setStatus("idle")}
                      className="mt-2"
                    >
                      Transmit another inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        label="Full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Satish Kumar"
                        required
                        error={errors.name}
                      />

                      <FormField
                        label="Work email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="satish@company.com"
                        required
                        error={errors.email}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        label="Phone / WhatsApp"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        error={errors.phone}
                      />

                      <FormField
                        label="Target service"
                        name="service"
                        as="select"
                        value={formData.service}
                        onChange={handleChange}
                        options={serviceOptions}
                        required
                      />
                    </div>

                    <FormField
                      label="Project brief & goals"
                      name="message"
                      as="textarea"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your timeline, current stack, challenges, and deliverables..."
                      required
                      error={errors.message}
                      helperText="Include any reference links, deadline requirements, or technical constraints."
                    />

                    <div className="pt-4 border-t border-[#494B4D]/50 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#62666D]">
                        Encrypted transmission · TLS 1.3
                      </span>

                      {/* ONE Primary CTA per viewport */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={status === "loading"}
                        ariaLabel="Transmit project inquiry"
                      >
                        <span>Transmit inquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
