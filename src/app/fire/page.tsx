import Image from "next/image";

import Header from "@components/common/header";
import Blank from "@components/button/blank";
import BackButton from "@components/button/back-button";
import MyCalendar from "@container/home/calendar";
import StudyDuration from "@components/home/study-duration";

import fire from "@assets/img/fire.svg";
import clock from "@assets/img/clock.svg";
import Chart from "@container/home/chart";

const Fire = () => {
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
          닉네임님
          <br />
          <span className="flex">
            계속해서 학습을 이어가세요!
            <Image src={fire} width={24} height={24} alt="불꽃" />
          </span>
        </div>
      </section>

      {/* 캘린더 구역 */}
      <MyCalendar start="" end="" />

      {/* 연속 학습 구역 */}
      <section className="mx-5 flex justify-between mb-8">
        <StudyDuration
          icon={fire}
          duration={1}
          text="현재 연속 학습 일수"
        />
        <StudyDuration
          icon={clock}
          duration={1}
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
            <p>총 50개</p>
          </div>
          <Chart />
        </div>
      </section>
    </main>
  );
};

export default Fire;
