import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "@/app/globals.css";

// Import components
import { Footer, Header, Providers } from "@/components";

const inter = Inter({ subsets: ["latin"] });

// const font = Averia_Libre({
//   weight: ["300", "400"],
//   subsets: ["latin"],
// });

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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
