import mongoose from "mongoose";
import createError from "http-errors";
import { NextResponse } from "next/server";

/**
 * Validates if the provided ID is a valid MongoDB ObjectId.
 *
 * @param {string} id - The ID to be validated.
 * @param {string} [error] - Custom error message for an invalid ID.
 * @throws {NextResponse} If the provided ID is not a valid ObjectId, returns a JSON response with a 400 status code.
 * @returns {void}
 */
export const validId = (id: string, message?: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: message ? message : "Invalid id" },
      { status: 400 }
    );
  }
};

/**
 * Checks if an object exists and throws a 404 error if not found.
 *
 * @param {any} object - The object to check for existence.
 * @param {string} [message] - Custom error message for object not found.
 * @throws {NextResponse} If the object is not found, returns a JSON response with a 404 status code.
 * @returns {void}
 */
export const notFound = (object: any, message?: string) => {
  if (!object) {
    return NextResponse.json(
      { message: message ? message : "Object was not found" },
      { status: 404 }
    );
  }
};

export const validation = () => {};
