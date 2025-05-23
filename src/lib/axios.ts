import axios from "axios";
import { authEndpoints } from "./endpoints/auth";
import { clearAuthAndRedirect } from "../utils/auth";

const baseURL = "http://65.0.97.95:3001";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error.message ?? "Request failed"));
  }
);

// Response interceptor
/* api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only try refresh once and only if we have a refresh token
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          `${baseURL}${authEndpoints.refreshToken}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        const { accessToken, newRefreshToken } = response.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        // Update auth header and retry
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, clear everything and redirect
        clearAuthAndRedirect();
        return Promise.reject(
          new Error("Session expired. Please login again.")
        );
      }
    }

    // If it's a 401 but we already tried refresh, just logout
    if (error.response?.status === 401) {
      clearAuthAndRedirect();
      return Promise.reject(new Error("Session expired. Please login again."));
    }

    return Promise.reject(error);
  }
); */

export default api;
