"use client";

import { OtpInputProps } from "../../types/auth-types";

export function OtpInput({
  value,
  onChange,
  length = 4,
  error,
  disabled = false,
}: OtpInputProps) {
  const handleChange = (inputValue: string, index: number) => {
    const newValue = [...value];
    newValue[index] = inputValue.slice(-1);
    onChange(newValue, index);

    // Auto-focus to next input
    if (inputValue && index < length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-3">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            inputMode="numeric"
            value={value[index] || ""}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={disabled}
            aria-label={`Digit ${index + 1} of ${length}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "otp-error" : undefined}
            className="w-12 h-12 text-center border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
        ))}
      </div>

      {error && (
        <p id="otp-error" className="text-sm text-center text-red-500 mt-2">
          {error}
        </p>
      )}
    </div>
  );
}
