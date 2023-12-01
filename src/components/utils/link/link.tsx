import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import './link.css'

const variants = {
  base: "px-2 py-0.5 text-lg hover:bg-gray-200 rounded-lg",
};

export type ClinkProps = LinkProps & {
  children?: ReactNode;
  className?: string;
};

const CLink: React.FC<ClinkProps> = ({ children, className, ...props }) => {
  return (
    <Link {...props} className={twMerge(variants.base, className, )}>
      {children}
    </Link>
  );
};

export default CLink;
