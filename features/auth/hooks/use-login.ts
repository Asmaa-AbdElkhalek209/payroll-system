"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { loginSchema, LoginFormData } from "../schemas/login.schema";
import { loginApi } from "../api/auth.api";
import { redirect } from "next/navigation";

export function useLogin() {
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
      console.log("Login success:", data);
      redirect("/dashboard");
      // redirect to dashboard
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
    error: mutation.error,
  };
}
