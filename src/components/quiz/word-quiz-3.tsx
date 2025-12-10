"use client";

import Image from "next/image";
import { useState } from "react";

import OXSelect from "@components/quiz/ox-select";
import Button from "@components/button/button";
import { IContentQuiz } from "@interface/props";
import { useQuizStore } from "@store/quiz-store";

import caution from "@assets/svg/caution-gray.svg";
import O from "@assets/svg/o.svg";
import OFill from "@assets/svg/o-fill.svg";
import X from "@assets/svg/x.svg";
import XFill from "@assets/svg/x-fill.svg";

const WordQuiz3 = ({
  type,
  quizId,
  paragraphId,
  question,
  answer,
  explanation,
  onCheck,
}: IContentQuiz & { onCheck: (isCorrect: boolean) => void }) => {
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const { insertQuizAnswer } = useQuizStore();

  const onClickAnswer = (index: boolean) => {
    setUserAnswer(index);
  };

  const onClickCheckAnswer = () => {
    const isCorrect = userAnswer === answer;
    onCheck(isCorrect);
    insertQuizAnswer(quizId, type, isCorrect, userAnswer ? 1 : 0);
    setUserAnswer(null);
  };

  return (
    <>
      {/* 문제 영역 */}
      <section className="mt-6 mx-5">
        <div className="text-center font-semibold text-lg mb-5">
          다음 문장을 읽고
          <br />
          사설의 내용과 일치하면{` `}
          <span className="text-point-lavender">O</span>
          <br />
          그렇지 않으면 <span className="text-point-lavender">X</span>를
          눌러주세요!
        </div>

        <div className="py-4 mb-10 flex gap-1 justify-center items-center bg-[#F8F8F8] text-[#484848] rounded-[10px]">
          <Image src={caution} width={18} height={18} alt="주의" />
          <p className="font-medium text-xs">
            사설 원문은 상단 돋보기 버튼을 누르면 확인 가능합니다.
          </p>
        </div>

        <div className="px-4 py-8 mb-24 bg-mist-lavender text-[15px] font-semibold shadow-default leading-6">
          {question}
        </div>
      </section>

      {/* 보기 영역 - 데이터 받아오면 배열로 해야 함 */}
      <section className="mx-5 flex justify-between gap-2">
        <OXSelect
          text={true}
          iconSelect={OFill}
          iconUnselect={O}
          isActive={userAnswer === true}
          onClick={() => onClickAnswer(true)}
        />
        <OXSelect
          text={false}
          iconSelect={XFill}
          iconUnselect={X}
          isActive={userAnswer === false}
          onClick={() => onClickAnswer(false)}
        />
      </section>

      {/* 버튼 구역 */}
      <section className="mt-10 mb-5">
        {typeof userAnswer == "boolean" ? (
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

export default WordQuiz3;
