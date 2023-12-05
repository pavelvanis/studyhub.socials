import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

const checkToken = async (req: NextRequest | NextApiRequest) => {
  const token = await getToken({ req, secret });
  if (!token)
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
};

export default checkToken;
