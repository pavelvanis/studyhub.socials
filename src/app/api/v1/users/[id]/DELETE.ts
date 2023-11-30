import UserModel from "@/models/user";
import { NextResponse } from "next/server";

type Props = {
  params: { id: string };
};

export const deleteOne = async ({}, { params: { id } }: Props) => {
  try {
    const deleted = await UserModel.findByIdAndDelete(id, {
      projection: { __v: 0, password: 0 },
    });
    if (!deleted)
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    return NextResponse.json({ user: deleted });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
