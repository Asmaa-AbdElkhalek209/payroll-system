"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-md mx-auto bg-surface p-8 rounded-2xl shadow-lg relative">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-l from-primary-dark to-primary">
        <Image src={logo} alt="Logo" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Forgot password
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Enter your email to receive a code
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/verify-code");
        }}
        className="space-y-5"
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <Mail className="w-4 h-4 text-muted" />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2.5 pr-3 pl-13 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <button className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-primary-dark to-primary">
          Send code
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-muted">
        Remembered?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
