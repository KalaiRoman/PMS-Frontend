import {
  Calender,
  ChangePassword,
  Dashbord,
  ForgetPassword,
  Login,
  Members,
  Messages,
  MyTasks,
  Projects,
  Signup
} from "../pages/Pages";

import {
  MdDashboard,
  MdDashboardCustomize,
  MdOutlineCalendarMonth,
  MdCalendarMonth,
  MdMessage,
  MdOutlineMessage,
  MdPeople,
  MdOutlinePeople
} from "react-icons/md";

import { HiOutlineFolder, HiFolder } from "react-icons/hi";

import { FaTasks } from "react-icons/fa";

import { LuListTodo } from "react-icons/lu";

const PMSContant = [
  {
    id: 1,
    name: "Login",
    path: "/",
    element: Login,
    sidebar: false,
    iconActive: "",
    iconInactive: "",
    auth: true
  },
  {
    id: 2,
    name: "Signup",
    path: "/signup",
    element: Signup,
    sidebar: false,
    iconActive: "",
    iconInactive: "",
    auth: true
  },
  {
    id: 3,
    name: "ForgetPassword",
    path: "/forget-password",
    element: ForgetPassword,
    sidebar: false,
    iconActive: "",
    iconInactive: "",
    auth: true
  },
  {
    id: 4,
    name: "ChangePassword",
    path: "/change-password",
    element: ChangePassword,
    sidebar: false,
    iconActive: "",
    iconInactive: "",
    auth: true
  },
  {
    id: 5,
    name: "Dashboard",
    path: "/dashboard",
    element: Dashbord,
    sidebar: true,
    iconActive: MdDashboard,
    iconInactive: MdDashboardCustomize,
    auth: false
  },
  {
    id: 6,
    name: "Projects",
    path: "/projects",
    element: Projects,
    sidebar: true,
    iconActive: HiFolder,
    iconInactive: HiOutlineFolder,
    auth: false
  },
  {
    id: 7,
    name: "My Tasks",
    path: "/mytasks",
    element: MyTasks,
    sidebar: true,
    iconActive: FaTasks,
    iconInactive: LuListTodo,
    auth: false
  },
  {
    id: 8,
    name: "Calendar",
    path: "/calendar",
    element: Calender,
    sidebar: true,
    iconActive: MdCalendarMonth,
    iconInactive: MdOutlineCalendarMonth,
    auth: false
  },
  {
    id: 9,
    name: "Members",
    path: "/members",
    element: Members,
    sidebar: true,
    iconActive: MdPeople,
    iconInactive: MdOutlinePeople,
    auth: false
  },
  {
    id: 10,
    name: "Messages",
    path: "/messages",
    element: Messages,
    sidebar: true,
    iconActive: MdMessage,
    iconInactive: MdOutlineMessage,
    auth: false
  }
];

export default PMSContant;
