import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("🔥" + token);
  const pathname = request.nextUrl.pathname;

  const isPublicRoute =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/forgot-password") ||
    pathname.includes("/reset-password") ||
    pathname.includes("/verify-code");

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token) {
    const lang = pathname.split("/")[1] || "en";
    return NextResponse.redirect(new URL(`/${lang}/login`, request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
