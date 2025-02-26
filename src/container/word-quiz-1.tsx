import ProgressiveBar from "@components/quiz/progressive-bar";
import Header from "@components/header";
import Blank from "@components/button/blank";
import EventButton from "@components/button/event-button";
import QuizSelect from "@components/quiz/quiz-select";
import Button from "@components/button/button";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";

const WordQuiz1 = () => {
  return (
    <>
      {/* 헤더 구역 */}
      <Header
        title="유의어 퀴즈"
        leftChild={<EventButton icon={cancel} command="back" />}
        rightChild={<Blank />}
      />

      {/* 프로그레시브 바 구역 */}
      <section className="pt-16 mx-5 flex items-center gap-3">
        <ProgressiveBar total={4} current={1} />
        <EventButton icon={hint} command="" />
      </section>

      {/* 문제 영역 */}
      <section className="mt-6 mx-5">
        <div className="text-center font-semibold text-lg mb-5">
          다음 문장에서
          <br />
          <span className="underline">'반등'</span>의 의미와
          <br />
          가장 <span className="text-point-lavender">유사한</span>
          단어는?
        </div>

        <div className="px-4 py-8 bg-mist-lavender text-sm shadow-default leading-6">
          “연간 둘째아 비중은 2018년(37.6%) 이후 계속 하락세였는데,
          소폭이나마 <span className="underline font-bold">반등</span>한
          것은 저출산 시대에 매우 희망적인 신호다.”
        </div>
      </section>

      <hr className="mx-5 my-10 border-t-[1px] border-[#D9D9D9]" />

      {/* 보기 영역 - 데이터 받아오면 배열로 해야 함 */}
      <section className="flex flex-col gap-2">
        <QuizSelect text="감소" type="unclick" />
        <QuizSelect text="상승" type="unclick" />
        <QuizSelect text="감소" type="click" />
        <QuizSelect text="상승" type="unclick" />
      </section>

      {/* 버튼 영역 */}
      <section className="mt-10 mb-5">
        <Button text="정답 확인하기" type="inactive" />
      </section>
    </>
  );
};

export default WordQuiz1;
