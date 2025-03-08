"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";

import Header from "@components/common/header";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";
import Button from "@components/button/button";
import Modal from "@components/common/modal";
import SmallButton from "@components/button/small-button";
import AILoading from "@container/feedback/ai-loading";
import { ModalContext } from "@context/modal-context";
import { ISummaryInput } from "@interface/props";

import cancel from "@assets/svg/cancel.svg";
import pin from "@assets/svg/seciton_pin.svg";
import warn from "@assets/img/warn.svg";

const SummaryQuiz = ({
  paragraph,
  userSummary,
  isFirst,
  isLast,
  onChangeSummary,
  onClickPrev,
  onClickNext,
  onSubmit,
  loading,
}: ISummaryInput) => {
  const router = useRouter();
  const { activeModal, closeModal } = useContext(ModalContext);
  const isDisabled = userSummary.trim() === "";

  return (
    <>
      {loading ? (
        <AILoading />
      ) : (
        <main>
          {/* 헤더 영역 */}
          <Header
            leftChild={
              <EventButton icon={cancel} command="back-modal" />
            }
            rightChild={<Blank />}
          />

          {/* 기사 내용 - 요약 영역 */}
          <section className="pt-16">
            <article className="mx-5 mb-8">
              <div className="flex gap-2 mb-4">
                <Image src={pin} width={24} height={24} alt="핀" />
                <p className="text-xl font-semibold">
                  {paragraph.order}번째 문단을 요약하세요.
                </p>
              </div>
              <div className="max-w-[354px] mx-auto">
                <p className="leading-7">{paragraph.content}</p>
              </div>
              <div className="mt-5 mx-auto max-w-[354px]">
                <textarea
                  placeholder={`${paragraph.order}문단 요약을 입력해 주세요. (최대 300자)`}
                  className="w-full p-4 bg-[#F3F3F3] text-[#B6B6B6] text-sm rounded-md outline-none resize-none"
                  maxLength={300}
                  rows={6}
                  value={userSummary}
                  onChange={(e) =>
                    onChangeSummary(
                      paragraph.paragraphId,
                      e.target.value
                    )
                  }
                ></textarea>
              </div>
            </article>
          </section>

          {/* 버튼 영역 */}
          <section className="flex gap-4 mx-5 mb-5">
            {!isFirst && (
              <Button
                text="이전 문단"
                type={"prev"}
                onClick={onClickPrev}
                className="flex-1"
              />
            )}
            {!isLast && (
              <Button
                text="다음 문단"
                type={isDisabled ? "inactive" : "active"}
                onClick={onClickNext}
                className="flex-1"
              />
            )}
            {isLast && (
              <Button
                text="요약 완료"
                type={isDisabled ? "inactive" : "active"}
                onClick={isDisabled ? () => {} : onSubmit}
                className="flex-1"
              />
            )}
          </section>
        </main>
      )}

      {activeModal === "back-modal" && (
        <Modal
          icon={warn}
          text="아직 요약이 남아있어요!"
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

export default SummaryQuiz;
