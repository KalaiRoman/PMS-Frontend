import axios from "axios";
import { getCookie } from "../utils/tokens/TokenStorage";
import envFile from "../utils/envfiles/EnvFile";
const api = axios.create({
  baseURL: envFile.baseURL,
  timeout: 10000,
  withCredentials: true
});

api.interceptors.request.use(config => {
  const token = getCookie();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
