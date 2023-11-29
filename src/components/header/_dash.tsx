import Link from "next/link";

// Header for (dash) layout

const DashHeader = () => {
  return (
    <header className=" bg-slate-300">
      <nav className="flex items-center justify-center gap-7 h-full">
        <Link href="/">Home</Link>
        <Link href="/app">Account</Link>
        <Link href="/help">Help</Link>
      </nav>
    </header>
  );
};

export default DashHeader;
