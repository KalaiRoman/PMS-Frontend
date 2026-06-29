import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const Stores = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export default Stores;
