import { getProjectService } from "../../services/project-services";
import {
  projectError,
  projectRequest,
  projectAdd,
  getProjects
} from "../reducers/ProjectReducer";
const createProject = data => async dispatch => {
  dispatch(projectRequest());
  try {
    const response = data;
    if (response) {
      dispatch(projectAdd(response));
    }
  } catch (error) {
    dispatch(projectError(error || "Something went wrong"));
  }
};

const getProjectAction = ()=> async dispatch => {
  dispatch(projectRequest());
  try {
    const response = await getProjectService();

    console.log(response,"response")
    if (response) {
      dispatch(getProjects(response?.data?.data));
    }
  } catch (error) {
    dispatch(projectError(error || "Something went wrong"));
  }
};
export { createProject,getProjectAction };
