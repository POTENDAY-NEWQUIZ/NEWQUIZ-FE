"use client";

import { useState } from "react";

import SummaryLoading from "@container/quiz/summary-loading";
import SummaryQuiz from "@container/quiz/summary-quiz";

const Summary = () => {
  const [quizStart, setQuizStart] = useState(false);

  const onCilckComponentChange = () => {
    setQuizStart(true);
  };

  return (
    <main>
      {quizStart ? (
        <SummaryQuiz />
      ) : (
        <SummaryLoading onStartQuiz={onCilckComponentChange} />
      )}
    </main>
  );
};

export default Summary;
