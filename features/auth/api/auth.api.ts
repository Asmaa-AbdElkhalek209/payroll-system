import { LoginFormData } from "../schemas/login.schema";
import { apiClient } from "@/shared/lib/api/client";
import { LoginResponse } from "../types/auth-types";

// LOGIN
export async function loginApi(data: LoginFormData): Promise<LoginResponse> {
  const res = await apiClient.post<LoginResponse>("/auth/login", data);
  return res.data;
}

// LOGOUT
export async function logoutApi() {
  const res = await apiClient.post("/logout");
  return res.data;
}

// FORGOT PASSWORD
export async function forgotPasswordApi(payload: { email: string }) {
  const res = await apiClient.post("/auth/forgot-password", payload);
  return res.data;
}

// VERIFY CODE
export async function verifyCodeApi(payload: { email: string; otp: number }) {
  const res = await apiClient.post("/auth/verify-code", payload);
  return res.data;
}

// RESET PASSWORD
export async function resetPasswordApi(payload: {
  email: string;
  password: string;
  password_confirmation: string;
  otp: number;
}) {
  const { data } = await apiClient.post("/auth/reset-password", payload);
  return data;
}
