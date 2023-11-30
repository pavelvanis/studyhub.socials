import bcrypt from "bcrypt";
import { Model, Schema, model, models } from "mongoose";
import validator from "validator";
import { z } from "zod";

export const UserZSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
  role: z.enum(["admin", "user"]).optional(),
});

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  role: "admin" | "user";
}

interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const userScheme = new Schema<IUser, {}, Methods>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      // check email
      validator: function (email: any) {
        return validator.isEmail(email);
      },
      message: "Invalid email",
    },
  },
  name: { type: String, required: true, unique: true, trim: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  password: {
    type: String,
    required: true,
    validate: [
      {
        //check min length
        validator: function (password: any) {
          return password.length >= 8;
        },
        message: (props: any) => `Password must be longer than 8`,
      },
      {
        //check max length
        validator: function (password: any) {
          return password.length <= 16;
        },
        message: "Password must be shorter than 16",
      },
      {
        //check lowercase
        validator: function (password: any) {
          return /[a-z]/.test(password);
        },
        message: "Password must contain lowercase",
      },
      {
        // check uppercase
        validator: function (password: any) {
          return /[A-Z]/.test(password);
        },
        message: "Password must contain uppercase",
      },
      {
        // check digit
        validator: function (password: any) {
          return /\d/.test(password);
        },
        message: "Password must contain digit",
      },
      {
        // check symbol
        validator: function (password: any) {
          return /[!@#$%^&*(),.?":{}|<>]/.test(password);
        },
        message: "Password must contain special symbol",
      },
    ],
  },
});

// Hash password before saving
userScheme.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(new Error("Error in mongoose!"));
  }
});

// Compare password
userScheme.methods.comparePassword = async function (password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const UserModel = models.User || model("User", userScheme);

export default UserModel as Model<IUser, {}, Methods>;
