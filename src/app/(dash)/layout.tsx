import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/app/globals.css";
// import "./globals.css";

// Import components
import { Footer, Header, Providers } from "@/components";
import Link from "next/link";

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
        <header className=" bg-slate-300">
          <nav className="flex items-center justify-center gap-7 h-full">
            <Link href="/">Home</Link>
            <Link href="/account">Account</Link>
            <Link href="/help">Help</Link>
          </nav>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
