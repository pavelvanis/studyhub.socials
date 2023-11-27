import { AlertTriangle } from "lucide-react";
import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  id?: string;
  title?: string;
};

const variants = {
  base: "border rounded-lg w-full h-[2.3rem] ps-9 pe-3 font-light text-sm hover:border-slate-300 focus:border-slate-500 focus:outline-none",
};

const Input: React.FC<InputProps> = (props) => {
  const id = props.id || props.type;

  return (
    <div className=" w-full">
      <label
        htmlFor={id}
        className=" w-full text-[0.67rem] ms-1 mb-1 block relative leading-[1] font-medium"
      >
        {props.required && <span className=" text-red- me-1">*</span>}
        {props.title}
      </label>
      <div className="relative">
        <input
          {...props}
          id={id}
          className={twMerge(variants.base, props.className)}
        />
        <div className="absolute top-1/2 left-2 -translate-y-1/2">
          {props.icon &&
            React.cloneElement(props.icon, {
              className: twMerge("p-[0.27rem] stroke-slate-500"),
            })}
        </div>
      </div>
      <p className=" text-red-700 leading-[1] mt-[0.15rem] items-center flex">
        {/* <AlertTriangle className=" h-4 p-[.07rem]" /> */}
      </p>
    </div>
  );
};

export default Input;

