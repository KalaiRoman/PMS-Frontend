import RouterApp from "../app/RouterApp";
import StoreProvider from "../app/storeProvider";
import MainContextProvider from "../context/ContextProvider/MainContextProvider";
function MiddleRouter({ children }) {
  return (
    <StoreProvider>
      <MainContextProvider>
        <RouterApp>
          {children}
        </RouterApp>
      </MainContextProvider>
    </StoreProvider>
  );
}

export default MiddleRouter;
