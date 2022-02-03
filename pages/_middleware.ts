import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const API_ROUTE = /^\/api\//;

export function middleware(request: NextRequest) {
  const {
    nextUrl: { href, locale, pathname },
    page,
  } = request;

  console.log(page, pathname, href, locale);

  const handleDefaultLocale =
    !PUBLIC_FILE.test(pathname) &&
    !API_ROUTE.test(pathname) &&
    locale === "default";

  return handleDefaultLocale
    ? NextResponse.redirect(`/en${pathname}`)
    : NextResponse.next();
}
