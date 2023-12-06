"use client";
import React, { FormEvent, useRef, useState } from "react";
import { Input } from "../../utils";
import { InputProps } from "../../utils/input/input";
import { Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
  button?: string;
};

type CredentialsLoginProps = {
  email: string;
  password: string;
};

// Form for login with credentials
const CredentialsLoginForm: React.FC<Props> = ({ button }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null | undefined>(null);
  const credentials = useRef<CredentialsLoginProps>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const signin = await signIn("credentials", {
        ...credentials.current,
        redirect: false,
      });
      console.log(signin);
      if (!signin?.ok) return setError(signin?.error);
      setError(null);
      formRef.current?.reset();
      router.push("/app");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className=" w-full ">
      <div className=" space-y-5">
        <Inputs credentials={credentials} />
      </div>
      {error && (
        <p className=" mt-3 ms-1 mb-5 text-sm text-red-700">
          *<span className="ms-1">{error}</span>
        </p>
      )}
      <Button className={error ? "" : "mt-5"} title={button || ""} />
    </form>
  );
};

export default CredentialsLoginForm;

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  title: string | null;
};

// Form submit button
const Button = ({ title, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type="submit"
      className={twMerge(
        "w-full bg-red-600 hover:bg-red-700 transition-all rounded-lg px-4 py-3 text-white font-semibold ",
        className
      )}
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
      before: <Mail />,
      title: "Email",
      placeholder: "email",
      required: true,
      name: "email",
      id: "signup-email",
      onChange: (e) => (credentials.current.email = e.target.value),
    },
    {
      type: "password",
      before: <Lock />,
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
