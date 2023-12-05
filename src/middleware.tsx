import { NextRequest, NextResponse } from "next/server";
import { JwtError, verifyJwt } from "./lib/jwt";
import { InvalidTokenError } from "jwt-decode";

export async function middleware(req: NextRequest) {
  console.log("Middleware");
  try {
    const token = req.headers
      .get("Authorization")
      ?.replace("Bearer", "")
      .trim();

    // Returned when token exist and is varified
    if (token && verifyJwt(token)) return;
    // Throw JwtError
    else throw new InvalidTokenError("Invalid token");
  } catch (error) {
    console.error(error);
    if (error instanceof InvalidTokenError) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/v1/:path*", "/api/test/:path*"],
};
