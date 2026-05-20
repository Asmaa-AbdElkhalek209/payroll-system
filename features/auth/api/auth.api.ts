import { LoginFormData } from "../schemas/login.schema";
import { apiClient } from "@/shared/lib/api/client";
import { LoginResponse } from "../types/auth-types";
export async function loginApi(data: LoginFormData): Promise<LoginResponse> {
  const res = await apiClient.post<LoginResponse>("/auth/login", data);

  return res.data;
}
