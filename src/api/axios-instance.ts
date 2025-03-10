import axios from "axios";

import { reissue } from "@api/user-api";
import { useAuthStore } from "@store/user-store";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) config.headers["Authorization"] = accessToken;
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      !originalRequest._retry &&
      (error.response.status === 401 ||
        error.response.data.code === "0401")
    ) {
      originalRequest._retry = true;

      const { refreshToken } = useAuthStore.getState();
      if (!refreshToken) {
        window.location.replace("/login");
        return Promise.reject(error);
      }

      try {
        const response = await reissue(refreshToken);

        if (response.data.is_success) {
          let newAccessToken = `Bearer ${response.data.data.accessToken}`;

          if (!newAccessToken.startsWith("Bearer ")) {
            newAccessToken = `Bearer ${newAccessToken}`;
          }

          useAuthStore.getState().setAccessToken(newAccessToken);
          originalRequest.headers["Authorization"] = newAccessToken;
          return axiosInstance(originalRequest);
        } else {
          useAuthStore.getState().clearRefreshToken();
          useAuthStore.getState().clearAccessToken();
          window.location.replace("/login");
        }
      } catch (error) {
        useAuthStore.getState().clearAccessToken();
        window.location.replace("/login");
      }
    }

    if (error.response && error.response.data.code === 999) {
      return Promise.reject(error);
    }

    window.location.replace("/login");
    return Promise.reject(error);
  }
);

export default axiosInstance;
