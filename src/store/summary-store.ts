import create from "zustand";
import { persist } from "zustand/middleware";

import { ISummaryStore } from "@interface/state";
import { ISummary, ISummaryUser } from "@interface/props";

export const useSummaryStore = create<ISummaryStore>(
  persist(
    (set) => ({
      summaryList: [],
      insertSummaryList: (newSummaryList: ISummaryUser[]) =>
        set({ summaryList: newSummaryList }),
      summaryFeedback: null,
      insertSummaryFeedback: (response: ISummary) => {
        set({ summaryFeedback: response });
      },
    }),
    {
      name: "summary-store",
    }
  ) as any
);
