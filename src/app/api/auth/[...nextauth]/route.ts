import NextAuth from "next-auth/next";
import { authOptions } from "../../_utils/authoptions";

const handler = NextAuth(authOptions);

// export default handler

export { handler as GET, handler as POST };
