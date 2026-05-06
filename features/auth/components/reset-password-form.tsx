"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";

export default function ResetPasswordForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    router.push("/login");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-surface p-8 rounded-2xl shadow-lg relative">
      {/* Logo */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-l from-primary-dark to-primary">
        <Image src={logo} alt="Logo" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Reset password
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Choose a new password for your account.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* NEW PASSWORD */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <Lock className="w-4 h-4 text-muted" />
          </div>

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="w-full py-2.5 pr-10 pl-13 border border-border rounded-lg bg-background text-text
            focus:outline-none focus:ring-1 focus:ring-primary"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-surface border border-border rounded-l-lg">
            <Lock className="w-4 h-4 text-muted" />
          </div>

          <input
            type={showPassword ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm password"
            className="w-full py-2.5 pr-3 pl-13 border border-border rounded-lg bg-background text-text
            focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-primary-dark to-primary hover:opacity-90 transition"
        >
          Reset password
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-muted">
        Remembered?{" "}
        <Link
          href="/login"
          className="text-primary font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
