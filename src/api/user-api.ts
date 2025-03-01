import axios from "axios";

import { useAuthStore } from "@store/user-store";
import axiosInstance from "./axios-instance";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// 토큰 재발급
export const reissue = async (refreshToken: string) => {
  return axios.get(`${baseURL}/tokens/issue`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      refreshToken: refreshToken,
    },
  });
};

// 회원가입
export const register = async (
  registerToken: string,
  nickname: string,
  birth: string
) => {
  try {
    const response = await axios
      .create({
        baseURL: baseURL,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          registerToken: registerToken,
        },
      })
      .post(`/users/register`, { nickName: nickname, birth });

    const { refreshToken, accessToken } = response.data.data;

    useAuthStore.getState().setRefreshToken(refreshToken);
    useAuthStore.getState().setAccessToken(accessToken);

    return response.data;
  } catch (error) {
    console.error("회원가입 실패", error);
  }
};

// 닉네임 중복 확인
export const checkNickname = async (nickname: string) => {
  try {
    const response = await axios
      .create({
        baseURL: baseURL,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .post(`/users/nickname/check`, { nickName: nickname });

    return response.data;
  } catch (error) {
    console.error("닉네임 중복 확인 실패", error);
  }
};

// 로그아웃
export const logoutUserData = async () => {
  const response = await axiosInstance.post(
    `/users/logout`,
    {},
    {
      headers: {
        refreshToken: useAuthStore.getState().refreshToken,
      },
    }
  );
  useAuthStore.getState().clearRefreshToken();
  useAuthStore.getState().clearAccessToken();

  return response.data;
};

// 회원탈퇴
export const deleteUserData = async () => {
  const response = await axiosInstance.delete(`/users`, {
    headers: {
      refreshToken: useAuthStore.getState().refreshToken,
    },
  });
  useAuthStore.getState().clearRefreshToken();
  useAuthStore.getState().clearAccessToken();

  return response.data;
};

// 사용자 정보 조회
export const readUserData = async () => {
  const response = await axiosInstance.get(`/users`);
  return response.data;
};

// 닉네임 수정
export const updateUserData = async (nickname: string) => {
  const response = await axiosInstance.patch(`/users/nickname`, {
    nickName: nickname,
  });

  return response.data;
};
