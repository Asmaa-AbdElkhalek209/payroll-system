"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { meApi } from "../api/me.api";
import { useAuthStore } from "../store/auth-store";

export function useMe() {
  const setUser = useAuthStore((s) => s.setUser);

  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: meApi,
    retry: false,
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data, setUser]);

  return { data, isLoading };
}
