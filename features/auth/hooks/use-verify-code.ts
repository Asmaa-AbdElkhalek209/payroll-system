import { useMutation } from "@tanstack/react-query";
import { verifyCodeApi } from "../api/auth.api";
import { toast } from "react-hot-toast";
import axios from "axios";

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: verifyCodeApi,

    onSuccess: () => {
      toast.success("Code verified successfully");
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Invalid code";

      toast.error(message);
    },
  });
};
