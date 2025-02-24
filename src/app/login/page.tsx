import Image from "next/image";

import Button from "@components/button/button";

import notification from "@assets/notification.svg";
import kakao from "@assets/svg/kakao.svg";

const Login = () => {
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
