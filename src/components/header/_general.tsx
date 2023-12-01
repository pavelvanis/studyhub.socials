import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Auth, Nav } from "./lib";

type Props = {};

const GeneralHeader = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <header className="mx-10">
      <div className="flex justify-between items-center h-full">
        <div className=" w-full text-center xs:w-[13rem] ">
          <Link href="/" className=" text-xl font-medium">
            studyhub
          </Link>
        </div>
        {/* nav links */}
        <Nav className=" hidden md:flex " />
        {/* Login & Signup buttons */}
        <Auth className=" hidden xs:flex " />
      </div>
    </header>
  );
};

export default GeneralHeader;
