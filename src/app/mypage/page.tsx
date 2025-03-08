"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import Navigator from "@components/common/navigator";
import StudyDuration from "@components/home/study-duration";
import Modal from "@components/common/modal";
import SmallButton from "@components/button/small-button";
import { ModalContext } from "@context/modal-context";
import {
  deleteUserData,
  logoutUserData,
  readUserData,
} from "@api/user-api";

import user from "@assets/img/user.svg";
import duration1 from "@assets/img/calendar.svg";
import duration2 from "@assets/img/clock.svg";
import chart from "@assets/img/data.svg";
import book from "@assets/img/books.svg";
import into from "@assets/svg/into.svg";
import warn from "@assets/img/warn.svg";

const Mypage = () => {
  const router = useRouter();
  const { activeModal, openModal, closeModal } =
    useContext(ModalContext);
  const [userData, setUserData] = useState({
    nickname: "",
    learningDays: 0,
    maxLearningDays: 0,
    userQuizCount: 0,
    avgScore: 0,
    maxAvgScore: 0,
  });

  useEffect(() => {
    getUserData();
  }, [userData.nickname]);

  const getUserData = async () => {
    const response = await readUserData();
    setUserData(response.data);
  };

  const logout = async () => {
    const response = await logoutUserData();
    closeModal("logout-modal");
    router.replace("/login");
  };

  const withdraw = async () => {
    const response = await deleteUserData();
    closeModal("withdraw-modal");
    router.replace("/login");
  };

  return (
    <>
      <main className="h-screen flex flex-col justify-center bg-mist-lavender pb-20">
        {/* 프로필 구역 */}
        <section className="flex flex-col gap-1 items-center mb-8">
          <div className="rounded-full">
            <Image src={user} width={90} height={90} alt="프로필" />
          </div>
          <p className="text-2xl font-semibold xs:text-xl">
            {userData.nickname}
          </p>
          <p
            className="text-sm text-[#B6B6B6] underline cursor-pointer xs:text-xs"
            onClick={() => router.push("/mypage/update")}
          >
            수정하기
          </p>
        </section>

        {/* 학습 일수 구역 */}
        <section className="mx-5 flex justify-between mb-2">
          <StudyDuration
            icon={duration1}
            duration={userData.learningDays}
            text="현재 연속 학습 일수"
          />
          <StudyDuration
            icon={duration2}
            duration={
              userData.maxLearningDays == null
                ? 0
                : userData.maxLearningDays
            }
            text="최대 연속 학습 일수"
          />
        </section>

        {/* 학습 데이터 구역 */}
        <section className="mx-5 bg-white shadow-default rounded-lg py-6 px-4 mb-2 xs:py-4">
          <div className="flex gap-2 items-start">
            <Image
              src={chart}
              width={24}
              height={24}
              alt="나의 학습 데이터"
            />
            <div className="mb-3">
              <div className="flex items-center gap-1 mb-1">
                <span className="font-semibold">나의 학습 데이터</span>
                <Image
                  src={into}
                  width={20}
                  height={20}
                  alt="들어가기"
                />
              </div>
              <p className="text-xs font-medium text-[#B6B6B6]">
                나의 학습 현황을 확인해보세요.
              </p>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[22px] font-semibold">
                {userData.userQuizCount}
              </span>
              <span className="text-xs font-medium">푼 문제 수</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[22px] font-semibold">
                {userData.avgScore}
              </span>
              <span className="text-xs font-medium">평점 평균</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[22px] font-semibold">
                {userData.maxAvgScore}
              </span>
              <span className="text-xs font-medium">최고 평점</span>
            </div>
          </div>
        </section>

        {/* 오답노트 구역 */}
        <section className="mx-5 bg-white shadow-default rounded-lg py-6 px-4 xs:py-4">
          <div className="flex gap-2 items-start">
            <Image
              src={book}
              width={24}
              height={24}
              alt="나의 오답 노트"
            />
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="font-semibold">나의 오답 노트</span>
                <Image
                  src={into}
                  width={20}
                  height={20}
                  alt="들어가기"
                />
              </div>
              <p className="text-xs font-medium text-[#B6B6B6]">
                틀린 문제를 확인하고 복습해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 로그아웃 & 회원탈퇴 구역 */}
        <section className="flex justify-center gap-2 text-xs font-[#484848] mt-8">
          <span
            className="cursor-pointer"
            onClick={() => openModal("logout-modal")}
          >
            로그아웃
          </span>
          <span>|</span>
          <span
            className="cursor-pointer"
            onClick={() => openModal("withdraw-modal")}
          >
            탈퇴하기
          </span>
        </section>
      </main>

      <Navigator />

      {activeModal === "logout-modal" && (
        <Modal
          icon={warn}
          text="로그아웃"
          description="로그아웃 하시겠어요?"
          leftChild={
            <SmallButton
              text="아니요"
              type="negative"
              onClick={() => closeModal("logout-modal")}
            />
          }
          rightChild={
            <SmallButton text="네" type="positive" onClick={logout} />
          }
        />
      )}

      {activeModal === "withdraw-modal" && (
        <Modal
          icon={warn}
          text="정말 탈퇴하시겠어요?"
          description={
            <>
              탈퇴 버튼 선택 시 계정은 삭제되며
              <br />
              복구되지 않습니다.
            </>
          }
          leftChild={
            <SmallButton
              text="중단하기"
              type="negative"
              onClick={() => closeModal("withdraw-modal")}
            />
          }
          rightChild={
            <SmallButton
              text="계속하기"
              type="positive"
              onClick={withdraw}
            />
          }
        />
      )}
    </>
  );
};

export default Mypage;
