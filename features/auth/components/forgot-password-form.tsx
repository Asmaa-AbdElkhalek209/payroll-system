"use client";

import { Mail } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  InputField,
  SubmitButton,
} from "@/shared/components/auth";
import { useForgotPassword } from "../hooks/use-forgot-password";

export default function ForgotPasswordForm() {
  const params = useParams();
  const lang = params.lang;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useForgotPassword();

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader
        title="Forgot password"
        subtitle="Enter your email to receive a code"
      />

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

        <SubmitButton isLoading={isSubmitting}>Send code</SubmitButton>
      </form>

      <AuthFooter
        text="Remembered?"
        linkText="Sign in"
        linkHref={`/${lang}/login`}
      />
    </AuthCard>
  );
}
