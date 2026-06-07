"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

import { forgotPasswordApi } from "../api/auth.api";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "../schemas/forgot-password.schema";

export function useForgotPassword() {
  const router = useRouter();
  const lang = useParams().lang as string;

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: forgotPasswordApi,

    onSuccess: (_, variables) => {
      toast.success("Reset code sent to email");

      router.push(`/${lang}/auth/verify-code?email=${variables.email}`);
    },

    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Failed to send reset code";

      toast.error(message);
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
  };
}
