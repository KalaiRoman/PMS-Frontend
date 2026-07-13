import { Toaster } from "react-hot-toast";
function ToasterProvider({ children }) {
  return (
    <Toaster position="top-center" reverseOrder={false}>
      {children}
    </Toaster>
  );
}

export default ToasterProvider;
