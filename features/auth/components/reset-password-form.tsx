"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  PasswordField,
  SubmitButton,
} from "@/shared/components/auth";

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
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader
        title="Reset password"
        subtitle="Choose a new password for your account."
      />

      <form className="space-y-5" onSubmit={handleSubmit}>
        <PasswordField
          id="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          autoComplete="new-password"
          required
        />

        <PasswordField
          id="confirm"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          autoComplete="new-password"
          required
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <SubmitButton>Reset password</SubmitButton>
      </form>

      <AuthFooter text="Remembered?" linkText="Sign in" linkHref="/login" />
    </AuthCard>
  );
}
