import axios from "axios";
import envFile from "../utils/envfiles/EnvFile";
import { getCookie } from "../utils/tokens/TokenStorage";

const api = axios.create({
  baseURL: envFile.baseURL,
  timeout: 10000,
  withCredentials: true
});

api.interceptors.request.use(
  config => {
    const token = getCookie();

    console.log("Token:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("Token not found");
    }

    return config;
  },
  error => Promise.reject(error)
);

export default api;