"use client"; // 리액트 훅 부분 컴포넌트 분리 or 서버 액션 사용해서 SSR 적용 필요

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

import Button from "@components/button/button";
import { useAuthStore } from "@store/user-store";

import notification from "@assets/notification.svg";
import kakao from "@assets/svg/kakao.svg";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const refreshToken = searchParams.get("refreshToken");
    const accessToken = searchParams.get("accessToken");

    if (
      typeof accessToken === "string" &&
      typeof refreshToken === "string"
    ) {
      useAuthStore.getState().setAccessToken(accessToken);
      useAuthStore.getState().setRefreshToken(refreshToken);
      router.replace("/");
    }
  }, []);

  return (
    <main className="w-full h-screen bg-white flex flex-col justify-center items-center">
      {/* 로고 영역 */}
      <section className="text-center mb-20">
        <div>뉴퀴즈(로고)</div>
        <div className="font-semibold">퀴즈 하나로 뉴스를 더 쉽게!</div>
      </section>

      {/* 버튼 영역 */}
      <section className="w-full">
        <div className="flex justify-center mb-2">
          <Image
            src={notification}
            width={163}
            height={39}
            alt="3초만에 빠른 시작하기"
          />
        </div>
        <Button
          icon={kakao}
          text="카카오 로그인"
          type="kakao"
          link="https://api.new-quiz.site/oauth2/authorization/kakao"
        />
      </section>
    </main>
  );
};

export default Login;
