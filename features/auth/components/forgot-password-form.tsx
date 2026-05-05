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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only: navigate to verify code step
    router.push("/verify-code");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg relative">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-l from-[#413b55] to-[#9082bb]">
        <Image src={logo} alt="Logo" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-center text-[#333333]">
        Forgot password
      </h2>
      <p className="mt-1 mb-6 text-sm text-center text-gray-500">
        Enter your account email and we'll send a verification code.
      </p>

      <form className="space-y-5 " onSubmit={handleSubmit}>
        <div className="relative">
          <label htmlFor="forgot-email" className="sr-only">
            Email Address
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-[#E6E1F2] rounded-l-lg">
            <Mail className="w-4 h-4 text-gray-500" />
          </div>

          <input
            id="forgot-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full py-2.5 pr-3 pl-13 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9082bb]"
            required
            aria-describedby="forgot-email-help"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-[#413b55] to-[#9082bb] hover:opacity-90 transition"
        >
          Send verification code
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-500">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="font-medium text-[#9082bb] hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
