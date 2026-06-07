import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { UseFormRegisterReturn, UseFormRegister } from "react-hook-form";
import { User } from "@/shared/types/user.types";

export interface MeResponse {
  user: User;
}
export interface LoginResponse {
  message: string;
  user: User;
}
export interface AuthCardProps {
  children: ReactNode;
  logo?: string;
  logoAlt?: string;
}

export interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export interface AuthFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export interface InputFieldProps {
  id?: string;
  type?: string;
  placeholder?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  name?: string;
  // register return of react-hook-form for uncontrolled input
  register?: UseFormRegisterReturn;
}

export interface PasswordFieldProps {
  id?: string;
  placeholder?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  name?: string;
  // register return of react-hook-form for uncontrolled input
  register?: UseFormRegisterReturn;
}

export interface OtpInputProps {
  // name prefix for registering inputs, e.g. "code"
  name?: string;
  length?: number;
  error?: string;
  disabled?: boolean;
  // the register function from react-hook-form
  register?: UseFormRegister<any>;
}

export interface SubmitButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}
