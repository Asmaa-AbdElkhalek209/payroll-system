"use client";

import { Bell, Search, Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";

import userImg from "@/app/assets/user.png";

import { useTheme } from "@/shared/providers/theme-provider";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/shared/components/language-switcher";

import { useLang } from "@/shared/components/translation-initializer";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const lang = useLang();
  const isRTL = lang === "ar";
  return (
    <header
      className="
        w-full h-20 px-4
        flex items-center justify-between
        bg-surface border-b border-border
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded hover:bg-background"
        >
          <Menu />
        </button>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            className={`
              absolute top-2.5 w-4 h-4 text-text-muted
              ${isRTL ? "right-3" : "left-3"}
            `}
          />

          <input
            placeholder={t("navbar.search")}
            className={`
              py-2 rounded-md bg-background border border-border
              focus:outline-none
              ${isRTL ? "pr-10 pl-3" : "pl-10 pr-3"}
            `}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-background transition"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded hover:bg-background">
          <Bell className="w-5 h-5" />
        </button>
        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* User */}
        <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
          <Image
            src={userImg}
            alt="User"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </header>
  );
}
