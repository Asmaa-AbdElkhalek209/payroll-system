"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";

export default function VerifyCodeForm() {
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
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
    <div className="w-full max-w-md mx-auto bg-surface p-8 rounded-2xl shadow-lg relative">
      {/* Logo */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-l from-primary-dark to-primary">
        <Image src={logo} alt="Logo" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Enter verification code
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Type the code we emailed to you.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* OTP */}
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-border rounded-lg
              bg-background text-text
              focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
        </div>

        {error && <p className="text-sm text-center text-red-500">{error}</p>}

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            className="w-50 py-2.5 text-white rounded-lg bg-gradient-to-l from-primary-dark to-primary hover:opacity-90 transition"
          >
            Verify
          </button>

          <button
            type="button"
            className="text-sm text-primary hover:underline"
          >
            Resend code
          </button>
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
    </div>
  );
}
