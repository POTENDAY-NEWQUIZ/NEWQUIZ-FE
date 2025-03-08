import Image from "next/image";

import Blank from "@components/button/blank";
import EventButton from "@components/button/event-button";
import Button from "@components/button/button";
import { ISummary } from "@interface/props";
import { useNewsStore } from "@store/news-store";
import { useSummaryStore } from "@store/summary-store";

import cancel from "@assets/svg/cancel.svg";
import star from "@assets/svg/star.svg";
import unstar from "@assets/svg/unstar.svg";

const AIFeedback = ({ code, data, isSuccess, message }: ISummary) => {
  const { news } = useNewsStore();
  const { summaryList } = useSummaryStore();
  const { totalScore, generalFeedback, paragraphs } = data || {};

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {code === 201 ? (
        <main className="relative">
          {/* 배경 영역 */}
          <div className="absolute top-0 left-0 w-full h-[545px] bg-gradient-to-b from-[#CFCFFF]/40 to-[#F7F7FF]/40" />
          <div className="absolute top-[545px] left-0 w-full h-[calc(100%-525px)] bg-[#F8F8FF]" />

          <div className="relative z-10">
            {/* 헤더 영역 */}
            <section className="max-w-[480px] h-[50px] px-5 bg-transparent flex justify-between items-center">
              <Blank />
              <EventButton icon={cancel} command="level-modal" />
            </section>

            {/*  점수 영역 */}
            <section className="flex flex-col items-center mb-7">
              <div className="mb-4 text-[50px]">🤖</div>
              <p className="text-center font-semibold text-xl mb-5">
                잘했어요!
                <br />한 걸음 더 나아가볼까요?
              </p>
              <div className="flex font-medium mb-1">
                총점&nbsp;&nbsp;
                <span className="font-bold text-lavender">-</span>
                <span className="text-[#9C9C9C]">/5점</span>
              </div>
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={`unstar-${i}`}
                    src={unstar}
                    width={22}
                    height={22}
                    alt="빈 별"
                  />
                ))}
              </div>
            </section>

            {/* 최종 평가 영역 */}
            <section className="mx-5 rounded-md bg-white border-[1px] border-[#D5CCF8] p-5 mb-7">
              <div className="font-semibold mb-2">
                📌 Ai 종합 피드백
              </div>
              <div className="leading-6">{generalFeedback}</div>
            </section>

            {/* 문단별 요약 영역 */}
            <section className="mx-5">
              <div className="text-lg font-semibold mb-5">
                📝 문단별 상세 피드백을 확인해보세요!
              </div>
              {paragraphs.map((paragraph, index) => (
                <article key={index} className="mb-12">
                  {/* 문단 내용 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <details>
                      <summary className="font-semibold">
                        {index + 1} 번째 문단
                      </summary>
                      <p className="text-sm leading-7 mt-3">
                        {news!.paragraphs[index].content}
                      </p>
                    </details>
                  </div>

                  {/* 사용자 요약 내용 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <div className="font-semibold mb-2">
                      내가 한 요약
                    </div>
                    <div className="leading-6">
                      {summaryList[index].userSummary}
                    </div>
                  </div>

                  {/* Ai 피드백 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <div>
                      <p className="font-semibold mb-2">Ai 피드백</p>
                      {/* 난이도 평가 */}
                    </div>
                    <p className="font-semibold text-lavender mb-2">
                      잘된 점
                    </p>
                    <div className="leading-6 mb-3">
                      {paragraph.strengths}
                    </div>
                    <p className="font-semibold text-lavender mb-2">
                      보완할 점
                    </p>
                    <div className="leading-6">
                      {paragraph.improvements}
                    </div>
                  </div>

                  {/* Ai 요약 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <details>
                      <summary className="font-semibold">
                        Ai가 요약한 내용
                      </summary>
                      <p className="leading-6 mt-3">
                        {paragraph.aiSummary}
                      </p>
                    </details>
                  </div>
                </article>
              ))}
            </section>

            {/* 버튼 영역 */}
            <section className="w-full mb-5">
              <Button text="홈으로 이동하기" type="active" link="/" />
            </section>
          </div>
        </main>
      ) : (
        <main className="relative">
          {/* 배경 영역 */}
          <div className="absolute top-0 left-0 w-full h-[545px] bg-gradient-to-b from-[#CFCFFF]/40 to-[#F7F7FF]/40" />
          <div className="absolute top-[545px] left-0 w-full h-[calc(100%-525px)] bg-[#F8F8FF]" />

          <div className="relative z-10">
            {/* 헤더 영역 */}
            <section className="max-w-[480px] h-[50px] px-5 bg-transparent flex justify-between items-center">
              <Blank />
              <EventButton icon={cancel} command="level-modal" />
            </section>

            {/*  점수 영역 */}
            <section className="flex flex-col items-center mb-7">
              <div className="mb-4 text-[50px]">🤖</div>
              <p className="text-center font-semibold text-xl mb-5">
                잘했어요!
                <br />한 걸음 더 나아가볼까요?
              </p>
              <div className="flex font-medium mb-1">
                총점&nbsp;&nbsp;
                <span className="font-bold text-lavender">
                  {totalScore}
                </span>
                <span className="text-[#9C9C9C]">/5점</span>
              </div>
              <div className="flex gap-[2px]">
                {[...Array(totalScore)].map((_, i) => (
                  <Image
                    key={`star-${i}`}
                    src={star}
                    width={22}
                    height={22}
                    alt="별"
                  />
                ))}
                {[...Array(5 - totalScore)].map((_, i) => (
                  <Image
                    key={`unstar-${i}`}
                    src={unstar}
                    width={22}
                    height={22}
                    alt="빈 별"
                  />
                ))}
              </div>
            </section>

            {/* 최종 평가 영역 */}
            <section className="mx-5 rounded-md bg-white border-[1px] border-[#D5CCF8] p-5 mb-7">
              <div className="font-semibold mb-2">
                📌 Ai 종합 피드백
              </div>
              <div className="leading-6">
                지금은 피드백을 드릴 수 없어요. 다음에 다시
                시도해주세요.
              </div>
            </section>

            {/* 문단별 요약 영역 */}
            <section className="mx-5">
              <div className="text-lg font-semibold mb-5">
                📝 문단별 상세 피드백을 확인해보세요!
              </div>
              {paragraphs.map((paragraph, index) => (
                <article key={index} className="mb-12">
                  {/* 문단 내용 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <details>
                      <summary className="font-semibold">
                        {index + 1} 번째 문단
                      </summary>
                      <p className="text-sm leading-7 mt-3">
                        {news!.paragraphs[index].content}
                      </p>
                    </details>
                  </div>

                  {/* 사용자 요약 내용 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <div className="font-semibold mb-2">
                      내가 한 요약
                    </div>
                    <div className="leading-6">
                      {summaryList[index].userSummary}
                    </div>
                  </div>

                  {/* Ai 피드백 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <div>
                      <p className="font-semibold mb-2">Ai 피드백</p>
                      {/* 난이도 평가 */}
                    </div>
                    <p className="font-semibold text-lavender mb-2">
                      잘된 점
                    </p>
                    <div className="leading-6 mb-3">
                      지금은 피드백을 드릴 수 없어요. 다음에 다시
                      시도해주세요.
                    </div>
                    <p className="font-semibold text-lavender mb-2">
                      보완할 점
                    </p>
                    <div className="leading-6">
                      지금은 피드백을 드릴 수 없어요. 다음에 다시
                      시도해주세요.
                    </div>
                  </div>

                  {/* Ai 요약 */}
                  <div className="rounded-md bg-white shadow-light p-4 mb-5">
                    <details>
                      <summary className="font-semibold">
                        Ai가 요약한 내용
                      </summary>
                      <p className="leading-6 mt-3">
                        지금은 피드백을 드릴 수 없어요. 다음에 다시
                        시도해주세요.
                      </p>
                    </details>
                  </div>
                </article>
              ))}
            </section>

            {/* 버튼 영역 */}
            <section className="w-full mb-5">
              <Button text="홈으로 이동하기" type="active" link="/" />
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default AIFeedback;
