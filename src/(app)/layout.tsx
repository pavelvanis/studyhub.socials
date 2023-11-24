import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/app/globals.css";

// Import components
import { Footer, Providers } from "@/components";
import { AppHeader } from "@/components/header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={josefin.className}>
        <Providers>
          <AppHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
