import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../../constants/reduxReducers/reducerInitialStates";

const userReducer = createSlice({
  name: "chat",
  initialState: userInitialState,
  reducers: {
    userRequest(state, action) {
      state.loading = true;
    },
    userSuccess(state, action) {
      state.users = action.payload;
      state.loading = false;
    },
    userFail(state, action) {
      state.error = action.payload;
    }
  }
});

export const { userRequest, userSuccess, userFail } = userReducer.actions;

export default userReducer.reducer;
