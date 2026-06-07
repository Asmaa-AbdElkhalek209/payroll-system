"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import { resetPasswordApi } from "../api/auth.api";
import {
  resetPasswordSchema,
  ResetPasswordFormData,
} from "../schemas/reset-password.schema";

export function useResetPassword() {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as string;

  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const otp = searchParams.get("otp") || "";

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const mutation = useMutation({
    mutationFn: resetPasswordApi,

    onSuccess: () => {
      toast.success("Password reset successfully 🔐");

      router.push(`/${lang}/login`);
    },

    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Failed to reset password";

      toast.error(message);
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    mutation.mutate({
      email,
      otp: Number(otp),
      password: data.password,
      password_confirmation: data.password_confirmation,
    });
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
  };
}
