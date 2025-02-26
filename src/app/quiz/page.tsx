import Header from "@components/header";
import ProgressiveBar from "@components/quiz/progressive-bar";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";

const Quiz = () => {
  return (
    <main>
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

      {/* 퀴즈 구역 */}

      {/* 버튼 구역 */}
    </main>
  );
};

export default Quiz;
