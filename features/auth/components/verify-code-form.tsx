"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  OtpInput,
  SubmitButton,
  SecondaryButton,
} from "@/shared/components/auth";

export default function VerifyCodeForm() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (value: string[], index: number) => {
    setCode(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalCode = code.join("");

    if (finalCode.length < 4) {
      setError("Please enter the 4-digit code.");
      return;
    }

    router.push("/reset-password");
  };

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Enter verification code
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Type the code we emailed to you.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <OtpInput
          value={code}
          onChange={handleChange}
          length={4}
          error={error}
        />

        <div className="flex flex-col items-center gap-4">
          <SubmitButton>Verify</SubmitButton>

          <SecondaryButton>Resend code</SecondaryButton>
        </div>
      </form>

      <p className="mt-6 text-sm text-center text-muted">
        Did you get a different email?{" "}
        <Link
          href="/forgot-password"
          className="text-primary font-medium hover:underline"
        >
          Use another email
        </Link>
      </p>
    </AuthCard>
  );
}
