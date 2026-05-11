"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { verifyCodeSchema, VerifyCodeFormData } from "../schemas/verify-code.schema";

export function useVerifyCode() {
  const router = useRouter();

  const form = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: ["", "", "", ""],
    },
  });

  const onSubmit = (data: VerifyCodeFormData) => {
    // TODO: verify code API
    console.log("Verify code:", data);
    router.push("/reset-password");
  };

  return {
    ...form,
    onSubmit,
  };
}
