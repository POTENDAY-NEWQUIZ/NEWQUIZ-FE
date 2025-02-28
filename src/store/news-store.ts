import create from "zustand";
import { persist } from "zustand/middleware";

import { INewsStore } from "@interface/state";
import { IArticle } from "@interface/props";

export const useNewsStore = create<INewsStore>(
  persist(
    (set) => ({
      news: null,
      setNews: (news: IArticle) => set({ news }),
    }),
    {
      name: "news-store",
    }
  ) as any
);
