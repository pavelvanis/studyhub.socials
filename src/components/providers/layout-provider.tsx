"use client";
// import { Layout } from "@/app/layout";
import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const layouts = ["app", "help"];

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname().split("/")[1];
  // const subdomain = typeof window !== "undefined" ? window.location.hostname.split(".")[0] : "";

  return (
    <>
      {layouts.includes(pathname) ? (
        <>{children}</>
      ) : (
        <Layout>{children}</Layout>
      )}
    </>
  );
};

export default LayoutProvider;

// Layout for /...
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
