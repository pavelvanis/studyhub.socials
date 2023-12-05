import { NextRequest, NextResponse } from "next/server";
import checkToken from "../_services/checkToken";
import { getServerSession } from "next-auth";

export const GET = async (req: NextRequest) => {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  checkToken(req);
  return NextResponse.json({ message: "Hi there" });
};
