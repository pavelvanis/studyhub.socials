import Link from "next/link";
import React, { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col">
      <nav className=" bg-blue-50 flex justify-center gap-4 p-2">
        <Link href="#">A</Link>
        <Link href="#">B</Link>
        <Link href="#">C</Link>
      </nav>
      <div>{children}</div>
    </section>
  );
};

export default Template;
