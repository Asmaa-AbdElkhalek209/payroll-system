import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { loginSchema, LoginFormData } from "../schemas/login.schema";

export function useLogin() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },

    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login Data:", data);

    // authService.login(data)
  };

  return {
    ...form,
    onSubmit,
  };
}
