import UserModel from "@/models/db/user/user";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    // ... Token validation
    console.log(
      "<<<<< Token validation not implemented 'api/v1/users/getAll' >>>>>"
    );

    await connectDB();

    const users = await UserModel.find({}, { __v: 0, password: 0 });
    return NextResponse.json({ ...users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const getOne = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    // check id valid length
    if (id.length !== 24)
      return NextResponse.json({ message: "Inavlid id" }, { status: 400 });

    await connectDB();

    // Find user
    const user = await UserModel.findOne({ _id: id }, { __v: 0, password: 0 });
    console.log(user);
    if (!user) throw new Error("User does not exist");

    // ... Token validation
    console.log(
      "<<<<< Token validation not implemented 'api/v1/users/getOne' >>>>>"
    );

    // Return user
    return NextResponse.json({ user: user });
  } catch (error) {
    console.log(error);
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
