import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

type Props = {
  children: ReactNode;
};

const GuestRoute = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  console.log("Login: ", session);
  // if (session) redirect("/app");
  return <>{children}</>;
};

export default GuestRoute;
