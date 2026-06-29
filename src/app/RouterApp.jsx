import { BrowserRouter } from "react-router-dom";
function RouterApp({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}

export default RouterApp;
