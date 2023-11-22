import { NextRequest, NextResponse } from "next/server";
import { getValidSubdomain } from "./utils/getvalidDomain";

// RegExp for public files
const PUBLIC_FILE = /\.(js|css|png|jpg)$/; // Files

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;

  const host = req.headers.get("host");
  const subdomain = getValidSubdomain(host);
  // const subdomain = host;
  if (subdomain) {
    // Subdomain available, rewriting
    console.log(
      `>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`
    );
    url.pathname = `/${subdomain}${url.pathname}`;
  }
  return NextResponse.rewrite(url);
}
