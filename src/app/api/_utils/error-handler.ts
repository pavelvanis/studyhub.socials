import mongoose from "mongoose";
import { NextResponse } from "next/server";
import createError from "http-errors";

/**
 * Validates if the provided ID is a valid MongoDB ObjectId.
 *
 * @param {string} id - The ID to be validated.
 * @param {string} [error] - Custom error message for an invalid ID.
 * @throws {Error} If the provided ID is not a valid ObjectId.
 * @returns {void}
 */
export const validId = (id: string, error?: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createError(400, error ? error : "Invalid id");
  }
};


export const notFound = (object: any, message: string) => {
    if (!object) {
        return NextResponse.json({ error: message }, { status: 404 });
    }
};


export const validation = () => {};
