"use client";
import Input, { InputProps } from "@/components/utils/input/input";
import { Lock, Mail, User2 } from "lucide-react";
import React, { FormEvent, useRef, useState } from "react";

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
  const [error, setError] = useState<string | null>("null");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // console.log(JSON.stringify({ ...credentials.current }));
      const signup = await fetch("api/auth/users", {
        method: "POST",
        body: JSON.stringify({ ...credentials.current }),
      });
      const text = await signup.json();
      if (!signup.ok) {
        // console.log("not OK");
        // console.log(text);
        setError(text.error);
      }
    } catch (error) {
      console.log("blablabla");
      // console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=" space-y-5 w-full">
        <Inputs credentials={credentials} />
      </div>
      {error && (
        <p className=" mt-3 ms-1 mb-5 text-sm text-red-700">
          *<span className="ms-1">{error}</span>
        </p>
      )}
      <Button title={button || ""} />
    </form>
  );
};

export default CredentialsSignupForm;

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  title: string | null;
};

// Form submit button
const Button = ({ title }: ButtonProps) => {
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
