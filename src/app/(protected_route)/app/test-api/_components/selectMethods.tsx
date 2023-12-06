import { Select } from "@/components";
import React from "react";

type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

type Option = {
  value: Method;
  label: string;
};

const methods: Option[] = [
  { value: "GET", label: "GET" },
  { value: "POST", label: "POST" },
  { value: "PATCH", label: "PATCH" },
  { value: "PUT", label: "PUT" },
  { value: "DELETE", label: "DELETE" },
];

type SelectMethodsProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectMethods: React.FC<SelectMethodsProps> = ({ onChange }) => {
  return (
    <Select className=" w-fit h-full" options={methods} onChange={onChange} />
  );
};

export default SelectMethods;
