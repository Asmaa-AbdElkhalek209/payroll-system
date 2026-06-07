import { z } from "zod";

export const verifyCodeSchema = z.object({
  otp: z
    .array(z.string().min(1, "Each digit is required"))
    .length(4, "Enter the 4-digit code"),
});

export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
