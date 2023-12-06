import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Before from "./_before";
import Label from "./_label";
import After from "./_after";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  before?: JSX.Element;
  after?: JSX.Element;
};

const variants = {
  base: " w-full h-[2.3rem] ps-9 pe-3 border focus:outline-none bg-transparent",
};

const Input: React.FC<InputProps> = ({
  id,
  title,
  required,
  before,
  after,
  className,
  ...props
}) => {
  return (
    <div className=" w-full ">
      {/* Label */}
      {title && <Label id={id} title={title} required={required} />}
      <div className="flex bg-white rounded-lg h-[2.3rem]">
        {/* Before */}
        {before && <Before className="border" >{before}</Before>}
        {/* Input */}
        <input {...props} className="bg-transparent grow py-1 px-3 ps-4 font-light border hover:border-slate-300" />
        {/* After */}
        {after && <After className=" border">{after}</After>}
      </div>
    </div>
  );
};

export default Input;
