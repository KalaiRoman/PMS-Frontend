import LoginContextProvider from "./LoginContextProvider";

function MainContextProvider({ children }) {
  return (
    <LoginContextProvider>
      {children}
    </LoginContextProvider>
  );
}

export default MainContextProvider;
