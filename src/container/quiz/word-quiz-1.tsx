import { useState } from "react";

import { ISynonymQuiz } from "@interface/props";
import Button from "@components/button/button";
import QuizSelect from "@components/quiz/quiz-select";
import { useQuizStore } from "@store/quiz-store";

const WordQuiz1 = ({
  type,
  quizId,
  paragraphId,
  sourceSentence,
  word,
  option1,
  option2,
  option3,
  option4,
  answer,
  explanation,
  onCheck,
}: ISynonymQuiz & { onCheck: (isCorrect: boolean) => void }) => {
  const [userAnswer, setUserAnswer] = useState(0);
  const { insertQuizAnswer } = useQuizStore();

  const onClickAnswer = (index: number) => {
    setUserAnswer(index);
  };

  const onClickCheckAnswer = () => {
    const isCorrect = userAnswer === answer;
    onCheck(isCorrect);
    insertQuizAnswer(quizId, type, isCorrect, userAnswer);
  };

  const highlight = sourceSentence.replace(
    new RegExp(`(${word})`, "g"),
    `<span class="underline font-bold">$1</span>`
  );

  return (
    <>
      {/* 문제 영역 */}
      <section className="mt-6 mx-5">
        <div className="text-center font-semibold text-lg mb-5">
          다음 문장에서
          <br />
          <span className="underline">{word}</span>의 의미와
          <br />
          가장 <span className="text-point-lavender">유사한</span>
          {` `}
          단어는?
        </div>

        <div
          className="px-4 py-8 bg-mist-lavender text-sm shadow-default leading-6"
          dangerouslySetInnerHTML={{ __html: highlight }}
        ></div>
      </section>

      <hr className="mx-5 my-10 border-t-[1px] border-[#D9D9D9]" />

      {/* 보기 영역 - 데이터 받아오면 배열로 해야 함 */}
      <section className="flex flex-col gap-2">
        <QuizSelect
          text={option1}
          type={userAnswer === 1 ? "click" : "unclick"}
          onClick={() => onClickAnswer(1)}
        />
        <QuizSelect
          text={option2}
          type={userAnswer === 2 ? "click" : "unclick"}
          onClick={() => onClickAnswer(2)}
        />
        <QuizSelect
          text={option3}
          type={userAnswer === 3 ? "click" : "unclick"}
          onClick={() => onClickAnswer(3)}
        />
        <QuizSelect
          text={option4}
          type={userAnswer === 4 ? "click" : "unclick"}
          onClick={() => onClickAnswer(4)}
        />
      </section>

      {/* 버튼 구역 */}
      <section className="mt-10 mb-5">
        {userAnswer > 0 ? (
          <Button
            text="정답 확인하기"
            type="active"
            onClick={onClickCheckAnswer}
          />
        ) : (
          <Button text="정답 확인하기" type="inactive" />
        )}
      </section>
    </>
  );
};

export default WordQuiz1;
