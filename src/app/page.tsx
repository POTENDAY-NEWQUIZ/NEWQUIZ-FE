import Header from "@components/common/header";
import Navigator from "@components/common/navigator";
import MyCalendar from "@container/home/calendar";
import Button from "@components/button/button";
import StudyDuration from "@components/study-duration";

import duration1 from "@assets/img/calendar.svg";
import duration2 from "@assets/img/clock.svg";

const Home = () => {
  return (
    <>
      <main className="bg-home-lavender h-screen overflow-y-auto pb-[88px]">
        {/* 헤더 구역 */}
        <Header title="logo" />

        {/* 캘린더 구역 */}
        <section className="pt-16 mb-5">
          <MyCalendar start={"2025-02-12"} end={"2025-02-19"} />
        </section>

        {/* 학습일수 구역 */}
        <section className="mx-5 flex justify-between">
          <StudyDuration
            icon={duration1}
            duration={9}
            text="현재 연속 학습 일수"
          />
          <StudyDuration
            icon={duration2}
            duration={20}
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
