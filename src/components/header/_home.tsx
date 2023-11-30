import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import SignoutBtn from "../auth/signout/button";

// Header for (home) layout

const HomeHeader = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="text-center w-full bg-red-100 p-3 relative">
      <div className="flex justify-center items-center h-full">
        <nav className="flex items-center justify-center gap-7">
          <Link href="/app">App</Link>
          <Link href="/help">Help</Link>
        </nav>
        <div className=" absolute right-10 top-1/2 -translate-y-1/2">
          {session ? (
            <SignoutBtn />
          ) : (
            <div className="flex gap-4">
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
