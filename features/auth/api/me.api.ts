import { apiClient } from "@/shared/lib/api/client";
import { User } from "@/shared/types/user.types";

export interface MeResponse {
  user: User;
}
export async function meApi(): Promise<MeResponse> {
  const res = await apiClient.get<MeResponse>("/me");

  return res.data;
}
