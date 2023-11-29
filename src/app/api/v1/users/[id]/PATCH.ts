import UserModel from "@/models/db/user/user";
import connectDB from "@/utils/db";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export const update = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    // check valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Inavlid id" }, { status: 400 });
    }

    const updates = await req.json();
    console.log(updates);
    delete updates.password;
    console.log(updates);
    const options: mongoose.QueryOptions = {
      new: false,
      projection: { __v: 0, password: 0 },
    };

    await connectDB();

    const updated = await UserModel.findByIdAndUpdate(id, updates, options);
    console.log(updated);

    return NextResponse.json({ user: updated });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
