import { NextResponse } from "next/server";

interface NewUserRequest {
    name: string;
    email: string;
    password: string;
  }
  
  interface NewUserResponse {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  
  type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;
  
// export const GET = async (): Promise<NewPromise> => {

// }