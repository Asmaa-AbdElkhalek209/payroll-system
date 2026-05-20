"use client";

import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  PasswordField,
  SubmitButton,
} from "@/shared/components/auth";
import { useResetPassword } from "../hooks/use-reset-password";
import { useParams } from "next/navigation";

export default function ResetPasswordForm() {
  const params = useParams();
  const lang = params.lang;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useResetPassword();

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader
        title="Reset password"
        subtitle="Choose a new password for your account."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <PasswordField
          id="password"
          placeholder="New password"
          autoComplete="new-password"
          required
          {...register("password")}
          error={errors.password?.message}
        />

        <PasswordField
          id="confirm"
          placeholder="Confirm password"
          autoComplete="new-password"
          required
          {...register("confirm")}
          error={errors.confirm?.message}
        />

        {errors.root && (
          <p className="text-sm text-red-500">{errors.root.message || null}</p>
        )}

        <SubmitButton isLoading={isSubmitting}>Reset password</SubmitButton>
      </form>

      <AuthFooter
        text="Remembered?"
        linkText="Sign in"
        linkHref={`/${lang}/login`}
      />
    </AuthCard>
  );
}
