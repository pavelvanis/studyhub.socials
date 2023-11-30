import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IUser } from "@/models/user";
import { getServerSession } from "next-auth";

const AccountPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as IUser;
  return (
    <main className=" flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">App</h1>
      {session && <h2>{user?.name}</h2>}
      {session && <h2>{user?.email}</h2>}
      {session && <h2>{user?.role}</h2>}
      {session && <h2>{user?.id}</h2>}
    </main>
  );
};

export default AccountPage;
