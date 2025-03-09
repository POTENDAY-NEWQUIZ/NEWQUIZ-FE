import axiosInstance from "@api/axios-instance";

// 퀴즈별 오답노트 조회
export const readReviewAll = async (category: string) => {
  const response = await axiosInstance.get(`/note?type=${category}`);
  return response.data;
};

// 오답노트 상세 조회
export const readReviewDetail = async (quizResultId: number) => {
  const response = await axiosInstance.get(`/note/${quizResultId}`);
  return response.data;
};

// 오답노트 기록 완료
export const createReview = async (quizResultId: number) => {
  const response = await axiosInstance.post(`note/${quizResultId}`);
  return response.data;
};
