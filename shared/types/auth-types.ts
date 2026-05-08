import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  icon: LucideIcon;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  name?: string;
}

export interface PasswordFieldProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  name?: string;
}

export interface OtpInputProps {
  value: string[];
  onChange: (value: string[], index: number) => void;
  length?: number;
  error?: string;
  disabled?: boolean;
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
