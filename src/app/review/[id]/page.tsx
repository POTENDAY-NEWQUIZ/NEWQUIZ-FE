"use client";

import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import WordQuiz1 from "@container/quiz/word-quiz-1";
import WordQuiz2 from "@container/quiz/word-quiz-2";
import WordQuiz3 from "@container/quiz/word-quiz-3";
import Header from "@components/common/header";
import EventButton from "@components/button/event-button";
import AnswerModal from "@components/quiz/answer-modal";
import LottieImage from "@components/common/lottie-image";
import HintModal from "@components/quiz/hint-modal";
import { createReview, readReviewDetail } from "@api/review-api";
import { ModalContext } from "@context/modal-context";
import { IReviewDetail } from "@interface/props";
import { useNewsStore } from "@store/news-store";

import cancel from "@assets/svg/cancel.svg";
import hint from "@assets/svg/hint.svg";
import lottie from "@assets/lottie/hint.json";

const Review = () => {
  const router = useRouter();
  const params = useParams();
  const [review, setReview] = useState<IReviewDetail>();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { openModal } = useContext(ModalContext);
  const { setNews } = useNewsStore();

  useEffect(() => {
    getReviewDetail();
  }, []);

  const onClickFin = () => {
    onSubmit();
    router.replace("/review");
  };

  const getReviewDetail = async () => {
    const response = await readReviewDetail(Number(params.id));
    setReview(response.data);
    setNews(response.data.news);
  };

  const onSubmit = async () => {
    const response = await createReview(Number(params.id));
  };

  const checkAnswerCorrect = (isCorrect: boolean) => {
    setIsCorrect(isCorrect);
    openModal("answer-modal");
  };

  if (!review) {
    return <div>Loading...</div>;
  }

  const quiz =
    review.synonymQuiz ?? review.meaningQuiz ?? review.contentQuiz;

  return (
    <>
      <main>
        {/* 헤더 구역 */}
        <Header
          title={""}
          leftChild={<EventButton icon={cancel} command="back" />}
          rightChild={<EventButton icon={hint} command="hint" />}
        />
        <div className="absolute right-4 top-[40px] z-40">
          <LottieImage image={lottie} />
        </div>

        {/* 퀴즈 구역 */}
        {review.synonymQuiz !== null ? (
          <div className="pt-6">
            <WordQuiz1
              {...review.synonymQuiz}
              onCheck={checkAnswerCorrect}
            />
            <HintModal paragraphId={review.synonymQuiz.paragraphId} />
          </div>
        ) : review.meaningQuiz !== null ? (
          <div className="pt-6">
            <WordQuiz2
              {...review.meaningQuiz}
              onCheck={checkAnswerCorrect}
            />
            <HintModal paragraphId={review.meaningQuiz.paragraphId} />
          </div>
        ) : review.contentQuiz !== null ? (
          <div className="pt-6">
            <WordQuiz3
              {...review.contentQuiz}
              onCheck={checkAnswerCorrect}
            />
            <HintModal paragraphId={review.contentQuiz.paragraphId} />
          </div>
        ) : (
          <div></div>
        )}
      </main>

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
        buttonText={"목록으로 돌아가기"}
        onClick={onClickFin}
      />
    </>
  );
};

export default Review;
