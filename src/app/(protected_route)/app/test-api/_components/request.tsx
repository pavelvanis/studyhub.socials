"use client";
import { Input } from "@/components";
import React, { useRef, useState } from "react";
import SelectMethods from "./selectMethods";
import Container from "./container";
import { useSession } from "next-auth/react";

type Props = {
  setState?: Function;
};

const SetRequest = ({ setState }: Props) => {
  const defaultUrl = "http://localhost:3000";
  const url = useRef<string>(defaultUrl + "/api/v1/");
  const method = useRef<string>("GET");
  const [data, setData] = useState();
  const token = useSession().data?.user.token;

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const spliturl = url.current.split(defaultUrl)[1];
    try {
      const request = await fetch(spliturl, {
        method: method.current,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(await request.json());
    } catch (error: any) {
      setData(error);
    }
  };

  return (
    <>
      <div className="py-10 flex justify-center border-t border-slate-300 bg-slate-200">
        <form onSubmit={submitHandler} className=" w-4/5 max-w-[36rem]">
          <Input
            onChange={(e) => (url.current = e.target.value)}
            defaultValue={url.current}
            before={
              <SelectMethods
                onChange={(e) => (method.current = e.target.value)}
              />
            }
            after={<Button />}
          />
        </form>
      </div>
      <div className=" grow border-t p-20 border-slate-400 bg-slate-300">
        <Container data={data} />
      </div>
    </>
  );
};

export default SetRequest;

const Button = () => {
  return <button type="submit">SEND</button>;
};
