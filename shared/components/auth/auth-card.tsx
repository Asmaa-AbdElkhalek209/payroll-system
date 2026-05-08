"use client";

import Image from "next/image";
import { AuthCardProps } from "../types/auth-types";

export function AuthCard({ children, logo, logoAlt = "Logo" }: AuthCardProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-surface p-8 rounded-2xl shadow-lg relative">
      {logo && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-l from-primary-dark to-primary">
          <Image src={logo} alt={logoAlt} width={40} height={40} />
        </div>
      )}
      {children}
    </div>
  );
}
