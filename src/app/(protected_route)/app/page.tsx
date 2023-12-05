import { authOptions } from "@/app/api/_services/authoptions";
import { getServerSession } from "next-auth";
import Ts from "./test";

const AccountPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("SESSION", session);
  const user = session?.user;
  return (
    <main className=" flex flex-col gap-4 items-center justify-center">
      <Ts />
      <h1 className="text-4xl font-bold">App</h1>
      {session && <h2>{user?.name}</h2>}
      {session && <h2>{user?.email}</h2>}
      {session && <h2>{user?.role}</h2>}
      {session && <h2>{user?.id}</h2>}
    </main>
  );
};

export default AccountPage;
