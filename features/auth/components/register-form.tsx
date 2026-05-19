"use client";

import { Mail, User } from "lucide-react";
import { useParams } from "next/navigation";
import logo from "@/app/assets/logo-icon-light.png";
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  InputField,
  PasswordField,
  SubmitButton,
} from "@/shared/components/auth";
import { useRegister } from "../hooks/use-register";

export default function RegisterForm() {
  const params = useParams();
  const lang = params.lang;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useRegister();

  return (
    <AuthCard logo={logo} logoAlt="Logo">
      <AuthHeader
        title="Create an account"
        subtitle="Join and get back to work"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          id="username"
          type="text"
          placeholder="Username"
          icon={User}
          autoComplete="username"
          required
          {...register("username")}
          error={errors.username?.message}
        />

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
          autoComplete="new-password"
          required
          {...register("password")}
          error={errors.password?.message}
        />

        <SubmitButton isLoading={isSubmitting}>Register</SubmitButton>
      </form>

      <AuthFooter
        text="Already have an account?"
        linkText="Sign in"
        linkHref={`/${lang}/login`}
      />
    </AuthCard>
  );
}
