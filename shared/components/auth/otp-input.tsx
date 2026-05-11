"use client";

import { OtpInputProps } from "../../types/auth-types";

export function OtpInput({ name = "code", length = 4, error, disabled = false, register }: OtpInputProps) {
  const handleFocusNext = (index: number) => {
    const next = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement | null;
    next?.focus();
  };

  const handleFocusPrev = (index: number) => {
    const prev = document.getElementById(`otp-input-${index - 1}`) as HTMLInputElement | null;
    prev?.focus();
  };

  return (
    <div>
      <div className="flex justify-center gap-3">
        {Array.from({ length }).map((_, index) => {
          // register each input as `${name}.${index}`
          const reg = register ? register(`${name}.${index}`, { required: true, maxLength: 1 }) : undefined;

          return (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              inputMode="numeric"
              disabled={disabled}
              aria-label={`Digit ${index + 1} of ${length}`}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "otp-error" : undefined}
              className="w-12 h-12 text-center border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              {...(reg ? { ref: reg.ref, name: reg.name } : {})}
              onChange={(e) => {
                if (reg && reg.onChange) reg.onChange(e as any);
                if (e.currentTarget.value && index < length - 1) {
                  handleFocusNext(index);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !(e.currentTarget as HTMLInputElement).value && index > 0) {
                  handleFocusPrev(index);
                }
              }}
            />
          );
        })}
      </div>

      {error && (
        <p id="otp-error" className="text-sm text-center text-red-500 mt-2">
          {error}
        </p>
      )}
    </div>
  );
}
