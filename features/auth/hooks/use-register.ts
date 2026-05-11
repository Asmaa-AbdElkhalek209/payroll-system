"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registerSchema, RegisterFormData } from "../schemas/register.schema";

export function useRegister() {
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    // TODO: call register API
    console.log("Register data:", data);
    router.push("/login");
  };

  return {
    ...form,
    onSubmit,
  };
}
