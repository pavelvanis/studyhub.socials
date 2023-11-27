"use client";
import Input, { InputProps } from "@/components/utils/input/input";
import { Lock, User2 } from "lucide-react";
import { ChangeEvent, FormEvent, useRef } from "react";

const inputs: InputProps[] = [
  {
    type: "email",
    icon: <User2 />,
    title: "Email",
    placeholder: "email",
    required: true,
    name: "email",
    id: "signup-email",
  },
  {
    type: "password",
    icon: <Lock />,
    title: "Password",
    placeholder: "password",
    required: true,
    name: "password",
    id: "signup-password",
  },
];

export type SignupProps = {
  email: any;
  password: string;
};

export default function TestPage() {
  const credentials = useRef<SignupProps>({ email: "", password: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(credentials.current);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="p-5">
        <div className=" max-w-[20rem] bg-slate-50 px-3 py-2 rounded-lg space-y-5">
          {inputs.map((input, index) => (
            <Input
              key={index}
              {...input}
              onChange={(e) => (credentials.current.email = e.target.value)}
            />
          ))}
        </div>
      </form>
    </div>
  );
}
