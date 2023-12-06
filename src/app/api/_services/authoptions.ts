import UserModel, { IUser } from "@/models/user";
import connectDB from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { NextResponse } from "next/server";

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
      // console.log("ses:", token);
      session.user = token as any
      return session;
    },
    async jwt({ token, user, account }) {
      // console.log("user: ",user);
      // console.log("token: ",token);
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
        }

        // destructuralize credentials
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const login = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
        });
        const res = await login.json();
        console.log("res ", res);

        if (login.ok) {
          return res;
        } else {
          throw new Error(res.message);
        }
      },
    }),
  ],
};
