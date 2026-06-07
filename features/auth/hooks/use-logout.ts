"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

import { logoutApi } from "../api/auth.api";

export function useLogout() {
  const router = useRouter();
  const { lang } = useParams();

  return useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      toast.success("Logged out successfully");

      router.replace(`/${lang}/login`);
    },

    onError: () => {
      toast.error("Logout failed");
    },
  });
}
