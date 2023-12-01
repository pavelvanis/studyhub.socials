import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type ButtonsProps = React.HTMLProps<HTMLDivElement> & {};

const Buttons: React.FC<ButtonsProps> = ({ className }): JSX.Element => {
  return (
    <div
      className={twMerge(
        " w-[13rem] items-center justify-end gap-3",
        className
      )}
    >
      <Link
        href="/signup"
        className="bg-red-600 hover:bg-red-700 transition-all rounded-lg px-4 py-1.5 text-white font-semibold"
      >
        Sign up
      </Link>
      <Link
        href="/login"
        className="bg-red-700 hover:bg-red-800 transition-all rounded-lg px-4 py-1.5 text-white font-semibold"
      >
        Login
      </Link>
    </div>
  );
};

export default Buttons;
