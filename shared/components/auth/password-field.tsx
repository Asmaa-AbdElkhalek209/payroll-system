"use client";

import { Lock, Eye, EyeOff } from "lucide-react";
import { PasswordFieldProps } from "../../types/auth-types";

export function PasswordField({
  id,
  placeholder = "Password",
  value,
  onChange,
  onFocus,
  onBlur,
  showPassword = false,
  onTogglePassword,
  error,
  disabled = false,
  required = false,
  autoComplete,
  name,
}: PasswordFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>

      <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
        <Lock className="w-4 h-4 text-muted" aria-hidden="true" />
      </div>

      <input
        id={id}
        type={showPassword ? "text" : "password"}
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
        className="w-full py-2.5 pr-10 pl-13 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <button
        type="button"
        onClick={onTogglePassword}
        aria-label={showPassword ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text transition-colors"
      >
        {showPassword ? (
          <EyeOff className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Eye className="w-4 h-4" aria-hidden="true" />
        )}
      </button>

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
