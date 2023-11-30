import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";

type Props = {
  children: ReactNode;
};

const AdminLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  console.log("<<< ADMIN_ROUTE >>>");
  console.log(session);
  // if(session?.user.role !== "admin")) {
  //   redirect("/login")
  // }
  return <>{children}</>;
};

export default AdminLayout;
