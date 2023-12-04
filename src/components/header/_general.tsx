
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Auth, Menu, Nav } from "./lib";
import { authOptions } from "@/app/api/_utils/authoptions";

type Props = {};

const GeneralHeader = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <header className=" mx-5 xs:mx-10">
      <div className="flex justify-between items-center h-full">
        <div className="w-full xs:w-fit md:w-[13rem] text-center">
          <Link href="/" className=" text-2xl font-medium">
            studyhub
          </Link>
        </div>
        {/* nav links */}
        <Nav className=" hidden xs:flex " />
        {/* Login & Signup buttons */}
        <Auth className=" hidden md:flex w-[13rem]" />
        {/* Menu button */}
        <Menu className="  md:hidden " />
      </div>
    </header>
  );
};

export default GeneralHeader;
