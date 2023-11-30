import Link from "next/link";

// Header for (home) layout

const HomeHeader = () => {
  return (
    <header className="text-center w-full bg-red-100 p-3 relative">
      <div className="flex justify-center items-center h-full">
        <nav className="flex items-center justify-center gap-7">
          <Link href="/app">App</Link>
          <Link href="/help">Help</Link>
        </nav>
        <div className=" absolute right-10 top-1/2 -translate-y-1/2">
          <div className="flex gap-4">
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
