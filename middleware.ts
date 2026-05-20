import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // /en/attendance -> ["", "en", "attendance"]
  const segments = pathname.split("/");

  const lang = segments[1];
  const route = segments[2];

  // public routes
  const publicRoutes = ["login", "register"];

  if (publicRoutes.includes(route)) {
    return NextResponse.next();
  }

  // ❌ not logged in
  if (!token) {
    return NextResponse.redirect(new URL(`/${lang}/login`, request.url));
  }

  // 🔐 dashboard routes (HR only)
  const dashboardRoutes = [
    "attendance",
    "employees",
    "payroll",
    "reports",
    "departments",
    "behavior",
  ];

  if (dashboardRoutes.includes(route)) {
    if (role !== "hr") {
      return NextResponse.redirect(
        new URL(`/${lang}/unauthorized`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:lang/:path*"],
};
