"use client";

import FeedbackContainer from "@container/feedback-container";
import { useSummaryStore } from "@store/summary-store";

const Result = () => {
  const { summaryFeedback } = useSummaryStore();

  return (
    <main>
      <FeedbackContainer {...summaryFeedback!} />
    </main>
  );
};

export default Result;
