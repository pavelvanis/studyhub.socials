import type { Metadata } from "next";
import "@/app/globals.css";

// Import components
import { DashHeader } from "@/components/header/";

export const metadata: Metadata = {
  title: "Studyhub",
  description: "The best website you have ever seen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashHeader />
      {children}
    </>
  );
}
