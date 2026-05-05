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
    // UI-only: navigate to login after reset
    router.push("/login");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg relative">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-l from-[#413b55] to-[#9082bb]">
        <Image src={logo} alt="Logo" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-center text-[#333333]">
        Reset password
      </h2>
      <p className="mt-1 mb-6 text-sm text-center text-gray-500">
        Choose a new password for your account.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <label htmlFor="new-password" className="sr-only">
            New password
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-[#E6E1F2] rounded-l-lg">
            <Lock className="w-4 h-4 text-gray-500" />
          </div>

          <input
            id="new-password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="w-full py-2.5 pr-10 pl-13 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9082bb]"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="relative">
          <label htmlFor="confirm-password" className="sr-only">
            Confirm password
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-[#E6E1F2] rounded-l-lg">
            <Lock className="w-4 h-4 text-gray-500" />
          </div>

          <input
            id="confirm-password"
            name="confirm"
            type={showPassword ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm password"
            className="w-full py-2.5 pr-10 pl-13 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9082bb]"
            required
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-[#413b55] to-[#9082bb] hover:opacity-90 transition"
        >
          Reset password
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-500">
        Remembered?{" "}
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
