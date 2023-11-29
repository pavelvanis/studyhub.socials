import UserModel from "@/models/userModel";
import connectDB from "@/utils/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { string, z } from "zod";

const LoginZSchema = z.object({
  email: z.string(),
  password: string(),
});

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        // check data types
        try {
          LoginZSchema.parse(credentials);
        } catch (error) {
          if (error instanceof z.ZodError) {
            console.log(error.message);
            throw new Error("Invalid type");
          }
        }
        // connect to DB
        await connectDB();
        // destructuralize credentials
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // const user = await UserModel.findOne({ email });



        return { id: "1", name: email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
