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
import { useParams } from "next/navigation";

export default function LoginForm() {
  // Extract language parameter from URL
  const params = useParams();
  const lang = params.lang;

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
  } = useLogin();

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader title="Welcome back" subtitle="Let's get you back to work" />

      {/* Login form with email and password fields */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email input field with icon and validation */}
        <InputField
          id="email"
          type="email"
          placeholder="Email Address"
          icon={Mail}
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />
        {/* Password input field with icon and validation */}
        <PasswordField
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          {...register("password")}
          error={errors.password?.message}
        />
        {/* Forgot password link */}
        <div className="text-right">
          <Link
            href={`/${lang}/forgot-password`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        {/* Submit button with loading state */}
        <SubmitButton isLoading={isSubmitting}>
          {isSubmitting ? "Signing you in..." : "Login"}
        </SubmitButton>{" "}
      </form>

      {/* Sign up link for new users */}
      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkHref={`/${lang}/register`}
      />
    </AuthCard>
  );
}
