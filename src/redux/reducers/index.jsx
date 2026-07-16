import loginReducer from "./LoginReducer";
import projectReducer from "./ProjectReducer";
import userReducer from "./userReducers";

const rootReducer = {
  login: loginReducer,
  project: projectReducer,
  user: userReducer
};
export default rootReducer;
