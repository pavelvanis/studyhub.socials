import { SignupShowEmail } from "@/components/auth/signup/signupGetEmail";

const Homepage = () => {
  const state = false;
  return (
    <main className=" flex flex-col gap-3 items-center justify-center">
      <h1 className="text-5xl font-bold">Welcome to studyhub.</h1>
      <SignupShowEmail />
    </main>
  );
};

export default Homepage;
