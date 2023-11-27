import { Metadata } from "next";
import React, { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SignupLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen w-screen fixed">
      {/* <Header /> */}
      {children}
    </div>
  );
};

export default SignupLayout;
