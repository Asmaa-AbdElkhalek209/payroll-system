"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { loginSchema, LoginFormData } from "../schemas/login.schema";
import { loginApi } from "../api/auth.api";
import { useAuthStore } from "../store/auth-store";

export function useLogin() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      toast.success("Welcome back 👋");

      setUser(data.user); // مهم جدًا

      router.push("/dashboard");
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
