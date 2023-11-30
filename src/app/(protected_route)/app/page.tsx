import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const AccountPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className=" flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">App</h1>
      {session && <h2>{session.user?.name}</h2>}
    </main>
  );
};

export default AccountPage;
