"use client";
import { authOptions } from "@/app/api/_services/authoptions";
import { useSession } from "next-auth/react";
import React from "react";

const Ts = () => {
  const session = useSession();
  console.log(session);
  return<></>
};

export default Ts;
