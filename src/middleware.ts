import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 정적 파일 및 API 요청은 리디렉트 제외
  if (
    pathname.startsWith("/_next/") || // Next.js 정적 파일
    pathname.startsWith("/api/") || // API 요청
    pathname === "/favicon.ico" // 파비콘 요청
  ) {
    return NextResponse.next();
  }

  // 루트('/')가 아닌 경우만 리디렉트
  if (pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
