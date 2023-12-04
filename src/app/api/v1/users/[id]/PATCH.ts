import { errorHandler, validId } from "@/app/api/_services/error-handler";
import UserModel from "@/models/user";
import connectDB from "@/utils/db";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

interface Updateduser {
  name?: string;
  email?: string;
  role?: string;
  password?: string;
}

export const update = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    // check valid id
    const invalidId = validId(id);
    if (invalidId) return invalidId;

    const updates = (await req.json()) as Updateduser;

    // const exist = await UserModel.find({ name: updates.name });

    // Remove password from update
    delete updates.password;
    // mongoose options
    const options: mongoose.QueryOptions = {
      new: true,
      projection: { __v: 0, password: 0 },
    };

    await connectDB();

    const updated = await UserModel.findByIdAndUpdate(id, updates, options);
    console.log(updated);

    return NextResponse.json({ user: updated });
  } catch (error) {
    return errorHandler(error);
  }
};
