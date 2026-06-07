"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import { verifyCodeApi } from "../api/auth.api";
import {
  verifyCodeSchema,
  VerifyCodeFormData,
} from "../schemas/verify-code.schema";

export function useVerifyCode() {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as string;

  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const form = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      otp: "",
    },
  });

  const mutation = useMutation({
    mutationFn: verifyCodeApi,

    onSuccess: () => {
      toast.success("Code verified successfully");

      router.push(`/${lang}/auth/reset-password?email=${email}`);
    },

    onError: (error: any) => {
      const message = error.response?.data?.message || "Invalid OTP";

      toast.error(message);
    },
  });

  const onSubmit = (data: VerifyCodeFormData) => {
    mutation.mutate({
      email,
      otp: Number(data.otp),
    });
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
  };
}
