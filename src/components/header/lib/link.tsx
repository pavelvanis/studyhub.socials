import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type NavItemProps = LinkProps & {
  children?: ReactNode;
  className?: string;
};

const NavItem: React.FC<NavItemProps> = ({
  href,
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <Link
      href={href}
      className={twMerge(
        "px-2 py-0.5 text-lg hover:bg-gray-200 rounded-lg w-18",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavItem;
