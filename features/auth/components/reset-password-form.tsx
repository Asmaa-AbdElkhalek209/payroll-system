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

export default function ResetPasswordForm() {
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
          error={errors.password?.message as any}
        />

        <PasswordField
          id="confirm"
          placeholder="Confirm password"
          autoComplete="new-password"
          required
          {...register("confirm")}
          error={errors.confirm?.message as any}
        />

        {errors.root && (
          <p className="text-sm text-red-500">{(errors.root.message as any) || null}</p>
        )}

        <SubmitButton isLoading={isSubmitting as any}>Reset password</SubmitButton>
      </form>

      <AuthFooter text="Remembered?" linkText="Sign in" linkHref="/login" />
    </AuthCard>
  );
}
