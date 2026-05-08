"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  InputField,
  SubmitButton,
} from "@/shared/components/auth";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verify-code");
  };

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader
        title="Forgot password"
        subtitle="Enter your email to receive a code"
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
          autoComplete="email"
          required
        />

        <SubmitButton>Send code</SubmitButton>
      </form>

      <AuthFooter text="Remembered?" linkText="Sign in" linkHref="/login" />
    </AuthCard>
  );
}
