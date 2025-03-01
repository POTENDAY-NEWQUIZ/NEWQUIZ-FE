import axiosInstance from "@api/axios-instance";

// 홈 학습 내용 조회
export const readStudyHome = async () => {
  const response = await axiosInstance.get(`/home`);
  return response.data;
};
