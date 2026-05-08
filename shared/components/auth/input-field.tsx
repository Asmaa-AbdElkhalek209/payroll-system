"use client";

import { InputFieldProps } from "../../types/auth-types";

export function InputField({
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onFocus,
  onBlur,
  icon: Icon,
  error,
  disabled = false,
  required = false,
  autoComplete,
  name,
}: InputFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>

      <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
        <Icon className="w-4 h-4 text-muted" aria-hidden="true" />
      </div>

      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full py-2.5 pr-3 pl-13 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
      />

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
