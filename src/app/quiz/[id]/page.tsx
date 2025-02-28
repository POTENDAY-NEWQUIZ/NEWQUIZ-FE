"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "@components/common/header";
import ProgressiveBar from "@components/quiz/progressive-bar";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";
import WordQuiz1 from "@container/quiz/word-quiz-1";
import WordQuiz2 from "@container/quiz/word-quiz-2";
import WordQuiz3 from "@container/quiz/word-quiz-3";
import Button from "@components/button/button";
import { readQuizAll } from "@api/quiz-api";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";

const Quiz = () => {
  const params = useParams();
  const [quizData, setQuizData] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

      const quiz = quizList[currentIndex];

      switch (quiz.type) {
        case "유의어":
          renderQuiz(WordQuiz1, quiz);
          break;
        case "단어뜻":
          renderQuiz(WordQuiz2, quiz);
          break;
        case "내용일치":
          renderQuiz(WordQuiz3, quiz);
          break;
        default:
          break;
      }
    }
  }, [quizData, currentIndex]);

  const getQuizAll = async (newsId: string) => {
    const response = await readQuizAll(newsId);
    setQuizData(response.data);
  };

  const renderQuiz = (QuizComponent: React.ElementType, quiz: any) => {
    return <QuizComponent quiz={quiz} />;
  };

  const onClickNext = () => {
    if (currentIndex < quizData.totalQuizCount - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

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
        <ProgressiveBar
          total={quizData?.totalQuizCount}
          current={currentIndex}
        />
        <EventButton icon={hint} command="" />
      </section>

      {/* 퀴즈 구역 */}
      <section>
        {quizData && (
          <div>
            {(() => {
              const quizList = [
                ...quizData.contentQuiz,
                ...quizData.meaningQuiz,
                ...quizData.synonymQuiz,
              ];

              const quiz = quizList[currentIndex];

              switch (quiz.type) {
                case "유의어":
                  return <WordQuiz1 {...quiz} />;
                case "단어뜻":
                  return <WordQuiz2 {...quiz} />;
                case "내용일치":
                  return <WordQuiz3 {...quiz} />;
                default:
                  return null;
              }
            })()}
          </div>
        )}
      </section>

      {/* 버튼 구역 */}
      <section className="mt-10 mb-5">
        <Button
          text="정답 확인하기"
          type="inactive"
          onClick={onClickNext}
        />
      </section>
    </main>
  );
};

export default Quiz;
