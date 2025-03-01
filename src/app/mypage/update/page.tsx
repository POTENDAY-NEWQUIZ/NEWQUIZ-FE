"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Header from "@components/common/header";
import Blank from "@components/button/blank";
import EventButton from "@components/button/event-button";
import Button from "@components/button/button";
import CheckButton from "@components/button/check-button";
import { checkNickname, updateUserData } from "@api/user-api";

import cancel from "@assets/svg/cancel.svg";

const MypageUpdate = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isCheckNickname, setIsCheckNickname] = useState("DEFAULT");

  const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,8}$/;
  const isValidNickname = nicknameRegex.test(nickname);

  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
    setIsCheckNickname("DEFAULT");
  };

  const onClickCheckNickname = async () => {
    if (!isValidNickname) {
      setIsCheckNickname("ERROR");
      return;
    }

    const response = await checkNickname(nickname);

    if (response.data.isDuplicate) {
      setIsCheckNickname("FALSE");
    } else {
      setIsCheckNickname("TRUE");
    }
  };

  const onClickUpdateNickname = async () => {
    const response = updateUserData(nickname);
    router.replace("/mypage");
  };

  return (
    <>
      {/* 헤더 영역 */}
      <Header
        leftChild={<Blank />}
        rightChild={<EventButton icon={cancel} command="back" />}
      />

      {/* 닉네임 변경 영역 */}
      <section className="mx-5 flex flex-col h-screen justify-center pb-10">
        <p className="text-[26px] leading-9 font-semibold mb-14">
          변경하실 닉네임을
          <br />
          입력해주세요.
        </p>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="한글, 영문, 숫자로 8자 이내 입력"
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
            <p className="text-[#FC1919]">사용 중인 닉네임입니다.</p>
          ) : isCheckNickname === "ERROR" ? (
            <p className="text-[#FC1919]">
              한글, 영문, 숫자로 8자 이내로 입력해주세요.
            </p>
          ) : (
            <p className="text-white">닉네임 관련 문구</p>
          )}
        </div>
      </section>

      {/* 버튼 영역 */}
      <section className="fixed bottom-5 max-w-[480px] w-full">
        {isCheckNickname === "TRUE" && isValidNickname ? (
          <Button
            text="변경하기"
            type="active"
            onClick={onClickUpdateNickname}
          />
        ) : (
          <Button text="변경하기" type="inactive" link="" />
        )}
      </section>
    </>
  );
};

export default MypageUpdate;
