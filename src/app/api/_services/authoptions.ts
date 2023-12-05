import UserModel, { IUser } from "@/models/user";
import connectDB from "@/lib/db";
import { NextAuthOptions } from "next-auth";
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
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      console.log("SSS session:", session);
      console.log("SSS token:", token);
      session.user = token as any;  
      return session;
    },
    async jwt({ token, user, account }) {
      // console.log("JWT token:", token);
      // console.log("JWT user:", user);
      console.log("JWT account:", account);
      return { ...token, ...user };
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
};
