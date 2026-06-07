import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const role = request.cookies.get("role")?.value;

  const pathname = request.nextUrl.pathname;
  const segments = pathname.split("/");
  const lang = segments[1] || "en";
  // public routes
  const isPublicRoute =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/forgot-password") ||
    pathname.includes("/reset-password") ||
    pathname.includes("/verify-code");

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // not logged in
  if (!token) {
    return NextResponse.redirect(new URL(`/${lang}/login`, request.url));
  }

  // HR routes protection
  const hrRoutes = [
    "attendance",
    // "dashboard",
    "employees",
    "payroll",
    "reports",
  ];

  const isHrRoute = hrRoutes.some((r) => pathname.includes(r));

  if (isHrRoute && role !== "hr") {
    return NextResponse.redirect(new URL(`/${lang}/unauthorized`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
