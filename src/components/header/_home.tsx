import Link from "next/link";

// Header for (home) layout

const HomeHeader = () => {
  return (
    <header className="text-center w-full bg-red-100 p-3">
      <div className="flex justify-between items-center h-full">
        <div className="w-[14rem]"></div>
        <nav className="flex items-center justify-center gap-7">
          <Link href="/app">App</Link>
          <Link href="/help">Help</Link>
        </nav>
        <div className="w-[14rem]"></div>
      </div>
    </header>
  );
};

export default HomeHeader;
