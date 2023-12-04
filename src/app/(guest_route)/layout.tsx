import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/_services/authoptions";


type Props = {
  children: ReactNode;
};

const GuestRoute = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  console.log("Login: ", session);

  if (session) return redirect("/app");

  return <>{children}</>;
};

export default GuestRoute;
