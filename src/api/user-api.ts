import { useAuthStore } from "@store/user-store";
import axios from "axios";

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
          "Content-Type": "applicaiton/json",
          registerToken: registerToken,
        },
      })
      .post(`/users/register`, { nickname, birth });

    const { refreshToken, accessToken } = response.data.data;

    useAuthStore.getState().setRefreshToken(refreshToken);
    useAuthStore.getState().setAccessToken(accessToken);

    return response.data;
  } catch (error) {
    console.error("회원가입 실패", error);
  }
};

// 닉네임 중복 확인
