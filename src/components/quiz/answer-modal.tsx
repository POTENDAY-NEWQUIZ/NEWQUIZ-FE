import Image from "next/image";
import { useContext } from "react";

import Button from "@components/button/button";
import { IQuizAnswer } from "@interface/props";
import { ModalContext } from "@context/modal-context";

import correct from "@assets/img/correct.svg";
import incorrect from "@assets/img/incorrect.svg";

const AnswerModal = ({
  type,
  answer,
  explanation,
  onClick,
}: IQuizAnswer) => {
  const { activeModal, closeModal } = useContext(ModalContext);

  if (activeModal !== "answer-modal") return null;

  const styleClass = {
    correct: "bg-[#F8FFEB]",
    incorrect: "bg-[#FFEBEC]",
  };

  const onClickButton = () => {
    onClick();
    closeModal("answer-modal");
  };

  return (
    <>
      {/* 흐린 배경 */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[480px] h-full bg-black bg-opacity-40 z-40" />

      {/* 모달 */}
      <div
        className={`max-w-[480px] w-full fixed left-1/2 bottom-0 transform -translate-x-1/2 py-8 z-50 ${styleClass[type]} rounded-t-2xl`}
      >
        {/* 결과 구역 */}
        <section className="px-5">
          <div className="flex gap-2 items-cente text-lg font-semibold mb-4">
            {type === "correct" ? (
              <>
                <Image
                  src={correct}
                  width={30}
                  height={30}
                  alt="정답"
                />
                <p>딩동댕! 정답입니다</p>
              </>
            ) : (
              <>
                <Image
                  src={incorrect}
                  width={30}
                  height={30}
                  alt="오답"
                />
                <p>삐빅! 오답입니다</p>
              </>
            )}
          </div>
        </section>

        {/* 해설 구역 */}
        <section className="mx-5 mb-4">
          {type === "correct" ? (
            <></>
          ) : (
            <>
              <p className="text-sm leading-6">정답: {answer}</p>
              <p className="text-sm leading-6">{explanation}</p>
            </>
          )}
        </section>

        {/* 버튼 구역 */}
        <section>
          <Button
            text="다음 문제로 넘어가기"
            type="active"
            onClick={onClickButton}
          />
        </section>
      </div>
    </>
  );
};

export default AnswerModal;
