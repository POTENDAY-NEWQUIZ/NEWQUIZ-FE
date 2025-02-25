import axios from "axios";

// 회원가입
const register = async (
  registerToken: string,
  nickname: string,
  birth: string
) => {
  try {
    const response = await axios
      .create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
          "Content-Type": "applicaiton/json",
          registerToken: registerToken,
        },
      })
      .post(`users/register`, { nickname, birth });

    return response.data;
  } catch (error) {
    console.error("회원가입 실패", error);
  }
};

// 닉네임 중복 확인
