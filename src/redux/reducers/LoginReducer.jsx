import { createSlice } from "@reduxjs/toolkit";
import { loginInitialState } from "../../constants/reduxReducers/reducerInitialStates";

const loginReducer = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    loginRequest(state, action) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.user = {};
    }
  }
});

export const { loginRequest, loginSuccess, loginFailed } = loginReducer.actions;

export default loginReducer.reducer;
