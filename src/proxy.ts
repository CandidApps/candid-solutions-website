import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * The Vercel preview host must not compete with candid.solutions.
 * Do not redirect it there while the current WordPress site is still live.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const hostname = (request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();

  if (hostname.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
