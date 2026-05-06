"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import logo from "@/app/assets/logo-icon-light.png";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-surface p-8 rounded-2xl shadow-lg relative">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-l from-primary-dark to-primary">
        <Image src={logo} alt="Logo" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Create an account
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Join and get back to work
      </p>

      <form className="space-y-5">
        {/* Username */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <User className="w-4 h-4 text-muted" />
          </div>

          <input
            type="text"
            placeholder="Username"
            className="w-full py-2.5 pr-3 pl-13 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <Lock className="w-4 h-4 text-muted" />
          </div>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-2.5 pr-10 pl-13 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-primary-dark to-primary">
          Register
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
