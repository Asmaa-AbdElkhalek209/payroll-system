"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  InputField,
  PasswordField,
  SubmitButton,
} from "@/shared/components/auth";
import { useLogin } from "../hooks/use-login";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useLogin();

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader title="Welcome back" subtitle="Let's get you back to work" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          id="email"
          type="email"
          placeholder="Email Address"
          icon={Mail}
          autoComplete="email"
          required
          {...register("email")}
          error={errors.email?.message as any}
        />

        <PasswordField
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          {...register("password")}
          error={errors.password?.message as any}
        />

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <SubmitButton isLoading={isSubmitting as any}>Login</SubmitButton>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkHref="/register"
      />
    </AuthCard>
  );
}
