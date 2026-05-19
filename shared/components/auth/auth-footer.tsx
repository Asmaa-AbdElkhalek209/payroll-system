"use client";

import Link from "next/link";
import { AuthFooterProps } from "../../../features/auth/types/auth-types";

export function AuthFooter({ text, linkText, linkHref }: AuthFooterProps) {
  return (
    <p className="mt-6 text-sm text-center text-muted">
      {text}{" "}
      <Link
        href={linkHref}
        className="font-medium text-primary hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
}
