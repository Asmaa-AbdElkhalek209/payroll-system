"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { PasswordFieldProps } from "../../types/auth-types";

export function PasswordField({
  id,
  placeholder = "Password",
  onFocus,
  onBlur,
  error,
  disabled = false,
  required = false,
  autoComplete,
  name,
  register,
  ...rest
}: PasswordFieldProps & Record<string, any>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>

      {/* Input wrapper */}
      <div className="relative">
        {/* Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
          <Lock className="w-4 h-4 text-muted" aria-hidden="true" />
        </div>

        {/* Input */}
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full py-2.5 pr-10 pl-13 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          /* Forward rest (may include name, onChange, ref when parent spreads register)") */
          {...rest}
          /* RHF support (takes precedence) */
          {...(register ? register : {})}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Eye className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Error (outside input completely) */}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500 ml-1">
          {error}
        </p>
      )}
    </div>
  );
}
