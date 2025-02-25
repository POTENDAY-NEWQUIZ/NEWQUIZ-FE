import { useRouter } from "next/navigation";
import axios from "axios";

import { useAuthStore } from "@store/user-store";
import { reissue } from "./user-api";

const router = useRouter();

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
      error.response.status === 401
    ) {
      originalRequest._retry = true;

      const { refreshToken } = useAuthStore.getState();
      if (!refreshToken) {
        router.replace("/login");
        return Promise.reject(error);
      }

      try {
        const response = await reissue(refreshToken);

        if (response.data.is_success) {
          const newAccessToken = response.data.data.accessToken;
          useAuthStore.getState().setAccessToken(newAccessToken);

          originalRequest.headers["Authorization"] = newAccessToken;
          return axiosInstance(originalRequest);
        } else {
          useAuthStore.getState().clearRefreshToken();
          useAuthStore.getState().clearAccessToken();
          router.replace("/login");
        }
      } catch (error) {
        useAuthStore.getState().clearAccessToken();
        router.replace("/login");
      }
    }

    return Promise.reject(error);
  }
);
