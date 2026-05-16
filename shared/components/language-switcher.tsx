"use client";

import { usePathname, useRouter, useSearchParams, useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const params = useParams();
  const currentLang = (params?.lang ?? "en") as "en" | "ar";
n  const swap = (newLang: "en" | "ar") => {
    const without = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
    const target = `/${newLang}${without === "" ? "/" : without}${search ? `?${search.toString()}` : ""}`;
    router.push(target);
  };
n  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="switch to english"
        disabled={currentLang === "en"}
        onClick={() => swap("en")}
        className="px-2 py-1 rounded disabled:opacity-50"
      >
        EN
      </button>
n      <button
        aria-label="switch to arabic"
        disabled={currentLang === "ar"}
        onClick={() => swap("ar")}
        className="px-2 py-1 rounded disabled:opacity-50"
      >
        AR
      </button>
    </div>
  );
}
