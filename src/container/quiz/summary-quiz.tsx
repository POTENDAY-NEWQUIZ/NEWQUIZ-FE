"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import Header from "@components/common/header";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";

import cancel from "@assets/svg/cancel.svg";
import pen from "@assets/svg/pen.svg";
import pin from "@assets/svg/seciton_pin.svg";
import Button from "@components/button/button";
import { useNewsStore } from "@store/news-store";
import { createSummaryAnswer } from "@api/quiz-api";
import AILoading from "@container/feedback/ai-loading";

const SummaryQuiz = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { news } = useNewsStore();
  const [summaryList, setSummaryList] = useState(
    news!.paragraphs.map((paragraph) => ({
      paragraphId: paragraph.paragraphId,
      userSummary: "",
    }))
  );

  const isDisabled = summaryList.some(
    (summary) => summary.userSummary.trim() === ""
  );

  const onChangeTextarea = (index: number, value: string) => {
    setSummaryList((prev) =>
      prev.map((summary, i) =>
        i === index ? { ...summary, userSummary: value } : summary
      )
    );
  };

  const onSubmit = async () => {
    if (isDisabled) return;
    setLoading(true);

    try {
      const response = await createSummaryAnswer(
        news!.newsId,
        summaryList
      );
      router.push(
        `/result/?data=${encodeURIComponent(JSON.stringify(response))}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <AILoading />
      ) : (
        <main>
          {/* 헤더 영역 */}
          <Header
            title="내용 요약 퀴즈"
            leftChild={<EventButton icon={cancel} command="close" />}
            rightChild={<Blank />}
          />

          {/* 설명 영역 */}
          <section className="pt-16 mx-5 mb-7">
            <div className="p-3 flex justify-start items-center gap-1 font-semibold bg-home-lavender rounded-[10px]">
              <Image src={pen} width={24} height={24} alt="요약" />
              <p>아래 사설을 문단별로 요약해주세요!</p>
            </div>
          </section>

          {/* 기사 제목 영역 */}
          <section className="mx-5 mb-10">
            <div className="pb-[18px] border-b-[1px] border-[#D9D9D9]">
              <p className="font-semibold text-lg break-keep leading-7 mb-2">
                {news!.title}
              </p>
              <p className="text-xs text-[#484848] text-right pr-2">
                {news!.date} | {news!.source}
              </p>
            </div>
          </section>

          {/* 기사 내용 - 요약 영역 */}
          <section>
            {news!.paragraphs.map((paragraph, index) => (
              <article className="mx-5 mb-8" key={index}>
                <div className="flex gap-2 mb-4">
                  <Image src={pin} width={20} height={20} alt="핀" />
                  <p className="font-semibold">
                    {paragraph!.order}번째 문단을 요약하세요.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7">
                    {paragraph!.content}
                  </p>
                </div>
                <div className="mt-5">
                  <textarea
                    placeholder="내용을 입력해 주세요. (최대 300자)"
                    className="w-full p-2 border-2 border-[#D9D9D9]] text-sm rounded-md outline-none resize-none"
                    maxLength={300}
                    value={summaryList[index].userSummary}
                    onChange={(e) =>
                      onChangeTextarea(index, e.target.value)
                    }
                  ></textarea>
                </div>
              </article>
            ))}
          </section>

          {/* 버튼 영역 */}
          <section className="mb-5">
            <Button
              text="답안 제출하기"
              type={isDisabled ? "inactive" : "active"}
              onClick={onSubmit}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default SummaryQuiz;
