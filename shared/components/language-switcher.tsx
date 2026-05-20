"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/shared/components/translation-initializer";

type Lang = "en" | "ar";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = (useLang() as Lang) || "en";

  const label = currentLang === "en" ? "AR" : "EN";

  const toggleLang = () => {
    const newLang: Lang = currentLang === "en" ? "ar" : "en";

    const current =
      pathname ??
      (typeof window !== "undefined" ? window.location.pathname : "/");
    const withoutLang = current.replace(/^\/(en|ar)(?=\/|$)/, "");
    const newPath = `/${newLang}${withoutLang}`;

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLang}
      className="p-1 rounded border border-border bg-surface hover:bg-background transition"
    >
      {label}
    </button>
  );
}
