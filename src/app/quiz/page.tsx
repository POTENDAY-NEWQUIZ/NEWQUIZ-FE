import Header from "@components/header";
import ProgressiveBar from "@components/quiz/progressive-bar";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";
import WordQuiz1 from "@container/word-quiz-1";
import WordQuiz2 from "@container/word-quiz-2";
import WordQuiz3 from "@container/word-quiz-3";
import Button from "@components/button/button";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";

const Quiz = () => {
  return (
    <main>
      {/* 헤더 구역 */}
      <Header
        title="내용 일치 퀴즈"
        leftChild={<EventButton icon={cancel} command="back" />}
        rightChild={<Blank />}
      />

      {/* 프로그레시브 바 구역 */}
      <section className="pt-16 mx-5 flex items-center gap-3">
        <ProgressiveBar total={4} current={1} />
        <EventButton icon={hint} command="" />
      </section>

      {/* 퀴즈 구역 */}
      <section>
        {/* <WordQuiz1 /> */}
        {/* <WordQuiz2 /> */}
        <WordQuiz3 />
      </section>

      {/* 버튼 구역 */}
      <section className="mt-10 mb-5">
        <Button text="정답 확인하기" type="inactive" />
      </section>
    </main>
  );
};

export default Quiz;
