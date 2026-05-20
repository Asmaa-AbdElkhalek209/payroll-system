"use client";

import { AuthHeaderProps } from "../../../features/auth/types/auth-types";

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <>
      <h2 className="mt-6 text-2xl font-bold text-center text-text">{title}</h2>
      <p className="mt-1 mb-6 text-sm text-center text-muted">{subtitle}</p>
    </>
  );
}
