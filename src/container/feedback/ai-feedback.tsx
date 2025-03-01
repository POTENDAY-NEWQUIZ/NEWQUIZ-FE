import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";

import Blank from "@components/button/blank";
import EventButton from "@components/button/event-button";
import Button from "@components/button/button";
import Modal from "@components/common/modal";
import SmallButton from "@components/button/small-button";
import { ISummary } from "@interface/props";
import { useNewsStore } from "@store/news-store";
import { useSummaryStore } from "@store/summary-store";
import { ModalContext } from "@context/modal-context";
import { createQuizLevel } from "@api/quiz-api";

import cancel from "@assets/svg/cancel.svg";
import robot from "@assets/img/robot-1.svg";
import star from "@assets/svg/star.svg";
import pin1 from "@assets/svg/pin.svg";
import pin2 from "@assets/svg/seciton_pin.svg";
import user from "@assets/svg/summary-user.svg";
import ai from "@assets/svg/summary-ai.svg";
import level from "@assets/img/level.svg";

const AIFeedback = ({ code, data, isSuccess, message }: ISummary) => {
  const router = useRouter();
  const { news } = useNewsStore();
  const { summaryList } = useSummaryStore();
  const { totalScore, generalFeedback, paragraphs } = data || {};
  const { activeModal, openModal, closeModal } =
    useContext(ModalContext);

  const onClickModalButton = async (level: string) => {
    const response = await createQuizLevel(news!.newsId, level);
    closeModal("level-modal");
    router.replace("/rank");
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {code === 201 ? (
        <main>
          {/* 헤더 영역 - 수정 가능성 있음 */}
          <section className="max-w-[480px] h-[50px] px-5 bg-white flex justify-between items-center">
            <Blank />
            <EventButton icon={cancel} command="close" />
          </section>

          {/*  점수 영역 */}
          <section className="flex flex-col items-center mb-7">
            <div>
              <Image src={robot} width={70} height={70} alt="AI" />
            </div>
            <p className="font-semibold text-xl">AI 피드백 결과</p>
            <div className="flex text-sm font-medium">
              총점 <Image src={star} width={18} height={18} alt="별" />{" "}
              {totalScore} / 5점
            </div>
          </section>

          {/* 최종 평가 영역 */}
          <section className="mx-5 rounded-md bg-mist-lavender border-[1px] border-[#D5CCF8] p-5 mb-7">
            <div className="text-sm font-semibold flex items-center gap-1 mb-2">
              <Image src={pin1} width={20} height={20} alt="핀" />
              Ai 최종 평가
            </div>
            <div className="text-xs leading-6">{generalFeedback}</div>
          </section>

          {/* 문단별 요약 영역 - API 연결 주의 필요 */}
          <section className="mx-5">
            {paragraphs.map((paragraph, index) => (
              <article key={index}>
                {/* 문단 내용 */}
                <div className="mb-6">
                  <div className="font-semibold flex items-center gap-1 mb-4">
                    <Image src={pin2} width={20} height={20} alt="핀" />
                    {index + 1}번째 문단
                  </div>
                  <p className="text-sm leading-7">
                    {news!.paragraphs[index].content}
                  </p>
                </div>

                {/* 사용자 요약 내용 */}
                <div className="rounded-md border-[#D9D9D9] border-[1px] p-4 mb-6">
                  <div className="flex gap-1 items-center text-sm font-semibold mb-2">
                    <Image
                      src={user}
                      width={20}
                      height={20}
                      alt="사용자 요약"
                    />
                    사용자 요약
                  </div>
                  <div className="text-xs leading-6">
                    {summaryList[index].userSummary}
                  </div>
                </div>

                {/* Ai 피드백 */}
                <div className="rounded-md border-[#D9D9D9] border-[1px] p-4 mb-6">
                  <div className="flex gap-1 items-center text-sm font-semibold mb-2">
                    <Image
                      src={ai}
                      width={20}
                      height={20}
                      alt="Ai 피드백"
                    />
                    Ai 피드백
                  </div>
                  <div className="text-xs leading-6">
                    <p className="font-semibold">✅ 잘된 점</p>
                    <ul>
                      <li>
                        {paragraph.strengths === ""
                          ? "피드백 내용 없음"
                          : paragraph.strengths}
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs leading-6">
                    <p className="font-semibold">❗ 보완할 점</p>
                    <ul>
                      <li>
                        {paragraph.improvements === ""
                          ? "피드백 내용 없음"
                          : paragraph.improvements}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-10">
                  <details>
                    <summary className="text-sm font-medium mb-2">
                      AI 요약
                    </summary>
                    <div className="border-[1px] rounded-md p-4">
                      <p className="text-sm font-semibold mb-2">
                        Ai가 요약한 내용이에요.
                      </p>
                      <p className="text-xs leading-6">
                        {paragraph.aiSummary}
                      </p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </section>

          {/* 버튼 영역 */}
          <section className="w-full mb-5">
            <Button
              text="나의 랭킹은? 순위 확인하러 가기!"
              type="active"
              onClick={() => openModal("level-modal")}
            />
          </section>
        </main>
      ) : (
        <main>
          {/* 헤더 영역 - 수정 가능성 있음 */}
          <section className="max-w-[480px] h-[50px] px-5 bg-white flex justify-between items-center">
            <Blank />
            <EventButton icon={cancel} command="close" />
          </section>

          {/*  점수 영역 */}
          <section className="flex flex-col items-center mb-7">
            <div>
              <Image src={robot} width={70} height={70} alt="AI" />
            </div>
            <p className="font-semibold text-xl">AI 피드백 결과</p>
            <div className="flex text-sm font-medium">
              총점 <Image src={star} width={18} height={18} alt="별" />{" "}
              - / 5점
            </div>
          </section>

          {/* 최종 평가 영역 */}
          <section className="mx-5 rounded-md bg-mist-lavender border-[1px] border-[#D5CCF8] p-5 mb-7">
            <div className="text-sm font-semibold flex items-center gap-1 mb-2">
              <Image src={pin1} width={20} height={20} alt="핀" />
              Ai 최종 평가
            </div>
            <div className="text-xs leading-6">
              지금은 피드백을 드릴 수 없어요. 다음에 다시 시도해주세요.
            </div>
          </section>

          {/* 문단별 요약 영역 - API 연결 주의 필요 */}
          <section className="mx-5">
            {paragraphs.map((paragraph, index) => (
              <article key={index}>
                {/* 문단 내용 */}
                <div className="mb-6">
                  <div className="font-semibold flex items-center gap-1 mb-4">
                    <Image src={pin2} width={20} height={20} alt="핀" />
                    {index + 1}번째 문단
                  </div>
                  <p className="text-sm leading-7">
                    {news!.paragraphs[paragraph.paragraphId].content}
                  </p>
                </div>

                {/* 사용자 요약 내용 */}
                <div className="rounded-md border-[#D9D9D9] border-[1px] p-4 mb-6">
                  <div className="flex gap-1 items-center text-sm font-semibold mb-2">
                    <Image
                      src={user}
                      width={20}
                      height={20}
                      alt="사용자 요약"
                    />
                    사용자 요약
                  </div>
                  <div className="text-xs leading-6">
                    {summaryList[index].userSummary}
                  </div>
                </div>

                {/* Ai 피드백 */}
                <div className="rounded-md border-[#D9D9D9] border-[1px] p-4 mb-6">
                  <div className="flex gap-1 items-center text-sm font-semibold mb-2">
                    <Image
                      src={ai}
                      width={20}
                      height={20}
                      alt="Ai 피드백"
                    />
                    Ai 피드백
                  </div>
                  <div className="text-xs leading-6">
                    <p className="font-semibold">✅ 잘된 점</p>
                    <ul>
                      <li>
                        지금은 피드백을 드릴 수 없어요. 다음에 다시
                        시도해주세요.
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs leading-6">
                    <p className="font-semibold">❗ 보완할 점</p>
                    <ul>
                      <li>
                        지금은 피드백을 드릴 수 없어요. 다음에 다시
                        시도해주세요.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-10">
                  <details>
                    <summary className="text-sm font-medium mb-2">
                      AI 요약
                    </summary>
                    <div className="border-[1px] rounded-md p-4">
                      <p className="text-sm font-semibold mb-2">
                        Ai가 요약한 내용이에요.
                      </p>
                      <p className="text-xs leading-6">
                        지금은 피드백을 드릴 수 없어요. 다음에 다시
                        시도해주세요.
                      </p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </section>

          {/* 버튼 영역 */}
          <section className="w-full mb-5">
            <Button
              text="나의 랭킹은? 순위 확인하러 가기!"
              type="active"
              onClick={() => openModal("level-modal")}
            />
          </section>
        </main>
      )}

      {activeModal === "level-modal" && (
        <Modal
          icon={level}
          text="난이도는 어떠셨나요?"
          leftChild={
            <SmallButton
              text="상"
              type="inactive"
              onClick={() => onClickModalButton("상")}
            />
          }
          centerChild={
            <SmallButton
              text="중"
              type="inactive"
              onClick={() => onClickModalButton("중")}
            />
          }
          rightChild={
            <SmallButton
              text="하"
              type="inactive"
              onClick={() => onClickModalButton("하")}
            />
          }
        />
      )}
    </>
  );
};

export default AIFeedback;
