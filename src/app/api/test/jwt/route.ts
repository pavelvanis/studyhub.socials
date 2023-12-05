import { verifyJwt } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const auth = req.headers.get("Authorization")?.replace("Bearer", "").trim();
  console.log(auth);
  if (auth && verifyJwt(auth)) return NextResponse.json("Welcome");
  return NextResponse.json("Anauthorized", { status: 401 });
};
