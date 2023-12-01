import { CLink, ClinkProps } from "@/components/utils";
import { twMerge } from "tailwind-merge";

export type ButtonsProps = React.HTMLProps<HTMLDivElement> & {};

const links: ClinkProps[] = [
  {
    href: "/signup",
    className:
      "bg-red-600 hover:bg-red-700 px-4 py-1.5 text-white font-semibold",
    children: "Sign up",
  },
  {
    href: "/login",
    className:
      "bg-red-600 hover:bg-red-700 px-4 py-1.5 text-white font-semibold",
    children: "Login",
  },
];

const Buttons: React.FC<ButtonsProps> = ({ className }): JSX.Element => {
  return (
    <div className={twMerge(" items-center justify-end gap-3", className)}>
      {links.map((link, index) => (
        <CLink key={index} {...link} />
      ))}
    </div>
  );
};

export default Buttons;
