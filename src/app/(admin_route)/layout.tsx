import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { IUser } from "@/models/user";
import Link from "next/link";
import SignoutBtn from "@/components/auth/signout/button";

type Props = {
  children: ReactNode;
};

const AdminLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  console.log("<<< ADMIN_ROUTE >>>");
  const user = session?.user as IUser;
  if (session?.user?.role !== "admin") {
    redirect("/login");
  }
  return (
    <>
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
      {children}
    </>
  );
};

export default AdminLayout;
