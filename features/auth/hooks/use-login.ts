"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

import { loginSchema, LoginFormData } from "../schemas/login.schema";
import { loginApi } from "../api/auth.api";
import { useAuthStore } from "../store/auth-store";
import { User } from "../types/user.types";

export function useLogin() {
  const router = useRouter();
  const { lang } = useParams<{ lang: string }>();

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
      const user: User = data.user;

      setUser(user);

      toast.success(`Welcome back ${user.name} 👋`);

      const roleName = user?.roles?.[0]?.name;
      if (roleName === "HR") {
        router.push(`/${lang}/hr`);
      } else {
        router.push(`/${lang}/employee`);
      }
    },

    onError: (error: any) => {
      let message = error?.response?.data?.message;
      message = "Login failed. Please try again.";

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
