// 사용자 store state
export interface IAuthStore {
  refreshToken: string | null;
  setRefreshToken: (token: string) => void;
  clearRefreshToken: () => void;
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

// 뉴스 store state
export interface INewsStore {}

// 퀴즈 store state
export interface IQuizStore {
  quizzes: {
    quizId: number;
    type: string;
    isCorrect: boolean;
    userAnswer: number;
  }[];
  insertQuizAnswer: (
    quizId: number,
    type: string,
    isCorrect: boolean,
    userAnswer: number
  ) => void;
  submitQuizAnswer: () => void;
}
