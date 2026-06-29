import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  withCredentials: true
});

// api.interceptors.request.use(config => {
// //   const token = localStorage.getItem("token");
// // const token=true;

//   // if (token) {
//   //   config.headers.Authorization = `Bearer ${token}`;
//   // }

//   return config;
// });

export default api;
