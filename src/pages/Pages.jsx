import { lazy } from "react";

const Login = lazy(() => import("../features/auth/login/Login"));
const Signup = lazy(() => import("../features/auth/signup/Signup"));
const ForgetPassword = lazy(() =>
  import("../features/auth/forgetpassword/ForgetPassword")
);
const ChangePassword = lazy(() =>
  import("../features/auth/changePassword/ChangePassword")
);

const Dashbord = lazy(() => import("../features/dashboard/Dashboard"));
const Projects = lazy(() => import("../features/projects/Projects"));
const Calender = lazy(() => import("../features/calender/Calender"));
const MyTasks = lazy(() => import("../features/mytasks/MyTasks"));
const Members = lazy(() => import("../features/members/Members"));
const Messages = lazy(() => import("../features/messages/Messages"));

export {
  Login,
  Signup,
  ForgetPassword,
  ChangePassword,
  Dashbord,
  Projects,
  Calender,
  MyTasks,
  Members,
  Messages
};
