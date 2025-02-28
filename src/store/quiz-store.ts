import create from "zustand";
import { persist } from "zustand/middleware";

import { IQuizStore } from "@interface/state";
import { createQuizAnswer } from "@api/quiz-api";

// 사용자 퀴즈 풀이 저장
export const useQuizStore = create<IQuizStore>(
  persist(
    (set) => ({
      quizzes: [],
      insertQuizAnswer: (
        quizId: number,
        type: string,
        isCorrect: boolean,
        userAnswer: number
      ) => {
        set((state: IQuizStore) => ({
          quizzes: [
            ...state.quizzes,
            { quizId, type, isCorrect, userAnswer },
          ],
        }));
      },
      submitQuizAnswer: async () => {
        const quizzes = useQuizStore.getState().quizzes;
        const response = await createQuizAnswer(quizzes);

        if (response.status === 201) {
          set({ quizzes: [] });
        }
      },
    }),
    {
      name: "quiz-storage",
    }
  ) as any
);
