import { ReactNode } from "react";
import LayoutProvider from "./layout-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Providers;
