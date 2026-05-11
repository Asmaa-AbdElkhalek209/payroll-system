"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { resetPasswordSchema, ResetPasswordFormData } from "../schemas/reset-password.schema";

export function useResetPassword() {
  const router = useRouter();

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    // TODO: call reset password API
    console.log("Reset password:", data);
    router.push("/login");
  };

  return {
    ...form,
    onSubmit,
  };
}
