import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response("봇으로 접속하지 마세요.", { status: 403 });
  }

  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.carrotsession) {
      return NextResponse.redirect(`${req.nextUrl.origin}/enter`);
    }
  }
}
