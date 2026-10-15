import React, { useId } from "react";

/**
 * FormField primitive:
 * - Supports input, textarea, select
 * - Full states: default, hover, focus, error, success, disabled, loading
 * - 3:1 contrast focus ring
 * - Accessible labels, error live regions, helper text
 */
export default function FormField({
  label,
  name,
  type = "text",
  as = "input", // "input" | "textarea" | "select"
  value,
  onChange,
  placeholder,
  required = false,
  error,
  success,
  disabled = false,
  loading = false,
  helperText,
  options = [], // For select: [{ label, value }]
  rows = 4,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const fieldId = name || generatedId;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;

  const baseInputStyles =
    "w-full px-3.5 py-2.5 rounded-[6px] bg-[#08090A] text-[#F4F4F6] text-[14px] border transition-colors duration-100 ease-in-out placeholder:text-[#62666D] focus:outline-none focus:ring-1";

  const stateStyles = error
    ? "border-[#D9A55B] focus:border-[#D9A55B] focus:ring-[#D9A55B]"
    : success
    ? "border-[#59D499] focus:border-[#59D499] focus:ring-[#59D499]"
    : "border-[#494B4D] hover:border-[#8A8F98] focus:border-[#D9A55B] focus:ring-[#D9A55B]";

  const disabledStyles = disabled || loading ? "opacity-40 cursor-not-allowed" : "";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={fieldId}
          className="text-[13px] font-mono text-[#D0D6E0] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-[#D9A55B] ml-1">*</span>}
          </span>
          {loading && (
            <span className="text-[11px] text-[#8A8F98] animate-pulse">
              saving...
            </span>
          )}
        </label>
      )}

      {as === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled || loading}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${baseInputStyles} ${stateStyles} ${disabledStyles} resize-y min-h-[100px]`}
          {...props}
        />
      ) : as === "select" ? (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled || loading}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${baseInputStyles} ${stateStyles} ${disabledStyles} cursor-pointer`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="bg-[#08090A] text-[#62666D]">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-[#2F3031] text-[#F4F4F6]"
            >
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled || loading}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${baseInputStyles} ${stateStyles} ${disabledStyles}`}
          {...props}
        />
      )}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="text-[12px] font-mono text-[#D9A55B] mt-0.5"
        >
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-[12px] text-[#8A8F98] mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
