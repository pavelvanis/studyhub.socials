import Link from "next/link";
import SignoutBtn from "../auth/signout/button";

// Header for (dash) layout

const DashHeader = () => {
  return (
    <header className=" bg-slate-300 relative">
      <nav className="flex items-center justify-center gap-7 h-full">
        <Link href="/">Home</Link>
        <Link href="/app">App</Link>
        <Link href="/help">Help</Link>
      </nav>
      <div className="">
        <SignoutBtn className=" p-2 absolute right-10 top-1/2 -translate-y-1/2" />
      </div>
    </header>
  );
};

export default DashHeader;
