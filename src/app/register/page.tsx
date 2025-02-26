"use client"; // 리액트 훅 부분 컴포넌트 분리 or 서버 액션 사용해서 SSR 적용 필요

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import Header from "@components/header";
import Blank from "@components/button/blank";
import EventButton from "@components/button/event-button";
import CheckButton from "@components/button/check-button";
import Button from "@components/button/button";
import { checkNickname, register } from "@api/user-api";

import cancel from "@assets/svg/cancel.svg";

const Register = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registerToken = searchParams.get("token");
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [isCheckNickname, setIsCheckNickname] = useState("DEFAULT");

  const nicknameRegex =
    /^(?=.*[가-힣a-zA-Z])(?=.*\d)[가-힣a-zA-Z\d]{2,8}$/;
  const birthRegex = /^\d{4}-\d{2}-\d{2}$/;

  const isValidNickname = nicknameRegex.test(nickname);
  const isValidBirth = birthRegex.test(birth);

  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
    setIsCheckNickname("DEFAULT");
  };

  const onChangeBirth = (e: any) => {
    setBirth(e.target.value);
  };

  const onClickCheckNickname = async () => {
    if (!isValidNickname) {
      setIsCheckNickname("ERROR");
      return;
    }

    const response = await checkNickname(
      String(registerToken),
      nickname
    );

    if (response.data.isDuplicate) {
      setIsCheckNickname("FALSE");
    } else {
      setIsCheckNickname("TRUE");
    }
  };

  const onClickRegister = async () => {
    const response = await register(
      String(registerToken),
      nickname,
      birth
    );

    console.log(response);

    if (response.is_success) {
      router.replace("/");
    }
  };

  return (
    <main className="bg-white">
      <Header
        leftChild={<Blank />}
        rightChild={<EventButton icon={cancel} command="register" />}
      />

      <div className="h-screen flex flex-col justify-center p-5">
        {/* 타이틀 구역 */}
        <section className="text-2xl font-semibold mb-24">
          필수 정보를 입력해주세요!
        </section>

        {/* 입력 구역 */}
        <section className="flex flex-col gap-14 mb-14">
          <div className="flex flex-col">
            <label className="mb-7 text-lg font-medium">
              닉네임을 입력해주세요.
            </label>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="한글, 영문, 숫자 중 2가지 이상 8자 이내 입력"
                className={`w-full py-2 pr-16 text-sm outline-none border-b-[1px] ${
                  nickname ? "border-black" : "border-[#D9D9D9]"
                }`}
                value={nickname}
                onChange={onChangeNickname}
              />
              <div className="absolute right-0 z-10">
                {isCheckNickname === "TRUE" ? (
                  <CheckButton
                    text="확인완료"
                    type="check"
                    onClick={() => {}}
                  />
                ) : (
                  <CheckButton
                    text="중복확인"
                    type="uncheck"
                    onClick={onClickCheckNickname}
                  />
                )}
              </div>
            </div>
            <div className="text-xs text-right pt-2">
              {isCheckNickname === "TRUE" ? (
                <p>사용 가능한 닉네임입니다 :)</p>
              ) : isCheckNickname === "FALSE" ? (
                <p className="text-[#FC1919]">
                  사용 중인 닉네임입니다.
                </p>
              ) : isCheckNickname === "ERROR" ? (
                <p className="text-[#FC1919]">다시 입력해주세요.</p>
              ) : (
                <p className="text-white">닉네임 관련 문구</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-7 text-lg font-medium">
              생년월일을 입력해주세요.
            </label>
            <input
              type="text"
              placeholder="예) 2000-01-01"
              className={`w-full py-2 flex justify-between text-sm outline-none border-b-[1px] ${
                birth ? "border-black" : "border-[#D9D9D9]"
              }`}
              value={birth}
              onChange={onChangeBirth}
            />
          </div>
        </section>
      </div>

      {/* 버튼 구역 */}
      <section className="max-w-[480px] w-full fixed bottom-5">
        {isCheckNickname === "TRUE" &&
        isValidNickname &&
        isValidBirth ? (
          <Button
            text="뉴퀴즈 시작하기"
            type="active"
            onClick={onClickRegister}
          />
        ) : (
          <Button text="뉴퀴즈 시작하기" type="inactive" link="" />
        )}
      </section>
    </main>
  );
};

export default Register;
