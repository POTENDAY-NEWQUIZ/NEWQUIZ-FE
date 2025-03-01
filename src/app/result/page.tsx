"use client";

import AIFeedback from "@container/feedback/ai-feedback";
import { useSearchParams } from "next/navigation";

const Result = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const response = JSON.parse(decodeURIComponent(data!));

  console.log(response);

  return (
    <main>
      <AIFeedback {...response} />
    </main>
  );
};

export default Result;
