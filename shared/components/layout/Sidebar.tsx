"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";

import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";

import { sidebarMenu } from "./sidebar-menu";

import logoFull from "@/app/assets/logo.png";
import logoIcon from "@/app/assets/logo-ico.png";

import { useTranslation } from "react-i18next";
import { useLogout } from "@/features/auth/hooks/use-logout";
type Lang = "en" | "ar";

export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();
  const params = useParams();

  const logout = useLogout();

  const lang = (params.lang as Lang) || "en";
  const isRTL = lang === "ar";

  const { t } = useTranslation();

  return (
    <aside
      className={`
        bg-surface
        border-e border-border
        h-screen
        flex flex-col
        transition-all duration-300
        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-border">
        <div
          className={`
            transition-all duration-300
            flex items-center justify-center
            ${open ? "w-44" : "w-10"}
          `}
        >
          <Image
            src={open ? logoFull : logoIcon}
            alt="Logo"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Menu */}
      <ul className="flex-1 mt-5 flex flex-col gap-2 px-2">
        {sidebarMenu.map((item) => {
          const fullHref = `/${lang}${item.href}`;
          const isActive = pathname === fullHref;

          const Icon = item.icon;

          return (
            <li key={item.href}>
              <Link
                href={fullHref}
                className={`
                  flex items-center justify-between
                  p-3 rounded-lg
                  transition-colors duration-200

                  ${
                    isActive
                      ? "bg-gradient-to-l from-primary-dark to-primary text-white"
                      : "text-text hover:bg-background"
                  }
                `}
              >
                {/* Left side */}
                <div
                  className={`
                    flex items-center gap-3
                    ${!open ? "justify-center w-full" : ""}
                  `}
                >
                  {/* Icon */}
                  <Icon className="w-5 h-5" aria-hidden="true" />

                  {/* Label */}
                  {open && (
                    <span className="text-sm font-medium">
                      {t(`sidebar.${item.key}`)}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                {open &&
                  (isRTL ? (
                    <ChevronLeft size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  ))}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Logout */}
      <div className="pb-4">
        <button
          className={`
            flex items-center gap-3
            w-full p-3
            rounded-lg
            text-red-500
            hover:bg-background
            transition-colors duration-200

            ${!open ? "justify-center" : ""}
          `}
          onClick={() => logout.mutate()}
          disabled={logout.isPending}
        >
          <LogOut size={20} />

          {open && (
            <span className="text-sm font-medium">{t("sidebar.logout")}</span>
          )}
        </button>
      </div>
    </aside>
  );
}
