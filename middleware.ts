import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

// manager public and private routes
// login and register routes are only public routes
// other routes are private routes

export async function middleware(request: NextRequest) {
  const cookie = cookies().get("session");
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  if (!cookie) {
    return NextResponse.redirect(new URL("/register", request.url));
  }
  return response;
}

export const config: MiddlewareConfig = {
  matcher: ["/dashboard/:path*"],
};
