"use client";

import Image from "next/image";
import { useState } from "react";

import OXSelect from "@components/quiz/ox-select";
import { ISynonymQuiz } from "@interface/props";

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
}: ISynonymQuiz) => {
  const [select, setSelect] = useState<"O" | "X" | null>(null);

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

        <div className="px-4 py-8 mb-24 bg-mist-lavender text-sm font-bold shadow-default leading-6">
          {question}
        </div>
      </section>

      {/* 보기 영역 - 데이터 받아오면 배열로 해야 함 */}
      <section className="mx-5 flex justify-between gap-2">
        <OXSelect
          text={true}
          iconSelect={OFill}
          iconUnselect={O}
          isActive={select === "O"}
          onSelect={() => setSelect("O")}
        />
        <OXSelect
          text={false}
          iconSelect={XFill}
          iconUnselect={X}
          isActive={select === "X"}
          onSelect={() => setSelect("X")}
        />
      </section>
    </>
  );
};

export default WordQuiz3;
