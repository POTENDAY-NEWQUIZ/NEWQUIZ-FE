import axiosInstance from "./axios-instance";

// 퀴즈 조회
export const readQuizAll = async (newsId: string) => {
  const response = await axiosInstance.get(`/news/${newsId}/quiz`);
  return response.data;
};

// 어휘/문해 퀴즈 정답 제출

// 요약 퀴즈 정답 제츨
