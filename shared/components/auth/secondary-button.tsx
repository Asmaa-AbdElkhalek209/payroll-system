"use client";

import { SecondaryButtonProps } from "../../../features/auth/types/auth-types";

export function SecondaryButton({
  children,
  onClick,
  disabled = false,
  className,
  type = "button",
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        className ||
        "text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
      }
    >
      {children}
    </button>
  );
}
