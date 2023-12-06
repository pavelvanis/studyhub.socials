import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLProps<HTMLDivElement> & {};

const Before: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(" hover:border-slate-300 transition-all flex px-1.5 text-center", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Before;
