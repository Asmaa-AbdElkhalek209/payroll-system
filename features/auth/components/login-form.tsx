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
  const params = useParams();
  const lang = params.lang;
  // console.log("Current language:", lang);
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
          error={errors.email?.message}
        />

        <PasswordField
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          {...register("password")}
          error={errors.password?.message}
        />

        <div className="text-right">
          <Link
            href={`/${lang}/forgot-password`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <SubmitButton isLoading={isSubmitting}>Login</SubmitButton>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkHref={`/${lang}/register`}
      />
    </AuthCard>
  );
}
