import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../api/auth.api";
import { toast } from "react-hot-toast";
import axios from "axios";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPasswordApi,

    onSuccess: () => {
      toast.success("Password reset successfully");
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Reset password failed";

      toast.error(message);
    },
  });
};
