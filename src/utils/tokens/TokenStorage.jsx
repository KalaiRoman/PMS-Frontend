import Cookies from "js-cookie";
const setCookie = params => {
  return Cookies.set("token", params, { expires: 1 });
};
const getCookie = () => {
  return Cookies.get("token");
};
const removeCookie = () => {
  return Cookies.remove("token");
};
export { setCookie, getCookie, removeCookie };
