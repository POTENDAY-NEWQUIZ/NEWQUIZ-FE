"use client";

import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Header from "@components/common/header";
import ProgressiveBar from "@components/quiz/progressive-bar";
import EventButton from "@components/button/event-button";
import HintModal from "@components/quiz/hint-modal";
import Blank from "@components/button/blank";
import AnswerModal from "@components/quiz/answer-modal";
import Modal from "@components/common/modal";
import SmallButton from "@components/button/small-button";
import LottieImage from "@components/common/lottie-image";
import WordQuiz1 from "@container/quiz/word-quiz-1";
import WordQuiz2 from "@container/quiz/word-quiz-2";
import WordQuiz3 from "@container/quiz/word-quiz-3";
import { ModalContext } from "@context/modal-context";
import { useQuizStore } from "@store/quiz-store";
import { readQuizAll } from "@api/quiz-api";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";
import warn from "@assets/img/warn.svg";
import lottie from "@assets/lottie/hint.json";

const Quiz = () => {
  const params = useParams();
  const router = useRouter();
  const { activeModal, openModal, closeModal } =
    useContext(ModalContext);
  const [quizData, setQuizData] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { submitQuizAnswer, clearQuizAnswer } = useQuizStore();

  useEffect(() => {
    const newsId = params.id;
    getQuizAll(String(newsId));
    clearQuizAnswer();
  }, []);

  useEffect(() => {
    if (quizData) {
      const quizList = [
        ...quizData.contentQuiz,
        ...quizData.meaningQuiz,
        ...quizData.synonymQuiz,
      ];

      const currentQuiz = quizList[currentIndex];
      setQuiz(currentQuiz);
    }
  }, [quizData, currentIndex]);

  const getQuizAll = async (newsId: string) => {
    const response = await readQuizAll(newsId);
    setQuizData(response.data);
  };

  const renderQuiz = () => {
    if (!quiz) return null;

    switch (quiz.type) {
      case "유의어":
        return <WordQuiz1 {...quiz} onCheck={checkAnswerCorrect} />;
      case "단어뜻":
        return <WordQuiz2 {...quiz} onCheck={checkAnswerCorrect} />;
      case "내용일치":
        return <WordQuiz3 {...quiz} onCheck={checkAnswerCorrect} />;
      default:
        return null;
    }
  };

  const checkAnswerCorrect = (isCorrect: boolean) => {
    setIsCorrect(isCorrect);
    openModal("answer-modal");
  };

  const onClickNext = () => {
    if (currentIndex + 1 < quizData.totalQuizCount) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      submitQuizAnswer();
      router.push("/summary");
    }
  };

  return (
    <>
      <main>
        {/* 헤더 구역 */}
        <Header
          title={`${quiz?.type} 퀴즈`}
          leftChild={<EventButton icon={cancel} command="back-modal" />}
          rightChild={<Blank />}
        />

        {/* 프로그레시브 바 구역 */}
        <section className="pt-16 mx-5 flex items-center gap-3 relative">
          <ProgressiveBar
            total={quizData?.totalQuizCount}
            current={currentIndex}
          />
          <EventButton icon={hint} command="hint" />
          <div className="absolute right-0 top-[88px]">
            <LottieImage image={lottie} />
          </div>
        </section>

        {/* 퀴즈 구역 */}
        <section>{renderQuiz()}</section>

        <AnswerModal
          type={isCorrect ? "correct" : "incorrect"}
          answer={
            typeof quiz?.answer === "boolean"
              ? quiz.answer
                ? "⭕"
                : "❌"
              : quiz?.answer === 1
              ? quiz?.option1
              : quiz?.answer === 2
              ? quiz?.option2
              : quiz?.answer === 3
              ? quiz?.option3
              : quiz?.option4
          }
          explanation={quiz?.explanation}
          onClick={onClickNext}
        />
      </main>

      <HintModal paragraphId={quiz?.paragraphId} />

      {activeModal === "back-modal" && (
        <Modal
          icon={warn}
          text="아직 문제가 남아있어요!"
          description={
            <>
              중간에 멈추시면 저장이 되지 않습니다.
              <br />
              그래도 멈추실 건가요?
            </>
          }
          leftChild={
            <SmallButton
              text="중단하기"
              type="negative"
              onClick={() => {
                closeModal("back-modal");
                router.replace("/");
              }}
            />
          }
          rightChild={
            <SmallButton
              text="계속하기"
              type="positive"
              onClick={() => closeModal("back-modal")}
            />
          }
        />
      )}
    </>
  );
};

export default Quiz;
