import { Provider } from "react-redux";
import Stores from "../redux/stores/Stores";
function StoreProvider({ children }) {
  return (
    <Provider store={Stores}>
      {children}
    </Provider>
  );
}

export default StoreProvider;
