"use client";

import { useQuery } from "@tanstack/react-query";
import { meApi } from "../api/me.api";

export function useMe() {
  const query = useQuery({
    queryKey: ["me"],
    queryFn: meApi,
    retry: false,
  });

  return query;
}

//   const { data, isLoading } = useQuery({
// return { data, isLoading };
