import { forgotPasswordApi } from "../api/auth.api";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPasswordApi,

    onSuccess: () => {
      toast.success("Reset code sent to email");
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Something went wrong";

      toast.error(message);
    },
  });
};
