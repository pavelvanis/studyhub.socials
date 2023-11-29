"use client";
import { signOut } from "next-auth/react";
import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

const SignoutBtn: React.FC<Props> = ({ ...props }) => {
  return (
    <button {...props} onClick={() => signOut()}>
      Sign out
    </button>
  );
};

export default SignoutBtn;
