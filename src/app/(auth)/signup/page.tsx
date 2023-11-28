import CredentialsSignupForm from "@/components/auth/signup/credentialsSignup";
import { Container, Content, Heading } from "@/components/auth/utils";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Signup",
  description: "The best website you have ever seen",
};

const Page = (props: Props) => {
  return (
    <>
      <header className="mx-10">
        <div className="flex justify-between items-center h-full">
          <h1 className=" text-xl font-medium">studyhub</h1>
          <div className="flex items-center gap-3">
            <p className=" font-light text-sm">Already have account?</p>
            <Button />
          </div>
        </div>
      </header>
      <main className="flex grow flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Container>
            <Heading>Sign up</Heading>
            <Content>
              <CredentialsSignupForm button="Register" />
            </Content>
          </Container>
          <p className=" font-light text-sm mt-3">
            Already have an account?
            <Link
              href="/login"
              className="ms-2 hover:text-slate-600 transition-all"
            >
              Log in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Page;

const Button = () => {
  return (
    <Link
      href="/login"
      className="bg-red-600 hover:bg-red-700 rounded-lg px-4 py-1.5 text-white font-semibold shadow-xl"
    >
      Login
    </Link>
  );
};
