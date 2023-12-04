import type { Metadata } from "next";
import "@/app/globals.css";

// Import components
import { DashHeader } from "@/components/header/";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GeneralHeader from "@/components/header/_general";
import { authOptions } from "../api/_utils/authoptions";

export const metadata: Metadata = {
  title: "Studyhub | App",
};

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("User:", session);
  if (!session) return redirect("/login");
  return (
    <>
      {/* <DashHeader /> */}
      <GeneralHeader />
      {children}
    </>
  );
}
