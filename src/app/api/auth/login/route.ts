import connectDB from "@/lib/db";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import jwt, { Secret } from "jsonwebtoken";

const LoginZSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = (await req.json()) as NewUserRequest;

    await connectDB();

    // LoginZSchema.parse({ email, password });

    const user = await UserModel.findOne({ email }, { __v: 0 });

    if (!user)
      return NextResponse.json(
        { message: "This user does not exist" },
        { status: 400 }
      );

    const passowrdMatch = await user.comparePassword(password);
    if (!passowrdMatch)
      return NextResponse.json({ message: "Bad password" }, { status: 401 });

    const secretKey = process.env.NEXTAUTH_SECRET as Secret;
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "3h",
    });

    // console.log({ user, token });

    return NextResponse.json({ user, token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error });
  }
};
