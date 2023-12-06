// "use client";
import React, { useState } from "react";
import SetRequest from "./_components/request";
import Container from "./_components/container";
import { useSession } from "next-auth/react";

const TestApiPage = () => {
  // const token = useSession().data?.user.token;
  // const [message, setMessage] = useState<{ url: string; method: string }>();


  return (
    <main className="flex flex-col">
        <SetRequest />
    </main>
  );
};

export default TestApiPage;
