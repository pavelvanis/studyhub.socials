import UserModel from "@/models/user";
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  name: string;
  email: string;
  role: string;
}

type NewResponse = NextResponse<{ users?: NewUserResponse; error?: string }>;

export const getAll = async (req: NextRequest) => {
  try {
    const body = req.body;

    await connectDB();

    const users = await UserModel.find({}, { __v: 0, password: 0 });
    return NextResponse.json({ ...users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
