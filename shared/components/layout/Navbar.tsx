"use client";

import { Bell, Search, Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";

import userImg from "@/app/assets/user.png";

import { useTheme } from "@/shared/providers/theme-provider";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between h-20 px-4 bg-surface border-b border-border">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar}>
          <Menu />
        </button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 text-text-muted w-4 h-4" />

          <input
            placeholder="Search..."
            className="pl-10 pr-3 py-2 rounded-md bg-background border border-border focus:outline-none"
          />
        </div>
      </div>

      {/* Right */}
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
        <Bell className="w-5 h-5 cursor-pointer" />

        {/* User */}
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <Image src={userImg} alt="User" className="object-cover" />
        </div>
      </div>
    </header>
  );
}
