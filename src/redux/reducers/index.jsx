import loginReducer from "./LoginReducer";
import projectReducer from "./ProjectReducer";
const rootReducer = {
  login: loginReducer,
  project: projectReducer
};
export default rootReducer;
