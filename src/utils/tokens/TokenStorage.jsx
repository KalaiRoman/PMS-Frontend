import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const COOKIE_NAME = "token";

export const setCookie = token => {
  if (!token || typeof token !== "string") {
    console.error("Invalid token.");
    return;
  }

  Cookies.set(COOKIE_NAME, token, {
    expires: 1,
    secure: window.location.protocol === "https:",
    sameSite: "Lax"
  });
};

export const getCookie = () => {
  return Cookies.get(COOKIE_NAME) || null;
};

export const removeCookie = () => {
  Cookies.remove(COOKIE_NAME);
};

export const decodeToken = () => {
  try {
    let token = getCookie();


    if (!token) {
      console.warn("Token not found.");
      return null;
    }

    if (token.startsWith("Bearer ")) {
      token = token.replace("Bearer ", "");
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      console.error("Invalid JWT format.");
      return null;
    }

    const decoded = jwtDecode(token);

    return decoded;
  } catch (error) {
    console.error("Token Decode Error:", error);
    return null;
  }
};

export const isAuthenticated = () => {
  const decoded = decodeToken();

  if (!decoded) return false;

  if (decoded.exp) {
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      console.warn("Token Expired");
      removeCookie();
      return false;
    }
  }

  return true;
};
