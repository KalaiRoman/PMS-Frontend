import RouterApp from "../app/RouterApp";
import StoreProvider from "../app/storeProvider";
import SuspenceProvider from "../app/SuspenceProvider";
import ToasterProvider from "../app/ToasterProvider";
import MainContextProvider from "../context/ContextProvider/MainContextProvider";
import ErrorBoundary from "../utils/errorboundary/ErrorBoundary";
function MiddleRouter({ children }) {
  return (
    <StoreProvider>
      <ToasterProvider />
      <ErrorBoundary>
        <SuspenceProvider>
          <MainContextProvider>
            <RouterApp>
              {children}
            </RouterApp>
          </MainContextProvider>
        </SuspenceProvider>
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default MiddleRouter;
