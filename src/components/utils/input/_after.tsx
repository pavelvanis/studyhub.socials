import React from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLProps<HTMLDivElement> & {};

const After: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        " flex px-3 text-center rounded-e-lg bg-blue-400 hover:bg-blue-500 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default After;
