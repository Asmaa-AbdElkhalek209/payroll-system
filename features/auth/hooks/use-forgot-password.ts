"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { forgotPasswordSchema, ForgotPasswordFormData } from "../schemas/forgot-password.schema";

export function useForgotPassword() {
  const router = useRouter();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    // TODO: call forgot password API
    console.log("Forgot password:", data);
    router.push("/verify-code");
  };

  return {
    ...form,
    onSubmit,
  };
}
