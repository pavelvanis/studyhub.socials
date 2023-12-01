import { MenuIcon } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

export type MenuProps = React.HTMLProps<HTMLDivElement> & {};

const Menu: React.FC<MenuProps> = ({ className, ...props }): JSX.Element => {
  return (
    <div {...props} className={twMerge(className)}>
      <MenuIcon className="w-7 h-7" />
    </div>
  );
};

export default Menu;
