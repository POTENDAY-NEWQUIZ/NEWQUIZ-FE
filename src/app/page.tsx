"use client";

import { useEffect, useState } from "react";

import Header from "@components/common/header";
import Navigator from "@components/common/navigator";
import MyCalendar from "@container/home/calendar";
import Button from "@components/button/button";
import StudyDuration from "@components/study-duration";

import duration1 from "@assets/img/calendar.svg";
import duration2 from "@assets/img/clock.svg";
import { readStudyHome } from "@api/study-api";

const Home = () => {
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
    console.log(response.data);
  };

  return (
    <>
      <main className="bg-home-lavender h-screen overflow-y-auto pb-[88px] scrollbar-hide">
        {/* 헤더 구역 */}
        <Header title="logo" />

        {/* 캘린더 구역 */}
        <section className="pt-16 mb-5">
          <MyCalendar start={study.startDate} end={study.endDate} />
        </section>

        {/* 학습일수 구역 */}
        <section className="mx-5 flex justify-between">
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

        {/* 버튼 구역 */}
        <section className="mt-14">
          <Button
            text="바로 학습 시작하기!"
            type="active"
            link="/article"
          />
        </section>
      </main>

      <Navigator />
    </>
  );
};

export default Home;
