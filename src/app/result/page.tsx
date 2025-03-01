"use client";

import AIFeedback from "@container/feedback/ai-feedback";
import { useSummaryStore } from "@store/summary-store";

const Result = () => {
  const { summaryFeedback } = useSummaryStore();

  return (
    <main>
      <AIFeedback {...summaryFeedback!} />
    </main>
  );
};

export default Result;
