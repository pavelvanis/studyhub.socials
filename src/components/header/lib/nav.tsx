import { twMerge } from "tailwind-merge";
import { CLink, ClinkProps } from "@/components/utils";

const links: ClinkProps[] = [
  {
    href: "/projects",
    children: "Projects",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
];

export type NavProps = React.HTMLProps<HTMLElement>;

const Nav: React.FC<NavProps> = ({ className }): JSX.Element => {
  return (
    <nav className={twMerge("gap-2", className)}>
      {links.map((link, index) => (
        <CLink key={index} {...link} />
      ))}
    </nav>
  );
};

export default Nav;
