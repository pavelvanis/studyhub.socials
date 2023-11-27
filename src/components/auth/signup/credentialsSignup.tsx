"use client";
import Input, { InputProps } from "@/components/utils/input/input";
import { Lock, Mail, User2 } from "lucide-react";
import React, { FormEvent, useRef } from "react";

type Props = {
  button?: string;
};

type CredentialsSignupProps = {
  name: string;
  email: string;
  password: string;
};

// Form for signup with credentials
const CredentialsSignupForm: React.FC<Props> = ({ button }) => {
  const credentials = useRef<CredentialsSignupProps>({
    name: "",
    email: "",
    password: "",
  });
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(credentials.current);
  };

  return (
    <form onSubmit={submitHandler} className=" space-y-5 w-full">
      <Inputs credentials={credentials} />
      <Button title={button || ""} />
    </form>
  );
};

export default CredentialsSignupForm;

// Form submit button
const Button = ({ title }: { title: string }) => {
  return (
    <button
      type="submit"
      className="w-full bg-red-600 hover:bg-red-700 transition-all rounded-lg px-4 py-3 text-white font-semibold shadow-xl"
    >
      {title ? title : "Submit"}
    </button>
  );
};

// Inputs for form
const Inputs = ({
  credentials,
}: {
  credentials: React.MutableRefObject<CredentialsSignupProps>;
}) => {
  const inputs: InputProps[] = [
    {
      type: "text",
      icon: <User2 />,
      title: "Name",
      placeholder: "name",
      required: true,
      name: "name",
      id: "signup-name",
      onChange: (e) => (credentials.current.name = e.target.value),
    },
    {
      type: "email",
      icon: <Mail />,
      title: "Email",
      placeholder: "email",
      required: true,
      name: "email",
      id: "signup-email",
      onChange: (e) => (credentials.current.email = e.target.value),
    },
    {
      type: "password",
      icon: <Lock />,
      title: "Password",
      placeholder: "password",
      required: true,
      name: "password",
      id: "signup-password",
      onChange: (e) => (credentials.current.password = e.target.value),
    },
  ];
  return (
    <>
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
    </>
  );
};
