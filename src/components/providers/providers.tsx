'use client'
import { ReactNode } from "react";
import LayoutProvider from "./layout-provider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
