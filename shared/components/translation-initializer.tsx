"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import i18n from "@/shared/i18n/i18n";

export default function TranslationInitializer() {
  const params = useParams();
  const lang = (params?.lang ?? "en") as "en" | "ar";
n  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang]);
n  return null;
}
