"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Navigator from "@components/common/navigator";
import StudyDuration from "@components/study-duration";
import { readStudyHome } from "@api/study-api";

import user from "@assets/img/user.svg";
import duration1 from "@assets/img/calendar.svg";
import duration2 from "@assets/img/clock.svg";
import chart from "@assets/img/data.svg";
import book from "@assets/img/books.svg";
import into from "@assets/svg/into.svg";

const Mypage = () => {
  const [study, setStudy] = useState({
    startDate: "",
    endDate: "",
    learningDays: 0,
    maxLearningDays: 0,
  });

  useEffect(() => {
    getStudyHome();
  }, []);

  const getStudyHome = async () => {
    const response = await readStudyHome();
    setStudy(response.data);
  };

  return (
    <>
      <main className="h-screen flex flex-col justify-center bg-mist-lavender pb-20">
        {/* 프로필 구역 */}
        <section className="flex flex-col gap-1 items-center mb-8">
          <div className="rounded-full">
            <Image src={user} width={90} height={90} alt="프로필" />
          </div>
          <p className="text-2xl font-semibold">닉네임</p>
          <p className="text-sm text-[#B6B6B6] underline">수정하기</p>
        </section>

        {/* 학습 일수 구역 */}
        <section className="mx-5 flex justify-between mb-2">
          <StudyDuration
            icon={duration1}
            duration={study.learningDays}
            text="현재 연속 학습 일수"
          />
          <StudyDuration
            icon={duration2}
            duration={
              study.maxLearningDays == null ? 0 : study.maxLearningDays
            }
            text="최대 연속 학습 일수"
          />
        </section>

        {/* 학습 데이터 구역 */}
        <section className="mx-5 bg-white shadow-default rounded-lg py-6 px-4 mb-2">
          <div className="flex gap-2 items-start">
            <Image
              src={chart}
              width={24}
              height={24}
              alt="나의 학습 데이터"
            />
            <div className="mb-2">
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
              <span className="text-[22px] font-semibold">123</span>
              <span className="text-xs font-medium">푼 문제 수</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[22px] font-semibold">4.41</span>
              <span className="text-xs font-medium">평점 평균</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[22px] font-semibold">4.92</span>
              <span className="text-xs font-medium">최고 평점</span>
            </div>
          </div>
        </section>

        {/* 오답노트 구역 */}
        <section className="mx-5 bg-white shadow-default rounded-lg py-6 px-4">
          <div className="flex gap-2 items-start">
            <Image
              src={book}
              width={24}
              height={24}
              alt="나의 오답 노트"
            />
            <div>
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
                틀린 문제를 확인하고 복습해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 로그아웃 & 회원탈퇴 구역 */}
        <section className="flex justify-center gap-2 text-xs font-[#484848] mt-8">
          <span>로그아웃</span>
          <span>|</span>
          <span>탈퇴하기</span>
        </section>
      </main>

      <Navigator />
    </>
  );
};

export default Mypage;
