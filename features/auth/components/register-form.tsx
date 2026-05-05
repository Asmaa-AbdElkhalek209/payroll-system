"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import logo from "@/app/assets/logo-icon-light.png";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg relative">
      {/* Logo */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-l from-[#413b55] to-[#9082bb]">
        <Image src={logo} alt="Logo" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-center text-[#333333]">Create an account</h2>

      <p className="mt-1 mb-6 text-sm text-center text-gray-500">Join and get back to work</p>

      {/* Form */}
      <form className="space-y-5">
        {/* Username */}
        <div className="relative">
          <label htmlFor="username" className="sr-only">
            Username
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-[#E6E1F2] rounded-l-lg">
            <User className="w-4 h-4 text-gray-500" />
          </div>

          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            className="w-full py-2.5 pr-3 pl-13 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9082bb]"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-[#E6E1F2] rounded-l-lg">
            <Mail className="w-4 h-4 text-gray-500" />
          </div>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full py-2.5 pr-3 pl-13 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9082bb]"
          />
        </div>
        {/* Password */}
        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-[#E6E1F2] rounded-l-lg">
            <Lock className="w-4 h-4 text-gray-500" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-2.5 pr-10 pl-13 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9082bb]"
          />
          {/* Toggle Password */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 text-white rounded-lg bg-gradient-to-l from-[#413b55] to-[#9082bb] hover:opacity-90 transition"
        >
          Register
        </button>
      </form>
      {/* Footer */}
      <p className="mt-6 text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#9082bb] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
