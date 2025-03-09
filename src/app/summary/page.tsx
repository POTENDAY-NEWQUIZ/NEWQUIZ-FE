"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import SummaryLoading from "@container/quiz/summary-loading";
import SummaryQuiz from "@container/quiz/summary-quiz";
import { useNewsStore } from "@store/news-store";
import { useSummaryStore } from "@store/summary-store";
import { createSummaryAnswer } from "@api/quiz-api";

const Summary = () => {
  const router = useRouter();
  const { news } = useNewsStore();
  const { insertSummaryList, insertSummaryFeedback } =
    useSummaryStore();
  const [loading, setLoading] = useState(false);
  const [quizStart, setQuizStart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [summaryList, setSummaryList] = useState<
    { paragraphId: number; userSummary: string }[]
  >(
    news
      ? news.paragraphs.map((p) => ({
          paragraphId: p.paragraphId,
          userSummary: "",
        }))
      : []
  );

  if (!news) {
    return <div>Loading...</div>;
  }

  const onCilckStart = () => {
    setQuizStart(true);
  };

  const onChangeSummary = (index: number, value: string) => {
    setSummaryList((prev) =>
      prev.map((summary) =>
        summary.paragraphId === index
          ? { ...summary, userSummary: value }
          : summary
      )
    );
  };

  const onClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const onClickNext = () => {
    if (currentIndex < news!.paragraphs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const onSubmit = async () => {
    insertSummaryList(summaryList);
    setLoading(true);

    try {
      const response = await createSummaryAnswer(
        news!.newsId,
        summaryList
      );
      insertSummaryFeedback(response);
      setLoading(false);
    } finally {
      router.push(`/result`);
    }
  };

  return (
    <main>
      {quizStart ? (
        <SummaryQuiz
          paragraph={news!.paragraphs[currentIndex]}
          userSummary={summaryList[currentIndex].userSummary}
          isFirst={currentIndex === 0}
          isLast={currentIndex === news!.paragraphs.length - 1}
          onChangeSummary={onChangeSummary}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          onSubmit={onSubmit}
          loading={loading}
        />
      ) : (
        <SummaryLoading onStartQuiz={onCilckStart} />
      )}
    </main>
  );
};

export default Summary;
