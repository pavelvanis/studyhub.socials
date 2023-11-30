import { notFound, validId } from "@/app/api/_utils/error-handler";
import UserModel from "@/models/user";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

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
    const invalidId = validId(id);
    if (invalidId) return invalidId;

    await connectDB();

    // Find user
    const user = await UserModel.findOne({ _id: id }, { __v: 0, password: 0 });
    const notUser = notFound(user, "User was not found");
    if (notUser) return notUser;

    // ... Token validation
    console.log(
      "<<<<< Token validation not implemented 'api/v1/users/getOne' >>>>>"
    );

    // Return user
    return NextResponse.json({ user: user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
