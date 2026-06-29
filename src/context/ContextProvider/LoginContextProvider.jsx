import { useMemo } from "react";
import { LoginContext } from "../createContextSection/MyContexts";

function LoginContextProvider({ children }) {
  const value = useMemo(
    () => ({
      name: "kalai"
    }),
    []
  );
  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
