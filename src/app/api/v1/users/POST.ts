import UserModel, { UserZSchema } from "@/models/user";
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { errorHandler } from "../../_services/error-handler";
import checkToken from "../../_services/checkToken";

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

// CREATE USER
export const POST = async (req: NextRequest) => {
  try {
    // ... Token validation
    const token = await checkToken(req);
    console.log(token);

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
    console.log(user);

    // return user
    return NextResponse.json({
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    // return error
    return errorHandler(error);
  }
};
