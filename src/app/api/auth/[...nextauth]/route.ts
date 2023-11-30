import UserModel from "@/models/user";
import connectDB from "@/utils/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const LoginZSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user, token }) {
      console.log("<<< SESSION >>>");
      // console.log("session: ", session);
      // console.log("user:", user);
      // console.log("token: ", token);
      // console.log("USER:", token.user);
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      // console.log("<<< TOKEN >>>");
      // console.log("token: ", token);
      // console.log("user: ", user);
      if (user) {
        token.user = user;
      }
      return token;
    },
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
          return null;
        }

        // connect to DB
        await connectDB();

        // destructuralize credentials
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // find user
        const user = await UserModel.findOne({ email }, { __v: 0 });
        if (!user) throw new Error("User does not exist");

        // compare password
        const passowrdMatch = await user.comparePassword(password);
        if (!passowrdMatch) throw new Error("Incorrect password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
