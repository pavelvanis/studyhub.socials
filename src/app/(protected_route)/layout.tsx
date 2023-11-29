import type { Metadata } from "next";
import "@/app/globals.css";

// Import components
import { DashHeader } from "@/components/header/";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Studyhub",
  description: "The best website you have ever seen",
};

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("User:", session);
  if (!session) redirect("/login");
  return (
    <>
      <DashHeader />
      {children}
    </>
  );
}
