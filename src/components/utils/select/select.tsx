import React from "react";
import { twMerge } from "tailwind-merge";

export type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = React.HTMLProps<HTMLSelectElement> & {
  options?: SelectOption[];
};

const Select: React.FC<SelectProps> = ({ options, className, ...props }) => {
  return (
    <select
      {...props}
      className={twMerge(
        "border-inherit bg-inherit text-center focus:outline-none cursor-pointer ",
        className
      )}
    >
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
