import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");

  const ip =
    forwarded?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "Unknown";

  const agent = request.headers.get("user-agent") || "Unknown";

  const path = request.nextUrl.pathname;

  const time = new Date().toLocaleString();

  console.log(`
========================================
TIME: ${time}
IP: ${ip}
PATH: ${path}
DEVICE: ${agent}
========================================
`);

  return NextResponse.next();
}