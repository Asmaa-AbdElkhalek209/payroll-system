"use client";

import logo from "@/app/assets/logo-icon-light.png";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import {
  AuthCard,
  OtpInput,
  SubmitButton,
  SecondaryButton,
} from "@/shared/components/auth";

import { useVerifyCode } from "../hooks/use-verify-code";

export default function VerifyCodeForm() {
  const params = useParams();
  const lang = params.lang as string;

  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useVerifyCode();

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <h2 className="mt-6 text-2xl font-bold text-center text-text">
        Enter verification code
      </h2>

      <p className="mt-1 mb-6 text-sm text-center text-muted">
        Type the code we emailed to you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <OtpInput
          name="otp"
          length={4}
          register={register}
          error={errors.otp?.message}
        />

        <div className="flex flex-col items-center gap-4">
          <SubmitButton isLoading={isSubmitting}>Verify</SubmitButton>

          <SecondaryButton>Resend code</SecondaryButton>
        </div>
      </form>

      <p className="mt-6 text-sm text-center text-muted">
        Did you get a different email?{" "}
        <Link
          href={`/${lang}/forgot-password`}
          className="text-primary font-medium hover:underline"
        >
          Use another email
        </Link>
      </p>
    </AuthCard>
  );
}
