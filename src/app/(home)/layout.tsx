import type { Metadata } from "next";
import "@/app/globals.css";

// Import components
import { Footer } from "@/components";
import { HomeHeader } from "@/components/header";
import GeneralHeader from "@/components/header/_general";

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
      {/* <HomeHeader /> */}
      <GeneralHeader />
      {children}
      <Footer />
    </>
  );
}
