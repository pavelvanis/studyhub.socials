import UserModel, { UserZSchema } from "@/models/userModel";
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

    console.log(body);
    // validate data
    const validatUser = UserZSchema.parse(body);
    console.log("valid: ", validatUser);

    // Check if exist user with same email
    const findUser = await UserModel.findOne(
      { email: body.email },
      { __v: 0, password: 0 }
    );

    if (findUser) {
      return NextResponse.json({ error: "Email is in use" }, { status: 422 });
    }

    const user = await UserModel.create({ ...body });

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    // Check if error is from mongoDB
    if (error instanceof mongoose.Error.ValidationError) {
      // console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    if (error instanceof SyntaxError) {
      console.log(error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // Return error
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

