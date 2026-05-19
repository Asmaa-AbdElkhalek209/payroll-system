"use client";

import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",

  supportedLngs: ["en", "ar"],

  ns: ["translation"],
  defaultNS: "translation",

  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },

    ar: {
      translation: ar,
    },
  },
});

export default i18n;
