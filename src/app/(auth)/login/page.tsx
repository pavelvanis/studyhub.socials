import CredentialsLoginForm from "@/components/auth/login/credentialsLogin";
import { Container, Content, Heading } from "@/components/auth/utils";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <header className="mx-10 shrink-0">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className=" text-xl font-medium">
            studyhub
          </Link>
          <div className="flex items-center gap-3">
            <p className=" font-light text-sm">Already have account</p>
            <Button />
          </div>
        </div>
      </header>
      <main className="flex grow flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Container>
            <Heading>Log in</Heading>
            <Content>
              <CredentialsLoginForm button="Go in!" />
            </Content>
          </Container>
          <p className=" font-light text-sm mt-3">
            Already have an account?
            <Link
              href="/signup"
              className="ms-2 hover:text-slate-600 transition-all"
            >
              Sign up
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
      href="/signup"
      className="bg-red-600 hover:bg-red-700 transition-all rounded-lg px-4 py-1.5 text-white font-semibold shadow-xl"
    >
      Sign up
    </Link>
  );
};
