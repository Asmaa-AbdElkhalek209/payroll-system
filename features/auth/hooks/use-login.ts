"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { loginSchema, LoginFormData } from "../schemas/login.schema";
import { loginApi } from "../api/auth.api";
import { useParams } from "next/navigation";
export function useLogin() {
  const router = useRouter();
  const lang = useParams().lang as string;

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      toast.success("Welcome back 👋");

      router.push(`/${lang}/dashboard`);
    },

    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";

      toast.error(message);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
  };
}
