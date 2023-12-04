import { z } from "zod";
import UserModel, { UserZSchema } from "@/models/user";
import connectDB from "@/utils/db";
import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";
import { errorHandler } from "../../_services/error-handler";

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
    // ... Token validation
    console.log(
      "<<<<< Token validation not implemented 'api/v1/users/getAll' >>>>>"
    );

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
      user: user,
    });
  } catch (error) {
    // return error
    return errorHandler(error);
  }
};
