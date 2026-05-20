"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth-store";

type Role = "hr" | "employee";

type RoleGuardProps = {
  allowedRoles: Role[];
  children: ReactNode;
};

export default function RoleGuard({ allowedRoles, children }: RoleGuardProps) {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      router.replace("/unauthorized");
    }
  }, [user, allowedRoles, router]);

  if (!user) return null;

  if (!allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
