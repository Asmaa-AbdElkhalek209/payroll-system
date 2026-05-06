"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from "@/app/assets/logo-icon-light.png";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full max-w-md mx-auto bg-surface p-8 rounded-2xl shadow-lg relative">
      {/* Logo */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-l from-primary-dark to-primary">
        <Image src={logo} alt="Logo" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Welcome back
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Let’s get you back to work
      </p>

      {/* Form */}
      <form className="space-y-5">
        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <Mail className="w-4 h-4 text-muted" />
          </div>

          <input
            id="email"
            type="email"
            placeholder="Email Address"
            className="w-full py-2.5 pr-3 pl-13 border border-border rounded-lg bg-background text-text
            focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <Lock className="w-4 h-4 text-muted" />
          </div>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-2.5 pr-10 pl-13 border border-border rounded-lg bg-background text-text
            focus:outline-none focus:ring-1 focus:ring-primary"
          />

          {/* Toggle Password */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-primary-dark to-primary hover:opacity-90 transition"
        >
          Login
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-sm text-center text-muted">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
