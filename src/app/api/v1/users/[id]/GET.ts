import UserModel from "@/models/db/user/user";
import connectDB from "@/utils/db";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

interface NewUserResponse {
  id: string;
  name: string;
  email: string;
  role: string;
}

type Props = {
  params: { id: string };
};

type NewResponse = NextResponse<{ users?: NewUserResponse; error?: string }>;

export const getOne = async ({}, { params: { id } }: Props) => {
  try {
    // check valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Inavlid id" }, { status: 400 });
    }

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
