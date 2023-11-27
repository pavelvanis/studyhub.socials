"use client";
import React, { FormEvent, useRef } from "react";
import { Input } from "../utils";
import { InputProps } from "../utils/input/input";
import { Lock, Mail } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

type Props = {
  button?: string;
};

type CredentialsLoginProps = {
  email: string;
  password: string;
};

// Form for login with credentials
const CredentialsLoginForm: React.FC<Props> = ({ button }) => {
  const credentials = useRef<CredentialsLoginProps>({
    email: "",
    password: "",
  });

  const session = useSession();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...credentials.current,
      redirect: false,
    });
    console.log(res);
    console.log(session.data?.user);
  };
  return (
    <form onSubmit={submitHandler} className=" w-full space-y-5">
      <Inputs credentials={credentials} />
      <Button title={button || ""} />
    </form>
  );
};

export default CredentialsLoginForm;

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
  credentials: React.MutableRefObject<CredentialsLoginProps>;
}) => {
  const inputs: InputProps[] = [
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
