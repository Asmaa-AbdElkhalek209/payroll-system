import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";

import ReactQueryProvider from "@/shared/providers/react-query-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import TranslationInitializer from "@/shared/components/translation-initializer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "payroll-system",
  description:
    "Enterprise payroll management dashboard for managing employees, attendance, salaries, and reports.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "ar" }>;
}) {
  const { lang } = await params;

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-text">
        <TranslationInitializer lang={lang}>
          <ThemeProvider>
            <ReactQueryProvider>
              <Toaster position="top-right" />
              {children}
            </ReactQueryProvider>
          </ThemeProvider>
        </TranslationInitializer>
      </body>
    </html>
  );
}
