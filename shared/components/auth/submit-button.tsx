"use client";

import { SubmitButtonProps } from "../../types/auth-types";

export function SubmitButton({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  type = "submit",
  className,
}: SubmitButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={
        className ||
        "w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-primary-dark to-primary hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      }
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
