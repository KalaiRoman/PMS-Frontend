import {
  projectError,
  projectRequest,
  projectSuccess
} from "../reducers/ProjectReducer";
const createProject = data => async dispatch => {
  dispatch(projectRequest());
  try {
    const response = data;
    if (response) {
      dispatch(projectSuccess(response));
    }
  } catch (error) {
    dispatch(projectError(error || "Something went wrong"));
  }
};

export { createProject };
