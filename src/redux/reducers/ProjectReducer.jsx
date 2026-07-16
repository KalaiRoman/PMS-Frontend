import { createSlice } from "@reduxjs/toolkit";
import { projectInitialState } from "../../constants/reduxReducers/reducerInitialStates";

const projectReducer = createSlice({
  name: "project",
  initialState: projectInitialState,
  reducers: {
    projectRequest(state) {
      state.loading = true;
    },
    projectAdd(state, action) {
      return {
        ...state,
        projectArray: [...state.projectArray, action.payload]
      };
    },
    getProjects(state, action) {
      state.projectArray = action.payload;
    },
    projectError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const {
  projectRequest,
  projectAdd,
  projectError,
  getProjects
} = projectReducer.actions;

export default projectReducer.reducer;
