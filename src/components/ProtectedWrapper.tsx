import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

function ProtectedWrapper({ children }: Props) {
  const login: boolean =true;
  return login ? children : <h1>unauthorised page</h1>;
}

export default ProtectedWrapper;
