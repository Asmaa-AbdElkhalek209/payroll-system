"use client";

import { useEffect, createContext, useContext, ReactNode } from "react";
import i18n from "@/shared/i18n/i18n";

type Lang = "en" | "ar";

const LangContext = createContext<Lang>("en");
export const useLang = () => useContext(LangContext);

export default function TranslationInitializer({ lang, children }: { lang: Lang; children?: ReactNode }) {
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang]);
  return <LangContext.Provider value={lang}>{children ?? null}</LangContext.Provider>;
}
