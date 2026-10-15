import React from "react";
import { Link } from "react-router-dom";

/**
 * Button primitive with Linear's signature specular highlight & satin gradients:
 * - 0.1s transition (100ms)
 * - 1 primary CTA per viewport rule
 * - 3:1 contrast focus-visible ring
 * - Primary (satin crimson #D9A55B with inset specular highlight)
 * - Ghost (translucent obsidian glass with hairline border)
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  ariaLabel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-100 ease-in-out cursor-pointer select-none text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-[12px] h-8 px-3.5 rounded-full gap-1.5",
    md: "text-[13px] sm:text-[14px] h-10 px-5 rounded-full gap-2",
    lg: "text-[15px] h-12 px-7 rounded-full gap-2.5",
  };

  const variantStyles = {
    primary:
      "linear-btn-primary font-semibold text-[#08090A]",
    cream:
      "linear-btn-cream font-semibold text-[#0A0A0A]",
    brand:
      "linear-btn-cream font-semibold text-[#0A0A0A]",
    ghost:
      "linear-btn-ghost font-medium text-[#F4F4F6]",
    subtle:
      "bg-[#2F3031]/40 text-[#D0D6E0] border border-[#494B4D]/50 hover:border-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#2F3031]/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
  };

  const disabledStyles = disabled || loading
    ? "opacity-40 cursor-not-allowed pointer-events-none"
    : "";

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabledStyles} ${className}`.trim();

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClass}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
}
