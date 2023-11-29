import { z } from "zod";
import UserModel, { UserZSchema } from "@/models/db/user/user";
import connectDB from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

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

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

// CREATE USER
export const POST = async (req: Request): Promise<NewResponse> => {
  try {
    const body = (await req.json()) as NewUserRequest;
    // connect to db
    await connectDB();

    // validate data
    UserZSchema.parse(body);

    // Check if exist user with same email
    const findUser = await UserModel.findOne(
      { email: body.email },
      { __v: 0, password: 0 }
    );
    if (findUser) {
      return NextResponse.json(
        { error: "Email is already using" },
        { status: 422 }
      );
    }

    // create user
    const user = await UserModel.create({ ...body });

    // return user
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    // return database error
    if (error instanceof mongoose.Error.ValidationError) {
      // console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    // return Syntax error
    if (error instanceof SyntaxError) {
      // console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    if (error instanceof z.ZodError) {
      // console.log(error.errors[0].message);
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    console.error(error);
    // Return error
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
