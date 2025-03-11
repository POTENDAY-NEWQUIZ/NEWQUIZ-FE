"use client"; // 리액트 훅 부분 컴포넌트 분리 or 서버 액션 사용해서 SSR 적용 필요

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

import Button from "@components/button/button";
import LottieImage from "@components/common/lottie-image";
import { useAuthStore } from "@store/user-store";

import logo from "@assets/logo.svg";
import kakao from "@assets/svg/kakao.svg";
import lottie from "@assets/lottie/login.json";
import Banner from "@components/common/banner";

const LoginContainer = () => {
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
    <main className="bg-white h-screen relative">
      {/* 로고 영역 */}
      <section className="mx-5 pt-6 mb-10">
        <Image src={logo} width={93.31} height={22} alt="로고" />
      </section>

      {/* 온보딩 영역 */}
      <section className="mx-5 overflow-hidden">
        <Banner />
      </section>

      {/* 버튼 영역 */}
      <section className="absolute bottom-6 w-full">
        <div className="flex justify-center">
          <LottieImage image={lottie} />
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

export default LoginContainer;
