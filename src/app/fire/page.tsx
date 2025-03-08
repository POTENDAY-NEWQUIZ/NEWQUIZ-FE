"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Header from "@components/common/header";
import Blank from "@components/button/blank";
import BackButton from "@components/button/back-button";
import StudyDuration from "@components/home/study-duration";
import MyCalendar from "@container/home/calendar";
import Chart from "@container/home/chart";
import { readStudy } from "@api/study-api";
import { IUserStudy } from "@interface/props";

import fire from "@assets/img/fire.svg";
import clock from "@assets/img/clock.svg";

const Fire = () => {
  const [study, setStudy] = useState<IUserStudy>();

  useEffect(() => {
    getStudy();
  }, []);

  const getStudy = async () => {
    const response = await readStudy();
    setStudy(response.data);
  };

  return (
    <main className="bg-[#F4F3F6]">
      {/* 헤더 구역 */}
      <Header
        title="내 학습 데이터"
        leftChild={<BackButton />}
        rightChild={<Blank />}
      />

      {/* 텍스트 구역 */}
      <section className="mx-5 pt-14 mb-5">
        <div className="font-semibold text-xl leading-7 mb-2">
          {study?.nickName}님
          <br />
          <span className="flex">
            계속해서 학습을 이어가세요!
            <Image src={fire} width={24} height={24} alt="불꽃" />
          </span>
        </div>
      </section>

      {/* 캘린더 구역 */}
      <MyCalendar start={study!.startDate} end={study!.endDate} />

      {/* 연속 학습 구역 */}
      <section className="mx-5 flex justify-between mb-8">
        <StudyDuration
          icon={fire}
          duration={study!.learningDays}
          text="현재 연속 학습 일수"
        />
        <StudyDuration
          icon={clock}
          duration={study!.maxLearningDays}
          text="최대 연속 학습 일수"
        />
      </section>

      {/* 차트 구역 */}
      <section className="mx-5 pb-8">
        <p className="font-semibold text-lg mb-4">
          일주일 동안 이만큼 풀었어요! 📈
        </p>
        <div className="bg-white p-4 rounded-lg shadow-light">
          <div className="font-semibold text-[13px] flex justify-between px-1 mb-3">
            <p className="text-[#707070]">
              지난 6일 간 푼 누적 퀴즈 수
            </p>
            <p>총 {study?.totalCount}개</p>
          </div>
          <Chart graph={study?.graph} />
        </div>
      </section>
    </main>
  );
};

export default Fire;
