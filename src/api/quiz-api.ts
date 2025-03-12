import axiosInstance from "@api/axios-instance";

// 퀴즈 조회
export const readQuizAll = async (newsId: string) => {
  const response = await axiosInstance.get(`/news/${newsId}/quiz`);
  return response.data;
};

// 어휘/문해 퀴즈 정답 제출
export const createQuizAnswer = async (
  quizzes: {
    quizId: number;
    type: string;
    isCorrect: boolean;
    userAnswer: number;
  }[]
) => {
  const response = await axiosInstance.post(`/news/quiz`, {
    quizzes: quizzes,
  });

  return response.data;
};

// 요약 퀴즈 정답 제츨
export const createSummaryAnswer = async (
  newsId: number,
  paragraphs: {
    paragraphId: number;
    userSummary: string;
  }[]
) => {
  const response = await axiosInstance.post(`/news/summary`, {
    newsId: newsId,
    paragraphs: paragraphs,
  });

  return response.data;
};
