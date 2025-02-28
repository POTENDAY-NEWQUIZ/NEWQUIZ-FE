"use client";

import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Header from "@components/common/header";
import ProgressiveBar from "@components/quiz/progressive-bar";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";
import WordQuiz1 from "@container/quiz/word-quiz-1";
import WordQuiz2 from "@container/quiz/word-quiz-2";
import WordQuiz3 from "@container/quiz/word-quiz-3";
import AnswerModal from "@components/quiz/answer-modal";
import { readQuizAll } from "@api/quiz-api";
import { ModalContext } from "@context/modal-context";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";
import { useQuizStore } from "@store/quiz-store";
import HintModal from "@components/quiz/hint-modal";

const Quiz = () => {
  const params = useParams();
  const router = useRouter();
  const { openModal } = useContext(ModalContext);
  const [quizData, setQuizData] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { submitQuizAnswer } = useQuizStore();

  useEffect(() => {
    const newsId = params.id;
    getQuizAll(String(newsId));
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
      console.log(currentQuiz);
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
    <main>
      {/* 헤더 구역 */}
      <Header
        title={`${quiz?.type} 퀴즈`}
        leftChild={<EventButton icon={cancel} command="back" />}
        rightChild={<Blank />}
      />

      {/* 프로그레시브 바 구역 */}
      <section className="pt-16 mx-5 flex items-center gap-3">
        <ProgressiveBar
          total={quizData?.totalQuizCount}
          current={currentIndex}
        />
        <EventButton icon={hint} command="hint" />
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
            : quiz?.answer
        }
        explanation={quiz?.explanation}
        onClick={onClickNext}
      />

      <HintModal paragraphId={quiz?.paragraphId} />
    </main>
  );
};

export default Quiz;
